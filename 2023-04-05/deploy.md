Do you think I should use a pre-made hosting provider or should I go to something like AWS and build nginx/apache2 website myself.

* Trying to deploy it as quickly as possible?
  * Serverless / Edge...
    * Your backend must in a specific way to deploy here...
    * Options:
      * Vercel Serverless / Edge
      * Netlify Functions
      * Firebase Functions
      * Cloudflare Workers
      * Supabase Functions
      * Any IaaS
    * Your frontend will be deployed to a CDN??
      * Vercel CDN
      * Netlify CDN
    * And more... but I ran out of time...
* Trying to learn new stuff?
* Trying to improve your resume?
* Do you have the time to maintain the deployment?
  * VPS (Virtual Private Server) setup
    * Where to get a VPS
      * AWS - EC2
      * Google - Cloud Compute
      * Azure - 
      * Digital Ocean - Droplets
      * Linode - Linodes
      * Vultr - Vultr
      * OVH - VPS
      * Hetzner - Cloud
      * Any other host...
    * A lot to setup yourself
      * Setup Linux
      * Setup Firewall
      * Setup Nginx or Apache
      * Reverse Proxy
      * pm2 or some other process manager
      * SSL Setup
        * certbot
      * Regularly update packages and dependencies
        * Manage the server
      * And probably more that I'm forgetting...
* And more... but I ran out of time...