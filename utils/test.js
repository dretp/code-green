const db = require('../firebase').db;


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