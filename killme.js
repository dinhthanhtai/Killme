function killmeEven(nums) {
    if(nums.length == 1) return nums;
    if(nums.length % 2 == 1) {
      return killmeOdd(nums);
    }
    let arr = []
    for(let i in nums){
      if(+i % 2 == 0){
        arr.push(nums[i])
      }
    }
    return killmeEven(arr);
  }
  function killmeOdd(nums) {
    if(nums.length == 1) return nums;
    if(nums.length % 2 == 0) {
      return killmeEven(nums);
    }
    let arr = [];
    for (let i in nums) {
      if(+i % 2 == 0) {
        arr.push(nums[i]);
      }
    }
    var reset = arr[arr.length-1];
    var [...b] = arr.slice(1,arr.length);
    return killmeOdd(b);
  }
  function result(arr) {
    if(arr.length % 2 == 0){
      return killmeEven(arr);
    }else {
      return killmeOdd(arr);
    }
  } 
  var a = [];
  for(let i = 1; i < 100; i++) {
    a.push(i);
  }
  console.log(result(a));