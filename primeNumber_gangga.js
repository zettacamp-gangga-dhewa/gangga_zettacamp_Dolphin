function isPrime(n) {
    // if(n==1){
    //     return false
    // }
    // if(n%2==0){
    //     return false
    // }
    // if(n%n==0){
    //     return false
    // }
    // return true
    if(n==1) return false //kondisi 1 bukan prima
    if(n%2==0){ //kondisi bisa modulus 2 bukan prima
        return false
    } 
    for(let i=2;i<2;i++){
        if(n%i==0) return false
    }
    return true


  }
  console.log(isPrime(9));
  console.log(isPrime(43));