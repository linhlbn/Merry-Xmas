//Global var
var youSaidIfRight = ["", "Cooooool keep going 💖", "안녕 Niii 😘", "Nĩ hẻo nĩ hão maa 0.0", "Welcome to Niii's world 🐷", "こんにちは赤ちゃん❤️💚💙Oopsすみません、私の悪い😅"];
var youSaidIfWrong = ["", "everytime I fail, I will look at the sky and think about this: Should I give up or continue 😶", "Xiii naaa 😅",
    "Uầy goodbye and see ya again 😉", "don't touch me baee 😒", "Oyasumi onichannn 😴😴😴 "
];

document.getElementById("youSaid").innerHTML = "you said...";
var randomNumber = 0;
var randomColor = 0;
randomFontSize = 0;
var count = 0,
    num = 0;
var myData = [],
    key = [],
    meSaid = [],
    maxData = 8;

meSaid[0] = "I have something for you. Vừa xem vừa click nha";
meSaid[1] = "I make this just for fun, hope u have funn :3 wish Niii a merry chrismas with friends and family (':";
meSaid[2] = "こんにちは赤ちゃん";
meSaid[3] = "The first time I made a mobile app 4 years ago with Windowphone platform, now this will be the first time I make an Android app. ";
meSaid[4] = "Do u want to built a snow mannn xDD";
meSaid[5] = "I want to built it toooo";
meSaid[6] = "don't think too much, enjoy this";
meSaid[7] = "Finally... Marry Christmas 2018 ❤️💚💙";
// khởi tạo data để mở khóa hidden
for (var i = 0; i < maxData; i++) {
    myData[i] = "";
    key[i] = "";
}
myData[1] = document.getElementById("data1");
myData[2] = document.getElementById("data2");
myData[3] = document.getElementById("data3");
myData[4] = document.getElementById("data4");
myData[5] = document.getElementById("data5");
myData[6] = document.getElementById("data6");
myData[7] = document.getElementById("data7");
key[1] = document.getElementById("key1");
key[2] = document.getElementById("key2");
key[3] = document.getElementById("key3");
key[4] = document.getElementById("key4");
key[5] = document.getElementById("key5");
key[6] = document.getElementById("key6");
key[7] = document.getElementById("key7");




function openTheLoginGate() {
    var x = document.getElementById("divOpen");
    x.style.display = "inline";
}


//______________ Prjectile motion - Snow Ball!!!

var canvas, context, grd;

var xx, yy, rr; //Center and radius of circle
var v0, alpha; //Launch speed and angle
var alpharad, g = 9.81; //Angle as radians and the acceleration of gravity
var t = 0; //Time

//When the page loads, the circle is in the initial position
window.onload = function () {
    canvas = document.getElementById("myCanvas");
    context = canvas.getContext("2d");

    //Initial position
    rr = 10;
    xx = rr;
    yy = canvas.height - rr;

    //Draw the circle: center (xx, yy) and radius r
    context.arc(xx, yy, rr, 0, 2 * Math.PI);
    context.stroke();
}

//Animation begins
function projectileMotion() {
    //Initial values
    t = 0;
    v0 = 20;
    alpha = 60;
    alpharad = alpha * Math.PI / 180;
    setTimeout("drawFrame()", 20); //drawFrame is called after 20 milliseconds
}

//Function draws the circle in a new position
function drawFrame() {
    //Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    //Calculate xx and t at time t and draw the circle in this new position
    context.beginPath();
    t = t + 0.02;
    xx = Math.floor(rr + (v0 * Math.cos(alpharad) * t) * 10);
    yy = Math.floor(canvas.height - rr - (v0 * Math.sin(alpharad) * t - 0.5 * g * t * t) * 10) - 1;
    context.arc(xx, yy, rr, 0, 2 * Math.PI);
    context.stroke();

    //If the object is not on the ground and it is still inside the canvas, call drawFrame-function again
    if (xx < canvas.width + rr && xx > -rr && yy < canvas.height - rr && yy > -rr) {
        setTimeout("drawFrame()", 20);
    }

}


//______________ show data
function show() {
    if (count == 0) {
        var x = document.getElementById("DataSet");
        x.style.display = "inline";
        document.getElementById("youSaid").innerHTML = meSaid[0];
        count++;
    } else if (count <= maxData) {
        for (var i = 0; i < maxData; i++) {
            if (count == i) {
                myData[count].style.display = "inline";
                key[count].style.display = "inline";
                randomNumber = Math.floor(Math.random() * 5) + 1;
                randomColor = Math.floor(Math.random() * 4096).toString(19);
                randomFontSize = Math.floor(Math.random() * 13 + 19);
                document.getElementById("youSaid").innerHTML = "<div style='color:#" + randomColor + ";font-size: " + randomFontSize + "px;'>" + meSaid[count] + "</div>";
                count++;
                break;
            }
        }
    } else {
        count++;
        randomNumber = Math.floor(Math.random() * 5) + 1;
        randomColor = Math.floor(Math.random() * 4096).toString(19);
        randomFontSize = Math.floor(Math.random() * 13 + 19);
        var rdRight = Math.floor(Math.random() * 5) + 1,
            rdWrong = Math.floor(Math.random() * 5) + 1;
        document.getElementById("youSaid").innerHTML = "You went the wrong way :ppp " + "<div style='color:#" + randomColor + ";font-size: " + randomFontSize + "px;'>" + youSaidIfRight[rdRight] + " " + youSaidIfWrong[rdWrong] + "</div>";
    }
}

//___________ draw Line, Circle, Linear Gradient or Image here


function getRandomColor() {
    var digits = "0123456789ABCDEF";
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += digits[Math.floor(Math.random() * 16)];
    }
    return color;
}

function drawYouWant() {
    var x = document.getElementById("mySelect").value;
    var x1 = Math.random() * 300,
        y1 = Math.random() * 150,
        x2 = Math.random() * 300,
        y2 = Math.random() * 150;
    if (x == "Line") {
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(x2, y2);
        ctx.lineTo(x1, y1);
        ctx.strokeStyle = getRandomColor();
        ctx.stroke();
    }
    if (x == "Circle") {

        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(x1 / 2, y1 / 2, y2 / 2, 0, 2 * Math.PI);
        ctx.strokeStyle = getRandomColor();
        ctx.stroke();
    }
    if (x == "Linear Gradient") {
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        var gradient = ctx.createLinearGradient(20, 0, 110, 0);

        // Add three color stops
        gradient.addColorStop(0, getRandomColor());
        gradient.addColorStop(0.1, getRandomColor());
        gradient.addColorStop(0.2, getRandomColor());
        gradient.addColorStop(0.3, getRandomColor());
        gradient.addColorStop(0.4, getRandomColor());
        gradient.addColorStop(0.5, getRandomColor());
        gradient.addColorStop(0.6, getRandomColor());
        gradient.addColorStop(0.7, getRandomColor());
        gradient.addColorStop(0.8, getRandomColor());
        gradient.addColorStop(0.9, getRandomColor());
        gradient.addColorStop(1, getRandomColor());

        // Set the fill style and draw a rectangle
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 500, 200);
    }
    if (x == "Radial Gradient") {
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        var gradient = ctx.createRadialGradient(110, 90, 30, 100, 100, 70);
        gradient.addColorStop(0, getRandomColor());
        gradient.addColorStop(.9, getRandomColor());
        gradient.addColorStop(1, getRandomColor());
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 500, 200);
    }
    // Star Guardian images from League of Legend
    if (x == "Image") {
        var num = Math.floor(Math.random() * 4) + 1;
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        var img = document.getElementById(num);
        var rx1 = Math.random() * 50,
            rx2 = Math.random() * 50;
        ctx.drawImage(img, rx1, rx2, 150, 100);
    }
}


// first form

function isIdentify() {
    var idIdentify = document.getElementById("idIdentify").value;
    var divLogin = document.getElementById("divLogin");
    if (idIdentify != "Niii cute") {
        divLogin.style.display = "none";
        randomNumber = Math.floor(Math.random() * 5) + 1;
        document.getElementById("youSaid").innerHTML = youSaidIfWrong[randomNumber];
        var x = document.getElementById("resetAll");
        x.style.display = "inline";
    } else {
        var x = document.getElementById("spanOpen1");
        randomNumber = Math.floor(Math.random() * 5) + 1;
        randomColor = Math.floor(Math.random() * 4096).toString(19);
        randomFontSize = Math.floor(Math.random() * 13 + 19);
        document.getElementById("youSaid").innerHTML = "<div style='color:#" + randomColor + ";font-size: " + randomFontSize + "px;'>" + youSaidIfRight[randomNumber] + "</div>";
        //show 
        x.style.display = "inline";
    }
}

// second form
function isMeLJ() {
    var idMeLJ = document.getElementById("idMeLJ").value;
    var divLogin = document.getElementById("divLogin");
    if (idMeLJ != "Liii cool") {
        divLogin.style.display = "none";
        randomNumber = Math.floor(Math.random() * 5) + 1;
        document.getElementById("youSaid").innerHTML = "<div style='color:#" + randomColor + ";font-size: " + randomFontSize + "px;'>" + youSaidIfWrong[randomNumber] + "</div>";
        var x = document.getElementById("resetAll");
        x.style.display = "inline";
    } else {
        var rd1 = 0,
            rd2 = 0,
            checkAI = 0;
        rd1 = Math.floor(Math.random() * 100000000000000) + 10000000;
        rd2 = Math.floor(Math.random() * 100000000000000) + 10000000;
        // checking code
        checkAI = Number(prompt("AI checking - Are you an AI or Human? Please answer this question! ||| " + rd1.toString() + " * " + rd2.toString() + " = ?"));
        if (checkAI == 1302) {
            var x = document.getElementById("spanOpen2"),
                y = document.getElementById("divFirstButton");
            randomNumber = Math.floor(Math.random() * 5) + 1;
            randomColor = Math.floor(Math.random() * 4096).toString(19);
            randomFontSize = Math.floor(Math.random() * 13 + 19);
            document.getElementById("youSaid").innerHTML = "<div style='color:#" + randomColor + ";font-size: " + randomFontSize + "px;'>" + youSaidIfRight[randomNumber] + "</div>";
            x.style.display = "inline";
            y.style.display = "none";
        } else {
            var divLogin = document.getElementById("divLogin");
            divLogin.style.display = "none";
            youSaid.style.display = "none";
            var x = document.getElementById("resetAll");
            x.style.display = "inline";
        }
    }
}