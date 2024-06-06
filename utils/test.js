const db = require('../firebase').db;

const post = require('../loaders/database');

exports.retriveTest = async () => {
   const data = await  test();

    return data;



}

// private function

async function test() {
const freinds = await db.collection('people').doc('associates');

const doc = await freinds.get();
return doc;
}

exports.data = async function (id,name) {
    const params = [id,name]
    const q = `INSERT INTO test(id,name) VALUES ($1,$2)`;

    const data = await post.query(q,params);

return data;


}