const utils = require('../utils/budget');


exports.startingBudget = async () => {
    try {
      const svcData = await utils.expense();
      console.log(svcData._fieldsProto.balance.integerValue)
      return svcData;
    } catch (error) {
      console.error('Error in testService:', error);
      throw error;
    }
  };


exports.spendingBudget = async (spent) =>{

    try {
        // Retrieve Max Budget for Department
        // const maxBudgetObj = await   getMaxBudgetAmount();
        // const maxBudget = maxBudgetObj._fieldsProto.balance.integerValue;

        // // Retrieve Team Current Budget 
        // const teamData = await getDepartmentTotalExpenses("sl");
        // const currentExpenses = teamData._fieldsProto.balance.integerValue;


        // Check to see if the current team expense reached the max budget
      //   if(currentExpenses === maxBudget)
      //     {
      //       throw {
      //         error: true,
      //         errorMsg : "Reached Max Amount"
      //       };
      //     }
        
      //   const budget = await utils.expense();
      //   const newBalance = currentExpenses + spent;

      //   // check to see if new balance is greater than  max budget
      //   if(newBalance > maxBudget){
      //     throw {
      //         error: true,
      //         errorMsg : "New Amount puts you over the budget"
      //       };
      //   }


      //   // console.log(`Spent: ${spent}, New Balance: ${newBalance} `);
      //  const svcData = await utils.spending(spent,newBalance);
       

      const updatedRec = await utils.performBalanceUpdate("sl", 100);

      return {
        success: true
      };
      //  return {
      //   spent: spent,
      //   balance: newBalance
      //  };
    }
    catch(error) {
      console.error(`Error in Budget-Service:`, error);
      throw error;
    }

}


