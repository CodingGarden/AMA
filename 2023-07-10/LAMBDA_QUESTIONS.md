* Serverless
  * Does not mean there is no server...
  * It means we don't have to configure the server ourself...
  * We write a single "request handler"
    * This "request handler" is scaled on demand, automatically as new requests come in
* Ways to do serverless:
  * Infrastructure as a service
    * AWS Lambda
      * API Gateway
      * Cognito
      * Serverless Framework
        * https://www.serverless.com/
    * Google Serverless
    * Azure Functions
  * Platform As A Service
    * Vercel
    * Deno Deploy
    * Firebase Cloud Functions
    * Netlify Functions
    * Supabase Functions
    * Cloudflare Workers
    * Red Hat OpenShift Serverless
* Edge
  * Serverless functions running as close to a user as possible
  * AKA a CDN for serverless functions
    * CDN is for static files...