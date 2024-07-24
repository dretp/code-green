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

exports.performBalanceUpdate = async (teamId, newAmount) => {
    const data = await updateTeamBalance(teamId, newAmount);
    return data;
}

//private function 


async function budget()
{
    const expense = await db.collection('expense').doc('budget');

    const doc = await expense.get();
    return doc;
}

async function getMaxBudgetAmount()
{
    try {
        const maxBudget = await db.collection('expense').doc('budget');

        const budgetVal = await maxBudget.get();
        return budgetVal;

    } catch (error) {
        console.error('Error in budget-util.getMaxBudget()', error);
        throw error;
    }
}

async function getDepartmentTotalExpenses(id){
    try {
        const currentTeam = await db.collection('departments').doc(id);

        const teamData = await currentTeam.get();

        if (!doc.exists) {
        console.log('No such document!');
        return null;
        } else {
            console.log('Team Current Expense Data:', team.data());
         
        }
           return teamData.data();
        
    } catch (error) {
        console.error('Error in budget-util.getDepartmentCurrentBudget()', error);
        throw error;
    }
}


async function updateTeamBalance(teamId, newBalance) {

    // get the current team document
    const currentTeamObj = db.collection('departments').doc(teamId);

    const res = await currentTeamObj.update({'total-expenses': newBalance});

    return res;
}

async function spendingRequest(spent, newAmount){

    const newBalance = db.collection('subtract').doc('NewBalance')


    const docData = {
        "spent": spent,
        "newBalance": newAmount
    }


    return  newBalance.set({docData})
}