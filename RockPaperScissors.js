
  
   
   let Score = JSON.parse(localStorage.getItem('Score')) ||
    { Wins: 0,
      Losses: 0,
      Tied: 0};

   rockPaperScissors()
     

   document.body.addEventListener("keydown",
     (event)=>{
       if(event.key === 'r'){playGame('rock')}

       else if(event.key === 'p'){playGame('paper')}

       else if(event.key === 's'){playGame('scissors')}

       else if(event.key === 'a'){autoPlay()}

       else if(event.key === 'Backspace'){doYou()}

      }
    )

   document.querySelector('#auto-play')
     .addEventListener('click',
      ()=>{
        let auto = document.getElementById('auto-play');
      
        if(!auto.classList.contains('auto-playActive'))
        {auto.classList.add("auto-playActive")}
        
        else{auto.classList.remove('auto-playActive')}
        //if(auto.classList.contains('auto-playActive'))
        //auto.classList.remove("autoPlayActive");
        
        autoPlay()})


 let isAutoPlaying = false;
 let intervalId;  
 function autoPlay()
   {if(!isAutoPlaying)
     {intervalId = setInterval(
       ()=>{const playerMove = getComputerMove();
        playGame(playerMove);
        document.querySelector('#auto-play').innerHTML = 'Stop Playing';},
        1000 ); isAutoPlaying = true;  
     }
      
    else{clearInterval(intervalId); isAutoPlaying = false;
      document.querySelector('#auto-play').innerHTML = 'Auto Play';}
   }



 function getComputerMove()
    {const randomNumber1 = Math.random();

    let computerMove ='';
  
    if (randomNumber1 >=0 && randomNumber1 <=1/3) {computerMove ='rock';}
     else if (randomNumber1 >=1/3 && randomNumber1  <=2/3) {computerMove='paper';}
     else if (randomNumber1 >=2/3 && randomNumber1 <=1) {computerMove='scissors';}

     return computerMove;}



   document.querySelector('#button1')
      .addEventListener('click',()=>{playGame('rock')})

   document.querySelector('#button2')
      .addEventListener('click',()=>{playGame('paper')})

   document.querySelector('#button3')
      .addEventListener('click',()=>{playGame('scissors')})

      
  function playGame(playerMove)
   {const computerMove = getComputerMove();

    let results = '';

    if (playerMove === 'rock')
       {if (computerMove==='rock') {results ='Tied';}
       else if (computerMove==='paper') {results ='Computer Win';}
       else if (computerMove==='scissors') {results ='You Win';}}

    else if (playerMove === 'paper')
       {if (computerMove==='rock') {results ='You Win';}
       else if (computerMove==='paper') {results ='Tied';}
       else if (computerMove==='scissors') {results ='Computer Win';}}

    else if (playerMove === 'scissors')
       {if (computerMove==='rock') {results ='Computer Win';}
       else if (computerMove==='paper') {results ='You Win';}
       else if (computerMove==='scissors') {results ='Tied';}}

   ////////////////////////////////

    if (results === 'You Win') {Score.Wins +=1;}
      else if(results === 'Computer Win') {Score.Losses +=1;}
      else if(results === 'Tied') {Score.Tied +=1};

   
   
   document.querySelector('.moves').innerHTML =
   `You <img src="${playerMove}.png"
     id="movesimage">
   Computer <img src="${computerMove}.png" id="movesimage">`;


     document.querySelector('.results').innerHTML =
     `Result: ${results}`;

     rockPaperScissors();

     localStorage.setItem('Score', JSON.stringify(Score)); 
   }
    

  function rockPaperScissors(){
    document.querySelector('.game_scores').innerHTML = 
    `Wins:${Score.Wins}.
     Losses:${Score.Losses}.
     Draws:${Score.Tied}`;}

  
 document.querySelector('#reset')
   .addEventListener('click',
    ()=>{
      let reset = document.getElementById('reset');
      if(!reset.classList.contains('resetActive'))
      {reset.classList.add("resetActive")}
      doYou();
      
      })

 function doYou()
   {let cont2 = document.getElementById('container2');
    cont2.classList.add("show");
    cont2.classList.remove('hide');}
    

 document.querySelector('#yesBtn')
   .addEventListener('click',
    ()=>{
      let reset = document.getElementById('reset');
      let auto = document.getElementById('auto-play');

      if(reset.classList.contains('resetActive'))
      reset.classList.remove("resetActive");
      
      
      if(auto.classList.contains('auto-playActive'))
      auto.classList.remove("autoPlayActive");
    
      yesReset()}
  );

 document.querySelector('#noBtn')
   .addEventListener('click',
    ()=>{
      let reset = document.getElementById('reset');
      let auto = document.getElementById('auto-play');
      
      if(reset.classList.contains('resetActive'))
      reset.classList.remove("resetActive");
      
      
      if(auto.classList.contains('auto-playActive'))
      auto.classList.remove("autoPlayActive");
      
      noReset()}
  );

 function  movesResultReset()
   {document.querySelector('.moves').innerHTML = '';

   document.querySelector('.results').innerHTML = '';}


 function yesReset()
   {Score.Wins = 0;
    Score.Losses = 0;
    Score.Tied = 0;
    localStorage.removeItem('Score');
    rockPaperScissors();
    movesResultReset();
    noReset();
   }

 function noReset()
   {let cont2 = document.getElementById('container2');

   cont2.classList.add("hide");
   cont2.classList.remove('show');
   }

