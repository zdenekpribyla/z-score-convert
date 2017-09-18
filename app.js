// html select
var zScoreElement = document.getElementById('z-score-input-value');
var tScoreElement = document.getElementById('t-score-input-value');
var iqScoreElement = document.getElementById('iq-score-input-value');
var weScoreElement = document.getElementById('wech-score-input-value');
var stenElement = document.getElementById('sten-input-value');
var stanineElement = document.getElementById('stanine-input-value');

var inputsAllElement = document.getElementsByClassName('btn');


var getValues = function () {
     console.log('getValues');
     return {
        z: Number(zScoreElement.value),
        t: Number(tScoreElement.value),
        iq: Number(iqScoreElement.value),
        we: Number(weScoreElement.value)
    }
};

//rounded to two decimals
var roundToTwo = function (num) {
    return +(Math.round(num + "e+2")  + "e-2");
};

var roundToZero = function (num) {
    return +(Math.round(num + "e+0")  + "e-0");
};

var calculateZ = function (inputType, value) {
    var equations = {
        t: (value - 50) / 10,
        iq: (value - 100) / 15,
        we: (value - 10) / 3
    };
    return equations[inputType]
};

var calculateT = function (z) {
    return 10 * z + 50
};

var calculateIq = function (z) {
    return 15 * z + 100
};

var calculateWe = function (z) {
    return 3 * z + 10
};







var calculate = function (event) {
    console.log('calculate()');
    var clickedButton = event.target || event.srcElement;
    var inputType = clickedButton.id;
    if (inputType === 'z') {
        z = getValues().z;



    } else {
        z = calculateZ(inputType, getValues()[inputType]);
        zScoreElement.value = roundToTwo(z)

    }

    tScoreElement.value = roundToZero(calculateT(z));
    iqScoreElement.value = roundToZero(calculateIq(z));
    weScoreElement.value = roundToZero(calculateWe(z));
    stenElement.value = calculateSten();
    stanineElement.value = calculateStanine()
};

for (var index = 0; index < inputsAllElement.length; ++index) {
    var singleInputElement = inputsAllElement[index];

    singleInputElement.addEventListener('click', function (event) {
        console.log('addEventListener - click');
        calculate(event)
    })
}


var calculateSten = function () {
    console.log('calculatesten()');
    console.log('z:', z);

    // if (z <= 0) {
    //     return 1
    // }
    // else {
    //     return 2
    // }

    if (-2 > z) {
        console.log('sten 1');
        return 1
    }
    else if (-2 <= z && z < -1.5) {
        console.log('sten 2');
        return 2
    }
    else if (-1.5 <= z && z < -1) {
        console.log('sten 3');
        return 3
    }
    else if (-1 <= z && z < -0.5) {
        console.log('sten 4');
        return 4
    }
    else if (-0.5 <= z && z < 0) {
        console.log('sten 5');
        return 5
    }
    else if (0 <= z && z < 0.5) {
        console.log('sten 6');
        return 6
    }
    else if (0.5 <= z &&  z < 1) {
        console.log('sten 7');
        return 7
    }
    else if (1 <= z && z < 1.5) {
        console.log('sten 8');
        return 8
    }
    else if (1.5 <= z && z < 2) {
        console.log('sten 9');
        return 9
    }
    else {
        console.log('sten 10');
        return 10
    }
};

var calculateStanine = function () {
    console.log('calculateStanine()');
    console.log('z:', z);


    if (-1.75 > z) {
        console.log('sten 1');
        return 1
    }
    else if (-1.75 <= z && z < -1.25) {
        console.log('sten 2');
        return 2
    }
    else if (-1.25 <= z && z < -0.75) {
        console.log('sten 3');
        return 3
    }
    else if (-0.75 <= z && z < -0.25) {
        console.log('sten 4');
        return 4
    }
    else if (-0.25 <= z && z < 0.25) {
        console.log('sten 5');
        return 5
    }
    else if (0.25 <= z && z < 0.75) {
        console.log('sten 6');
        return 6
    }
    else if (0.75 <= z &&  z < 1.25) {
        console.log('sten 7');
        return 7
    }
    else if (1.25 <= z && z < 1.75) {
        console.log('sten 8');
        return 8
    }
    else {
        console.log('sten 9');
        return 9
    }
};


// var stenResult = calculateSten();



