<template>
  <div>
    <div v-if="!currentDocument">
      <h1>DOCUMENT NOT FOUND</h1>
    </div>
    <div v-if="currentDocument">
      <h1>{{currentDocument.title}}</h1>
      <p>{{currentDocument.content}}</p>
      <h3>Related documents:</h3>
      <div v-for="document in relatedDocuments">
        <router-link :to="{ name: 'Document', params: { id: document.id } }">{{document.title}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  watch: {
    '$route.params.id': function() {
      console.log('ID IN PARAMS CHANGED!', this.$route.params.id);
    },
  },
  computed: {
    relatedDocuments() {
      if (this.currentDocument && this.currentDocument.relatedDocuments) {
        return this.currentDocument.relatedDocuments.map((id) => this
          .$store
          .state
          .documents
          .find((doc) => doc.id == id));
      }
      return [];
    },
    currentDocument() {
      const { id } = this.$route.params;
      const document = this
        .$store
        .state
        .documents
        .find((doc) => doc.id == id);
      return document;
    },
  },
};
</script>

<style>

</style>