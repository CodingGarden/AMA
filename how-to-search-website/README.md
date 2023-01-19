## cushenstein - What's involved in adding search functionality to your website (e.g. adding search to a shopping site)? Assuming you're coding it and not using a CMS

* Database query... (naive / not scalable... / okay for small sites / a few thousand users... / involves more work for typos/context relvant/natural language queryies)

* The columns / fields you are searching on should be indexed...
* Want to invoid injection... escape queries..

* Mongodb

```js
products.where({
  description: /thing/gi
});
```
* Be careful with the regex... could cause regex DOS

* SQL

```sql
SELECT * FROM products WHERE description LIKE %thing%;
```
* Full text search
  * https://www.postgresql.org/docs/current/textsearch.html
    * https://www.postgresql.org/docs/current/fuzzystrmatch.html
  * https://dev.mysql.com/doc/refman/8.0/en/fulltext-search.html
  * https://www.mongodb.com/basics/full-text-search
    * https://www.mongodb.com/docs/atlas/atlas-search/text/
  * https://redis.io/docs/stack/search/reference/query_syntax/#wildcard-queries
* Cons
  * nothing can go wrong if the query is sanitized but its slow, inaccurate, doesnt take linguistics into account
  * can only index if they are smaller in length...
    * GIN in postgres might work

* Search Products
  * algolia
    * https://www.algolia.com/
  * elastic search - lucene
    * https://lucene.apache.org/
    * https://www.elastic.co/elasticsearch/
  * https://typesense.org/
* Concepts
  * https://en.wikipedia.org/wiki/Levenshtein_distance
  * Fuzzy Search
    * https://fusejs.io/
  * Context aware search
  * NLP - natural language processing
  * Term Based Retrieval