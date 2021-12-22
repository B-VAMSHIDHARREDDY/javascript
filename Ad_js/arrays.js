var emps = new Array();  // Empty array
var students = new Array("Ankit","Asha","amit","Vamshi") //Assing values in to array
console.log(students);
console.log(emps);
var numbers = []             // enmpty array
var floats = [9.2,7.3,2.2]
console.log(numbers)
console.log(floats)
var combo = ["Anoop",30,2.5,"CDAC"]
console.log(combo);
console.log(combo[3]);
combo[1] = 32;
console.log(combo);
// combo[6] = "new";
console.log(combo);
combo.push(20);
combo.push("30000")
console.log(combo)
combo.pop();
console.log(combo)
console.log(combo.sort())
console.log(combo.reverse())
console.log(typeof combo[1])
nums = [9,2,3,4,155,6,7]
// console.log(nums.sort(function(a,b){return a-b}))
for (var n in nums){
    console.log(nums[n])
}
for (i=0;i<nums.length;i++){
    console.log(nums[i])
    }
for (let x of nums){
    console.log(x)
}