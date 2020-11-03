//from ES6
String.includes;

function countSubstringOccur(sentence_key){
    let keyword = sentence_key[0];
    let text = sentence_key[1];
    let counter;
    if(text.includes(keyword)){
        counter = 1;
    }else{
        console.log('0');
        return 0;
    }
    let position = text.indexOf(keyword);
    while (position !== -1) {
        position = text.indexOf(keyword, position + keyword.length);
        counter++;
    }
    console.log(counter);
}

let test1 = ['in', "We are living in a yellow submarine. We don't have anything else. Inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days."];
let test2 = ['your', "No one heard a single word you said. They should have seen it in your eyes. What was going around yоur head."];
countSubstringOccur(test1);
countSubstringOccur(test2);