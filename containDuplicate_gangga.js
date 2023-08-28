function containsDuplicate(nums) {
    const output=[];

    for(let tempArray= 0; tempArray < nums.length;tempArray++){
      output[nums[tempArray]]=0 
      // console.log(output) membuat array baru berisi element 0
    }

    for(let duplicate= 0; duplicate < nums.length;duplicate++){
      output[nums[duplicate]]++
      // console.log(output) mencocokan data pada temparray dengan duplicate 
      if(output[nums[duplicate]] > 1) return true
    }
    return false
  }

  console.log(containsDuplicate([1, 2, 3, 1])); // Output: true
  console.log(containsDuplicate([1, 2, 3, 4])); // Output: false
  console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // Output: true

