function computeAge() {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let birthYear = prompt("Which year were you born?");
    let age = (currentYear - birthYear) * 365;
    document.getElementById("result").innerHTML = "You are " + age + " days old!!!";
}
function reset() {
    document.getElementById("result").innerHTML = "";
}
function generate() {
    var div = document.getElementById("cat");
    let vid = document.createElement("video");
    vid.src = "cat.mp4";
    vid.autoplay = true;
    vid.loop = true;
    div.appendChild(vid);
}

function imageClick(yourChoice) {

    let humanChoice, botChoice;

    humanChoice = yourChoice.id;
    botChoice = Math.floor(Math.random() * (4 - 1) + 1);

    function winner(humanChoice, botChoice) {
        let ar = new Array(2);
        if (humanChoice == "rock" && botChoice == 2) {
            ar[0] = 0;
            ar[1] = 1;
            return ar;
        }
        if (humanChoice == "rock" && botChoice == 3) {
            ar[0] = 1;
            ar[1] = 0;
            return ar;
        }
        if (humanChoice == "paper" && botChoice == 1) {
            ar[0] = 1;
            ar[1] = 0;
            return ar;
        }
        if (humanChoice == "paper" && botChoice == 3) {
            ar[0] = 0;
            ar[1] = 1;
            return ar;
        }
        if (humanChoice == "scissor" && botChoice == 1) {
            ar[0] = 0;
            ar[1] = 1;
            return ar;
        }
        if (humanChoice == "scissor" && botChoice == 2) {
            ar[0] = 1;
            ar[1] = 0;
            return ar;
        }
        if (humanChoice == "rock" && botChoice == 1) {
            ar[0] = 0.5;
            ar[1] = 0.5;
            return ar;
        }
        if (humanChoice == "paper" && botChoice == 2) {
            ar[0] = 0.5;
            ar[1] = 0.5;
            return ar;
        }
        if (humanChoice == "scissor" && botChoice == 3) {
            ar[0] = 0.5;
            ar[1] = 0.5;
            return ar;
        }
    };
    let result = winner(humanChoice, botChoice);


    function finalmessage(result) {
        if (result[0] == 1) {
            return "You Won!";
        }
        if (result[0] == 0) {
            return "You lost:(";
        }
        if (result[0] == 0.5) {
            return "You Tied:/";
        }
    };
    let message = finalmessage(result);
    // console.log(message);

    function frontend(yourChoice, botChoice, message) {
        let flexbox = document.getElementById("flexbox");
        flexbox.innerHTML = "";

        let container = document.getElementById("rps");

        let human = document.createElement("img");
        let bot = document.createElement("img");
        human.style.boxShadow = "4px 4px 50px rgb(37, 37, 224)";
        bot.style.boxShadow = "4px 4px 50px red";

        if (yourChoice == "rock") {
            human.src = "images/rock.png";
        }
        if (yourChoice == "paper") {
            human.src = "images/paper.jpg";
        }
        if (yourChoice == "scissor") {
            human.src = "images/scissor.png";
        }
        if (botChoice == 1) {
            bot.src = "images/rock.png";
        }
        if (botChoice == 2) {
            bot.src = "images/paper.jpg";
        }
        if (botChoice == 3) {
            bot.src = "images/scissor.png";
        }

        let msg = document.createElement("span");
        msg.innerHTML = message;
        msg.style.fontFamily="Trebuchet MS', 'Lucida Sans Unicode";
        if(message=="You Won!"){
            msg.style.color="green";
        }
        if(message=="You lost:("){
            msg.style.color="red";
        }
        if(message=="You Tied:/"){
            msg.style.color="yellow";
        }
        

        flexbox.appendChild(human);
        flexbox.appendChild(msg);
        flexbox.appendChild(bot);

        let btn = document.createElement("button");
        btn.innerHTML = "Try Again";
        btn.classList.add("btn");


        btn.onclick = function () {

            flexbox.innerHTML =
                ` <img src="images/rock.png" id="rock" alt="" onclick="imageClick(this)">
            <img src="images/paper.jpg" id="paper" alt="" onclick="imageClick(this)">
            <img src="images/scissor.png" id="scissor" alt="" onclick="imageClick(this)">
              `
              container.removeChild(btn);
            }

        container.appendChild(btn);

    }

    frontend(humanChoice, botChoice, message);

}
