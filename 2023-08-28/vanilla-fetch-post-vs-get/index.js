
// @muntahisafwan
// Can you explain API fetching and stuff using only pure javascript http methods like GET, POST. I am a beginner learning API and having hard time about understanding what to use when

// API -> Application Programming Interface
  // -> in this context we use API to mean Web API or JSON API
    // -> An API accessible over the web... HTTP

// GET
  // -> Typically used to Retrieve / Request information
  // -> Any data sent is in the URL, headers or query params
  // -> No body in the request!
    // -> SOME APIs let you "send data" via query params or headers...
      // -> This is not query params intended purpose
        // -> Query params are typically used to filter requested data
      // -> This is not recommended and typically bad practice

// POST
  // -> Typically used to Send information to a server
  // -> Has a request Body
  // -> Typically results in "creation" on the server

// PUT / PATCH
  // -> Typically results in some "change" or "mutation" on the server

// These definitions are mostly in line with RESTful APIs... they are just guidelines / best practices... if we follow these, our APIs will be somewhat predictable
  // https://en.wikipedia.org/wiki/Representational_state_transfer