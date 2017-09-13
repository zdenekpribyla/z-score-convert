// html select
var zScoreElement = document.getElementById('z-score-input-value');
var tScoreElement = document.getElementById('t-score-input-value');
var iqScoreElement = document.getElementById('iq-score-input-value');
var weScoreElement = document.getElementById('wech-score-input-value');

var zScoreButtonElement = document.getElementById('z-score-button');
var tScoreButtonElement = document.getElementById('t-score-button');
var iqScoreButtonElement = document.getElementById('iq-score-button');
var weScoreButtonElement = document.getElementById('we-score-button');

var getValues = function () {
     console.log('getValues');
     return {
        z: Number(zScoreElement.value),
        t: Number(tScoreElement.value),
        iq: Number(iqScoreElement.value),
        we: Number(weScoreElement.value)
    }
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

    }

    //button Z convert to T, IQ, We
zScoreButtonElement.addEventListener('click', function () {

    console.log('preved Z Skore');
    tScoreElement.value = zConvertT(getValues());
    iqScoreElement.value = zConvertIq(getValues());
    weScoreElement.value = zConvertWe(getValues())
    // zDisplayTElement.innerHTML = 'T Skor je ' + zConvertT(getValues()).toFixed(2);
    // zDisplayIqElement.innerHTML = 'IQ Skor je ' + zConvertIq(getValues()).toFixed(2);
    // zDisplayWeElement.innerHTML = 'We Skor je ' + zConvertWe(getValues()).toFixed(2)
});

    // button T convert to Z, IQ, We
tScoreButtonElement.addEventListener('click', function () {

    console.log('preved T Skore');
    zScoreElement.value = tConvertZ(getValues());
    iqScoreElement.value = zConvertIQfromT(getValues());
    weScoreElement.value = zConvertWefromT(getValues());
    // tDisplayZElement.innerHTML = 'Z Skor je ' + tConvertZ(getValues()).toFixed(2);
    // tDisplayIqElement.innerHTML = 'IQ Skor je ' + zConvertIQfromT().toFixed(2);
    // tDisplayWeElement.innerHTML = 'We Skor je ' + zConvertWefromT(getValues()).toFixed(2)
});


iqScoreButtonElement.addEventListener('click', function () {

    console.log('preved T Skore');
    zScoreElement.value = iqConvertZ(getValues());
    tScoreElement.value = zConvertTfromIq(getValues());
    weScoreElement.value = zConvertWefromIq(getValues());
});

weScoreButtonElement.addEventListener('click', function () {

    console.log('preved T Skore');
    zScoreElement.value = weConvertZ(getValues());
    tScoreElement.value = zConvertTfromWe(getValues());
    iqScoreElement.value = zConvertIqfromWe(getValues());
});




