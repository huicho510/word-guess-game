let words = ['pizza', 'tacos', 'noodles', 'curry'];
let answerWords =[];


function playHangman(){
     randomWord = words[Math.floor(Math.random() * words.length)];

     for (let i = 0; i< randomWord.length; i++){
        answerWords[i] = ' ';
        console.log(answerWords);
     
}



}

// let remainingLetters = randomWord.length;

playHangman();


    