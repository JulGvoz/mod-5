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

function distSq(x1, y1, x2, y2) {
    return (x2 - x1)*(x2 - x1) + (y2 - y1)*(y2 - y1);
}

function dist(x1, y1, x2, y2) {
    return Math.sqrt(distSq(x1, y1, x2, y2));
}