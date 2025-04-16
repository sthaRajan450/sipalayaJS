function countVowels(str) {
    let count = 0;
    str = str.toLowerCase().split('');
    str.forEach((item) => {
      if (
        item === 'a' ||
        item === 'e' ||
        item === 'i' ||
        item === 'o' ||
        item === 'u'
      ) {
        count++;
      }
    });
    return count;
  }
  
  console.log(countVowels('Rajan')); 
  