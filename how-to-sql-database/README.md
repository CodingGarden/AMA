* Ways to interact with a SQL DB
  * SQL
    
```SQL
SELECT * FROM USERS WHERE ID = 42;
```

  * Database Drivers

```js
const { Client } = require('pg')
const client = new Client()
await client.connect()
// const message = 'Hello world!';
// const message = "*;'select * from super_secret_table;'select *"
// const res = await client.query('SELECT ' + message + ' as message')
const res = await client.query('SELECT $1::text as message', ['Hello world!'])
console.log(res.rows[0].message) // Hello world!
await client.end()
```

  * Query Builders

```js
const tableNames = {
  Users: 'Users',
};

const columnNames {
  User: {
    id: 'id',
  },
};

knex(tableNames.Users)
  .where(columnNames.User.id, 42); 
```

* ORMS
  * Object Relational Mapper