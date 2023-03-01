> naes0_0: Can you explain the differences between prisma and zod and how would you use them potentially together?

* Zod
  * Schema Validation Library
* Prisma
  * Object Relational Mapper
  * Mostly Database Agnostic
    * Same code can run against different SQL databases
      * As long as you haven't done anything DB specific
* The only overlap between Prisma and Zod are typescript types
  * Zod infers types
  * Prisma generates types
* They can and should be used together