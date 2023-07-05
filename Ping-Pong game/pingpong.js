document.addEventListener("DOMContentLoaded", function() {
    const gameBoard = document.getElementById("game-board");
    const paddle = document.getElementById("paddle");
    const ball = document.getElementById("ball");
    let ballX = 300;
    let ballY = 200;
    let paddleY = 160;
    let ballSpeedX = 2;
    let ballSpeedY = 2;
  
    function movePaddle(e) {
      paddleY = e.clientY - gameBoard.offsetTop - paddle.offsetHeight / 2;
      if (paddleY < 0) {
        paddleY = 0;
      }
      if (paddleY > gameBoard.offsetHeight - paddle.offsetHeight) {
        paddleY = gameBoard.offsetHeight - paddle.offsetHeight;
      }
      paddle.style.top = paddleY + "px";
    }
  
    function moveBall() {
      ballX += ballSpeedX;
      ballY += ballSpeedY;
  
      if (ballY <= 0 || ballY >= gameBoard.offsetHeight - ball.offsetHeight) {
        ballSpeedY *= -1;
      }
  
      if (ballX <= paddle.offsetWidth && ballY + ball.offsetHeight >= paddleY && ballY <= paddleY + paddle.offsetHeight) {
        ballSpeedX *= -1;
      }
  
      if (ballX >= gameBoard.offsetWidth - ball.offsetWidth) {
        ballSpeedX *= -1;
      }
  
      ball.style.top = ballY + "px";
      ball.style.left = ballX + "px";
    }
  
    setInterval(moveBall, 16);
  
    gameBoard.addEventListener("mousemove", movePaddle);
  });
  