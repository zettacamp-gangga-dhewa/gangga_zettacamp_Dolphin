function majorityElement(nums) {
    const temp = new Array();

  for (const element of nums) {
    temp[element] = temp[element] + 1 || 1;
  }
  //iterasi elements array & updates temp 
  //setiap element, count element di temp di increment 1
  //jika element blm ada di temp, count set 1.

  let majorityElement = null;
  let maxCount = 0;
  //2 variables: majorityElement & maxCount. 
  //majorityElement menampung element yg paling banyak muncul
  //maxCount meyimpan the jumlah brp kali element muncul.

  for (const [element, count] of Object.entries(temp)) {
    if (count > maxCount) {
      majorityElement = element;
      maxCount = count;
    }
  }
  //iterates sebanyak temp
  //setiap count dari element is bandingkan dg nilai maxCount. 
  //jika count > maxCount, majorityElement diubah menjadi element & maxCount updated count.

  return majorityElement && maxCount > Math.floor(nums.length / 2) ? majorityElement : null;
  //returns majorityElement jika exists and its count is greater than half the length of the array. Otherwise, it returns null.
}

console.log(majorityElement([3, 2, 3, 2])); // Output: 3 
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2 

