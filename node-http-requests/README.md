# HTTP Requests in Node.js

* axios
* fetch
  * node-Fetch
  * isomorphic-fetch
  * whatwg-fetch
* got
* superagent
* request
  * Use something else:
    * https://github.com/request/request/issues/3143
* exec curl
* core node.js modules
  * http/https
  * net

```sh
curl -H 'Accept: application/vnd.twitchtv.v5+json' \
-H 'Client-ID: gp762nuuoqcoxypju8c569th9wz7q5' \
-X GET 'https://api.twitch.tv/kraken/channels/413856795'
```