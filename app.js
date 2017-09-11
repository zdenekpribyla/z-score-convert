// html select
var zScoreElement = document.getElementById('z-score-input-value');
var tScoreElement = document.getElementById('t-score-input-value');
var iqScoreElement = document.getElementById('iq-score-input-value');
var weScoreElement = document.getElementById('wech-score-input-value');
var clickButtonElement = document.getElementById('click-button');

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


    //clickButtonElement.addEventListener('click', function () {
    clickButtonElement.addEventListener('click', function () {
        var emptZscore = document.forms['form1']['z-score-input-value'];
        var emptTscore = document.forms['form1']['t-score-input-value'];
        if (emptZscore < 2) {
            console.log('input je Z Skore');
            tScoreElement.value = zConvertT(getValues());
            iqScoreElement.value = zConvertIq(getValues());
            weScoreElement.value = zConvertWe(getValues())
        }

        if (2 < emptTscore < 10) {
            console.log('input je T skore');
            zScoreElement.value = tConvertZ(getValues());
            iqScoreElement.value = zConvertIq(getValues());
            weScoreElement.value = zConvertWe(getValues())
        }

         else console.log('nic se nestalo')

});




