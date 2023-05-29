radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        if (mijugada == 1) {
            basic.showString("Empate")
        } else if (mijugada == 2) {
            basic.showString("Perdiste")
        } else {
            basic.showString("Ganaste")
        }
    }
    if (receivedNumber == 2) {
        if (mijugada == 1) {
            basic.showString("Perdiste")
        } else if (mijugada == 2) {
            basic.showString("Empate")
        } else {
            basic.showString("Ganaste")
        }
    }
    if (receivedNumber == 3) {
        if (mijugada == 1) {
            basic.showString("Ganaste")
        } else if (mijugada == 2) {
            basic.showString("Perdiste")
        } else {
            basic.showString("Empate")
        }
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    mijugada = 1
    radio.sendNumber(1)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # # . . #
        # # . # .
        . . # . .
        # # . # .
        # # . . #
        `)
    mijugada = 3
    radio.sendNumber(3)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    mijugada = 2
    radio.sendNumber(2)
})
let mijugada = 0
radio.setGroup(19)
basic.forever(function () {
	
})
