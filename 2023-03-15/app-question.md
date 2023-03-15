> @CodingGarden For my graduation project I am making a fullstack webapplication. Using FastAPI for the backend and Nextjs for the froentend. Rightnow I am storing data in the localhost, using the library EncryptStorage. Is this a smart way to handle some data and store it just to send it to my api later?

> So the project is a very small moving webapp. The user will have to fill his old address and new address. how much m3 is being moved and if they want insurance on the stuff thats being moved. So I want to store the data that the user has filled in: Old house New house m3 Personal info Insurance I am sending it encrypted to my backend, just to decrypt it there. The point is, my projectleader does explicitly NOT want to use Cookies. So I thought about using LocalStorage.

> So I was wondering, is it a good way of storing the data and making it jsut a little secure. I mean security is nog a big this but I mean. Kinda wanna know if you guys have any better ideas?

* If your site is running behind TLS (https)
  * All communication is encrypted
  * JSON request bodies
  * Form encoded requests
* Consider your Authentication / Authorization strategy
  * Lead says - no cookies! - What they mean is, no user sign up or login...
  * Consider passwordless / magic link authentication
    * https://auth0.com/docs/authenticate/passwordless/authentication-methods/email-magic-link
    * https://supabase.com/docs/guides/auth/auth-magic-link
    * https://firebase.google.com/docs/auth/web/email-link-auth
  * Implement an anonymous user login system
    * Random User Id should not be guessable
      * Long, not guessable, unique
      * GUID
      * CUID
      * UUID
      * nanoid
    * With cookies:
      * Initial request / initial page load
        * Frontend:
          * POST /user
        * Backend:
          * If cookie in request
            * Return anon user id / object
            * Attach past quotes / summaries
          * If cookie not in request
            * Insert row into anon user table
            * Set cookie with anon user id
      * User fills out form and submits
        * Frontend:
          * POST /quote-request
            * Anonymous user cookie is included in the request
        * Backend:
          * Insert quote data, associate with random user id
          * Respond with quote summary
        * Frontend:
          * Display quote summary
    * Without cookies
      * Initial request / initial page load
        * Frontend:
          * If localStorage has userId
            * POST /user
              * Body: include userId
            * Backend:
              * Respond with all user info you have, summaries
          * If not:
            * POST /create-anon-user
            * Backend:
              * Insert row into anon user table
              * Respond with anon user id
            * Frontend:
              * Store anon user id in localstorage
      * User fills out form and submits
        * Frontend:
          * POST /quote-request
            * Include userId in request
        * Backend:
          * Insert quote data, associate with random user id
          * Respond with quote summary
        * Frontend:
          * Display quote summary
* Does not want redux / complex boilerplate
  * https://easy-peasy.dev/
  * https://github.com/pmndrs/zustand
