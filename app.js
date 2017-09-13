// html select
var zScoreElement = document.getElementById('z-score-input-value');
var tScoreElement = document.getElementById('t-score-input-value');
var iqScoreElement = document.getElementById('iq-score-input-value');
var weScoreElement = document.getElementById('wech-score-input-value');
var clickButtonElement = document.getElementById('click-button');

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


    var zConvertT = function (inputData) {
       return (10 * inputData.zScore) + 50;
    };
    var zConvertIq = function (inputData) {
       return (15 * inputData.zScore) + 100;
    };
    var zConvertWe = function (inputData) {
        return (3 * inputData.zScore) + 10;
    };
    var tConvertZ = function (inputData) {
        return (inputData.tScore / 10) - 5;
    };

    var zConvertIQfromT = function () {
        return ( 15 * tConvertZ(getValues())) + 100;
    };

    var zConvertWefromT = function () {
        return (3 * tConvertZ(getValues())) + 10
    };

    var iqConvertZ = function (inputData) {
        return (inputData.iqScore - 100) / 15
    };

    var zConvertTfromIq = function () {
        return (10 * iqConvertZ(getValues())) + 50
    };

    var zConvertWefromIq = function () {
        return 10 + (3 * iqConvertZ(getValues()))
    };
    
    var weConvertZ = function (inputData) {
        return (inputData.weScore - 10) / 3
    };

    var zConvertTfromWe = function () {
        return (10 * weConvertZ(getValues())) + 50
    };

    var zConvertIqfromWe = function () {
        return 100 + (15 * weConvertZ(getValues()))
    };

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




