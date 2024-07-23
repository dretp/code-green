const db = require('../firebase').db;





// public functions

exports.expense = async() =>{
    // grab the 25000 budget from the friebase

    const data = await budget();

    return data;

}

exports.spending = async(spent, newAmount) =>{

    const data = await spendingRequest(spent,newAmount)
    return data;

}
//private function 


async function budget()
{
    const expense = await db.collection('expense').doc('budget');

    const doc = await expense.get();
    return doc;
}



async function spendingRequest(spent, newAmount){

    const newBalance = db.collection('subtract').doc('NewBalance')


    const docData = {
        "spent": spent,
        "newBalance": newAmount
    }


    return  newBalance.set({docData})
}