const utils = require('../utils/test');



exports.testService = async () => {
  const svcData = await utils.retriveTest();

  return svcData;


}