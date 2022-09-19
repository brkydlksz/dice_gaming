function n1() {
  var number1 = Math.floor(Math.random() * 6) + 1

  switch (number1) {
    case 1:
      document.getElementById("img1").src = "dice1.png";
      break;
    case 2:
      document.getElementById("img1").src = "dice2.png";
      break;
    case 3:
      document.getElementById("img1").src = "dice3.png";
      break;
    case 4:
      document.getElementById("img1").src = "dice4.png";
      break;
    case 5:
      document.getElementById("img1").src = "dice5.png";
      break;
    case 6:
      document.getElementById("img1").src = "dice6.png";
      break;
  }

  var number2 = Math.floor(Math.random() * 6) + 1

  switch (number2) {
    case 1:
      document.getElementById("img2").src = "dice1.png";
      break;
    case 2:
      document.getElementById("img2").src = "dice2.png";
      break;
    case 3:
      document.getElementById("img2").src = "dice3.png";
      break;
    case 4:
      document.getElementById("img2").src = "dice4.png";
      break;
    case 5:
      document.getElementById("img2").src = "dice5.png";
      break;
    case 6:
      document.getElementById("img2").src = "dice6.png";
      break;
  }
  if (number2 > number1) {


      document.getElementsByTagName("p")[0].innerHTML = "Player 2 Wins"
      document.querySelector("p.p2").style.color = "green";
      document.querySelector("p.p1").style.color = "red";
      document.querySelector("p.p1").style.fontSize = "30px";


  } else if (number1 == number2) {
    document.getElementsByTagName("p")[0].innerHTML = "Draw !!"
    document.querySelector("p.p2").style.color = "white";
    document.querySelector("p.p1").style.color = "white";

  } else {

      document.getElementsByTagName("p")[0].innerHTML = "Player 1 Wins"
      document.querySelector("p.p2").style.color = "red";
      document.querySelector("p.p1").style.color = "green";
      document.querySelector("p.p2").style.fontSize = "30px";


  }








}
