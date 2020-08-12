/* eslint-disable */

function polyfillReduce() {
  // if (Array.prototype.reduce) {
  //   alert('reduce is supported!');
  // } else {
  //   alert('reduce is not supported!')
  // }
  function reduce(callback, initialValue) {
    var accumulator;
    var start = 0;
    if (initialValue) {
      accumulator = initialValue;
    } else {
      accumulator = this[0];
      start = 1;
    }
    for (var i = start; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
  }
  Array.prototype.reduce = reduce;
}

polyfillReduce();


let sum = [1, 2, 3].reduce((sum, value) => sum + value);
console.log(sum);
sum = [1].reduce((sum, value) => sum + value);
console.log(sum);

const users = [{
  "_id": "5ec8c09b56fd88771c27b51d",
  "name": "terazoid",
  "bio": null,
  "created_at": "2012-11-27T19:29:53.625571Z",
  "display_name": "terazoid",
  "id": "38025177",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/ead85c03-8934-41ce-9bc9-9460c10c717b-profile_image-300x300.png",
  "type": "user",
  "updated_at": "2020-06-20T21:52:26.45541Z",
  "follow": {
    "created_at": "2020-04-08T17:19:38Z",
    "notifications": true
  },
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-05-29T14:55:24.000Z"
  },
  "country": {
    "code": "ua",
    "name": "Ukraine"
  },
  "team": "telegram-plane"
}, {
  "_id": "5ec8c09b56fd88771c27b519",
  "name": "codinggarden",
  "bio": "Hello friends! 👋 I stream coding tutorials, Q&A sessions, problem solving / algorithms and full application builds. I use JavaScript for most things.",
  "created_at": "2019-02-02T04:46:04.136005Z",
  "display_name": "CodingGarden",
  "id": "413856795",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/611cac54-34e0-4c2a-851b-66e5ea2b3f81-profile_image-300x300.png",
  "type": "user",
  "updated_at": "2020-06-24T13:24:40.529051Z",
  "follow": false,
  "subscription": {
    "sub_plan": "3000",
    "created_at": "2020-04-28T11:37:28.000Z"
  },
  "country": {
    "code": "us",
    "name": "United States of America"
  },
  "team": "node-js",
  "status": "cj is trying his best",
  "last_seen": "2020-06-12T19:15:55.515Z"
}, {
  "_id": "5ec8c09b56fd88771c27b51b",
  "name": "docd27",
  "bio": null,
  "created_at": "2018-05-20T11:53:12.513378Z",
  "display_name": "docd27",
  "id": "224658771",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/9f0b176e-0813-48ca-a216-c8868609e581-profile_image-300x300.png",
  "type": "user",
  "updated_at": "2020-06-19T02:19:08.024284Z",
  "follow": {
    "created_at": "2019-10-05T20:55:19Z",
    "notifications": false
  },
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-05-28T15:32:08.000Z"
  },
  "country": {
    "code": "gb",
    "name": "United Kingdom of Great Britain and Northern Ireland"
  },
  "team": "internet-explorer",
  "status": "__proto__",
  "last_seen": "2020-06-15T15:56:19.328Z"
}, {
  "_id": "5ec8c09b56fd88771c27b51f",
  "name": "shidotmoe",
  "bio": "I am not just a passionate consumer of video games, but everything else that goes on within the computer. Digital art and interactive code is a rewarding experience that needs to be shared. This channel offers a selection of various content like these along with relaxing music to viewers like you.",
  "created_at": "2013-07-08T16:41:54.303735Z",
  "display_name": "ShiDotMoe",
  "id": "45810656",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/cbe1c526-4175-4a8a-b183-e070e9dc1103-profile_image-300x300.png",
  "type": "user",
  "updated_at": "2020-06-22T14:47:19.65271Z",
  "follow": {
    "created_at": "2019-10-04T15:13:40Z",
    "notifications": true
  },
  "subscription": false,
  "country": {
    "code": "no",
    "name": "Norway"
  },
  "team": "css3",
  "status": "console.log(country);",
  "last_seen": "2020-06-15T16:23:23.787Z"
}, {
  "_id": "5ec8c09b56fd88771c27b522",
  "name": "dav1dsnyder404",
  "bio": null,
  "created_at": "2020-04-15T22:36:35.564452Z",
  "display_name": "Dav1dsnyder404",
  "id": "514845764",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/b308a27a-1b9f-413a-b22b-3c9b2815a81a-profile_image-300x300.png",
  "type": "user",
  "updated_at": "2020-06-24T02:48:45.43078Z",
  "follow": {
    "created_at": "2020-04-15T23:16:41Z",
    "notifications": true
  },
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-04-28T14:12:01.000Z"
  },
  "last_seen": "2020-06-12T20:44:56.934Z",
  "status": "saintp7Sleepy"
}, {
  "_id": "5ec8c09b56fd88771c27b527",
  "name": "mintjem",
  "bio": null,
  "created_at": "2020-03-27T06:32:42.987888Z",
  "display_name": "mintjem",
  "id": "504374522",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/6043c683-0db5-4e66-a37f-7df8b76bca71-profile_image-300x300.png",
  "type": "user",
  "updated_at": "2020-06-22T14:14:33.07704Z",
  "follow": {
    "created_at": "2020-04-18T20:23:50Z",
    "notifications": true
  },
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-05-29T19:13:18.000Z"
  },
  "country": {
    "code": "us",
    "name": "United States of America"
  },
  "team": "qq",
  "status": "Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at https://api.coding.garden",
  "last_seen": "2020-06-24T14:21:31.535Z"
}, {
  "_id": "5ec8c09b56fd88771c27b52a",
  "name": "lundregan",
  "bio": null,
  "created_at": "2019-11-12T10:56:19.188912Z",
  "display_name": "lundregan",
  "id": "472335134",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/49086d7a-51de-4aae-a35f-8c54904e4002-profile_image-300x300.png",
  "type": "user",
  "updated_at": "2020-06-17T07:36:08.772078Z",
  "follow": {
    "created_at": "2020-04-23T03:11:53Z",
    "notifications": true
  },
  "subscription": false
}, {
  "_id": "5ec8c09b56fd88771c27b52f",
  "name": "leonhart19",
  "bio": null,
  "created_at": "2020-03-31T17:50:30.695862Z",
  "display_name": "leonhart19",
  "id": "506501901",
  "logo": "https://static-cdn.jtvnw.net/user-default-pictures-uv/de130ab0-def7-11e9-b668-784f43822e80-profile_image-300x300.png",
  "type": "user",
  "updated_at": "2020-06-24T14:10:01.018694Z",
  "follow": {
    "created_at": "2020-05-18T15:16:15Z",
    "notifications": true
  },
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-06-19T19:50:20.000Z"
  },
  "team": "python",
  "country": {
    "code": "pk",
    "name": "Pakistan"
  }
}, {
  "_id": "5ec8c09b56fd88771c27b525",
  "name": "wiltchamberlainismydad",
  "bio": null,
  "created_at": "2020-05-02T18:30:49.786567Z",
  "display_name": "wiltchamberlainismydad",
  "id": "524430558",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/a6a7c0e6-0ce7-4b45-b283-9793b96c68ed-profile_image-300x300.png",
  "type": "user",
  "updated_at": "2020-05-21T18:42:26.272216Z",
  "follow": {
    "created_at": "2020-05-02T19:10:37Z",
    "notifications": true
  },
  "subscription": false
}, {
  "_id": "5ec8c09b56fd88771c27b535",
  "name": "andrewlanex",
  "bio": null,
  "created_at": "2019-01-29T23:53:58.00015Z",
  "display_name": "AndrewLaneX",
  "id": "413167662",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/87039a84-a075-4e07-932c-d412aab69637-profile_image-300x300.png",
  "type": "user",
  "updated_at": "2020-06-24T04:38:44.704589Z",
  "follow": {
    "created_at": "2020-05-18T15:49:48Z",
    "notifications": true
  },
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-05-28T16:22:49.000Z"
  },
  "country": {
    "code": "us",
    "name": "United States of America"
  },
  "team": "ubuntu",
  "status": "procrastinating",
  "last_seen": "2020-06-24T14:44:45.468Z"
}, {
  "_id": "5ec8c09b56fd88771c27b537",
  "name": "toastedcheesez1",
  "bio": null,
  "created_at": "2017-08-28T15:33:57.397838Z",
  "display_name": "ToastedCheesez1",
  "id": "171858654",
  "logo": "https://static-cdn.jtvnw.net/user-default-pictures-uv/cdd517fe-def4-11e9-948e-784f43822e80-profile_image-300x300.png",
  "type": "user",
  "updated_at": "2020-05-26T12:46:25.179997Z",
  "follow": {
    "created_at": "2020-01-24T05:25:06Z",
    "notifications": true
  },
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-05-29T18:53:50.000Z"
  },
  "team": "react",
  "last_seen": "2020-06-12T20:11:40.571Z"
}, {
  "_id": "5ec8c09b56fd88771c27b53f",
  "name": "drinkertime",
  "bio": null,
  "created_at": "2019-11-15T18:39:58.868815Z",
  "display_name": "DrinkerTime",
  "id": "472857642",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/7f28f149-c325-431a-a504-bc53e1da5c80-profile_image-300x300.png",
  "type": "user",
  "updated_at": "2020-06-22T16:44:55.11995Z",
  "follow": false,
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-05-25T21:56:23.000Z"
  }
}, {
  "_id": "5ec8c09b56fd88771c27b541",
  "name": "edburtnieks",
  "bio": null,
  "created_at": "2019-11-15T16:24:48.247667Z",
  "display_name": "edburtnieks",
  "id": "472838499",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/39701d34-63fa-4cab-be69-83f30443d7e8-profile_image-300x300.png",
  "type": "user",
  "updated_at": "2020-06-24T10:54:52.098099Z",
  "follow": {
    "created_at": "2019-11-28T00:50:52Z",
    "notifications": true
  },
  "subscription": false,
  "country": {
    "code": "lv",
    "name": "Latvia"
  },
  "team": "react"
}, {
  "_id": "5ec8c09b56fd88771c27b543",
  "name": "murdocturner",
  "bio": "Co. Owner of TurnerGames, I program on the daily mainly in javascript. Recent work: Discord and Twitch bots. I Mod/Admin for Murs and Okwerdz209. ",
  "created_at": "2015-05-01T18:33:25.236548Z",
  "display_name": "MurdocTurner",
  "id": "89983882",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/murdocturner-profile_image-c5e3ba3322f8e24a-300x300.png",
  "type": "user",
  "updated_at": "2020-06-19T14:19:11.346378Z",
  "follow": {
    "created_at": "2019-11-02T22:31:00Z",
    "notifications": false
  },
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-05-21T18:41:31.000Z"
  },
  "country": {
    "code": "us",
    "name": "United States of America"
  },
  "team": "mandalorian",
  "status": "¯\\_(ツ)_/¯",
  "last_seen": "2020-06-15T14:32:57.390Z"
}, {
  "_id": "5ec8c09b56fd88771c27b545",
  "name": "topika182",
  "bio": null,
  "created_at": "2015-09-09T03:02:56.188262Z",
  "display_name": "Topika182",
  "id": "101789351",
  "logo": "https://static-cdn.jtvnw.net/user-default-pictures-uv/215b7342-def9-11e9-9a66-784f43822e80-profile_image-300x300.png",
  "type": "user",
  "updated_at": "2020-05-27T02:59:43.862882Z",
  "follow": false,
  "subscription": false
}, {
  "_id": "5ec8c09c56fd88771c27b547",
  "name": "ivoencarnacao",
  "bio": null,
  "created_at": "2014-01-21T21:18:53.49432Z",
  "display_name": "IvoEncarnacao",
  "id": "55382306",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/d9270731-841c-4d01-92f7-967b40149758-profile_image-300x300.png",
  "type": "user",
  "updated_at": "2020-06-24T13:50:16.354287Z",
  "follow": {
    "created_at": "2020-03-30T03:46:01Z",
    "notifications": true
  },
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-05-09T17:39:53.000Z"
  },
  "country": {
    "code": "pt",
    "name": "Portugal"
  },
  "team": "html5"
}, {
  "_id": "5ec8c09c56fd88771c27b54b",
  "name": "gazijaw",
  "bio": null,
  "created_at": "2020-04-05T16:15:20.134235Z",
  "display_name": "GazijaW",
  "id": "509060413",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/b0eee1bd-dde2-4906-8e1f-12fea4110925-profile_image-300x300.png",
  "type": "user",
  "updated_at": "2020-06-17T20:12:48.510137Z",
  "follow": {
    "created_at": "2020-04-05T16:17:42Z",
    "notifications": true
  },
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-05-29T16:36:51.000Z"
  },
  "country": {
    "code": "ba",
    "name": "Bosnia and Herzegovina"
  },
  "team": "zhihu",
  "status": "p r o c r a s t i n a t i n g . . .",
  "last_seen": "2020-06-15T15:41:52.268Z"
}, {
  "_id": "5ec8c09c56fd88771c27b549",
  "name": "beingpranjal",
  "bio": null,
  "created_at": "2019-06-15T07:34:10.064219Z",
  "display_name": "beingpranjal",
  "id": "441966003",
  "logo": "https://static-cdn.jtvnw.net/user-default-pictures-uv/ebb84563-db81-4b9c-8940-64ed33ccfc7b-profile_image-300x300.png",
  "type": "user",
  "updated_at": "2020-06-24T13:49:32.287342Z",
  "follow": {
    "created_at": "2020-05-22T14:00:36Z",
    "notifications": true
  },
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-05-25T21:55:14.000Z"
  }
}, {
  "_id": "5ec8c09c56fd88771c27b54f",
  "name": "shineslove",
  "bio": null,
  "created_at": "2016-06-15T23:44:26.981363Z",
  "display_name": "shineslove",
  "id": "126906865",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/a412d728-090c-4d0f-b16f-a7c39a74e3d0-profile_image-300x300.png",
  "type": "user",
  "updated_at": "2020-06-15T22:39:45.941238Z",
  "follow": {
    "created_at": "2020-03-25T15:45:43Z",
    "notifications": true
  },
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-05-21T18:51:48.000Z"
  },
  "team": "docker",
  "country": {
    "code": "ng",
    "name": "Nigeria"
  },
  "status": "Error 404: Not Found",
  "last_seen": "2020-06-24T14:11:19.248Z"
}, {
  "_id": "5ec8c09c56fd88771c27b553",
  "name": "terminal_bash",
  "bio": "Programming education via steams, tutorial series, and more. Community focused. ",
  "created_at": "2019-07-17T23:20:35.793173Z",
  "display_name": "Terminal_Bash",
  "id": "448964808",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/4261e743-2a65-47cc-bd00-57c5d7f8a801-profile_image-300x300.png",
  "type": "user",
  "updated_at": "2020-06-22T02:41:43.461231Z",
  "follow": {
    "created_at": "2019-10-03T02:15:09Z",
    "notifications": true
  },
  "subscription": false,
  "country": {
    "code": "us",
    "name": "United States of America"
  },
  "team": "linux",
  "status": "s t r a i g h t c h i l l i n g"
}, {
  "_id": "5ec8c09c56fd88771c27b551",
  "name": "thestudentdoctor",
  "bio": null,
  "created_at": "2017-07-13T23:48:57.513873Z",
  "display_name": "TheStudentDoctor",
  "id": "164526973",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/9a90edf8-deb1-47e9-895a-454be449957d-profile_image-300x300.png",
  "type": "user",
  "updated_at": "2020-06-19T22:34:15.94818Z",
  "follow": {
    "created_at": "2020-04-10T15:51:11Z",
    "notifications": true
  },
  "subscription": false,
  "country": {
    "code": "gb",
    "name": "United Kingdom of Great Britain and Northern Ireland"
  },
  "team": "dribbble"
}, {
  "_id": "5ec8c09c56fd88771c27b558",
  "name": "denogreen",
  "bio": null,
  "created_at": "2020-05-21T18:39:04.750338Z",
  "display_name": "denogreen",
  "id": "533801476",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/19df8e20-5bc3-4f24-8bc9-617c72e272b8-profile_image-300x300.png",
  "type": "user",
  "updated_at": "2020-06-24T12:08:36.52264Z",
  "follow": {
    "created_at": "2020-05-21T18:58:48Z",
    "notifications": false
  },
  "subscription": false,
  "country": {
    "code": "ru",
    "name": "Russian Federation"
  }
}, {
  "_id": "5ec8c09c56fd88771c27b55a",
  "name": "thebspin",
  "bio": null,
  "created_at": "2014-12-12T21:45:04.379156Z",
  "display_name": "thebspin",
  "id": "77077691",
  "logo": "https://static-cdn.jtvnw.net/user-default-pictures-uv/294c98b5-e34d-42cd-a8f0-140b72fba9b0-profile_image-300x300.png",
  "type": "user",
  "updated_at": "2020-06-13T09:23:25.32881Z",
  "follow": {
    "created_at": "2020-04-21T14:41:22Z",
    "notifications": true
  },
  "subscription": false,
  "country": {
    "code": "nl",
    "name": "Netherlands"
  },
  "team": null
}, {
  "_id": "5ec8c09c56fd88771c27b55e",
  "name": "shaayan",
  "bio": null,
  "created_at": "2019-12-08T14:25:59.251864Z",
  "display_name": "Shaayan",
  "id": "476772926",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/fd5b08cb-c4db-4ff0-8aea-f4b827c1a7b4-profile_image-300x300.png",
  "type": "user",
  "updated_at": "2020-06-12T00:07:09.782268Z",
  "follow": {
    "created_at": "2019-12-08T14:27:58Z",
    "notifications": true
  },
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-05-29T19:12:51.000Z"
  },
  "country": {
    "code": "ca",
    "name": "Canada"
  },
  "team": "node-js",
  "status": "...",
  "last_seen": "2020-06-15T14:45:03.024Z"
}, {
  "_id": "5ec8c09c56fd88771c27b562",
  "name": "saintplaysthings",
  "bio": "I'm just a coder that likes to spend his time with likeminded people online! I stream coding in JS, java, python and sometimes random languages chosen by viewers! I might occasionally stream!",
  "created_at": "2016-06-05T13:35:15.61903Z",
  "display_name": "SaintPlaysThings",
  "id": "125995038",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/cac7e23f-400d-4d8c-a2f7-8f45b682d71a-profile_image-300x300.png",
  "type": "user",
  "updated_at": "2020-06-24T12:15:07.333835Z",
  "follow": {
    "created_at": "2020-03-13T19:20:40Z",
    "notifications": true
  },
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-05-29T13:44:39.000Z"
  },
  "country": {
    "code": "be",
    "name": "Belgium"
  },
  "team": "twitch"
}, {
  "_id": "5ec8c09c56fd88771c27b564",
  "name": "o0q10",
  "bio": null,
  "created_at": "2013-06-06T20:48:31.258686Z",
  "display_name": "o0q10",
  "id": "44424500",
  "logo": "https://static-cdn.jtvnw.net/user-default-pictures-uv/998f01ae-def8-11e9-b95c-784f43822e80-profile_image-300x300.png",
  "type": "user",
  "updated_at": "2020-05-29T04:22:50.74568Z",
  "follow": {
    "created_at": "2020-05-07T03:00:13Z",
    "notifications": false
  },
  "subscription": false
}, {
  "_id": "5ec8c09c56fd88771c27b56a",
  "name": "atomikjaye",
  "bio": "Noob Life. Trying new things.",
  "created_at": "2017-03-30T23:19:54.188153Z",
  "display_name": "AtomikJaye",
  "id": "151923551",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/171f8fad-0c99-49bb-a963-654c90b71517-profile_image-300x300.jpg",
  "type": "user",
  "updated_at": "2020-06-23T02:49:12.657256Z",
  "follow": {
    "created_at": "2019-11-03T21:32:43Z",
    "notifications": true
  },
  "subscription": false
}, {
  "_id": "5ec8c09c56fd88771c27b568",
  "name": "mrdemonwolf",
  "bio": "Back-end Developer at scopeweb B.V. I’m also available for Freelance work for an exciting project with tech startups, businesses, entrepreneurs, and developers across the world to create WordPress based websites and applications back-end back-ends.",
  "created_at": "2013-06-28T21:13:07.719387Z",
  "display_name": "MrDemonWolf",
  "id": "45335452",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/de40ef1d-0974-47ed-86b1-f2c53541623e-profile_image-300x300.png",
  "type": "user",
  "updated_at": "2020-06-22T22:04:48.510775Z",
  "follow": {
    "created_at": "2019-10-12T23:21:00Z",
    "notifications": false
  },
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-06-20T18:18:02.000Z"
  },
  "team": "microsoft",
  "country": {
    "code": "us",
    "name": "United States of America"
  }
}, {
  "_id": "5ec8c09c56fd88771c27b555",
  "name": "euclidianace",
  "bio": ":P",
  "created_at": "2016-05-28T02:29:18.781255Z",
  "display_name": "euclidianAce",
  "id": "125290406",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/c4c9c17e-1ed8-4845-82ee-3325316d43c2-profile_image-300x300.png",
  "type": "user",
  "updated_at": "2020-06-12T16:41:50.197279Z",
  "follow": {
    "created_at": "2019-12-17T16:14:59Z",
    "notifications": true
  },
  "subscription": false,
  "team": "firefox-browser"
}, {
  "_id": "5ec8c09c56fd88771c27b570",
  "name": "chadwithuhc",
  "bio": null,
  "created_at": "2018-09-21T02:04:49.842293Z",
  "display_name": "chadwithuhc",
  "id": "261129104",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/0059bf9f-abae-424d-93bd-7b738b10aaf1-profile_image-300x300.png",
  "type": "user",
  "updated_at": "2020-06-20T18:02:45.935993Z",
  "follow": {
    "created_at": "2019-11-05T01:32:28Z",
    "notifications": true
  },
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-06-19T18:13:13.000Z"
  },
  "country": {
    "code": "us",
    "name": "United States of America"
  },
  "team": "js-square",
  "status": "hello world"
}, {
  "_id": "5ec8c09c56fd88771c27b574",
  "name": "marcvanc",
  "bio": null,
  "created_at": "2020-05-02T07:25:41.827701Z",
  "display_name": "marcvanc",
  "id": "524157510",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/aaa1783b-be0b-4943-bc1a-f5bf80954be6-profile_image-300x300.png",
  "type": "user",
  "updated_at": "2020-06-05T15:03:59.211646Z",
  "follow": {
    "created_at": "2020-05-02T12:32:52Z",
    "notifications": true
  },
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-05-23T17:28:59.000Z"
  }
}, {
  "_id": "5ec8c09c56fd88771c27b573",
  "name": "cihangera",
  "bio": "Oyunlara en zor seviyede, her ayrıntıya takılarak başlar; o yüzden hiç bitiremem. Bi el atın, beraber bitirelim.",
  "created_at": "2016-02-20T16:43:00.648065Z",
  "display_name": "cihangera",
  "id": "116439847",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/4c223939-3b2f-4505-999e-efaaa2c15bea-profile_image-300x300.png",
  "type": "user",
  "updated_at": "2020-06-24T12:21:19.233877Z",
  "follow": {
    "created_at": "2020-05-07T00:59:20Z",
    "notifications": true
  },
  "subscription": false,
  "country": {
    "code": "tr",
    "name": "Turkey"
  }
}, {
  "_id": "5ec8c09c56fd88771c27b572",
  "name": "vinicius_balbino",
  "bio": null,
  "created_at": "2018-07-01T18:46:52.017479Z",
  "display_name": "vinicius_balbino",
  "id": "235477445",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/61530f3a-d6d3-4b3d-8e02-6e2bf82226fb-profile_image-300x300.png",
  "type": "user",
  "updated_at": "2020-05-31T19:41:59.690906Z",
  "follow": {
    "created_at": "2020-04-18T20:43:59Z",
    "notifications": true
  },
  "subscription": false
}, {
  "_id": "5ec8c09c56fd88771c27b576",
  "name": "riiiiichdev",
  "bio": null,
  "created_at": "2020-03-28T20:03:40.297193Z",
  "display_name": "riiiiichdev",
  "id": "505191382",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/6b0df6dd-107e-4d54-88f9-ec45e5aa18b0-profile_image-300x300.png",
  "type": "user",
  "updated_at": "2020-05-29T23:19:31.955639Z",
  "follow": {
    "created_at": "2020-05-16T17:06:08Z",
    "notifications": true
  },
  "subscription": false,
  "country": {
    "code": "tw",
    "name": "Taiwan"
  },
  "team": "envira"
}, {
  "_id": "5ec8c09c56fd88771c27b578",
  "name": "souriscloud",
  "bio": "Czech developer & gamer. Streaming Development (mostly Javascript) and maybe Game Development (Unity3D-C#). On the very beggining to streaming.",
  "created_at": "2019-01-30T22:31:04.6129Z",
  "display_name": "SourisCLOUD",
  "id": "413363089",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/d9984ee2-49f3-4cf5-9d28-d9102a705fa0-profile_image-300x300.png",
  "type": "user",
  "updated_at": "2020-06-16T22:19:16.472231Z",
  "follow": {
    "created_at": "2020-04-28T14:27:51Z",
    "notifications": true
  },
  "subscription": false,
  "country": {
    "code": "cz",
    "name": "Czech Republic"
  },
  "team": "galactic-republic",
  "last_seen": "2020-06-12T20:09:37.235Z"
}, {
  "_id": "5ec8c09c56fd88771c27b57a",
  "name": "informathemusic",
  "bio": null,
  "created_at": "2018-11-03T11:17:05.14572Z",
  "display_name": "informathemusic",
  "id": "271952297",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/0108e9ec-eaac-4b07-9f8a-eae30fecdc21-profile_image-300x300.png",
  "type": "user",
  "updated_at": "2020-06-24T14:38:55.636591Z",
  "follow": {
    "created_at": "2020-06-19T19:51:54Z",
    "notifications": true
  },
  "subscription": false,
  "country": {
    "code": "fr",
    "name": "France"
  },
  "team": "linux",
  "status": "Portfolio: https://imm.now.sh/#/"
}, {
  "_id": "5ec9538a56fd88771c28b755",
  "name": "exegete46",
  "bio": null,
  "created_at": "2013-03-01T15:21:13.713066Z",
  "display_name": "exegete46",
  "id": "40856022",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/e9a13d31-0535-469f-ba07-321567161e01-profile_image-300x300.png",
  "type": "user",
  "updated_at": "2020-06-19T03:13:49.672703Z",
  "follow": {
    "created_at": "2020-05-09T20:22:50Z",
    "notifications": true
  },
  "subscription": false,
  "country": {
    "code": "aq",
    "name": "Antarctica"
  },
  "team": "freebsd"
}, {
  "_id": "5ec9921656fd88771c29296e",
  "name": "acid_spark",
  "bio": null,
  "created_at": "2013-04-16T00:19:13.647505Z",
  "display_name": "Acid_Spark",
  "id": "42514603",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/83fee4e3-5d04-4c87-ba41-8f2c5affe9e3-profile_image-300x300.png",
  "type": "user",
  "updated_at": "2020-06-24T13:56:21.851202Z",
  "follow": {
    "created_at": "2019-12-08T19:54:16Z",
    "notifications": true
  },
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-04-28T15:16:58.000Z"
  },
  "country": {
    "code": "us",
    "name": "United States of America"
  },
  "team": "dev",
  "status": "Loading...",
  "last_seen": "2020-06-24T13:56:21.981Z"
}, {
  "_id": "5ec8c09c56fd88771c27b57e",
  "name": "majesticeye",
  "bio": "CEO & Founder of StreamPanel.com. Questions? Contact me at jayson@streampanel.com.",
  "created_at": "2013-04-16T15:37:19.444179Z",
  "display_name": "MajesticEye",
  "id": "42532173",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/majesticeye-profile_image-6839a0baf3ddd92e-300x300.png",
  "type": "user",
  "updated_at": "2020-06-12T14:04:26.335872Z",
  "follow": {
    "created_at": "2019-11-06T00:05:55Z",
    "notifications": true
  },
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-05-25T21:03:39.000Z"
  },
  "country": {
    "code": "us",
    "name": "United States of America"
  },
  "team": "vuejs",
  "status": "ᕙ(˵ ಠ ਊ ಠ ˵)ᕗ",
  "last_seen": "2020-06-12T20:11:42.146Z"
}, {
  "_id": "5ecacec556fd88771c2b8d01",
  "name": "codeshow",
  "bio": "Welcome to the Show! Bruno Rocha is a Software Engineer at Red Hat, Member of Python Software Foundation and is learning Rust programming language. Live Coding every week doing Rust exercises or programming something in Python :)",
  "created_at": "2019-11-22T21:53:54.605237Z",
  "display_name": "CodeShow",
  "follow": {
    "created_at": "2020-03-25T15:32:46Z",
    "notifications": true
  },
  "id": "474048953",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/a3bf78e1-97b5-4955-b8ac-46882b80cda2-profile_image-300x300.png",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-05-25T21:53:01.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-24T12:10:48.968995Z",
  "team": "redhat",
  "country": {
    "code": "br",
    "name": "Brazil"
  },
  "status": "watching deno trying to kill node"
}, {
  "_id": "5ecdadc656fd88771c3142ae",
  "name": "nicekor9",
  "bio": null,
  "created_at": "2018-01-22T15:25:14.154188Z",
  "display_name": "Nicekor9",
  "follow": {
    "created_at": "2020-04-25T17:35:25Z",
    "notifications": true
  },
  "id": "192228596",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/a51ea348-5237-491d-94a8-a18cfc19b04d-profile_image-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-20T22:24:59.50746Z"
}, {
  "_id": "5ecaced356fd88771c2b91f2",
  "name": "therealpygon",
  "bio": null,
  "created_at": "2013-11-03T19:44:03.844007Z",
  "display_name": "therealpygon",
  "follow": {
    "created_at": "2019-12-27T15:22:02Z",
    "notifications": true
  },
  "id": "51069058",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/28dd1a4a-eee3-47db-a4b0-a6da5a96a8fc-profile_image-300x300.png",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-04-28T14:42:17.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-17T02:05:32.60187Z",
  "team": "empire"
}, {
  "_id": "5ecc30c456fd88771c2e3c3b",
  "name": "chiefmustardo",
  "bio": "I'm justy your average guy who enjoys a whole plethora of games and wishes to share that enjoyment with you all. I mainly play Arma 3, Minecraft and League so if you enjoy those hang around. It's your prerogative :P",
  "created_at": "2015-02-25T21:35:46.373579Z",
  "display_name": "ChiefMustardo",
  "follow": {
    "created_at": "2020-05-16T23:07:24Z",
    "notifications": true
  },
  "id": "83772394",
  "logo": "https://static-cdn.jtvnw.net/user-default-pictures-uv/41780b5a-def8-11e9-94d9-784f43822e80-profile_image-300x300.png",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-05-27T15:05:18.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-22T22:38:49.945885Z",
  "country": {
    "code": "gb",
    "name": "United Kingdom of Great Britain and Northern Ireland"
  },
  "team": "jenkins",
  "status": "Week Off From Work Overdue!"
}, {
  "_id": "5ecacee356fd88771c2b9930",
  "name": "mynameisinfi",
  "bio": "I make cool stuff on the internet. Sadly, nobody uses it.",
  "created_at": "2019-10-05T18:48:19.741353Z",
  "display_name": "mynameisinfi",
  "follow": {
    "created_at": "2019-10-05T21:33:14Z",
    "notifications": true
  },
  "id": "465598376",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/da259d86-22d5-47dd-a873-c8469a7fac1c-profile_image-300x300.png",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-05-29T15:27:55.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-06T22:08:12.604724Z",
  "country": {
    "code": "de",
    "name": "Germany"
  },
  "team": "creative-commons-zero",
  "last_seen": "2020-06-15T17:50:53.249Z",
  "status": "████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████"
}, {
  "_id": "5ecacedb56fd88771c2b9559",
  "name": "joshuaferr1s",
  "bio": null,
  "created_at": "2012-06-18T18:37:48.214504Z",
  "display_name": "joshuaferr1s",
  "follow": {
    "created_at": "2019-10-15T03:44:40Z",
    "notifications": true
  },
  "id": "31446463",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/bae5a8f0-6b50-40cd-ac63-a139d93f56c5-profile_image-300x300.png",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-05-29T19:02:41.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-16T21:29:51.586649Z"
}, {
  "_id": "5ed1601356fd88771c38b16f",
  "name": "mehdi_alouane",
  "bio": null,
  "created_at": "2016-06-11T17:24:09.911759Z",
  "display_name": "mehdi_alouane",
  "follow": {
    "created_at": "2019-10-06T17:10:37Z",
    "notifications": false
  },
  "id": "126520584",
  "logo": "https://static-cdn.jtvnw.net/user-default-pictures-uv/dbdc9198-def8-11e9-8681-784f43822e80-profile_image-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-18T17:18:25.573517Z"
}, {
  "_id": "5ecaceda56fd88771c2b94b4",
  "name": "drillskibo",
  "bio": null,
  "created_at": "2014-04-30T17:27:10.481994Z",
  "display_name": "DrillsKibo",
  "follow": {
    "created_at": "2019-11-03T07:37:16Z",
    "notifications": true
  },
  "id": "61876811",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/drillskibo-profile_image-4453ca8912c0ee49-300x300.jpeg",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-05-25T21:54:07.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-22T09:42:42.540018Z",
  "country": {
    "code": "aq",
    "name": "Antarctica"
  },
  "team": "node-js",
  "last_seen": "2020-06-19T08:12:40.799Z",
  "status": "α Apocalypse 22:13 Ω"
}, {
  "_id": "5ecaceda56fd88771c2b9499",
  "name": "sandiross",
  "bio": null,
  "created_at": "2013-06-05T20:43:29.440425Z",
  "display_name": "sandiross",
  "follow": {
    "created_at": "2019-10-12T02:59:14Z",
    "notifications": true
  },
  "id": "44389392",
  "logo": "https://static-cdn.jtvnw.net/user-default-pictures-uv/dbdc9198-def8-11e9-8681-784f43822e80-profile_image-300x300.png",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-05-29T22:25:35.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-23T09:11:31.908537Z"
}, {
  "_id": "5ecaceda56fd88771c2b94ec",
  "name": "cotoli",
  "bio": null,
  "created_at": "2017-08-27T15:02:10.095691Z",
  "display_name": "cotoli",
  "follow": {
    "created_at": "2019-10-05T16:28:41Z",
    "notifications": true
  },
  "id": "171719428",
  "logo": "https://static-cdn.jtvnw.net/user-default-pictures-uv/ead5c8b2-a4c9-4724-b1dd-9f00b46cbd3d-profile_image-300x300.png",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-05-29T15:28:17.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-21T14:34:31.997489Z",
  "status": "ReferenceError: status is not defined",
  "last_seen": "2020-06-15T15:53:59.944Z"
}, {
  "_id": "5ecaced456fd88771c2b924d",
  "name": "dr_arabaz",
  "bio": null,
  "created_at": "2018-07-22T02:39:44.819935Z",
  "display_name": "dr_arabaz",
  "follow": {
    "created_at": "2020-05-15T09:37:36Z",
    "notifications": true
  },
  "id": "240887505",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/02547696-9073-4a32-b5af-ba6116d3d868-profile_image-300x300.png",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-06-15T14:42:46.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-03T15:36:47.819767Z"
}, {
  "_id": "5ecacede56fd88771c2b96f2",
  "name": "wolfi3654",
  "bio": null,
  "created_at": "2015-03-04T16:01:32.968431Z",
  "display_name": "WOLFI3654",
  "follow": {
    "created_at": "2020-04-12T15:31:02Z",
    "notifications": true
  },
  "id": "84351425",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/23a22807-fe86-4bf8-bc9e-d3b58e95df1e-profile_image-300x300.jpg",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-05-29T22:31:31.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-22T15:13:58.787494Z",
  "country": {
    "code": "de",
    "name": "Germany"
  },
  "team": "java"
}, {
  "_id": "5ecacecc56fd88771c2b8e3a",
  "name": "avi12",
  "bio": "A software developer. Website: https://avi12.com",
  "created_at": "2012-05-09T05:50:04.773763Z",
  "display_name": "avi12",
  "follow": false,
  "id": "30389460",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/avi12-profile_image-7de7028266b8af18-300x300.jpeg",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-05-21T19:40:34.522221Z"
}, {
  "_id": "5ecacee356fd88771c2b9928",
  "name": "jojon_surojon",
  "bio": null,
  "created_at": "2020-04-13T20:52:40.833244Z",
  "display_name": "jojon_surojon",
  "follow": {
    "created_at": "2020-04-14T14:44:25Z",
    "notifications": true
  },
  "id": "513704161",
  "logo": "https://static-cdn.jtvnw.net/user-default-pictures-uv/de130ab0-def7-11e9-b668-784f43822e80-profile_image-300x300.png",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-06-19T19:15:58.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-15T02:31:22.784503Z",
  "country": {
    "code": "us",
    "name": "United States of America"
  },
  "team": "usps",
  "last_seen": "2020-06-15T16:08:45.004Z"
}, {
  "_id": "5ecacee356fd88771c2b991e",
  "name": "mizticnzl",
  "bio": "Twitch Streamer from Auckland, New Zealand. Come by and say hi :)",
  "created_at": "2016-12-05T05:20:30.40588Z",
  "display_name": "mizticNZL",
  "follow": {
    "created_at": "2020-02-11T02:29:05Z",
    "notifications": true
  },
  "id": "141123647",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/5f560e30c157763b-profile_image-300x300.jpeg",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-06-12T14:53:51.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-23T05:12:38.800039Z",
  "country": {
    "code": "nz",
    "name": "New Zealand"
  }
}, {
  "_id": "5ecacedd56fd88771c2b9686",
  "name": "mihaiandrei15",
  "bio": null,
  "created_at": "2013-07-09T18:03:25.55619Z",
  "display_name": "mihaiandrei15",
  "follow": {
    "created_at": "2020-05-18T15:01:14Z",
    "notifications": false
  },
  "id": "45856545",
  "logo": "https://static-cdn.jtvnw.net/user-default-pictures-uv/ce57700a-def9-11e9-842d-784f43822e80-profile_image-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-19T15:08:18.052629Z",
  "team": "react"
}, {
  "_id": "5ed16a7556fd88771c38c5b9",
  "name": "dj_what",
  "bio": null,
  "created_at": "2014-06-08T23:01:23.048355Z",
  "display_name": "dj_what",
  "follow": {
    "created_at": "2020-05-29T20:05:02Z",
    "notifications": true
  },
  "id": "63955047",
  "logo": "https://static-cdn.jtvnw.net/user-default-pictures-uv/13e5fa74-defa-11e9-809c-784f43822e80-profile_image-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-05-08T13:49:07.59978Z"
}, {
  "_id": "5ecf12e056fd88771c340b18",
  "name": "yassine_49",
  "bio": null,
  "created_at": "2013-08-28T15:38:36.63746Z",
  "display_name": "yassine_49",
  "follow": {
    "created_at": "2020-05-26T18:51:47Z",
    "notifications": true
  },
  "id": "48243280",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/yassine_49-profile_image-8207d653faca7cea-300x300.jpeg",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-22T13:16:38.68687Z"
}, {
  "_id": "5ecaced456fd88771c2b922d",
  "name": "debopamgupta",
  "bio": "Just a guy who tries to code cool stuff 💻",
  "created_at": "2020-01-01T09:17:56.49116Z",
  "display_name": "debopamgupta",
  "follow": {
    "created_at": "2020-01-01T09:19:52Z",
    "notifications": true
  },
  "id": "481538211",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/6fb87b42-549a-40ba-b268-a994e6543769-profile_image-300x300.png",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-06-03T14:43:43.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-22T17:17:12.83256Z",
  "country": {
    "code": "in",
    "name": "India"
  },
  "status": "what am i doing with my life",
  "last_seen": "2020-06-24T14:16:55.808Z"
}, {
  "_id": "5ecacece56fd88771c2b8f4a",
  "name": "shutchie",
  "bio": null,
  "created_at": "2012-11-11T01:47:37.020404Z",
  "display_name": "shutchie",
  "follow": {
    "created_at": "2020-05-09T17:17:40Z",
    "notifications": true
  },
  "id": "37595849",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/d6499c2a438c307b-profile_image-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-23T05:13:36.379399Z"
}, {
  "_id": "5ecf295256fd88771c343258",
  "name": "entwistleox",
  "bio": null,
  "created_at": "2020-04-02T23:21:37.964005Z",
  "display_name": "entwistleox",
  "follow": {
    "created_at": "2020-05-24T19:35:26Z",
    "notifications": true
  },
  "id": "507534026",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/dea4a2a2-86c3-42a9-8662-f5be6c68a21b-profile_image-300x300.png",
  "subscription": {
    "sub_plan": "2000",
    "created_at": "2020-06-15T14:34:41.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-15T02:56:48.364792Z",
  "country": {
    "code": "cl",
    "name": "Chile"
  },
  "team": "node-js",
  "last_seen": "2020-06-12T20:49:04.628Z"
}, {
  "_id": "5ecce1ca56fd88771c2f8a84",
  "name": "blamiegod",
  "bio": null,
  "created_at": "2014-08-23T18:08:29.25209Z",
  "display_name": "blamiegod",
  "follow": {
    "created_at": "2020-05-26T09:30:15Z",
    "notifications": true
  },
  "id": "69729658",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/5bdb00cf-4f68-4369-9883-3237cf009676-profile_image-300x300.png",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-05-29T18:49:33.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-08T14:00:56.271559Z",
  "country": {
    "code": "pt",
    "name": "Portugal"
  },
  "team": "react",
  "last_seen": "2020-06-15T15:35:29.024Z"
}, {
  "_id": "5ecacee056fd88771c2b97c0",
  "name": "tipsy_ninja",
  "bio": null,
  "created_at": "2017-07-18T18:48:42.978419Z",
  "display_name": "Tipsy_ninja",
  "follow": {
    "created_at": "2019-11-06T17:13:36Z",
    "notifications": true
  },
  "id": "165471953",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/8184f188-7a90-4b5a-bbbf-17f21e29df56-profile_image-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-05T14:57:43.331116Z"
}, {
  "_id": "5ed50d3756fd88771c40359a",
  "name": "procrastinatingwatchingcj",
  "bio": null,
  "created_at": "2020-06-01T14:12:30.764265Z",
  "display_name": "procrastinatingwatchingcj",
  "follow": {
    "created_at": "2020-06-22T15:07:51Z",
    "notifications": true
  },
  "id": "538245474",
  "logo": "https://static-cdn.jtvnw.net/user-default-pictures-uv/13e5fa74-defa-11e9-809c-784f43822e80-profile_image-300x300.png",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-06-01T15:19:02.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-24T14:16:19.506739Z",
  "team": "stack-overflow",
  "country": {
    "code": "de",
    "name": "Germany"
  },
  "last_seen": "2020-06-13T12:25:34.132Z",
  "status": "Procrastinating with CJ by wathing CJ"
}, {
  "_id": "5ed7b31756fd88771c457de6",
  "name": "yetrox17",
  "bio": null,
  "created_at": "2018-10-31T14:04:42.189216Z",
  "display_name": "yetrox17",
  "follow": {
    "created_at": "2020-06-03T14:32:11Z",
    "notifications": false
  },
  "id": "271154773",
  "logo": "https://static-cdn.jtvnw.net/user-default-pictures-uv/cdd517fe-def4-11e9-948e-784f43822e80-profile_image-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-08T18:08:49.287095Z",
  "country": {
    "code": "tr",
    "name": "Turkey"
  }
}, {
  "_id": "5ed408c256fd88771c3e20bf",
  "name": "irradiatedunicorn",
  "bio": "Hey, my name's Amy. I enjoy playing games and I would like you to join me in that enjoyment.",
  "created_at": "2015-09-16T19:11:01.587071Z",
  "display_name": "IrradiatedUnicorn",
  "follow": {
    "created_at": "2020-05-27T16:01:48Z",
    "notifications": true
  },
  "id": "102342710",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/826c1a2a-9fb9-4fb4-b007-96f5f7e29849-profile_image-300x300.png",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-06-15T14:29:06.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-08T13:48:01.038047Z",
  "status": "TransgenderPride",
  "team": "js"
}, {
  "_id": "5ecacee656fd88771c2b99d3",
  "name": "newgate_98",
  "bio": null,
  "created_at": "2014-01-05T12:30:21.132775Z",
  "display_name": "NewGate_98",
  "follow": {
    "created_at": "2020-05-16T23:31:09Z",
    "notifications": true
  },
  "id": "54468682",
  "logo": "https://static-cdn.jtvnw.net/user-default-pictures-uv/dbdc9198-def8-11e9-8681-784f43822e80-profile_image-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-03T14:32:07.464011Z"
}, {
  "_id": "5ecacece56fd88771c2b8f93",
  "name": "jaany",
  "bio": "Jan Henning",
  "created_at": "2011-05-02T18:32:26.590638Z",
  "display_name": "Jaany",
  "follow": {
    "created_at": "2019-10-05T20:54:35Z",
    "notifications": false
  },
  "id": "22153690",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/f31ab0bbb3937b14-profile_image-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-21T13:42:47.53309Z",
  "country": {
    "code": "no",
    "name": "Norway"
  },
  "team": "cpanel"
}, {
  "_id": "5ecacecf56fd88771c2b8fb8",
  "name": "prashanth_b17",
  "bio": null,
  "created_at": "2020-04-12T14:48:03.552336Z",
  "display_name": "prashanth_b17",
  "follow": {
    "created_at": "2020-04-12T14:49:39Z",
    "notifications": true
  },
  "id": "512984767",
  "logo": "https://static-cdn.jtvnw.net/user-default-pictures-uv/de130ab0-def7-11e9-b668-784f43822e80-profile_image-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-06T17:25:32.154209Z"
}, {
  "_id": "5ed120e756fd88771c380313",
  "name": "jediknightjp",
  "bio": null,
  "created_at": "2020-04-18T21:34:27.888669Z",
  "display_name": "jediknightjp",
  "follow": {
    "created_at": "2020-05-29T16:36:31Z",
    "notifications": true
  },
  "id": "516708074",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/eeb175af-7f93-43ec-9825-b795dff38237-profile_image-300x300.png",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-05-29T16:35:31.000Z"
  },
  "type": "user",
  "updated_at": "2020-05-16T13:53:12.532751Z",
  "team": "vuejs",
  "status": "#twitchflime"
}, {
  "_id": "5ed467ad56fd88771c3ef359",
  "name": "mapll3",
  "bio": null,
  "created_at": "2014-10-31T20:39:43.374218Z",
  "display_name": "mapll3",
  "follow": {
    "created_at": "2020-06-01T02:26:02Z",
    "notifications": true
  },
  "id": "74154307",
  "logo": "https://static-cdn.jtvnw.net/user-default-pictures-uv/cdd517fe-def4-11e9-948e-784f43822e80-profile_image-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-12T17:47:58.167163Z",
  "country": {
    "code": "ca",
    "name": "Canada"
  },
  "last_seen": "2020-06-12T20:46:58.843Z",
  "team": "react"
}, {
  "_id": "5ecaced056fd88771c2b9053",
  "name": "missioncrit",
  "bio": null,
  "created_at": "2017-10-05T22:51:02.376392Z",
  "display_name": "missioncrit",
  "follow": {
    "created_at": "2020-05-09T17:13:28Z",
    "notifications": true
  },
  "id": "176626254",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/468b2a4f-dd6e-4e6c-97cf-cc275cc2c72e-profile_image-300x300.jpg",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-16T10:07:16.457972Z"
}, {
  "_id": "5ecacede56fd88771c2b96d0",
  "name": "d3web",
  "bio": null,
  "created_at": "2020-05-10T15:31:20.04416Z",
  "display_name": "d3web",
  "follow": {
    "created_at": "2020-05-10T15:32:38Z",
    "notifications": true
  },
  "id": "528667682",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/cba94d9b-c92e-4058-94be-a178d526d446-profile_image-300x300.png",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-06-01T15:13:59.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-02T00:10:59.077082Z",
  "country": {
    "code": "ca",
    "name": "Canada"
  }
}, {
  "_id": "5ecacecf56fd88771c2b8fd0",
  "name": "jonahjoe",
  "bio": null,
  "created_at": "2020-05-02T07:20:05.227191Z",
  "display_name": "jonahjoe",
  "follow": {
    "created_at": "2020-05-07T01:57:21Z",
    "notifications": true
  },
  "id": "524155799",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/e09daaf3-b5e0-48d3-ae66-d1406e637d52-profile_image-300x300.png",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-06-15T14:42:46.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-06T17:12:07.515823Z",
  "team": "internet-explorer",
  "last_seen": "2020-06-24T14:16:47.441Z"
}, {
  "_id": "5ecaceca56fd88771c2b8d7f",
  "name": "thefinaledge",
  "bio": null,
  "created_at": "2015-08-08T18:00:53.018808Z",
  "display_name": "thefinaledge",
  "follow": {
    "created_at": "2020-04-17T16:10:33Z",
    "notifications": true
  },
  "id": "98645078",
  "logo": "https://static-cdn.jtvnw.net/user-default-pictures-uv/75305d54-c7cc-40d1-bb9c-91fbe85943c7-profile_image-300x300.png",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-06-22T14:37:03.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-18T16:58:49.308565Z"
}, {
  "_id": "5ecacedc56fd88771c2b95c2",
  "name": "iampiikaa",
  "bio": null,
  "created_at": "2017-08-05T14:18:38.120074Z",
  "display_name": "iampiikaa",
  "follow": {
    "created_at": "2019-11-29T07:25:01Z",
    "notifications": true
  },
  "id": "168439691",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/e1c4a11a-96d5-4d88-9afa-5b247e7d3a4a-profile_image-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-03T14:42:39.409763Z"
}, {
  "_id": "5ecacedc56fd88771c2b95a4",
  "name": "nothingasis",
  "bio": null,
  "created_at": "2020-03-31T21:06:16.615256Z",
  "display_name": "nothingasis",
  "follow": {
    "created_at": "2020-04-06T15:54:12Z",
    "notifications": true
  },
  "id": "506588068",
  "logo": "https://static-cdn.jtvnw.net/user-default-pictures-uv/ebe4cd89-b4f4-4cd9-adac-2f30151b4209-profile_image-300x300.png",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-06-22T15:07:31.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-24T03:14:04.816458Z",
  "country": {
    "code": "my",
    "name": "Malaysia"
  },
  "team": "pied-piper-pp"
}, {
  "_id": "5ed7b9c856fd88771c459143",
  "name": "belauzas",
  "bio": "Front-end lecturer, developer, father",
  "created_at": "2019-01-03T20:14:07.609612Z",
  "display_name": "Belauzas",
  "follow": {
    "created_at": "2020-04-12T16:16:44Z",
    "notifications": true
  },
  "id": "406511388",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/a137680f-4190-4b94-9652-c2c800a9c61a-profile_image-300x300.jpeg",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-20T00:12:13.838799Z"
}, {
  "_id": "5ecacedb56fd88771c2b952f",
  "name": "makesense6",
  "bio": null,
  "created_at": "2020-01-28T22:04:01.263752Z",
  "display_name": "makesense6",
  "follow": {
    "created_at": "2020-01-28T22:06:40Z",
    "notifications": true
  },
  "id": "488783357",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/a31352e1-c85c-4630-a930-3ff7c483fa27-profile_image-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-23T13:50:55.024775Z",
  "country": {
    "code": "za",
    "name": "South Africa"
  },
  "team": "node"
}, {
  "_id": "5ec9592756fd88771c28c209",
  "name": "silversurfer1989",
  "bio": null,
  "created_at": "2014-01-27T15:42:28.892026Z",
  "display_name": "silversurfer1989",
  "id": "55677402",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/e59ec82f-17ca-49c3-9dde-c42e74c606c5-profile_image-300x300.png",
  "type": "user",
  "updated_at": "2020-06-23T02:06:03.280138Z",
  "follow": {
    "created_at": "2020-05-22T04:21:12Z",
    "notifications": true
  },
  "subscription": {
    "sub_plan": "2000",
    "created_at": "2020-06-04T01:40:01.000Z"
  },
  "country": {
    "code": "ca",
    "name": "Canada"
  },
  "team": "react"
}, {
  "_id": "5ecaced256fd88771c2b918e",
  "name": "asolera",
  "bio": null,
  "created_at": "2020-04-24T00:04:47.287272Z",
  "display_name": "asolera",
  "follow": {
    "created_at": "2020-04-25T22:28:21Z",
    "notifications": true
  },
  "id": "519479774",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/b4a088fc-4649-4ba1-9f82-cffa08452163-profile_image-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-20T18:47:34.294147Z",
  "country": {
    "code": "br",
    "name": "Brazil"
  },
  "team": "docker",
  "status": "setting up my status",
  "last_seen": "2020-06-12T20:04:01.005Z"
}, {
  "_id": "5ecacedf56fd88771c2b9761",
  "name": "whats_up_baby",
  "bio": null,
  "created_at": "2014-06-15T03:35:42.154062Z",
  "display_name": "whats_up_baby",
  "follow": {
    "created_at": "2020-05-14T03:30:24Z",
    "notifications": false
  },
  "id": "64400541",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/1f51a3e1-794f-468b-907a-4a3047f860f4-profile_image-300x300.jpg",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-05T15:59:33.64637Z",
  "country": {
    "code": "ca",
    "name": "Canada"
  },
  "team": "reddit"
}, {
  "_id": "5ecaced356fd88771c2b91d9",
  "name": "nish707",
  "bio": null,
  "created_at": "2020-04-04T20:06:47.434601Z",
  "display_name": "nish707",
  "follow": {
    "created_at": "2020-04-12T16:35:53Z",
    "notifications": true
  },
  "id": "508669317",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/f4145b90-29cf-4541-80e8-dc390b0cf30e-profile_image-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-22T16:18:27.3536Z",
  "team": "react"
}, {
  "_id": "5ed7c3de56fd88771c45aaa9",
  "name": "ralomo_",
  "bio": null,
  "created_at": "2020-05-10T09:08:42.784689Z",
  "display_name": "ralomo_",
  "follow": {
    "created_at": "2020-06-12T14:25:47Z",
    "notifications": true
  },
  "id": "528548081",
  "logo": "https://static-cdn.jtvnw.net/user-default-pictures-uv/de130ab0-def7-11e9-b668-784f43822e80-profile_image-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-15T16:01:11.716483Z",
  "last_seen": "2020-06-15T16:01:11.937Z"
}, {
  "_id": "5ecc357056fd88771c2e4648",
  "name": "nutlope",
  "bio": "Someone nice.",
  "created_at": "2015-07-09T00:06:09.213919Z",
  "display_name": "Nutlope",
  "follow": {
    "created_at": "2020-05-25T21:14:51Z",
    "notifications": true
  },
  "id": "95621151",
  "logo": "https://static-cdn.jtvnw.net/user-default-pictures-uv/294c98b5-e34d-42cd-a8f0-140b72fba9b0-profile_image-300x300.png",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-05-25T21:36:41.000Z"
  },
  "type": "user",
  "updated_at": "2020-05-23T06:31:55.871755Z"
}, {
  "_id": "5ed86a7d56fd88771c46e762",
  "name": "julijanatv",
  "bio": "Facebook - Julijana Jancic Juli",
  "created_at": "2015-02-19T23:41:48.600028Z",
  "display_name": "Julijanatv",
  "follow": {
    "created_at": "2020-06-03T15:48:50Z",
    "notifications": true
  },
  "id": "83178303",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/08ec0faf-b607-42b5-bf0d-833069acc44b-profile_image-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-23T20:07:16.594405Z"
}, {
  "_id": "5ecacedd56fd88771c2b9656",
  "name": "lakshman_kishore",
  "bio": null,
  "created_at": "2020-04-16T03:43:44.988452Z",
  "display_name": "Lakshman_kishore",
  "follow": {
    "created_at": "2020-04-28T15:09:27Z",
    "notifications": true
  },
  "id": "514973608",
  "logo": "https://static-cdn.jtvnw.net/user-default-pictures-uv/75305d54-c7cc-40d1-bb9c-91fbe85943c7-profile_image-300x300.png",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-05-29T15:29:00.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-24T13:50:34.784633Z",
  "team": "node-js",
  "country": {
    "code": "in",
    "name": "India"
  },
  "last_seen": "2020-06-24T14:17:28.181Z",
  "status": "CJ is awesome!!"
}, {
  "_id": "5ed1156156fd88771c37e26a",
  "name": "toxictoast",
  "bio": "Ei Gude!Naja so sagen wir Hessen \"Hallo\". Mein Name ist \"ToxicToast\" und ich würde mich selbst als Casual Gamer bezeichnen der ab und an mal seine Spielerfahrungen mit euch hier auf Twitch teilt.",
  "created_at": "2012-02-05T17:48:21.102014Z",
  "display_name": "ToxicToast",
  "follow": {
    "created_at": "2020-05-29T13:58:51Z",
    "notifications": true
  },
  "id": "28004350",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/toxictoast-profile_image-32e7d512a055c187-300x300.png",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-05-29T22:00:23.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-21T17:44:48.738684Z",
  "country": {
    "code": "de",
    "name": "Germany"
  },
  "team": "sith",
  "last_seen": "2020-06-12T20:47:46.470Z"
}, {
  "_id": "5eda593256fd88771c4a8e4b",
  "name": "rjniemela",
  "bio": null,
  "created_at": "2011-02-18T12:19:44.096542Z",
  "display_name": "RJNiemela",
  "follow": {
    "created_at": "2020-01-04T15:06:50Z",
    "notifications": true
  },
  "id": "20545365",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/rjniemela-profile_image-520484796d312896-300x300.jpeg",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-09T17:04:29.881693Z"
}, {
  "_id": "5ecaced656fd88771c2b92b6",
  "name": "l33t_rose",
  "bio": null,
  "created_at": "2018-10-22T22:57:46.957665Z",
  "display_name": "L33t_Rose",
  "follow": {
    "created_at": "2020-04-23T01:51:11Z",
    "notifications": true
  },
  "id": "268875817",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/573c9df2-6640-4bc5-b0a0-ba11f0b8a185-profile_image-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-18T16:12:46.747021Z",
  "country": {
    "code": "us",
    "name": "United States of America"
  },
  "team": "facebook",
  "status": "yes"
}, {
  "_id": "5ecaced156fd88771c2b90b8",
  "name": "rickyu1978",
  "bio": null,
  "created_at": "2017-10-17T06:30:28.887668Z",
  "display_name": "rickyu1978",
  "follow": {
    "created_at": "2019-10-11T15:31:48Z",
    "notifications": true
  },
  "id": "178068368",
  "logo": "https://static-cdn.jtvnw.net/user-default-pictures-uv/ead5c8b2-a4c9-4724-b1dd-9f00b46cbd3d-profile_image-300x300.png",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-06-15T15:49:27.000Z"
  },
  "type": "user",
  "updated_at": "2020-05-16T17:00:32.953457Z",
  "last_seen": "2020-06-15T16:10:20.759Z",
  "country": {
    "code": "hk",
    "name": "Hong Kong"
  }
}, {
  "_id": "5eda598d56fd88771c4a8f38",
  "name": "celixrevengr",
  "bio": null,
  "created_at": "2018-02-06T23:16:11.207015Z",
  "display_name": "celixrevengr",
  "follow": false,
  "id": "195131455",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/dd56a81c-dc54-4780-9044-ea25ba3a7077-profile_image-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-05T14:39:08.797044Z"
}, {
  "_id": "5ec8c09c56fd88771c27b57c",
  "name": "sasankthapa",
  "bio": null,
  "created_at": "2019-10-12T05:01:10.878235Z",
  "display_name": "sasankthapa",
  "id": "466540620",
  "logo": "https://static-cdn.jtvnw.net/user-default-pictures-uv/13e5fa74-defa-11e9-809c-784f43822e80-profile_image-300x300.png",
  "type": "user",
  "updated_at": "2020-06-23T23:07:00.155021Z",
  "follow": {
    "created_at": "2020-04-18T20:27:36Z",
    "notifications": true
  },
  "subscription": false,
  "country": {
    "code": "np",
    "name": "Nepal"
  }
}, {
  "_id": "5ecacecd56fd88771c2b8e9f",
  "name": "codingpasta",
  "bio": null,
  "created_at": "2019-10-16T13:51:48.78433Z",
  "display_name": "codingpasta",
  "follow": {
    "created_at": "2019-10-16T13:56:41Z",
    "notifications": true
  },
  "id": "467452925",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/4bf447ba-c294-430e-b149-128145222d74-profile_image-300x300.png",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-06-01T14:54:38.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-06T21:33:20.661758Z",
  "country": {
    "code": "ch",
    "name": "Switzerland"
  },
  "team": "internet-explorer",
  "last_seen": "2020-06-15T14:46:06.726Z"
}, {
  "_id": "5ecacecf56fd88771c2b8fd4",
  "name": "win32zeroday",
  "bio": null,
  "created_at": "2017-11-15T20:46:37.475769Z",
  "display_name": "win32zeroday",
  "follow": {
    "created_at": "2019-12-28T19:47:47Z",
    "notifications": true
  },
  "id": "181934153",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/943c0af1-e0ae-4e97-89d4-118d191f2942-profile_image-300x300.png",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-06-24T13:58:27.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-06T17:24:33.752237Z",
  "country": {
    "code": "be",
    "name": "Belgium"
  },
  "team": "google"
}, {
  "_id": "5ecaced056fd88771c2b90a0",
  "name": "casper124578",
  "bio": null,
  "created_at": "2018-02-04T16:05:55.235989Z",
  "display_name": "casper124578",
  "follow": {
    "created_at": "2020-05-13T14:57:24Z",
    "notifications": true
  },
  "id": "194756035",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/7d5925af-80e0-405b-bc69-29f28fa4c832-profile_image-300x300.png",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-06-15T14:42:46.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-17T18:05:21.190238Z",
  "team": "dev",
  "country": {
    "code": "be",
    "name": "Belgium"
  }
}, {
  "_id": "5eda5cc756fd88771c4a9864",
  "name": "splart23",
  "bio": null,
  "created_at": "2019-12-19T04:23:22.548017Z",
  "display_name": "splart23",
  "follow": {
    "created_at": "2020-04-25T21:55:11Z",
    "notifications": true
  },
  "id": "478663848",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/e761017a-ecd2-4d9e-9db6-11de25903d0c-profile_image-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-22T14:17:55.850023Z",
  "last_seen": "2020-06-12T20:38:15.985Z"
}, {
  "_id": "5ecacedb56fd88771c2b9562",
  "name": "the_she_boss",
  "bio": null,
  "created_at": "2018-10-27T21:43:08.495202Z",
  "display_name": "THE_SHE_BOSS",
  "follow": {
    "created_at": "2019-10-03T02:06:30Z",
    "notifications": true
  },
  "id": "270089347",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/a767b6f5-392e-459e-bb78-e775ce2b180a-profile_image-300x300.png",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-06-04T02:36:35.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-20T20:40:35.419743Z",
  "team": "linux",
  "country": {
    "code": "us",
    "name": "United States of America"
  },
  "last_seen": "2020-06-24T14:17:02.565Z",
  "status": "just trying to learn something"
}, {
  "_id": "5ecacecf56fd88771c2b9009",
  "name": "sirpeanutx",
  "bio": null,
  "created_at": "2016-02-24T15:45:20.949206Z",
  "display_name": "sirpeanutx",
  "follow": {
    "created_at": "2020-03-27T15:18:22Z",
    "notifications": true
  },
  "id": "116853054",
  "logo": "https://static-cdn.jtvnw.net/user-default-pictures-uv/cdd517fe-def4-11e9-948e-784f43822e80-profile_image-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-24T06:57:33.376709Z",
  "team": "node-js"
}, {
  "_id": "5ecaced956fd88771c2b9447",
  "name": "proxnnnn",
  "bio": null,
  "created_at": "2020-04-07T21:57:28.47454Z",
  "display_name": "proxnnnn",
  "follow": {
    "created_at": "2020-04-18T21:24:47Z",
    "notifications": true
  },
  "id": "510303994",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/db4b1a36-86e0-4435-a846-bffb3b8ee26b-profile_image-300x300.png",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-05-25T21:56:08.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-24T13:54:34.077435Z",
  "last_seen": "2020-06-24T14:57:32.525Z",
  "status": "??",
  "team": "react"
}, {
  "_id": "5ecacee556fd88771c2b999e",
  "name": "nikayoda",
  "bio": null,
  "created_at": "2018-05-11T11:36:38.330025Z",
  "display_name": "NikaYoda",
  "follow": {
    "created_at": "2019-11-02T22:49:52Z",
    "notifications": true
  },
  "id": "221470083",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/ea72b915-fa76-4b27-8846-7b5a51ff833f-profile_image-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-05T14:36:49.017526Z",
  "country": {
    "code": "ge",
    "name": "Georgia"
  },
  "team": "java",
  "last_seen": "2020-06-12T20:38:20.090Z"
}, {
  "_id": "5eda610056fd88771c4aa491",
  "name": "masee14",
  "bio": null,
  "created_at": "2016-09-13T16:29:35.579175Z",
  "display_name": "masee14",
  "follow": {
    "created_at": "2020-06-04T23:23:25Z",
    "notifications": true
  },
  "id": "134611739",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/e57ecfa5-9ff2-4766-b200-266a85e1c9b8-profile_image-300x300.png",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-06-05T15:45:28.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-15T14:45:08.324294Z",
  "last_seen": "2020-06-15T16:13:15.602Z",
  "country": {
    "code": "ca",
    "name": "Canada"
  }
}, {
  "_id": "5ed85afa56fd88771c46c778",
  "name": "pablomaly",
  "bio": "IG: PabloMaly",
  "created_at": "2014-07-21T00:05:58.453419Z",
  "display_name": "pablomaly",
  "follow": {
    "created_at": "2020-06-02T04:39:22Z",
    "notifications": true
  },
  "id": "66828004",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/94112e0c-88a5-48dc-92d8-81afa72ea83d-profile_image-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-03-17T22:34:53.263708Z",
  "team": "node"
}, {
  "_id": "5ecacedb56fd88771c2b954a",
  "name": "twaraf",
  "bio": null,
  "created_at": "2019-01-24T20:04:25.515672Z",
  "display_name": "twaraf",
  "follow": {
    "created_at": "2020-05-18T13:58:16Z",
    "notifications": true
  },
  "id": "411922648",
  "logo": "https://static-cdn.jtvnw.net/user-default-pictures-uv/ce57700a-def9-11e9-842d-784f43822e80-profile_image-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-07T20:07:07.21347Z"
}, {
  "_id": "5ecaced056fd88771c2b9098",
  "name": "marc2067",
  "bio": null,
  "created_at": "2019-09-02T19:12:13.987478Z",
  "display_name": "marc2067",
  "follow": {
    "created_at": "2020-05-18T14:59:36Z",
    "notifications": true
  },
  "id": "459092221",
  "logo": "https://static-cdn.jtvnw.net/user-default-pictures-uv/998f01ae-def8-11e9-b95c-784f43822e80-profile_image-300x300.png",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-06-15T02:20:29.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-24T13:58:46.110448Z",
  "country": {
    "code": "lb",
    "name": "Lebanon"
  },
  "team": "js",
  "last_seen": "2020-06-15T15:42:00.577Z"
}, {
  "_id": "5ed851da56fd88771c46b46b",
  "name": "aaroncb",
  "bio": "Full Stack Web Developer",
  "created_at": "2013-01-27T05:52:04.9621Z",
  "display_name": "AaronCB",
  "follow": {
    "created_at": "2020-06-01T14:13:42Z",
    "notifications": true
  },
  "id": "39731616",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/d9297f6a-128e-49eb-a47b-ff88bac55875-profile_image-300x300.png",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-06-04T01:39:23.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-04T02:31:16.116628Z"
}, {
  "_id": "5ecacedd56fd88771c2b9699",
  "name": "clink50",
  "bio": null,
  "created_at": "2017-01-12T00:26:32.966213Z",
  "display_name": "Clink50",
  "follow": {
    "created_at": "2020-05-14T13:48:59Z",
    "notifications": true
  },
  "id": "144533445",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/a24e3d7d-69f9-48ea-b979-ee785d33acc3-profile_image-300x300.png",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-06-06T17:28:05.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-20T19:02:00.578096Z",
  "country": {
    "code": "us",
    "name": "United States of America"
  },
  "team": "node-js",
  "last_seen": "2020-06-15T15:22:05.781Z"
}, {
  "_id": "5ecaceca56fd88771c2b8d61",
  "name": "gluskap",
  "bio": null,
  "created_at": "2013-03-10T20:50:26.693522Z",
  "display_name": "Gluskap",
  "follow": {
    "created_at": "2019-11-23T18:28:46Z",
    "notifications": false
  },
  "id": "41214665",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/gluskap-profile_image-ecd6c9a2bf3b901c-300x300.png",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-06-06T21:44:23.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-22T16:30:25.118201Z",
  "country": {
    "code": "us",
    "name": "United States of America"
  },
  "team": "gitlab"
}, {
  "_id": "5ed1119a56fd88771c37d788",
  "name": "simsim021",
  "bio": null,
  "created_at": "2015-09-13T18:33:29.072846Z",
  "display_name": "Simsim021",
  "follow": {
    "created_at": "2020-04-06T14:46:40Z",
    "notifications": true
  },
  "id": "102136955",
  "logo": "https://static-cdn.jtvnw.net/user-default-pictures-uv/ebb84563-db81-4b9c-8940-64ed33ccfc7b-profile_image-300x300.png",
  "subscription": {
    "sub_plan": "2000",
    "created_at": "2020-06-15T14:34:40.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-23T18:37:43.734147Z",
  "country": {
    "code": "ch",
    "name": "Switzerland"
  },
  "team": "js",
  "status": "gettibg back from work"
}, {
  "_id": "5ed1603a56fd88771c38b1bb",
  "name": "crashcourse_",
  "bio": null,
  "created_at": "2014-07-13T22:20:26.82532Z",
  "display_name": "CrashCourse_",
  "follow": {
    "created_at": "2020-05-15T21:38:32Z",
    "notifications": true
  },
  "id": "66279335",
  "logo": "https://static-cdn.jtvnw.net/user-default-pictures-uv/75305d54-c7cc-40d1-bb9c-91fbe85943c7-profile_image-300x300.png",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-05-29T19:11:12.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-01T14:00:44.055053Z",
  "last_seen": "2020-06-15T16:14:03.560Z"
}, {
  "_id": "5ecacecc56fd88771c2b8e12",
  "name": "alca",
  "bio": "Alca.tv",
  "created_at": "2009-08-10T17:32:19.191869Z",
  "display_name": "Alca",
  "follow": {
    "created_at": "2019-02-02T08:34:36Z",
    "notifications": false
  },
  "id": "7676884",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/9208217791868efc-profile_image-300x300.png",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-04-28T11:49:40.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-23T22:39:11.880542Z",
  "country": {
    "code": "us",
    "name": "United States of America"
  },
  "team": "git",
  "status": "Is mayonnaise an instrument?"
}, {
  "_id": "5edbf87556fd88771c4daceb",
  "name": "onyx___________",
  "bio": null,
  "created_at": "2017-12-11T22:51:20.362998Z",
  "display_name": "Onyx___________",
  "follow": false,
  "id": "185465048",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/90b3d1ef-ecfa-4228-9bed-647d3a55c382-profile_image-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-08T16:02:15.35784Z"
}, {
  "_id": "5ecacece56fd88771c2b8f81",
  "name": "coderinblack",
  "bio": null,
  "created_at": "2020-04-02T05:27:09.50734Z",
  "display_name": "coderinblack",
  "follow": {
    "created_at": "2020-04-25T16:35:59Z",
    "notifications": true
  },
  "id": "507182223",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/1f2d5a2f-9d5f-4ace-aa01-6204e1ba1655-profile_image-300x300.png",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-06-11T01:47:01.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-01T00:12:35.953662Z",
  "country": {
    "code": "us",
    "name": "United States of America"
  },
  "last_seen": "2020-06-15T16:46:11.292Z",
  "status": "Struggling with responsive design",
  "team": "vuejs"
}, {
  "_id": "5ecacee056fd88771c2b9808",
  "name": "itsfilipoficial",
  "bio": null,
  "created_at": "2015-12-02T16:16:17.267022Z",
  "display_name": "itsfilipoficial",
  "follow": {
    "created_at": "2020-04-05T16:11:18Z",
    "notifications": true
  },
  "id": "108535223",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/itsfilipoficial-profile_image-86e6997ef8d3183a-300x300.jpeg",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-06-06T20:13:43.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-14T14:09:44.134448Z",
  "country": {
    "code": "gb",
    "name": "United Kingdom of Great Britain and Northern Ireland"
  },
  "team": "mixer",
  "last_seen": "2020-06-12T21:13:34.809Z"
}, {
  "_id": "5ed16d1156fd88771c38cb27",
  "name": "thejibbster",
  "bio": "Platinum Jungle Main on League of Legends",
  "created_at": "2013-01-18T02:14:42.291689Z",
  "display_name": "theJibbster",
  "follow": {
    "created_at": "2020-05-29T20:01:57Z",
    "notifications": false
  },
  "id": "39422334",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/thejibbster-profile_image-b9ce0ee1dc7d1f8c-300x300.jpeg",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-06-06T21:03:00.000Z"
  },
  "type": "user",
  "updated_at": "2020-05-18T22:39:37.905524Z",
  "last_seen": "2020-06-12T20:46:59.564Z"
}, {
  "_id": "5ecaced456fd88771c2b9250",
  "name": "jurob247",
  "bio": null,
  "created_at": "2014-08-08T05:41:29.797527Z",
  "display_name": "jurob247",
  "follow": {
    "created_at": "2020-05-09T19:22:30Z",
    "notifications": true
  },
  "id": "68450584",
  "logo": "https://static-cdn.jtvnw.net/user-default-pictures-uv/ce57700a-def9-11e9-842d-784f43822e80-profile_image-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-15T22:39:29.587251Z",
  "team": "react"
}, {
  "_id": "5eda654356fd88771c4ab1d6",
  "name": "kevitaka",
  "bio": null,
  "created_at": "2010-03-27T04:05:34.832093Z",
  "display_name": "kevitaka",
  "follow": {
    "created_at": "2020-05-20T18:13:31Z",
    "notifications": true
  },
  "id": "11372695",
  "logo": "https://static-cdn.jtvnw.net/user-default-pictures-uv/de130ab0-def7-11e9-b668-784f43822e80-profile_image-300x300.png",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-06-19T19:50:20.000Z"
  },
  "type": "user",
  "updated_at": "2020-05-21T03:38:22.686317Z",
  "last_seen": "2020-06-24T14:21:19.716Z"
}, {
  "_id": "5ecacecc56fd88771c2b8e51",
  "name": "frenchdrop",
  "bio": "Wis' ChitChatChannel",
  "created_at": "2013-07-19T12:22:42.82824Z",
  "display_name": "FrenchDrop",
  "follow": {
    "created_at": "2019-10-12T01:49:21Z",
    "notifications": true
  },
  "id": "46303518",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/2709c51c-38f7-48bf-b029-d4e802b00a7c-profile_image-300x300.jpg",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-06-12T15:09:26.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-19T01:04:10.881766Z"
}, {
  "_id": "5ecacee656fd88771c2b99e1",
  "name": "leoguy77",
  "bio": "   ...",
  "created_at": "2013-05-29T21:27:24.940814Z",
  "display_name": "Leoguy77",
  "follow": {
    "created_at": "2020-05-21T16:36:07Z",
    "notifications": true
  },
  "id": "44109439",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/leoguy77-profile_image-171e477179477dca-300x300.jpeg",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-19T22:34:47.639384Z",
  "country": null,
  "team": "jedi-order"
}, {
  "_id": "5ed8522b56fd88771c46b51f",
  "name": "spdene",
  "bio": null,
  "created_at": "2015-10-11T16:36:07.680493Z",
  "display_name": "SPDene",
  "follow": {
    "created_at": "2020-06-03T15:48:47Z",
    "notifications": true
  },
  "id": "104182715",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/aae37045-f055-4968-94fb-b574c18c23d4-profile_image-300x300.png",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-06-04T01:48:23.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-24T02:44:43.26692Z",
  "country": {
    "code": "gb",
    "name": "United Kingdom of Great Britain and Northern Ireland"
  },
  "team": "python",
  "last_seen": "2020-06-24T14:16:39.677Z"
}, {
  "_id": "5ede411656fd88771c51a602",
  "name": "ingeniousambivert",
  "bio": "Eccentric. Computer Whisperer",
  "created_at": "2020-06-03T11:54:30.93993Z",
  "display_name": "IngeniousAmbivert",
  "follow": {
    "created_at": "2020-06-03T11:56:58Z",
    "notifications": true
  },
  "id": "539048513",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/e34e3517-f1ad-4e67-9594-c0074372e90a-profile_image-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-13T15:54:48.134094Z",
  "country": {
    "code": "in",
    "name": "India"
  }
}, {
  "_id": "5ecacee656fd88771c2b99e3",
  "name": "big_____bad_daddy",
  "bio": null,
  "created_at": "2016-08-12T10:46:50.927168Z",
  "display_name": "BiG_____BAD_DaDDY",
  "follow": {
    "created_at": "2020-05-11T14:33:04Z",
    "notifications": true
  },
  "id": "131997997",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/7e0ecd38-050c-46b2-8603-d677985bbcdd-profile_image-300x300.jpg",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-09T19:07:37.778209Z",
  "country": {
    "code": "de",
    "name": "Germany"
  },
  "team": "docker"
}, {
  "_id": "5ecaced356fd88771c2b91a5",
  "name": "notbluebeast",
  "bio": null,
  "created_at": "2018-03-03T01:26:07.36562Z",
  "display_name": "NotBlueBeast",
  "follow": {
    "created_at": "2020-02-06T21:10:29Z",
    "notifications": true
  },
  "id": "201181833",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/af49f1bb-ebfd-42eb-976a-a596904ea00a-profile_image-300x300.jpeg",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-05-25T21:59:21.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-21T22:06:38.592841Z",
  "team": null,
  "country": null,
  "last_seen": "2020-06-12T20:47:05.707Z"
}, {
  "_id": "5ed8731b56fd88771c46f943",
  "name": "luuuuissss",
  "bio": null,
  "created_at": "2018-05-12T21:57:44.608773Z",
  "display_name": "luuuuissss",
  "follow": {
    "created_at": "2020-06-04T04:09:15Z",
    "notifications": true
  },
  "id": "222305454",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/1b3fd074-80b1-404f-add4-b0a98db51dc4-profile_image-300x300.png",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-06-08T13:45:27.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-20T00:45:11.969001Z",
  "country": {
    "code": "us",
    "name": "United States of America"
  },
  "last_seen": "2020-06-12T20:44:37.015Z",
  "status": "Hakuna your tattas",
  "team": "node"
}, {
  "_id": "5ecacee656fd88771c2b99c5",
  "name": "aronhoyer",
  "bio": null,
  "created_at": "2017-06-25T09:48:10.870967Z",
  "display_name": "aronhoyer",
  "follow": {
    "created_at": "2019-10-11T15:30:54Z",
    "notifications": true
  },
  "id": "161510131",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/67c1de60-ad3f-4fcb-adc5-5210ee3aa937-profile_image-300x300.png",
  "subscription": {
    "sub_plan": "3000",
    "created_at": "2020-05-01T13:38:08.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-09T11:27:55.364207Z",
  "team": "react"
}, {
  "_id": "5ed85b7656fd88771c46c860",
  "name": "odxs",
  "bio": "fk",
  "created_at": "2014-10-24T22:48:24.893737Z",
  "display_name": "odxs",
  "follow": {
    "created_at": "2020-06-15T15:11:11Z",
    "notifications": true
  },
  "id": "73669279",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/e2f230b8-898b-4ec6-b991-8fc4dca43df8-profile_image-300x300.png",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-06-11T01:27:07.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-14T00:15:15.394036Z"
}, {
  "_id": "5ed4067056fd88771c3e1b77",
  "name": "dslegends",
  "bio": null,
  "created_at": "2013-02-11T02:32:24.369022Z",
  "display_name": "dslegends",
  "follow": {
    "created_at": "2020-05-31T19:24:35Z",
    "notifications": true
  },
  "id": "40227501",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/479bc50f-da56-4e16-8902-e25ee9d58f42-profile_image-300x300.png",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-05-31T20:03:19.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-22T14:19:47.027074Z",
  "team": "vuejs",
  "country": {
    "code": "ca",
    "name": "Canada"
  },
  "status": "P R O C R A S T I N A T I N G with C J",
  "last_seen": "2020-06-15T15:27:39.874Z"
}, {
  "_id": "5ecacecf56fd88771c2b9023",
  "name": "cuzzie91",
  "bio": null,
  "created_at": "2020-04-13T16:05:00.145503Z",
  "display_name": "Cuzzie91",
  "follow": {
    "created_at": "2020-04-14T14:58:31Z",
    "notifications": true
  },
  "id": "513557228",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/98e3eb57-71c2-4d65-b0ee-46a872500b9f-profile_image-300x300.png",
  "subscription": {
    "sub_plan": "2000",
    "created_at": "2020-06-04T03:18:14.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-15T14:08:37.151483Z",
  "country": {
    "code": "my",
    "name": "Malaysia"
  },
  "team": "js",
  "status": "public static void main (String[] args)"
}, {
  "_id": "5ee3a2d356fd88771c5b4c97",
  "name": "jkstudios2020",
  "bio": null,
  "created_at": "2020-06-12T15:42:34.61707Z",
  "display_name": "jkstudios2020",
  "follow": {
    "created_at": "2020-06-12T15:48:17Z",
    "notifications": false
  },
  "id": "542782750",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/6777aeff-0673-4197-8494-3d13b9ed3ae3-profile_image-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-12T16:43:21.807196Z",
  "country": {
    "code": "es",
    "name": "Spain"
  },
  "team": "python",
  "last_seen": "2020-06-15T15:14:06.983Z"
}, {
  "_id": "5ecaced756fd88771c2b9336",
  "name": "andruz97",
  "bio": null,
  "created_at": "2013-01-15T21:05:48.558502Z",
  "display_name": "andruz97",
  "follow": {
    "created_at": "2019-11-03T04:39:16Z",
    "notifications": true
  },
  "id": "39368745",
  "logo": "https://static-cdn.jtvnw.net/user-default-pictures-uv/13e5fa74-defa-11e9-809c-784f43822e80-profile_image-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-04-27T15:37:01.142754Z",
  "country": {
    "code": "gu",
    "name": "Guam"
  },
  "team": "linux"
}, {
  "_id": "5ee0ff0f56fd88771c566591",
  "name": "p10designs",
  "bio": null,
  "created_at": "2019-03-04T14:34:14.500869Z",
  "display_name": "p10designs",
  "follow": {
    "created_at": "2020-06-24T14:07:09Z",
    "notifications": true
  },
  "id": "421224809",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/5ddc552c-667c-42da-8624-f0c5839e7c2f-profile_image-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-24T14:00:57.401773Z",
  "last_seen": "2020-06-12T19:48:12.480Z",
  "country": {
    "code": "es",
    "name": "Spain"
  },
  "team": "ubuntu",
  "status": "CJ is awesome!!"
}, {
  "_id": "5ed422f556fd88771c3e5ba1",
  "name": "funny_dewd",
  "bio": null,
  "created_at": "2020-05-31T21:26:06.544904Z",
  "display_name": "funny_dewd",
  "follow": {
    "created_at": "2020-06-07T22:10:36Z",
    "notifications": true
  },
  "id": "538004092",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/90fa28ab-5802-455f-ae70-90ead95a1f10-profile_image-300x300.png",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-06-12T13:57:09.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-22T04:00:10.401309Z",
  "last_seen": "2020-06-24T14:21:28.525Z",
  "status": "I’ll have a double",
  "team": "react",
  "country": {
    "code": "us",
    "name": "United States of America"
  }
}, {
  "_id": "5eda594356fd88771c4a8e69",
  "name": "dadofdom",
  "bio": null,
  "created_at": "2019-10-24T02:03:55.235488Z",
  "display_name": "DADofDOM",
  "follow": {
    "created_at": "2019-10-24T02:05:06Z",
    "notifications": true
  },
  "id": "468818123",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/2a65816b-4b77-4b52-ad8f-80198159be3a-profile_image-300x300.png",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-06-03T14:45:22.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-19T18:11:43.963813Z",
  "last_seen": "2020-06-12T20:09:33.747Z",
  "status": "!setstatus"
}, {
  "_id": "5ee3dbcd56fd88771c5b9a66",
  "name": "thebigbro122",
  "bio": null,
  "created_at": "2018-12-08T14:31:38.819468Z",
  "display_name": "thebigbro122",
  "follow": {
    "created_at": "2020-06-12T20:30:06Z",
    "notifications": true
  },
  "id": "400917573",
  "logo": "https://static-cdn.jtvnw.net/user-default-pictures-uv/41780b5a-def8-11e9-94d9-784f43822e80-profile_image-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-12T19:47:01.901776Z",
  "last_seen": "2020-06-12T20:53:27.600Z",
  "country": {
    "code": "ph",
    "name": "Philippines"
  },
  "status": "I'm not sleeping"
}, {
  "_id": "5ede471c56fd88771c51b898",
  "name": "joneziebruv",
  "bio": null,
  "created_at": "2018-11-23T19:45:46.040304Z",
  "display_name": "joneziebruv",
  "follow": {
    "created_at": "2020-05-21T19:19:36Z",
    "notifications": true
  },
  "id": "277545718",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/378690bf-937c-4757-9a8b-f77bf5221b2f-profile_image-300x300.png",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-06-20T18:16:59.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-19T20:55:37.702116Z",
  "country": {
    "code": "za",
    "name": "South Africa"
  }
}, {
  "_id": "5ed851e156fd88771c46b47d",
  "name": "jordynthecoder",
  "bio": "MERN - Mongo, Express, React, Node",
  "created_at": "2019-09-27T23:52:48.503556Z",
  "display_name": "JordynTheCoder",
  "follow": {
    "created_at": "2020-06-04T01:50:48Z",
    "notifications": true
  },
  "id": "464448498",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/bb9ad44b-8a6a-428e-ab37-7a7ef786e014-profile_image-300x300.png",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-06-04T02:23:30.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-20T18:54:41.508795Z",
  "team": "react",
  "country": {
    "code": "ca",
    "name": "Canada"
  },
  "last_seen": "2020-06-12T21:12:20.559Z",
  "status": "😎"
}, {
  "_id": "5ee3de3b56fd88771c5b9e45",
  "name": "triplerperu",
  "bio": null,
  "created_at": "2019-05-06T04:00:48.438281Z",
  "display_name": "triplerperu",
  "follow": {
    "created_at": "2020-05-09T14:12:31Z",
    "notifications": true
  },
  "id": "434235623",
  "logo": "https://static-cdn.jtvnw.net/user-default-pictures-uv/998f01ae-def8-11e9-b95c-784f43822e80-profile_image-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-14T07:37:52.652976Z",
  "last_seen": "2020-06-12T20:11:39.510Z"
}, {
  "_id": "5ee3de4256fd88771c5b9e52",
  "name": "lemon_max077",
  "bio": null,
  "created_at": "2020-04-20T06:12:45.953796Z",
  "display_name": "lemon_max077",
  "follow": {
    "created_at": "2020-06-02T13:19:49Z",
    "notifications": true
  },
  "id": "517454376",
  "logo": "https://static-cdn.jtvnw.net/user-default-pictures-uv/ead5c8b2-a4c9-4724-b1dd-9f00b46cbd3d-profile_image-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-11T13:58:06.927488Z",
  "last_seen": "2020-06-12T20:45:55.394Z",
  "country": {
    "code": "in",
    "name": "India"
  }
}, {
  "_id": "5ec8c09c56fd88771c27b54d",
  "name": "pspanesar",
  "bio": null,
  "created_at": "2017-12-30T01:28:59.874723Z",
  "display_name": "PSPanesar",
  "id": "187942376",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/ea31ce31-ae8a-46de-9373-076812fb410d-profile_image-300x300.png",
  "type": "user",
  "updated_at": "2020-06-20T19:34:58.689623Z",
  "follow": {
    "created_at": "2019-11-16T19:13:20Z",
    "notifications": true
  },
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-05-30T12:42:28.000Z"
  },
  "last_seen": "2020-06-12T21:30:20.772Z"
}, {
  "_id": "5eda71dd56fd88771c4ae12d",
  "name": "gamingdiamond982",
  "bio": null,
  "created_at": "2017-05-21T11:13:02.812328Z",
  "display_name": "gamingdiamond982",
  "follow": {
    "created_at": "2020-06-05T16:25:14Z",
    "notifications": true
  },
  "id": "157505108",
  "logo": "https://static-cdn.jtvnw.net/user-default-pictures-uv/ce57700a-def9-11e9-842d-784f43822e80-profile_image-300x300.png",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-06-19T19:15:57.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-18T15:30:47.878665Z",
  "last_seen": "2020-06-12T19:47:54.336Z",
  "country": {
    "code": "ie",
    "name": "Ireland"
  },
  "status": "python is better than node ngl",
  "team": "linux"
}, {
  "_id": "5ecacee356fd88771c2b9901",
  "name": "thakrisp",
  "bio": null,
  "created_at": "2015-01-07T03:28:20.507866Z",
  "display_name": "ThaKrisp",
  "follow": {
    "created_at": "2020-02-14T02:45:33Z",
    "notifications": true
  },
  "id": "79134500",
  "logo": "https://static-cdn.jtvnw.net/user-default-pictures-uv/998f01ae-def8-11e9-b95c-784f43822e80-profile_image-300x300.png",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-06-22T14:28:55.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-22T22:28:32.058247Z",
  "last_seen": "2020-06-15T15:31:37.571Z"
}, {
  "_id": "5ecc308156fd88771c2e3baf",
  "name": "finitelygenerated",
  "bio": null,
  "created_at": "2020-05-22T21:28:06.388303Z",
  "display_name": "finitelygenerated",
  "follow": {
    "created_at": "2020-05-22T21:29:02Z",
    "notifications": true
  },
  "id": "534312782",
  "logo": "https://static-cdn.jtvnw.net/user-default-pictures-uv/998f01ae-def8-11e9-b95c-784f43822e80-profile_image-300x300.png",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-05-25T21:35:45.000Z"
  },
  "type": "user",
  "updated_at": "2020-05-26T18:54:34.408238Z",
  "last_seen": "2020-06-12T20:47:03.373Z"
}, {
  "_id": "5ee3ddba56fd88771c5b9d38",
  "name": "honorabletones",
  "bio": null,
  "created_at": "2017-02-16T22:03:27.832256Z",
  "display_name": "honorabletones",
  "follow": {
    "created_at": "2020-06-09T08:41:15Z",
    "notifications": true
  },
  "id": "147952931",
  "logo": "https://static-cdn.jtvnw.net/user-default-pictures-uv/de130ab0-def7-11e9-b668-784f43822e80-profile_image-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-13T16:53:17.726239Z"
}, {
  "_id": "5ecacece56fd88771c2b8f87",
  "name": "elenakout",
  "bio": null,
  "created_at": "2019-10-07T06:39:17.266097Z",
  "display_name": "elenakout",
  "follow": {
    "created_at": "2019-10-07T06:42:07Z",
    "notifications": true
  },
  "id": "465837135",
  "logo": "https://static-cdn.jtvnw.net/user-default-pictures-uv/ead5c8b2-a4c9-4724-b1dd-9f00b46cbd3d-profile_image-300x300.png",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-06-04T01:45:14.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-11T14:25:25.772279Z",
  "country": {
    "code": "gr",
    "name": "Greece"
  },
  "team": "vuejs",
  "status": "I was here"
}, {
  "_id": "5ecacedb56fd88771c2b9550",
  "name": "theletsfailer",
  "bio": null,
  "created_at": "2012-03-25T14:11:14.41053Z",
  "display_name": "TheLetsFailer",
  "follow": {
    "created_at": "2020-05-18T15:26:00Z",
    "notifications": true
  },
  "id": "29268433",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/theletsfailer-profile_image-29f708f15db9170c-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-04T18:55:47.395689Z",
  "country": {
    "code": "tr",
    "name": "Turkey"
  },
  "team": "discord",
  "last_seen": "2020-06-12T20:14:20.431Z"
}, {
  "_id": "5ed1770056fd88771c38df91",
  "name": "cahva",
  "bio": null,
  "created_at": "2019-11-20T22:08:49.761475Z",
  "display_name": "cahva",
  "follow": {
    "created_at": "2019-11-20T23:38:30Z",
    "notifications": true
  },
  "id": "473729315",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/2327ee71-9741-48b9-8837-292b94b06c08-profile_image-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-05-28T14:12:55.48509Z",
  "country": {
    "code": "fi",
    "name": "Finland"
  },
  "last_seen": "2020-06-12T20:17:21.569Z"
}, {
  "_id": "5ecaceda56fd88771c2b9497",
  "name": "sledgedog_",
  "bio": null,
  "created_at": "2017-01-03T09:14:14.247062Z",
  "display_name": "SledgeDog_",
  "follow": {
    "created_at": "2020-04-26T06:40:21Z",
    "notifications": true
  },
  "id": "143672149",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/d0f5a151-75e5-4e81-a12e-cc9a92ac8b46-profile_image-300x300.png",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-06-12T21:43:00.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-20T18:34:06.262569Z",
  "country": {
    "code": "ee",
    "name": "Estonia"
  },
  "team": "react",
  "last_seen": "2020-06-15T15:27:22.224Z"
}, {
  "_id": "5ee3dbfc56fd88771c5b9ab7",
  "name": "cmiley6",
  "bio": null,
  "created_at": "2020-06-09T16:32:07.512615Z",
  "display_name": "Cmiley6",
  "follow": {
    "created_at": "2020-06-12T21:38:38Z",
    "notifications": true
  },
  "id": "541571336",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/4ec00873-b638-42d5-8445-4f3816d70d0a-profile_image-300x300.png",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-06-15T14:32:56.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-24T14:37:02.814993Z",
  "status": "I love coding5Beans too",
  "last_seen": "2020-06-24T14:16:50.503Z",
  "country": {
    "code": "bz",
    "name": "Belize"
  },
  "team": "python"
}, {
  "_id": "5ecaced056fd88771c2b906a",
  "name": "johniedrama",
  "bio": null,
  "created_at": "2020-04-30T18:51:42.732848Z",
  "display_name": "johniedrama",
  "follow": {
    "created_at": "2020-05-02T18:54:56Z",
    "notifications": true
  },
  "id": "523276511",
  "logo": "https://static-cdn.jtvnw.net/user-default-pictures-uv/41780b5a-def8-11e9-94d9-784f43822e80-profile_image-300x300.png",
  "subscription": {
    "sub_plan": "2000",
    "created_at": "2020-06-15T14:34:40.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-22T14:23:56.725565Z",
  "last_seen": "2020-06-15T16:07:34.386Z"
}, {
  "_id": "5ee3e85d56fd88771c5bb155",
  "name": "kopernicuss",
  "bio": "ALL IN ONE...",
  "created_at": "2014-11-21T14:57:26.092892Z",
  "display_name": "kopernicuss",
  "follow": {
    "created_at": "2020-04-17T17:02:24Z",
    "notifications": true
  },
  "id": "75624618",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/d6272af1-ccd6-4afe-80d4-4ce6d1870915-profile_image-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-12T21:07:39.161481Z"
}, {
  "_id": "5ee3e35756fd88771c5ba856",
  "name": "harshitnothingspecial",
  "bio": null,
  "created_at": "2020-06-11T05:01:57.450298Z",
  "display_name": "harshitnothingspecial",
  "follow": {
    "created_at": "2020-06-11T05:04:42Z",
    "notifications": true
  },
  "id": "542246568",
  "logo": "https://static-cdn.jtvnw.net/user-default-pictures-uv/cdd517fe-def4-11e9-948e-784f43822e80-profile_image-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-15T16:02:09.68121Z",
  "last_seen": "2020-06-15T16:02:10.629Z"
}, {
  "_id": "5ecaced856fd88771c2b93f9",
  "name": "manoloito",
  "bio": null,
  "created_at": "2020-01-03T20:28:02.718147Z",
  "display_name": "ManoloIto",
  "follow": {
    "created_at": "2020-01-03T20:38:11Z",
    "notifications": true
  },
  "id": "482617196",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/acbe0d3f-14ea-4b93-9665-6700887fa4fe-profile_image-300x300.png",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-05-24T20:43:02.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-23T20:14:34.352248Z",
  "country": {
    "code": "ie",
    "name": "Ireland"
  },
  "team": "dev",
  "last_seen": "2020-06-15T16:28:10.718Z"
}, {
  "_id": "5ecacee456fd88771c2b9946",
  "name": "fvbommel",
  "bio": null,
  "created_at": "2016-09-02T23:56:32.094836Z",
  "display_name": "FvBommel",
  "follow": {
    "created_at": "2020-05-16T19:50:29Z",
    "notifications": true
  },
  "id": "133799826",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/a3592db9-2d99-42f3-90c7-6e8d33f66516-profile_image-300x300.png",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-06-15T14:29:06.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-10T17:11:07.728315Z",
  "team": "firefox",
  "country": {
    "code": "nl",
    "name": "Netherlands"
  },
  "status": null,
  "last_seen": "2020-06-15T15:27:12.113Z"
}, {
  "_id": "5ee3945956fd88771c5b160e",
  "name": "vuelancer",
  "bio": "Currently working as a Developer!",
  "created_at": "2020-04-26T17:20:55.270421Z",
  "display_name": "Vuelancer",
  "follow": {
    "created_at": "2020-04-26T17:23:09Z",
    "notifications": true
  },
  "id": "521019193",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/ddd62c5d-9bc8-451a-9265-20fa974f9590-profile_image-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-22T14:35:53.749136Z",
  "last_seen": "2020-06-12T21:06:06.780Z",
  "team": "vuejs",
  "status": "learning typescript",
  "country": {
    "code": "in",
    "name": "India"
  }
}, {
  "_id": "5ee3ab3756fd88771c5b5fe2",
  "name": "evilteliportist",
  "bio": null,
  "created_at": "2015-09-12T14:22:47.456607Z",
  "display_name": "Evilteliportist",
  "follow": {
    "created_at": "2020-06-12T16:10:17Z",
    "notifications": true
  },
  "id": "102020737",
  "logo": "https://static-cdn.jtvnw.net/user-default-pictures-uv/13e5fa74-defa-11e9-809c-784f43822e80-profile_image-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-21T06:06:11.185232Z",
  "last_seen": "2020-06-12T21:13:26.907Z"
}, {
  "_id": "5ee3ec0d56fd88771c5bb7e0",
  "name": "ueberbrot125",
  "bio": null,
  "created_at": "2014-03-04T13:17:55.839285Z",
  "display_name": "ueberbrot125",
  "follow": {
    "created_at": "2020-06-09T20:44:19Z",
    "notifications": true
  },
  "id": "58198548",
  "logo": "https://static-cdn.jtvnw.net/user-default-pictures-uv/75305d54-c7cc-40d1-bb9c-91fbe85943c7-profile_image-300x300.png",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-06-12T21:04:34.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-09T20:59:42.423022Z",
  "last_seen": "2020-06-12T21:15:41.161Z"
}, {
  "_id": "5eda65e256fd88771c4ab366",
  "name": "jammuth",
  "bio": "streaming Swtor and FFXIV:ARR",
  "created_at": "2012-12-07T02:43:17.215179Z",
  "display_name": "Jammuth",
  "follow": {
    "created_at": "2020-05-30T20:07:17Z",
    "notifications": true
  },
  "id": "38271151",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/jammuth-profile_image-a3986edad20f0323-300x300.png",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-06-12T21:17:56.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-04T18:06:55.747438Z"
}, {
  "_id": "5ecacedc56fd88771c2b9616",
  "name": "tariix",
  "bio": null,
  "created_at": "2015-05-08T16:26:10.847017Z",
  "display_name": "Tariix",
  "follow": {
    "created_at": "2020-05-02T20:04:59Z",
    "notifications": true
  },
  "id": "90555942",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/034affcb-d17c-478d-aae3-28c5adad09e3-profile_image-300x300.png",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-06-19T19:15:58.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-23T16:07:03.881001Z",
  "last_seen": "2020-06-15T15:21:19.945Z"
}, {
  "_id": "5ee789cc56fd88771c619267",
  "name": "wisperme",
  "bio": null,
  "created_at": "2019-04-27T11:04:19.046631Z",
  "display_name": "wisperme",
  "follow": false,
  "id": "432572756",
  "logo": "https://static-cdn.jtvnw.net/user-default-pictures-uv/75305d54-c7cc-40d1-bb9c-91fbe85943c7-profile_image-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-24T04:35:03.415526Z",
  "last_seen": "2020-06-15T14:46:51.625Z"
}, {
  "_id": "5ecaced256fd88771c2b9162",
  "name": "andyfromlithuania",
  "bio": null,
  "created_at": "2011-08-20T11:26:20.421664Z",
  "display_name": "AndyFromLithuania",
  "follow": {
    "created_at": "2020-05-09T17:45:55Z",
    "notifications": true
  },
  "id": "24224749",
  "logo": "https://static-cdn.jtvnw.net/user-default-pictures-uv/998f01ae-def8-11e9-b95c-784f43822e80-profile_image-300x300.png",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-06-04T03:28:32.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-21T10:25:58.322978Z"
}, {
  "_id": "5eda722356fd88771c4ae22e",
  "name": "mooooseontheloose",
  "bio": null,
  "created_at": "2011-12-13T21:41:39.307512Z",
  "display_name": "MooooseOnTheLoose",
  "follow": {
    "created_at": "2020-06-05T16:25:43Z",
    "notifications": false
  },
  "id": "26770475",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/389d6ee4-66c7-4f5c-8247-086b831a8ab0-profile_image-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-22T23:14:41.931452Z",
  "country": {
    "code": "ca",
    "name": "Canada"
  },
  "last_seen": "2020-06-15T15:03:00.789Z"
}, {
  "_id": "5ee3f0db56fd88771c5bc86e",
  "name": "cureetos",
  "bio": "Hello! Call me Beni if you don't like the name Cureetos",
  "created_at": "2018-04-17T01:28:00.227827Z",
  "display_name": "Cureetos",
  "follow": {
    "created_at": "2020-06-12T21:17:31Z",
    "notifications": true
  },
  "id": "214866334",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/d772659a-c769-4b0f-a86f-16381e7ea68d-profile_image-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-21T04:52:42.367893Z",
  "country": {
    "code": "ca",
    "name": "Canada"
  },
  "team": "windows",
  "status": "Vibin'",
  "last_seen": "2020-06-15T15:09:37.852Z"
}, {
  "_id": "5ee78c1056fd88771c61979d",
  "name": "stanleyink",
  "bio": null,
  "created_at": "2016-05-05T18:02:18.026133Z",
  "display_name": "StanleyInk",
  "follow": {
    "created_at": "2020-06-12T14:45:28Z",
    "notifications": true
  },
  "id": "123531316",
  "logo": "https://static-cdn.jtvnw.net/user-default-pictures-uv/ebe4cd89-b4f4-4cd9-adac-2f30151b4209-profile_image-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-18T09:10:15.563663Z",
  "last_seen": "2020-06-24T14:30:31.808Z"
}, {
  "_id": "5ee786b256fd88771c618a8a",
  "name": "yyc1tizen",
  "bio": null,
  "created_at": "2020-06-09T13:01:32.358591Z",
  "display_name": "yyc1tizen",
  "follow": {
    "created_at": "2020-06-09T13:03:51Z",
    "notifications": true
  },
  "id": "541505923",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/d81037d2-c62d-4920-90bc-5fed55996f08-profile_image-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-09T13:17:18.290047Z",
  "country": {
    "code": "sk",
    "name": "Slovakia"
  },
  "team": "firefox",
  "last_seen": "2020-06-15T16:46:17.721Z"
}, {
  "_id": "5ec8c09b56fd88771c27b53a",
  "name": "harrisonpickering",
  "bio": "I'm a driven and motivated full stack software engineer from the UK. I like creating nice and intuitive user experiences.",
  "created_at": "2014-04-26T22:24:09.983935Z",
  "display_name": "Harrisonpickering",
  "id": "61680293",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/95520fd9-eec6-40a2-aa64-2fa3c124dbaa-profile_image-300x300.png",
  "type": "user",
  "updated_at": "2020-06-15T02:24:40.144107Z",
  "follow": {
    "created_at": "2020-04-02T04:08:01Z",
    "notifications": true
  },
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-04-28T14:16:06.000Z"
  },
  "last_seen": "2020-06-15T16:12:31.359Z"
}, {
  "_id": "5ece7d6656fd88771c32d520",
  "name": "seba_nuo",
  "bio": null,
  "created_at": "2014-02-27T21:12:27.346638Z",
  "display_name": "seba_nuo",
  "follow": {
    "created_at": "2020-05-01T18:56:21Z",
    "notifications": false
  },
  "id": "57855142",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/2a07fa16-b47f-4b9c-8194-4faee665e784-profile_image-300x300.png",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-06-15T15:49:47.000Z"
  },
  "type": "user",
  "updated_at": "2020-05-29T13:51:47.090902Z",
  "last_seen": "2020-06-15T15:40:57.908Z"
}, {
  "_id": "5ee3853f56fd88771c5aeae7",
  "name": "mrdevking",
  "bio": null,
  "created_at": "2020-06-12T13:06:08.423841Z",
  "display_name": "mrdevking",
  "follow": {
    "created_at": "2020-06-12T14:36:53Z",
    "notifications": true
  },
  "id": "542742604",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/47c421d5-64e5-4a1f-afbf-0896290866d3-profile_image-300x300.png",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-06-12T14:45:51.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-16T05:53:22.850748Z",
  "team": "vuejs",
  "country": {
    "code": "de",
    "name": "Germany"
  }
}, {
  "_id": "5ecacee556fd88771c2b9996",
  "name": "giventomeow",
  "bio": null,
  "created_at": "2019-11-06T20:42:42.345563Z",
  "display_name": "giventomeow",
  "follow": {
    "created_at": "2019-11-06T20:45:32Z",
    "notifications": true
  },
  "id": "471210869",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/04d2fa3f-0ac0-40b6-8d67-871b307e0364-profile_image-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-23T10:07:17.907144Z",
  "last_seen": "2020-06-15T15:21:07.795Z",
  "country": {
    "code": "au",
    "name": "Australia"
  }
}, {
  "_id": "5ee792fc56fd88771c61a668",
  "name": "theseamonkeyye",
  "bio": null,
  "created_at": "2018-08-10T20:19:59.916601Z",
  "display_name": "theseamonkeyye",
  "follow": {
    "created_at": "2020-06-15T15:14:17Z",
    "notifications": false
  },
  "id": "246974260",
  "logo": "https://static-cdn.jtvnw.net/user-default-pictures-uv/13e5fa74-defa-11e9-809c-784f43822e80-profile_image-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-11T22:43:08.646802Z",
  "last_seen": "2020-06-15T15:25:48.529Z"
}, {
  "_id": "5ee78de656fd88771c619b05",
  "name": "lilrex2015",
  "bio": "Host of The Daily Chat, the ONLY & BEST TRUE TALK SHOW HOST ON TWITCH.TV AND MIXER.COM/LILREX2015",
  "created_at": "2014-02-19T19:44:45.084954Z",
  "display_name": "Lilrex2015",
  "follow": {
    "created_at": "2020-06-15T15:00:21Z",
    "notifications": false
  },
  "id": "57204065",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/lilrex2015-profile_image-5ee09c6d4cd5a201-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-24T13:14:35.681434Z",
  "last_seen": "2020-06-15T15:31:20.099Z"
}, {
  "_id": "5ecacecb56fd88771c2b8de6",
  "name": "cryafonic",
  "bio": null,
  "created_at": "2015-04-04T01:35:18.603811Z",
  "display_name": "CRYAFONIC",
  "follow": {
    "created_at": "2020-05-19T05:30:28Z",
    "notifications": true
  },
  "id": "87430634",
  "logo": "https://static-cdn.jtvnw.net/user-default-pictures-uv/75305d54-c7cc-40d1-bb9c-91fbe85943c7-profile_image-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-20T18:25:49.424869Z",
  "last_seen": "2020-06-15T15:31:43.552Z"
}, {
  "_id": "5ecaced856fd88771c2b938a",
  "name": "succatash",
  "bio": "300lb beast from the east, i got fucked up teeth and a big ass belly, many would call me smelly i must be your mom!",
  "created_at": "2015-01-28T17:34:32.273003Z",
  "display_name": "Succatash",
  "follow": {
    "created_at": "2020-05-09T17:44:18Z",
    "notifications": true
  },
  "id": "81146759",
  "logo": "https://static-cdn.jtvnw.net/user-default-pictures-uv/75305d54-c7cc-40d1-bb9c-91fbe85943c7-profile_image-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-23T23:38:29.406382Z",
  "last_seen": "2020-06-15T15:30:32.261Z"
}, {
  "_id": "5ecacec956fd88771c2b8d36",
  "name": "slimhs1",
  "bio": null,
  "created_at": "2018-08-31T16:28:03.610549Z",
  "display_name": "slimhs1",
  "follow": {
    "created_at": "2020-05-02T20:11:31Z",
    "notifications": true
  },
  "id": "253714828",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/1d2462a5-336e-46c6-9ca5-7ab48438b40a-profile_image-300x300.png",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-06-24T14:03:05.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-24T14:00:37.439162Z",
  "last_seen": "2020-06-24T14:02:42.360Z"
}, {
  "_id": "5ece818156fd88771c32e00d",
  "name": "youtory",
  "bio": null,
  "created_at": "2016-01-20T18:08:04.208339Z",
  "display_name": "youtory",
  "follow": {
    "created_at": "2020-01-30T06:47:38Z",
    "notifications": false
  },
  "id": "113366328",
  "logo": "https://static-cdn.jtvnw.net/user-default-pictures-uv/ead5c8b2-a4c9-4724-b1dd-9f00b46cbd3d-profile_image-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-22T15:13:13.114418Z",
  "team": "vuejs",
  "country": {
    "code": "de",
    "name": "Germany"
  },
  "last_seen": "2020-06-24T14:17:03.266Z"
}, {
  "_id": "5ee3f14b56fd88771c5bd24c",
  "name": "saver_the_mcgamer",
  "bio": "I like playing Minecraft, (WR) War Robots, drawing, and watching some anime.",
  "created_at": "2016-05-29T16:20:13.95297Z",
  "display_name": "saver_the_mcgamer",
  "follow": {
    "created_at": "2020-06-12T21:31:26Z",
    "notifications": true
  },
  "id": "125422395",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/0b596877-d639-4ebf-89c1-791ade1f2572-profile_image-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-17T00:10:12.671668Z",
  "last_seen": "2020-06-15T15:36:54.059Z"
}, {
  "_id": "5ec8c09b56fd88771c27b52d",
  "name": "eazytsa",
  "bio": null,
  "created_at": "2017-06-29T20:29:09.219065Z",
  "display_name": "eazytsa",
  "id": "162039341",
  "logo": "https://static-cdn.jtvnw.net/user-default-pictures-uv/de130ab0-def7-11e9-b668-784f43822e80-profile_image-300x300.png",
  "type": "user",
  "updated_at": "2020-06-22T16:26:23.07423Z",
  "follow": {
    "created_at": "2020-04-02T16:36:07Z",
    "notifications": true
  },
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-06-08T14:34:07.000Z"
  },
  "country": {
    "code": "za",
    "name": "South Africa"
  },
  "last_seen": "2020-06-15T15:55:51.102Z"
}, {
  "_id": "5ee7952556fd88771c61acd8",
  "name": "sphonge_",
  "bio": null,
  "created_at": "2020-05-09T11:35:11.633824Z",
  "display_name": "sphonge_",
  "follow": {
    "created_at": "2020-06-05T15:11:03Z",
    "notifications": true
  },
  "id": "528045174",
  "logo": "https://static-cdn.jtvnw.net/user-default-pictures-uv/ce57700a-def9-11e9-842d-784f43822e80-profile_image-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-18T21:26:35.984623Z",
  "last_seen": "2020-06-15T15:40:48.887Z"
}, {
  "_id": "5ee7925756fd88771c61a4dc",
  "name": "cattenjack",
  "bio": null,
  "created_at": "2019-08-27T01:01:08.50682Z",
  "display_name": "cattenjack",
  "follow": {
    "created_at": "2020-06-11T15:35:09Z",
    "notifications": true
  },
  "id": "457364400",
  "logo": "https://static-cdn.jtvnw.net/user-default-pictures-uv/ebe4cd89-b4f4-4cd9-adac-2f30151b4209-profile_image-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-05-07T08:14:31.199475Z",
  "last_seen": "2020-06-15T16:06:33.577Z"
}, {
  "_id": "5ecacedc56fd88771c2b95a6",
  "name": "splaudpanther",
  "bio": "I'm a lurker, but if you are entertaining I might just.....!",
  "created_at": "2017-07-28T00:18:19.970745Z",
  "display_name": "SplaudPanther",
  "follow": {
    "created_at": "2019-10-03T02:23:47Z",
    "notifications": true
  },
  "id": "167042637",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/41f33d7c-7f51-44d9-bc1b-4473efc50a44-profile_image-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-24T00:06:30.168763Z",
  "last_seen": "2020-06-15T15:45:36.296Z"
}, {
  "_id": "5ee6eeac56fd88771c60c979",
  "name": "eleiber",
  "bio": null,
  "created_at": "2017-06-05T02:40:57.358356Z",
  "display_name": "Eleiber",
  "follow": {
    "created_at": "2020-06-15T15:46:11Z",
    "notifications": true
  },
  "id": "159126188",
  "logo": "https://static-cdn.jtvnw.net/user-default-pictures-uv/13e5fa74-defa-11e9-809c-784f43822e80-profile_image-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-23T23:07:35.352854Z",
  "last_seen": "2020-06-15T16:03:06.112Z",
  "country": {
    "code": "ve",
    "name": "Venezuela (Bolivarian Republic of)"
  }
}, {
  "_id": "5ee3f0fa56fd88771c5bcb89",
  "name": "jugoelefante",
  "bio": null,
  "created_at": "2013-03-01T01:47:53.589404Z",
  "display_name": "jugoelefante",
  "follow": {
    "created_at": "2019-12-02T01:20:58Z",
    "notifications": true
  },
  "id": "40844808",
  "logo": "https://static-cdn.jtvnw.net/user-default-pictures-uv/41780b5a-def8-11e9-94d9-784f43822e80-profile_image-300x300.png",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-06-12T21:19:52.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-23T20:02:19.015299Z"
}, {
  "_id": "5ee79c8b56fd88771c61cc11",
  "name": "aplato11",
  "bio": null,
  "created_at": "2017-08-17T02:01:41.149958Z",
  "display_name": "Aplato11",
  "follow": {
    "created_at": "2020-05-25T21:43:44Z",
    "notifications": true
  },
  "id": "170200109",
  "logo": "https://static-cdn.jtvnw.net/user-default-pictures-uv/215b7342-def9-11e9-9a66-784f43822e80-profile_image-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-08T05:08:12.118047Z"
}, {
  "_id": "5ee6e6d056fd88771c60bb4f",
  "name": "varun266",
  "bio": null,
  "created_at": "2017-11-16T05:15:06.513356Z",
  "display_name": "varun266",
  "follow": {
    "created_at": "2020-06-14T17:19:33Z",
    "notifications": true
  },
  "id": "181978716",
  "logo": "https://static-cdn.jtvnw.net/user-default-pictures-uv/ead5c8b2-a4c9-4724-b1dd-9f00b46cbd3d-profile_image-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-22T14:23:11.62909Z",
  "team": "react",
  "country": {
    "code": "np",
    "name": "Nepal"
  },
  "last_seen": "2020-06-22T14:25:28.291Z"
}, {
  "_id": "5ecaceca56fd88771c2b8d77",
  "name": "buldor_",
  "bio": null,
  "created_at": "2016-09-28T13:33:09.240184Z",
  "display_name": "buldor_",
  "follow": {
    "created_at": "2020-04-28T16:03:50Z",
    "notifications": true
  },
  "id": "135557016",
  "logo": "https://static-cdn.jtvnw.net/user-default-pictures-uv/ead5c8b2-a4c9-4724-b1dd-9f00b46cbd3d-profile_image-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-22T13:24:46.642582Z",
  "country": {
    "code": "fr",
    "name": "France"
  },
  "team": "redhat",
  "last_seen": "2020-06-15T16:17:43.371Z"
}, {
  "_id": "5ec95c2a56fd88771c28c7d5",
  "name": "pixsaa",
  "bio": "No bio.",
  "created_at": "2015-09-10T17:46:50.062624Z",
  "display_name": "Pixsaa",
  "id": "101887589",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/fe99c8c1-7c85-4ffc-894e-5e1792f27da1-profile_image-300x300.png",
  "type": "user",
  "updated_at": "2020-06-20T20:12:08.902598Z",
  "follow": {
    "created_at": "2020-04-23T02:20:52Z",
    "notifications": true
  },
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-06-19T18:20:57.000Z"
  },
  "team": "vuejs",
  "country": {
    "code": "ge",
    "name": "Georgia"
  },
  "last_seen": "2020-06-19T18:15:08.362Z"
}, {
  "_id": "5eecff2256fd88771c6adf49",
  "name": "lud0dul",
  "bio": null,
  "created_at": "2019-11-06T23:37:53.178012Z",
  "display_name": "lud0dul",
  "follow": {
    "created_at": "2019-12-17T17:31:21Z",
    "notifications": true
  },
  "id": "471233642",
  "logo": "https://static-cdn.jtvnw.net/user-default-pictures-uv/de130ab0-def7-11e9-b668-784f43822e80-profile_image-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-05-13T17:03:15.776074Z",
  "last_seen": "2020-06-20T18:44:26.395Z"
}, {
  "_id": "5ef35b0956fd88771c75a4dd",
  "name": "lucemans",
  "bio": null,
  "created_at": "2019-09-18T20:15:15.603744Z",
  "display_name": "Lucemans",
  "follow": {
    "created_at": "2020-06-23T10:13:24Z",
    "notifications": true
  },
  "id": "463070562",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/4a99a01e-1464-4fa2-9e8d-55c58427cf8a-profile_image-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-24T13:53:47.036103Z",
  "last_seen": "2020-06-24T14:59:23.067Z",
  "country": {
    "code": "be",
    "name": "Belgium"
  },
  "team": "ubuntu"
}, {
  "_id": "5ef12c6256fd88771c722e9b",
  "name": "smackrebel",
  "bio": null,
  "created_at": "2015-07-02T16:15:28.876014Z",
  "display_name": "SmackRebel",
  "follow": {
    "created_at": "2020-06-17T09:08:18Z",
    "notifications": true
  },
  "id": "95064597",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/1e04cec4-92be-4d71-b6a4-b65d00404bb5-profile_image-300x300.png",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-06-24T14:20:48.000Z"
  },
  "type": "user",
  "updated_at": "2020-05-11T16:02:28.783587Z",
  "last_seen": "2020-06-24T14:24:43.575Z",
  "country": {
    "code": "nl",
    "name": "Netherlands"
  },
  "team": "angular"
}, {
  "_id": "5ef359fb56fd88771c75a1ec",
  "name": "masteragentmiyazaki",
  "bio": "I em de Master",
  "created_at": "2016-04-05T15:15:51.169509Z",
  "display_name": "MasterAgentMiyazaki",
  "follow": {
    "created_at": "2019-10-15T03:45:40Z",
    "notifications": true
  },
  "id": "121008705",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/7330c119-0311-4cc1-b281-ac72ab102da0-profile_image-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-18T16:42:06.330682Z",
  "country": {
    "code": "se",
    "name": "Sweden"
  },
  "status": "Creating unittest's for work",
  "last_seen": "2020-06-24T14:57:39.006Z",
  "team": "git-alt"
}, {
  "_id": "5ef0c9d456fd88771c715066",
  "name": "matrix_17",
  "bio": null,
  "created_at": "2018-11-02T14:35:45.472179Z",
  "display_name": "matrix_17",
  "follow": {
    "created_at": "2020-06-21T22:13:18Z",
    "notifications": true
  },
  "id": "271684518",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/cfd4c97e-24f1-410f-8f04-7e94cbb7b134-profile_image-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-21T22:12:12.236755Z",
  "last_seen": "2020-06-24T14:17:03.562Z"
}, {
  "_id": "5ef35eb556fd88771c75b07a",
  "name": "zaphida",
  "bio": null,
  "created_at": "2015-01-22T22:18:52.482829Z",
  "display_name": "Zaphida",
  "follow": false,
  "id": "80588489",
  "logo": "https://static-cdn.jtvnw.net/user-default-pictures-uv/ce57700a-def9-11e9-842d-784f43822e80-profile_image-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-24T10:02:51.676781Z",
  "last_seen": "2020-06-24T14:11:01.848Z",
  "country": {
    "code": "rs",
    "name": "Serbia"
  }
}, {
  "_id": "5ed12a7756fd88771c381e32",
  "name": "spioune",
  "bio": null,
  "created_at": "2016-12-31T22:33:05.131183Z",
  "display_name": "Spioune",
  "follow": {
    "created_at": "2020-04-18T22:32:50Z",
    "notifications": true
  },
  "id": "143440364",
  "logo": "https://static-cdn.jtvnw.net/user-default-pictures-uv/294c98b5-e34d-42cd-a8f0-140b72fba9b0-profile_image-300x300.png",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-06-24T13:58:27.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-20T20:09:46.756159Z",
  "country": {
    "code": "fr",
    "name": "France"
  },
  "team": "vuejs"
}, {
  "_id": "5ef0beda56fd88771c712e73",
  "name": "nuin__",
  "bio": null,
  "created_at": "2016-05-27T07:12:36.811001Z",
  "display_name": "Nuin__",
  "follow": {
    "created_at": "2020-06-05T16:26:31Z",
    "notifications": true
  },
  "id": "125217244",
  "logo": "https://static-cdn.jtvnw.net/user-default-pictures-uv/de130ab0-def7-11e9-b668-784f43822e80-profile_image-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-23T15:31:37.402109Z",
  "country": {
    "code": "sa",
    "name": "Saudi Arabia"
  },
  "team": "php",
  "last_seen": "2020-06-24T14:22:14.920Z"
}, {
  "_id": "5ee3875e56fd88771c5af0e4",
  "name": "melonai",
  "bio": "A normal human being on a completely normal human website. Creates stuff.",
  "created_at": "2016-02-08T18:06:37.011619Z",
  "display_name": "melonai",
  "follow": {
    "created_at": "2020-06-10T13:59:38Z",
    "notifications": true
  },
  "id": "115246821",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/5b339adb-ad04-4152-b6a9-5115b944e7ab-profile_image-300x300.png",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-06-12T13:39:04.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-11T19:26:13.92937Z",
  "team": "react",
  "country": {
    "code": "ru",
    "name": "Russian Federation"
  },
  "status": "error[E0382]: use of moved value: 'praise_the_borrow_checker'"
}, {
  "_id": "5eea194956fd88771c65aba6",
  "name": "callumchaney",
  "bio": null,
  "created_at": "2015-05-30T17:03:34.684721Z",
  "display_name": "callumchaney",
  "follow": {
    "created_at": "2020-06-13T13:41:15Z",
    "notifications": true
  },
  "id": "92276385",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/c34755cb-d932-4bcc-94ba-102442b47c16-profile_image-300x300.png",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-06-19T20:59:02.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-20T20:37:50.118647Z",
  "country": {
    "code": "gb",
    "name": "United Kingdom of Great Britain and Northern Ireland"
  },
  "team": "vuejs",
  "last_seen": "2020-06-24T14:17:10.433Z"
}, {
  "_id": "5ee3a96a56fd88771c5b5c77",
  "name": "mistersyntax",
  "bio": null,
  "created_at": "2020-05-05T03:54:59.884146Z",
  "display_name": "mistersyntax",
  "follow": {
    "created_at": "2020-06-11T04:46:33Z",
    "notifications": true
  },
  "id": "525734804",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/46ed2edd-673b-4e48-9313-ac636b5aac5d-profile_image-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-23T20:58:46.634597Z",
  "last_seen": "2020-06-24T14:58:03.537Z"
}, {
  "_id": "5ecacedf56fd88771c2b975d",
  "name": "u_sarathkumar",
  "bio": null,
  "created_at": "2020-05-05T17:12:58.644435Z",
  "display_name": "u_sarathkumar",
  "follow": {
    "created_at": "2020-06-01T15:36:47Z",
    "notifications": true
  },
  "id": "525988284",
  "logo": "https://static-cdn.jtvnw.net/user-default-pictures-uv/998f01ae-def8-11e9-b95c-784f43822e80-profile_image-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-24T14:02:24.46977Z",
  "last_seen": "2020-06-24T14:21:17.704Z"
}, {
  "_id": "5ecacecd56fd88771c2b8f07",
  "name": "informathsandmusic",
  "bio": null,
  "created_at": "2020-04-25T14:17:01.958365Z",
  "display_name": "informathsandmusic",
  "follow": {
    "created_at": "2020-06-24T14:38:03Z",
    "notifications": true
  },
  "id": "520272765",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/f1742b71-be57-46a5-92ff-dcfee684e8b5-profile_image-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-24T14:39:45.786387Z",
  "team": "vuejs",
  "last_seen": "2020-06-24T14:22:49.120Z",
  "status": "Discord to twitch bridge made with <3 by informathemusic. https://discordapp.com/oauth2/authorize?client_id=584448126253793281&scope=bot&permissions=3072 ; DM me for instructions (Too lasy for now to add a help command)"
}, {
  "_id": "5ed87d4f56fd88771c470cea",
  "name": "zer0xeon",
  "bio": "Zer0; Programmer, Gamer, Video Editor.  I love to game and talk to people so don't be afraid to talk to me.",
  "created_at": "2016-06-30T16:55:35.27139Z",
  "display_name": "Zer0Xeon",
  "follow": {
    "created_at": "2020-06-04T04:49:54Z",
    "notifications": true
  },
  "id": "128161575",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/5668178f805dde3f-profile_image-300x300.png",
  "subscription": false,
  "type": "user",
  "updated_at": "2020-06-24T03:46:37.835706Z",
  "country": {
    "code": "gb",
    "name": "United Kingdom of Great Britain and Northern Ireland"
  },
  "team": "node-js",
  "status": "learning everyday one language at a time",
  "last_seen": "2020-06-24T14:22:48.800Z"
}, {
  "_id": "5ed11f6656fd88771c37ff5f",
  "name": "purelol6",
  "bio": "Hey, I'm Pure.",
  "created_at": "2011-01-09T04:39:28.595128Z",
  "display_name": "Purelol6",
  "follow": {
    "created_at": "2020-05-28T20:26:47Z",
    "notifications": false
  },
  "id": "19368933",
  "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/purelol6-profile_image-39962433f6c5f39c-300x300.png",
  "subscription": {
    "sub_plan": "1000",
    "created_at": "2020-06-15T15:45:15.000Z"
  },
  "type": "user",
  "updated_at": "2020-06-22T00:59:43.345844Z",
  "country": {
    "code": "us",
    "name": "United States of America"
  },
  "team": "reddit",
  "last_seen": "2020-06-24T14:36:12.384Z"
}];

const nameById = users.reduce((byId, user) => {
  byId[user.id] = user.name;
  return byId;
}, {});

console.log(nameById);
