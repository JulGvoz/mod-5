var canvas = document.getElementById("my_canvas");
    canvas.width = 600;
    canvas.height = 600;
    var ctx = canvas.getContext("2d");

    ctx.font = "20px Georgia";

    function shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }

    function nextPermutation(array) {
    var i = array.length - 1;
    while (i > 0 && array[i - 1] >= array[i]) {
        i--;
    }

    if (i <= 0) {
        return false;
    }

    var j = array.length - 1;

    while (array[j] <= array[i - 1]) {
        j--;
    }

    var temp = array[i - 1];
    array[i - 1] = array[j];
    array[j] = temp;

    j = array.length - 1;

    while (i < j) {
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        i++;
        j--;
    }

    return array;
}

    var numbers  = [];
    for (var i = 1; i <= 25; i++) {
        numbers.push(i);
    }


    var run = function() {
        ctx.clearRect(0, 0, 600, 600);
        for (var i = 0; i < numbers.length; i++) {
            var theta = i*2*Math.PI/numbers.length;
            var radius = 150;
            var dr = 25;
            // console.log(theta);
            ctx.fillText(numbers[i], Math.cos(theta)*radius+300, Math.sin(theta)*radius+300);
            ctx.fillText(numbers[i] % 5, Math.cos(theta)*(radius +dr)+300, Math.sin(theta)*(radius +dr)+300);
            var sum = 0;
            for (var j = 0; j < 5; j++) {
                sum += numbers[(i + j) % numbers.length];
            }
            ctx.fillText(sum, Math.cos(theta)*(radius + 2*dr)+300, Math.sin(theta)*(radius + 2*dr)+300);
            ctx.fillText(sum % 5, Math.cos(theta)*(radius + 3*dr)+300, Math.sin(theta)*(radius + 3*dr)+300);
        }
    };