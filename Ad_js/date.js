//current datetime

const now = new Date()

console.log(now)

// old date and time 
const olddate = new Date(2020,2,23,15,12,20)
console.log(olddate)
console.log(now.toLocaleTimeString())
console.log(now.getMonth())
console.log(now.getFullYear())
console.log(now.getTime())


var di = now - olddate;
console.log(di)


