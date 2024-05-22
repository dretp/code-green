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
