basic.forever(function () {
    if (input.temperature() < 7) {
        basic.showLeds(`
            # # # # #
            # . . . .
            # . . . .
            # . . . .
            # # # # #
            `)
    }
    if (input.temperature() >= 7 && input.temperature() < 11) {
        basic.showLeds(`
            . . . # #
            . . . . #
            . . . . #
            . . # . #
            . . # # #
            `)
    }
    if (input.temperature() >= 11 && input.temperature() < 17) {
        basic.showLeds(`
            # . . . #
            # . . . #
            # # # # #
            # . . . #
            # . . . #
            `)
    }
    if (input.temperature() >= 17 && input.temperature() <= 60) {
        basic.showLeds(`
            # # # # #
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    }
})
