// html select
var zScoreElement = document.getElementById('z-score-input-value');
var tScoreElement = document.getElementById('t-score-input-value');
var iqScoreElement = document.getElementById('iq-score-input-value');
var weScoreElement = document.getElementById('wech-score-input-value');
var clickButtonElement = document.getElementById('click-button');

var zScoreButtonElement = document.getElementById('z-score-button');
var zDisplayTElement = document.getElementById('z-display-t');
var zDisplayIqElement = document.getElementById('z-display-iq');
var zDisplayWeElement = document.getElementById('z-display-we');

var tScoreButtonElement = document.getElementById('t-score-button');
var tDisplayZElement = document.getElementById('t-display-z');
var tDisplayIqElement = document.getElementById('t-display-iq');
var tDisplayWeElement = document.getElementById('t-display-we');

var getValues = function () {
     console.log('getValues');
     return {
        zScore: Number(zScoreElement.value),
        tScore: Number(tScoreElement.value),
        iqScore: Number(iqScoreElement.value),
        weScore: Number(weScoreElement.value)
    }
};



    var zConvertT = function (inputData) {
       return  (10 * inputData.zScore) + 50;
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

    //button Z convert to T, IQ, We
zScoreButtonElement.addEventListener('click', function () {

    console.log('preved Z Skore');
    zDisplayTElement.innerHTML = 'T Skor je ' + zConvertT(getValues()).toFixed(2);
    zDisplayIqElement.innerHTML = 'IQ Skor je ' + zConvertIq(getValues()).toFixed(2);
    zDisplayWeElement.innerHTML = 'We Skor je ' + zConvertWe(getValues()).toFixed(2)
});

    // button T convert to Z, IQ, We
tScoreButtonElement.addEventListener('click', function () {

    console.log('preved T Skore');
    tDisplayZElement.innerHTML = 'Z Skor je ' + tConvertZ(getValues()).toFixed(2);
    tDisplayIqElement.innerHTML = 'IQ Skor je ' + zConvertIQfromT().toFixed(2);
    tDisplayWeElement.innerHTML = 'We Skor je ' + zConvertWefromT(getValues()).toFixed(2)
});


// button T convert to Z, IQ, We


    //clickButtonElement.addEventListener('click', function () {
    // clickButtonElement.addEventListener('click', function () {
    //     //var emptZscore = document.forms['form1']['z-score-input-value'];
    //     var emptZscore = zScoreElement;
    //     var emptTscore = document.forms['form1']['t-score-input-value'];
    //     if (zScore >= 0) {
    //         console.log('input je Z Skore');
    //         tScoreElement.value = zConvertT(getValues());
    //         iqScoreElement.value = zConvertIq(getValues());
    //         weScoreElement.value = zConvertWe(getValues())
    //     }

        // if (2 < emptTscore < 10) {
        //     console.log('input je T skore');
        //     zScoreElement.value = tConvertZ(getValues());
        //     iqScoreElement.value = zConvertIq(getValues());
        //     weScoreElement.value = zConvertWe(getValues())
        // }
//
//          else console.log('nic se nestalo')
//
// });




