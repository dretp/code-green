const db = require('../firebase').db;

//const post = require('../loaders/database');

exports.retriveTest = async () => {
   const data = await  test();
    return data;

}

exports.firebasePost = async(name, status) =>{

    const data = await postRequest(name,status)
    return data;

}




// private function

async function test() {
const freinds = await db.collection('people').doc('associates');

const doc = await freinds.get();
return doc;
}

async function postRequest(name, status){

    const peopleRef = db.collection('people').doc('associates')


        const docData = {
            "name": name,
            "status": status
        }

        
       return  peopleRef.set({docData})
}
