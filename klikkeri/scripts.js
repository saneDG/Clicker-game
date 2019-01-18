var money = 10;

var clickMultiplier = 1;
var timeMultiplier = 1;

var time1Price = 10;
var timeMulti = 1.5;

var type2Price = 500;
var typeMulti = 1.15;

var keyDownCount10 = 0;
var keyDownCount10k = 0;
var keyDownCount100k = 0;

var bitArray1 = [""];
var bitArray2 = [""];
var bitArray3 = [""];

var y = 1;
var y1 = 1;
var y2 = 1;
var y3 = 1;

var codeLinesNeeded1 = 5;
var codeLinesNeeded2 = 600;
var codeLinesNeeded3 = 500;
var codeLinesNeeded4 = 10000;

var remainingLinesOfCode1 = 0;
var remainingLinesOfCode2 = 0;
var remainingLinesOfCode3 = 0;

var lps = 0;


var update = setInterval(function () {
    money = money + timeMultiplier;
    var moneyString = String(money.toFixed(1));
    document.getElementById("vbuckamount").innerHTML = moneyString;
    checkpoint1();
}, 1);

function hideBoxes() {
    document.getElementById("box2").style.display = "none";
    document.getElementById("box3").style.display = "none";
}

function clickEvent() {
    money = money + clickMultiplier;
    var moneyString = String(money.toFixed(1))
    document.getElementById("vbuckamount").innerHTML = moneyString;
    checkpoint1();
}

function checkpoint1() {
    keyDownCount10 = keyDownCount10 + clickMultiplier;
    keyDownCount10 = keyDownCount10 + timeMultiplier;
    if (keyDownCount10 >= codeLinesNeeded1) {
        document.getElementById("box1code").innerHTML = bitArray1.join("");
        y1 = y1 + 1;
        bitArray1[y1] = random01();
        keyDownCount10 = 0;
        keyDownCount10k = keyDownCount10k + 1;
        checkpoint2();
    }
}

function checkpoint2() {
    if (keyDownCount10k >= codeLinesNeeded2) {
        document.getElementById("box1code").innerHTML = "";
        bitArray1 = [""];
        y2 = y2 + 1;
        bitArray2[y2] = random01();
        document.getElementById("box2code").innerHTML = bitArray2.join("");
        keyDownCount10k = 0;
        remainingLinesOfCode2 = 10;
        keyDownCount100k = keyDownCount100k + 1;
        money = money + 10000;
        checkpoint3();
        document.getElementById("box2").style.display = "block";
    }
}

function checkpoint3() {
    if (keyDownCount100k >= codeLinesNeeded3) {
        document.getElementById("box2code").innerHTML = "";
        bitArray2 = [""];
        y3 = y3 + 1;
        bitArray3[y3] = random01();
        document.getElementById("box3code").innerHTML = bitArray3.join("");
        keyDownCount100k = 0;
        remainingLinesOfCode2 = 0;
        document.getElementById("box3").style.display = "block";
    }
}

function upgrade1() {
    if (money >= time1Price) {
        if (timeMultiplier <= 0){
            money = money - time1Price;
            timeMultiplier = 0.01;
        }
        else
        money = money - time1Price;
        var vbuckString = String(money.toFixed(1));
        document.getElementById("vbuckamount").innerHTML = vbuckString;
        timeMultiplier = timeMultiplier * timeMulti;
        time1Price = time1Price * 2;
        document.getElementById("up1price").innerHTML = time1Price.toFixed(1);
        document.getElementById("timePerformance").innerHTML = "Hire a programmer (Time profit:" + timeMultiplier.toFixed(2) + ")";
    }
    else {
        alert("not enough money for that boi");
    }
}

function upgrade2() {
    if (money > type2Price) {
        money = money - type2Price;
        var vbuckString = String(money.toFixed(1))
        document.getElementById("vbuckamount").innerHTML = vbuckString;
        clickMultiplier = clickMultiplier * typeMulti;
        type2Price = type2Price * 1.6;
        document.getElementById("up2price").innerHTML = type2Price.toFixed(2);
        document.getElementById("typingPerformance").innerHTML = "Better keyboard (Type speed:" + clickMultiplier.toFixed(2) + ")";
    }
    else {
        alert("not enough money for that boi");
    }
}

function random01() {
    var text = "";
    var possible = "10";
    for (var i = 0; i < 1; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

var oldmoney = 0;

var linesInterval = setInterval(function linesPerSecond() {
    lps = money - oldmoney;
    console.log(lps);
    oldmoney = money;
    document.getElementById("lps").innerHTML = "L/s: " + lps.toFixed(5);
}, 1000);