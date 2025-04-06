function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }
const questions = shuffle([
    { img: "dates_images/01.04.23.jpeg", answer: "01/04/23" },
    { img: "dates_images/01.04.23.jpg", answer: "01/04/23" },
    { img: "dates_images/01.10.24.jpg", answer: "01/10/24" },
    { img: "dates_images/02.05.23.jpg", answer: "02/05/23"},
    { img: "dates_images/03.06.23 (2).jpg", answer: "03.06.23"},
    { img: "dates_images/03.06.23.jpg", answer: "03.06.23"},
    { img: "dates_images/04.01.25.jpg", answer: "04.01.25"},
    { img: "dates_images/04.05.23.jpg", answer: "04/05/23"},
    { img: "dates_images/04.11.24.jpg", answer: "04/11/24"},
    { img: "dates_images/05.02.23 (2).jpg", answer: "05/02/23"},
    { img: "dates_images/05.02.23.jpg", answer: "05/02/23"},
    { img: "dates_images/05.07.24.jpg", answer: "05/07/24"},
    { img: "dates_images/05.10.24.jpg", answer: "06/07/24"},
    { img: "dates_images/06.07.24.jpg", answer: "02/05/23"},
    { img: "dates_images/06.10.24.jpg", answer: "06/10/24"},
    { img: "dates_images/07.03.23 (2).jpg", answer: "07/03/23"},
    { img: "dates_images/07.03.23.jpg", answer: "07/03/23"},
    { img: "dates_images/08.02.25.jpg", answer: "08/02/25"},
    { img: "dates_images/09.04.24.jpg", answer: "09/04/24"},
    { img: "dates_images/09.07.24 (2).jpg", answer: "09/07/24"},
    { img: "dates_images/09.07.24.jpg", answer: "09/07/24"},
    { img: "dates_images/10.08.24.jpg", answer: "10/08/24"},
    { img: "dates_images/10.11.23 (2).jpg", answer: "10/11/23"},
    { img: "dates_images/10.11.23.jpg", answer: "10/11/23"},
    { img: "dates_images/11.05.24 (2).jpg", answer: "11/05/24"},
    { img: "dates_images/11.05.24.jpg", answer: "11/05/24"},
    { img: "dates_images/11.07.23.jpg", answer: "11/07/23"},
    { img: "dates_images/11.09.24 (2).jpg", answer: "11/09/24"},
    { img: "dates_images/11.09.24.jpg", answer: "11/09/24"},
    { img: "dates_images/11.12.24.jpg", answer: "11/12/24"},
    { img: "dates_images/12.07.24 (2).jpg", answer: "12/07/24"},
    { img: "dates_images/12.07.24.jpg", answer: "12/07/24"},
    { img: "dates_images/13.10.24 (2).jpg", answer: "13/10/24"},
    { img: "dates_images/13.10.24.jpg", answer: "13/10/24"},
    { img: "dates_images/14.11.24.jpg", answer: "14/11/24"},
    { img: "dates_images/14.12.24.jpg", answer: "14/12/24"},
    { img: "dates_images/16.02.23.jpg", answer: "16/02/23"},
    { img: "dates_images/17.01.23 (2).jpg", answer: "17/01/23"},
    { img: "dates_images/17.01.23.jpg", answer: "17/01/23"},
    { img: "dates_images/17.01.23 (3).jpg", answer: "17/01/23"},
    { img: "dates_images/17.06.23.jpg", answer: "17/06/23"},
    { img: "dates_images/17.06.23 (2).jpg", answer: "17/06/23"},
    { img: "dates_images/18.02.23 (2).jpg", answer: "18/02/23"},
    { img: "dates_images/18.03.23.jpg", answer: "18/03/23"},
    { img: "dates_images/18.09.24.jpg", answer: "18/09/24"},
    { img: "dates_images/18.12.24 (2).jpg", answer: "18/12/243"},
    { img: "dates_images/18.12.24.jpg", answer: "18/12/24"},
    { img: "dates_images/18.02.23.jpg", answer: "18/02/23"},
    { img: "dates_images/19.05.23 (2).jpg", answer: "19/05/23"},
    { img: "dates_images/19.05.23.jpg", answer: "19/05/23"},
    { img: "dates_images/19.08.24 (2).jpg", answer: "19/08/24"},
    { img: "dates_images/19.08.24.jpg", answer: "19/08/24"},
    { img: "dates_images/19.11.24.png", answer: "19/11/24"},
    { img: "dates_images/20.09.23.jpg", answer: "20/09/23"},
    { img: "dates_images/21.09.24.jpg", answer: "21/09/24"},
    { img: "dates_images/22.11.24 (2).jpg", answer: "22/11/24"},
    { img: "dates_images/22.11.24.jpg", answer: "22/11/24"},
    { img: "dates_images/26.06.24 (2).jpg", answer: "26/06/24"},
    { img: "dates_images/26.06.24 (3).jpg", answer: "26/06/24"},
    { img: "dates_images/23.07.22.jpg", answer: "23/07/22"},
    { img: "dates_images/26.06.24 (4).jpg", answer: "26/06/24"},
    { img: "dates_images/26.06.24.jpg", answer: "26/06/24"},
    { img: "dates_images/27.04.23.jpg", answer: "27/04/23"},
    { img: "dates_images/27.05.24.jpg", answer: "27/05/24"},
    { img: "dates_images/27.12.24.jpg", answer: "27/12/24"},
    { img: "dates_images/28.06.23 (2).jpg", answer: "28/06/23"},
    { img: "dates_images/28.11.24.png", answer: "28/11/24"},
    { img: "dates_images/28.06.23.jpg", answer: "28/06/23"},
    { img: "dates_images/29.04.24 (2).jpg", answer: "29/04/24"},
    { img: "dates_images/29.04.24.jpg", answer: "29/04/24"},
    { img: "dates_images/29.10.24.jpg", answer: "29/10/24"},
    { img: "dates_images/30.10.24 (2).jpg", answer: "30/10/24"},
    { img: "dates_images/31.01.23 (2).jpg", answer: "31/01/23"},
    { img: "dates_images/31.01.23.jpg", answer: "31/01/23"},
    { img: "dates_images/31.10.24.jpg", answer: "31/10/24"},
    { img: "dates_images/31.12.22.jpg", answer: "31/10/22"},
    { img: "dates_images/30.10.24.jpg", answer: "30/10/24"}
  ]);
  
  let currentQuestion = 0;
  let score = 0;
  
  function loadQuestion() {
    const imgEl = document.getElementById("quiz-image");
    imgEl.src = questions[currentQuestion].img;
    document.getElementById("user-input").value = "";
    document.getElementById("feedback").textContent = "";
  }
  
  function submitAnswer() {
    const userInput = document.getElementById("user-input").value.trim().toLowerCase();
    const correctAnswer = questions[currentQuestion].answer.toLowerCase();
  
    if (userInput === correctAnswer) {
      score++;
      document.getElementById("feedback").textContent = "✅ Correct!";
    } else {
      document.getElementById("feedback").textContent = `❌ Oops! It's "${correctAnswer}"`;
    }
  
    document.getElementById("score").textContent = `Score: ${score}`;
  
    currentQuestion++;
  
    if (currentQuestion < questions.length) {
      setTimeout(loadQuestion, 1500); // Show next image after delay
    } else {
      setTimeout(() => {
        document.getElementById("quiz-image").style.display = "none";
        document.getElementById("user-input").style.display = "none";
        document.querySelector("button").style.display = "none";
        document.getElementById("feedback").textContent = `🎉 Game Over! Final score: ${score}`;
      }, 1500);
    }
  }
  
  // Load first image when page loads
  window.onload = loadQuestion;
  
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