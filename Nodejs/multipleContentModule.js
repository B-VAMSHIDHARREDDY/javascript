//A module can have multiple kinds of logic in it like functions, data, objects and many more. 
module.exports.simpleFunc = function(){
    console.log("Testing Func")
}
//new es6 syntax  // es stands for ECMA(European computer ) script
class testClass{
    testFunc(){
        console.log("test Func from ES6")
    }
}

exports.newFeature = testClass
exports.developedBy = "Phaniraj"
exports.developedOn = new Date("12/12/2021")
exports.objectInstance = (function(){
  let data = [];
  function testFunc(){
      console.log("test Func")
  }
  return{
      testFunc
  }   
})();
