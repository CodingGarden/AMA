<template>
  <div>
    <h1>Total followers: {{ totalFollowers }}</h1>
    <div class="buttons">
      <b-button
        v-for="page in totalPages"
        :key="page"
        :class="{
          'is-primary': page === currentPage,
        }"
        type="is-light"
        @click="currentPage = page"
        >{{ page }}</b-button
      >
    </div>
    <div class="followers">
      <div
        v-for="follower in followers"
        :key="follower.user._id"
        class="card followers--follower"
      >
        <div class="card-image">
          <figure class="image is-3by3">
            <img :src="follower.user.logo" alt="Placeholder image" />
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img
                  src="https://bulma.io/images/placeholders/96x96.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">
                {{ follower.user.display_name || follower.user.name }}
              </p>
              <p class="subtitle is-6">@{{ follower.user.name }}</p>
            </div>
          </div>

          <div class="content">
            {{ follower.user.bio }}
            <br />
            <time datetime="2016-1-1">{{
              new Date(follower.created_at).toLocaleString()
            }}</time>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const cache = {}
async function getFollowers(axios, offset) {
  if (cache[offset]) return cache[offset]
  const API_URL =
    'https://api.twitch.tv/kraken/channels/413856795/follows?offset=' + offset
  const {
    data: { _total, follows },
  } = await axios.get(API_URL, {
    headers: {
      'client-id': 'gp762nuuoqcoxypju8c569th9wz7q5',
      accept: 'application/vnd.twitchtv.v5+json',
    },
  })
  const result = {
    _total,
    follows,
  }
  cache[offset] = result
  return result
}

export default {
  async asyncData({ $axios }) {
    const { _total, follows } = await getFollowers($axios, 0)
    return { totalFollowers: _total, followers: follows }
  },
  data: () => ({
    totalFollowers: 0,
    pageSize: 25,
    followers: [],
    currentPage: 1,
  }),
  computed: {
    totalPages() {
      return 10
    },
    offset() {
      return (this.currentPage - 1) * this.pageSize
    },
  },
  watch: {
    currentPage() {
      this.getFollowers()
    },
  },
  methods: {
    async getFollowers() {
      const { _total, follows } = await getFollowers(this.$axios, this.offset)
      this.totalFollowers = _total
      this.followers = follows
    },
  },
}
</script>

<style>
.followers {
  display: flex;
  flex-wrap: wrap;
}
.followers--follower {
  width: calc(33.3% - 0.25rem * 2);
  margin: 0.25rem;
}
</style>
