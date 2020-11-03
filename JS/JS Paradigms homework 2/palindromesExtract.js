function findPalindromes(t){
    //removes all puctuation
    let text = t.replace(/[^A-Za-z0-9\s]/g,"").replace(/\s{2,}/g, " ");
    let words = text.toLowerCase().split(' ');
    let palindromes = [];
    words.forEach(i => {
        if(checkPalindrome(i))
            palindromes.push(i);
    });
    palindromes.forEach( i => console.log(i));

}
function checkPalindrome (input) {
    return input == input.split('').reverse().join('');
  }

  findPalindromes('There is a man, his name was Bob.');