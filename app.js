// html select
var zScoreElement = document.getElementById('z-score-input-value');
var tScoreElement = document.getElementById('t-score-input-value');
var iqScoreElement = document.getElementById('iq-score-input-value');
var weScoreElement = document.getElementById('wech-score-input-value');
var stenElement = document.getElementById('sten-input-value');
var stanineElement = document.getElementById('stanine-input-value');
var percentileElement = document.getElementById('percentile-input-value');

var inputsAllElement = document.getElementsByClassName('btn-1');
var inputReset = document.getElementById('r');


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
    stanineElement.value = calculateStanine();
    percentileElement.value = pzScore(z)
};

for (var index = 0; index < inputsAllElement.length; ++index) {
    var singleInputElement = inputsAllElement[index];

    singleInputElement.addEventListener('click', function (event) {
        console.log('addEventListener - click');
        calculate(event)
    })
}

inputReset.addEventListener('click', function () {
    console.log('kliknul sem na reset');
    zScoreElement.value = '';
    tScoreElement.value = '';
    iqScoreElement.value = '';
    weScoreElement.value = '';
    stenElement.value = '';
    stanineElement.value = '';
    percentileElement.value = ''
});

var calculateSten = function () {
    console.log('calculatesten()');
    console.log('z:', z);


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


// percentile convertor
var Z_MAX = 6;

function pzScore(z)
{
    var y, x, w;
    if (z == 0.0)
    {
        x = 0.0;
    }
    else
    {
        y = 0.5 * Math.abs(z);
        if (y > (Z_MAX * 0.5))
        {
            x = 1.0;
        }
        else if (y < 1.0)
        {
            w = y * y;
            x = ((((((((0.000124818987 * w
                - 0.001075204047) * w + 0.005198775019) * w
                - 0.019198292004) * w + 0.059054035642) * w
                - 0.151968751364) * w + 0.319152932694) * w
                - 0.531923007300) * w + 0.797884560593) * y * 2.0;
        }
        else
        {
            y -= 2.0;
            x = (((((((((((((-0.000045255659 * y
                + 0.000152529290) * y - 0.000019538132) * y
                - 0.000676904986) * y + 0.001390604284) * y
                - 0.000794620820) * y - 0.002034254874) * y
                + 0.006549791214) * y - 0.010557625006) * y
                + 0.011630447319) * y - 0.009279453341) * y
                + 0.005353579108) * y - 0.002141268741) * y
                + 0.000535310849) * y + 0.999936657524;
        }
    }
    return z > 0.0 ? ((x + 1.0) * 0.5) : ((1.0 - x) * 0.5);
}

// function calc()
// {
//     //var z = document.getElementById("z").value;
//     if (Math.abs(z) > Z_MAX)
//     {
//         alert("Enter z value must be between -6 and 6.");
//     }
//     else
//     {
//         var lp = pzscore(zScoreElement);
//         percentileElement.value = (lp * 100).toFixed(2)+" %";
//
//         // var rp = 1 - lp;
//         // document.getElementById("rtp").value = (rp * 100).toFixed(2)+" %";
//         // var tp = 2 * rp;
//         // document.getElementById("ttp").value = (tp * 100).toFixed(2)+" %";
//         // var cl = 1 - tp;
//         // document.getElementById("clp").value = (cl * 100).toFixed(2)+" %";
//     }
// }



