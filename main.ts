radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        if (mi_jugada == 1) {
            basic.showString("Empate")
        }
        if (mi_jugada == 2) {
            basic.showString("Ganaste")
        }
        if (mi_jugada == 3) {
            basic.showString("Perdiste")
        }
    }
    if (receivedNumber == 2) {
        if (mi_jugada == 1) {
            basic.showString("Perdiste")
        }
        if (mi_jugada == 2) {
            basic.showString("Empate")
        }
        if (mi_jugada == 3) {
            basic.showString("Ganaste")
        }
    }
    if (receivedNumber == 3) {
        if (mi_jugada == 1) {
            basic.showString("ganaste")
        }
        if (mi_jugada == 2) {
            basic.showString("Perdiste")
        }
        if (mi_jugada == 3) {
            basic.showString("Empate")
        }
    }
})
input.onButtonPressed(Button.A, function () {
    mi_jugada = 1
    radio.sendNumber(1)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    mi_jugada = 0
})
input.onButtonPressed(Button.AB, function () {
    mi_jugada = 3
    radio.sendNumber(3)
    basic.showLeds(`
        # # . . #
        # # . # .
        . . # . .
        # # . # .
        # # . . #
        `)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    mi_jugada = 2
    radio.sendNumber(2)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.clearScreen()
})
let mi_jugada = 0
radio.setGroup(19)
