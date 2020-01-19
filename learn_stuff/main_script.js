var canvas = document.getElementById("my_canvas");
canvas.width = 1600;
canvas.height = 800;
var ctx = canvas.getContext("2d");
var mousex = 0, mousey = 0;

ctx.font = "20px Georgia";

var worldImage = new Image();
worldImage.src = "world.png"

var selected = Math.floor(Math.random()*data.length);
var weightSum = 0;

var currentGuess = 0;

var totalCorrect = 0;

var showAll = false;

function sumWeights() {
    weightSum = 0;

    data.forEach(function(value, index) {
        value.weight = Math.sqrt((currentGuess - value.lastGuessTime)/20) + 2*(1 - (value.correct)/value.attempts);
        weightSum += value.weight;
    });
}

function selectRandomWeighted() {
    sumWeights();
    var selectValue = Math.random()*weightSum;
    var currentSum = 0;
    var index = 0;
    while (currentSum < selectValue) {
        currentSum += data[index].weight;
        index++;
    }
    return index - 1;
}

function loop() {
    ctx.drawImage(worldImage, 0, 0, canvas.width, canvas.height);

    data.forEach(function(value, i) {
        
        if (showAll || selected == i) {
            ctx.beginPath();
            ctx.arc(value.x, value.y, 10, 0, 2 * Math.PI);
            ctx.lineWidth = 3;
            ctx.strokeStyle = "#FF0000";

            if (selected == i) {
                ctx.fillStyle = "green";
            } else {
                ctx.fillStyle = "blue";
            }
    
            ctx.fill();
            ctx.stroke();
        }
        
        
    });
}


function mouseClicked(event) {
    mousex = event.pageX - canvas.offsetLeft;
    mousey = event.pageY - canvas.offsetTop;

    var min_index = 0;
    for (var j = 0; j < data.length; j++) {
        if (dist(mousex, mousey, data[j].x, data[j].y) < dist(mousex, mousey, data[min_index].x, data[min_index].y)) {
                min_index = j;
            }
    }
    selected = min_index;

    console.log(mousex + ", " + mousey);
}


function mouseMove(event) {
    if (event.pageX == null && event.clientX != null) {
        eventDoc = (event.target && event.target.ownerDocument) || document;
        doc = eventDoc.documentElement;
        body = eventDoc.body;

        event.pageX = event.clientX +
          (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
          (doc && doc.clientLeft || body && body.clientLeft || 0);
        event.pageY = event.clientY +
          (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
          (doc && doc.clientTop  || body && body.clientTop  || 0 );
    }

    mousex = event.pageX - canvas.offsetLeft;
    mousey = event.pageY - canvas.offsetTop;
}

function submit() {
    var given_answer = document.getElementById("answer").value;
    var response_element = document.getElementById("response");

    document.getElementById("answer").value = "";

    var options = {
        shouldSort: true,
        tokenize: true,
        matchAllTokens: true,
        includeScore: true,
        threshold: 0.1,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [
          "name"
        ]
    };

    var fuse = new Fuse(data, options);
    var results = fuse.search(given_answer);
    response_element.style.color = "#AA0000";
    if (results.length > 0) {
        var result = results[0].item;
        if (result == data[selected] && Math.abs(given_answer.length - results[0].item.name.length) < 3) {
            response_element.innerHTML = "Teisingai! Teisingas atsakymas yra \"" + result.name + "\"!";
            response_element.style.color = "#00AA00";
            data[selected].correct++;
            data[selected].attempts++;
            totalCorrect++;
        } else {
            response_element.innerHTML = "Neteisingai! Teisingas atsakymas buvo \"" + data[selected].name + "\"!";
            data[selected].attempts++;
        }
    } else {
        response_element.innerHTML = "Neteisingai! Teisingas atsakymas buvo \"" + data[selected].name + "\"!";
        data[selected].attempts++;
    }
    // data[selected].weight = 1 - (data[selected].correct) / data[selected].attempts;
    // console.log(results);
    currentGuess++;
    data[selected].lastGuessTime = currentGuess;
    selected = selectRandomWeighted();
    document.getElementById("total").innerHTML = "( " + totalCorrect + " / " + currentGuess + " ): " + Math.round(100*totalCorrect/Math.max(currentGuess, 80))/10 ; 
}

// canvas.addEventListener('click', mouseClicked, false);
document.onmousemove = mouseMove;
document.getElementById("submit").onclick = submit;

var input = document.getElementById("answer");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    // event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("submit").click();
  }
});

document.getElementById("show_all").onclick = function() {
    showAll = document.getElementById("show_all").checked;
}