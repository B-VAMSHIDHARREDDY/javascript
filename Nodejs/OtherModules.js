const util = require("util")
const os = require("os")
const data = require("./MOCK_DATA.json")

const name = "Vamshi"
const address = "kadapa"
const age = 23
const msg = util.format("My name is s from %s and I am %d years old",name,address,age)
console.log(msg)


////////////////OS related operations//////////
console.log("The machine name is "+os.hostname())
console.log("The machine'OS is " +os.type())
console.log("The current version of the the OS is "+ os.version())
console.log("The machine is up and runnig for "+ (os.uptime()/3600)+"hrs")

////////////////Console based APIs //////////////
console.table(data)
