function countDigits(n) {
    let count = 0;
    
    for (let num = n; num > 0; num = Math.floor(num / 10)) {
      count++;
    }
    
    return count;
  }
  
  console.log(countDigits(12345)); 
  console.log(countDigits(23))