const app= require("./multipleContentModule")
console.log(`This program was developed by ${module.developedBy} on ${module.developedOn}`)

app.simpleFunc()
const testComponent = app.objectInstance
testComponent.testFunc();

const es6Component = new app.newFeature();
console.log(es6Component)
es6Component.testFunc();











