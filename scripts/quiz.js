const questions = [
    {
      question: "What is my favourite color?",
      options: ["Purple", "Blue", "Black", "Red"],
      answer: "Red"
    },
    {
      question: "Who was my first crush?",
      options: ["Shravani", "Sarah", "Joanna", "Rosalind"],
      answer: "Rosalind"
    },
    {
        question: "What is my favourite food?",
        options: ["Pav Bhaji", "Chicken Popcorn", "Prawn Fry", "Bombil Fry"],
        answer: "Prawn Fry"
    },
    {
        question: "Who is my best friend?",
        options: ["Calvin", "Nikita", "Lester", "Kushal"],
        answer: "Calvin"
      },
      {
        question: "What is my favourite subject?",
        options: ["Maths", "Physics", "Electronics", "Coding"],
        answer: "Maths"
      },
      {
        question: "What is my favourite mode of travel?",
        options: ["Train", "Two-wheeler", "Car", "Plane"],
        answer: "Two-wheeler"
      },
      {
        question: "What is at the top of my bucket list?",
        options: ["Bungee Jumping", "Skiing", "Scuba Diving", "Sky Diving"],
        answer: "Sky Diving"
      },
      {
        question: "What is my favourite movie?",
        options: ["Laapata Ladies", "Forrest Gump", "3 Idiots", "Avengers: Infinity War"],
        answer: "3 Idiots"
      },
      {
        question: "What is my favourite drink?",
        options: ["Appy Fizz", "Fanta", "Sprite", "Pepsi"],
        answer: "Sprite"
      },
      {
        question: "What is my favourite song?",
        options: ["Eating Colors", "Before Your Eyes", "Pistachio", "Splat"],
        answer: "Before Your Eyes"
      },
      {
        question: "What is my favourite anime?",
        options: ["Naruto", "One Piece", "Death Note", "Jujutsu Kaisen"],
        answer: "One Piece"
      },
      {
        question: "What is my favourite T-shirt of yours?",
        options: ["Pink Hugsy", "Black almost sleeveless", "Teal Anni", "Short White"],
        answer: "Teal Anni"
      },
      {
        question: "What is my favourite TV Show?",
        options: ["Squid Game", "Dark", "The Boys", "Lucifer"],
        answer: "Dark"
      },
      {
        question: "Who is my role model?",
        options: ["My Father", "APL Abdul Kalam", "Luffy", "No one"],
        answer: "Luffy"
      },
      {
        question: "How many kids do i want?",
        options: ["2", "3", "0", "5"],
        answer: "2"
      },
      {
        question: "How many girls have liked me?",
        options: ["3", "6", "5", "4"],
        answer: "6"
      },
      {
        question: "How many girls have i liked?",
        options: ["2", "3", "4", "5"],
        answer: "5"
      },
      {
        question: "How many girls have i loved?",
        options: ["5", "0", "1", "2"],
        answer: "2"
      },
      {
        question: "What is my favourite flavour of chips?",
        options: ["Masala Magic", "Pizzy Masala", "Simply Salted", "Cream and Onion"],
        answer: "Cream and Onion"
      },
      {
        question: "What is my favourite fast food restaraunt?",
        options: ["Dominoes", "KFC", "MC Donalds", "Burger King"],
        answer: "KFC"
      },
      {
        question: "What is the name of my building?",
        options: ["Vini Garden II", "New Asiana View CHS", "Vinny Garden 2", "New Ashiana View CHS"],
        answer: "New Asiana View CHS"
      },

      {
        question: "What is my middle name?",
        options: ["Fabian", "Vinay", "Simon", "Florence"],
        answer: "Simon"
      },
      {
        question: "What is my brothers middle name?",
        options: ["Patrick", "Florence", "Simon", "Fabian"],
        answer: "Fabian"
      },
      {
        question: "Which of my grandparents were alive when i was born?",
        options: ["Dad's mom and Mom's mom", "Dad's mom and Mom's dad", "Dad's dad and Mom's mom", "Dad's dad and Mom's dad"],
        answer: "Dad's mom and Mom's dad"
      },
      {
        question: "How many first cousins do i have?",
        options: ["6", "3", "5", "4"],
        answer: "5"
      },
      {
        question: "What is my favourite chat?",
        options: ["Sev Puri", "Vada Pav", "Pani Puri", "Samosa"],
        answer: "Sev Puri"
      },
      {
        question: "What is the name of my School?",
        options: ["St. Francesao Assisi", "St. Francis D'Assisi", "St. Francis ICSE", "St. Francis Xaviers"],
        answer: "St. Francis D'Assisi"
      },
      {
        question: "What was my JEE percentile?",
        options: ["99.29%ile", "99.37%ile", "99.39%ile", "99.21%ile"],
        answer: "99.39%ile"
      },
      {
        question: "What was my JEE Advanced Marks?",
        options: ["155", "150", "149", "151"],
        answer: "150"
      },
      {
        question: "What is my Admission no. in SVNIT?",
        options: ["043", "045", "042", "046"],
        answer: "043"
      },
      {
        question: "What is my weight?",
        options: ["51kg", "61kg", "55kg", "59kg"],
        answer: "51kg"
      },
      {
        question: "What is my height?",
        options: ["5'6", "5'9", "5'7", "5'11"],
        answer: "5'7"
      },
      {
        question: "What is my father's middle name?",
        options: ["He doesn't have one", "Vinay", "Patrick", "Alex"],
        answer: "Alex"
      },
      {
        question: "What is my mother's middle name?",
        options: ["Fabian", "Florence", "Gladys", "Monica"],
        answer: "Florence"
      },
      {
        question: "Which is my favourite planet?",
        options: ["Earth", "Venus", "Mars", "Jupiter"],
        answer: "Jupiter"
      },
      {
        question: "What is my favourite game?",
        options: ["Marvel Snap", "Pokemon FireRed", "Chess", "Marvel Contest of Champions"],
        answer: "Pokemon FireRed"
      },
      {
        question: "What is my favourite sport?",
        options: ["Cricket", "Football", "Badminton", "Basketball"],
        answer: "Cricket"
      },
      {
        question: "What is my favourite animal?",
        options: ["Tiger", "Cheetah", "Bear", "Lion"],
        answer: "Bear"
      },
      {
        question: "What is my favourite method of expressing affection?",
        options: ["Undressing[uk the rest;)]", "Speaking", "Kissing", "Hugging"],
        answer: "Hugging"
      },
      {
        question: "Who was/am i most jealous of?",
        options: ["Asheni", "Harshita", "Kushal", "Smruti"],
        answer: "Kushal"
      },
      {
        question: "Who is the one person i  hate?",
        options: ["Naman", "Jay", "Atharv", "Kushal"],
        answer: "Atharv"
      },
      {
        question: "What was my favourite gift?",
        options: ["Hairband", "Bracelet", "Watch", "Ring"],
        answer: "Ring"
      },
      {
        question: "What is my fantasy with you?",
        options: ["Watching shows", "Cooking(with a lack of clothes)", "Showering", "Cuddling"],
        answer: "Showering"
      },
      {
        question: "What am i scared of?",
        options: ["Heights", "Dogs", "Darkness", "Ghosts"],
        answer: "Heights"
      },
      {
        question: "What am i most insecure about?",
        options: ["Face", "Hair", "Arms", "Voice"],
        answer: "Face"
      },
      {
        question: "What do i hate the most?",
        options: ["Annoying ppl", "Narcissists", "Hypocrites", "Stupid ppl"],
        answer: "Hypocrites"
      },
      {
        question: "How smart am i?",
        options: ["Genius", "Very Smart", "Decently Smart", "Dumbass"],
        answer: "Decently Smart"
      },
      {
        question: "What do i love most about you?",
        options: ["Your hair", "Your laugh", "Your body", "Your voice"],
        answer: "Your laugh"
      },
      {
        question: "Where is my favourite place to be kissed?",
        options: ["None of the Below", "Face", "Neck", "Lips"],
        answer: "Neck"
      },
      {
        question: "What was my favourite date?",
        options: ["Rain Date", "Valentines Date", "Beach Date", "Home Date"],
        answer: "Beach Date"
      },
  ];
  let timeLeft = 30; 
    let timerId;
    
    function showScore() {
        optionsEl.innerHTML = "";
        nextBtn.style.display = "none";
        scoreEl.textContent = `Your score: ${score}/${Question_answered.length}`;
      }
      
    function endQuiz() {
        clearInterval(timerId);
        showScore();
        document.getElementById('question').textContent = "Time's up!";
        timeLeft=1;
        clearInterval(timerId);
        nextBtn.style.display='block';
        nextBtn.textContent="Play again?";
        // ... other end-of-quiz logic
      }

      
function startTimer() {
    timeLeft = 30; 
    let timerId;
  const timerEl = document.getElementById('timer');
  
  timerEl.textContent = `Time left: ${timeLeft}`;

  timerId = setInterval(() => {
    timeLeft--;
    timerEl.textContent = `Time left: ${timeLeft}`;

    if (timeLeft <= 0) {
      clearInterval(timerId);
      endQuiz(); // Your function to end the quiz
    }
  }, 1500);
}


  let Question_no = 1;
  let currentQuestion = Math.floor(Math.random()*(50));
  let score = 0;
  const Question_answered=[];
  Question_answered.push(currentQuestion);
  
  const questionEl = document.getElementById('question');
  const optionsEl = document.getElementById('options');
  const nextBtn = document.getElementById('next-btn');
  const scoreEl = document.getElementById('score');
  
  function loadQuestion() {
    
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";
  
    q.options.forEach(option => {
      const btn = document.createElement('button');
      btn.textContent = option;
      btn.classList.add('option-btn');
      btn.onclick = () => {
        if (option === q.answer) {
          score++;
        }   
        nextBtn.style.display = 'block';
      };
      optionsEl.appendChild(btn);
    });
  
    nextBtn.style.display = 'none';
  }
  
  nextBtn.onclick = () => {
    Question_no++;
    if(nextBtn.textContent=="Play again?")
    {
        startTimer();
        nextBtn.textContent="Next";
    }
    currentQuestion=Math.floor(Math.random()*(50));
    while(Question_answered.includes(currentQuestion))
    {
        currentQuestion=Math.floor(Math.random()*(50));
    }
    Question_answered.push(currentQuestion);
    if(timeLeft>0)
    {
        loadQuestion();
    }
  };
  
  startTimer();
  loadQuestion();
  function on() {
    // display overlay
    const turnOn = document.getElementById("overlay");
    turnOn.style.display = "block";
    // turn off vertical scroll
    const overflow = document.querySelector("body");
    overflow.style.overflow = "hidden";
}

function off() {
    // display overlay
    const turnOff = document.getElementById("overlay");
    turnOff.style.display = "none";
    // turn off vertical scroll
    const overflow = document.querySelector("body");
    overflow.style.overflow = "";
}
  
