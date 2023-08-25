function hasUniqueCharacters(str) {
    const uniq=[];

    for(let i= 0; i < str.length;i++){
      uniq[str[i]]=0
      console.log(uniq)
    }

    for(let j= 0; j < str.length;j++){
      uniq[str[j]]++

      if(uniq[str[j]] > 1) return false
    }
    return true
  }

console.log(hasUniqueCharacters("asdsd")); // Output: true
console.log(hasUniqueCharacters("asd")); // Output: false

