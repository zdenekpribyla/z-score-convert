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



    var tConvert = function (inputData) {
        console.log('tConvert');
    return (10 * inputData.zScore) + 50;

};
    var iqScore = function (inputData) {
    return (15 * inputData.zScore) + 100;
};
    var weScore = function (inputData) {
    return (3 * inputData.zScore) + 10;
};


    //clickButtonElement.addEventListener('click', function () {
    clickButtonElement.addEventListener('click', function () {
        var emptZcore = document.forms["form1"]["z-score-input-value"].value;
        if (emptZcore >= 1) {

            console.log('kliknul sem na button');
            tScoreElement.value = tConvert(getValues());
            iqScoreElement.value = iqScore(getValues());
            weScoreElement.value = weScore(getValues())
        }

    else console.log('nic se nestalo')

});




