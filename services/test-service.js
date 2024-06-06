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
