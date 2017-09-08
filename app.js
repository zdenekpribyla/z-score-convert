// html select
var zScoreElement = document.getElementById('z-score-input-value');
var tScoreElement = document.getElementById('t-score-input-value');
var iqScoreElement = document.getElementById('iq-score-input-value');
var wechScoreElement = document.getElementById('wech-score-input-value');
var clickButtonElement = document.getElementById('click-button');

var getValues = function () {
    console.log('getValues');
    return {
        zScore: Number(zScoreElement.value),
        tScore: Number(tScoreElement.value)
    }
};




var calculate = function (inputData) {
    return (10 * inputData.zScore) - 50;

};

clickButtonElement.addEventListener('click', function () {
    console.log('kliknul sem na button');
    tScoreElement.value = calculate(getValues())
});


