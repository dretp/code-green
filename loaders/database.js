//const { Pool } =  require('postgres-pool');
const { Pool ,Client } = require('pg');


const client = new Client({
    host: 'safely-novel-humpback.a1.pgedge.io',
    database: 'codegreen',
    user: 'admin',
    password: '5RDNt70eg1o6WLHw523c75Lo',
    port: 5432,

});

async function connection(){

    // const client = new Client();
    // await client.connect();
    // const res = await client.query('SELECT node_name FROM spock.node');
    // const node_names = res.rows.map((row) => row.node_name);
    // await client.end();
    // console.log(node_names);
}

connection()

module.exports = client;