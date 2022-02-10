const arr = [1 ,5, 8, 7, 5, 3]


function twoSum(array, target){
  array.forEach(el=>{
    if (array.includes(Math.abs(el-target))) {
      console.log("two sum couples",el, array[array.indexOf(Math.abs(el-target))])
    }
  })
}

twoSum(arr, 2)
