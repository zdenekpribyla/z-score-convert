// html select
var zScoreElement = document.getElementById('z-score-input-value')
var tScoreElement = document.getElementById('t-score-input-value')
var iqScoreElement = document.getElementById('iq-score-input-value')
var weScoreElement = document.getElementById('wech-score-input-value')

var inputsAllElement = document.getElementsByClassName('btn')

var getValues = function () {
  console.log('getValues')
  return {
    z: Number(zScoreElement.value),
    t: Number(tScoreElement.value),
    iq: Number(iqScoreElement.value),
    we: Number(weScoreElement.value)
  }
}

var calculateZ = function (inputType, value) {
  var equations = {
    t: (value - 50) / 10,
    iq: (value - 100) / 15,
    we: (value - 10) / 3
  }

  return equations[inputType]
}

var calculateIQ = function (z) {
  return 15 * z + 100
}

var calculateWe = function (z) {
  return 3 * z + 10
}

var calculateT = function (z) {
  return 10 * z + 50
}

var calculate = function (event) {
  console.log('calculate()')
  var z
  var clickedButton = event.target || event.srcElement
  console.log(clickedButton.id)

  var inputType = clickedButton.id

  if (inputType === 'z') {
    z = getValues().z
  } else {
    z = calculateZ(inputType, getValues()[inputType])
    zScoreElement.value = z
  }

  tScoreElement.value = calculateT(z)
  iqScoreElement.value = calculateIQ(z)
  weScoreElement.value = calculateWe(z)
}

for (var index = 0; index < inputsAllElement.length; ++index) {
  var singleInputElement = inputsAllElement[index]

  singleInputElement.addEventListener('click', function (event) {
    console.log('addEventListener - click')
    calculate(event)
  })
}