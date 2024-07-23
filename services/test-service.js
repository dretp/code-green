const utils = require('../utils/test');

exports.testService = async () => {
  try {
    const svcData = await utils.retriveTest();
    return svcData;
  } catch (error) {
    console.error('Error in testService:', error);
    throw error;
  }
};


exports.firebaseTest = async(name,status) =>{

  try{
    name = "Dre"
    const svcData = await utils.firebasePost(name,status)
    return svcData;
  }
  catch{
    console.error('Error in testService fucntino firebaseTest:', error);
    throw error;
  }

}


exports.testInsert = async (id, name) => {
  try {
    const svc = await utils.data(id,name);
    return svc;
  }
  catch (error) {
    console.error('Error in testService:', error);
    throw error;
  }

}
