# Sharing Types Between Backend and Frontend

* You have a backend API (written in Express or something like it...)
  * Typically responds and accepts JSON data
* You have a frontend (written in React, Vue, Svelte)
  * Makes HTTP requests to the backend

* tRPC
  * Remote Procedure Call (RPC)
  * TypeScript Remote Procedure Call


* Solutions
  * Monolith
    * Single Codebase with everything...
    * Use a hybrid framework where the lines are blurred between frontend and backend...
      * NextJS / Remix
        * React
      * Nuxt
        * Vue
      * SvelteKit
        * Svelte
      * Angular Universal
        * Angular
  * Monorepo
    * Multiple packages / repos under a single repo
    * https://turbo.build/
    * https://nx.dev/
      * Took over lerna...
    * https://lerna.js.org/
