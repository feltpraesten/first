input.onButtonPressed(Button.A, function () {
    Antal += 1
    basic.showNumber(Antal)
    for (let index = 0; index < Antal; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . . . .
            . # . # .
            # . . . #
            `)
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
        basic.clearScreen()
    }
    basic.showNumber(Antal)
})
input.onButtonPressed(Button.B, function () {
    Antal = 0
    basic.showNumber(Antal)
    basic.showString("Hej Clapton")
})
let Antal = 0
basic.showString("Hej Clapton!")
