function findMostFreqWord(input){
    let wordTimes = new Map();
    //replaces all punctuation 
    let text = input.replace(/[^A-Za-z0-9\s]/g," ").replace(/\s{2,}/g, " ");
    let words = text.toLowerCase().split(' ');

    words.forEach( i => {
        if(wordTimes.has(i))
            wordTimes.set(i, wordTimes.get(i)+1);
        else
            wordTimes.set(i, 1);
    }); 
 
    words.forEach( i => {
        if(wordTimes.get(i) === 1)
            wordTimes.delete(i);
    }); 
    var mapAsc = new Map([...wordTimes.entries()].sort());
    console.log(mapAsc);
    
}

findMostFreqWord('in the middle of the night');
findMostFreqWord('Hello my friend, hello my darling. Come on, come here. Welcome, welcome darling.');
findMostFreqWord("Huh, because I'm happy Clap along if you feel like a room without a roof Because I'm happy Clap along if you feel like happiness is the truth Because I'm happy Clap along if you know what happiness is to you Because I'm happy Clap along if you feel like that's what you wanna do ");
