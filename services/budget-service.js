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


exports.sepndingBudget = async (spent) =>{

    try {
        const budget = await utils.expense();
        const newBalance = budget._fieldsProto.balance.integerValue - spent;

       const svcData = await utils.spending(spent,newBalance);
       return svcData;
    }
    catch(error) {

    }

}


