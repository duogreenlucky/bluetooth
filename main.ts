input.onPinPressed(TouchPin.P0, function () {
    if (1 == 開機狀態) {
        pins.digitalWritePin(DigitalPin.P5, 1)
    }
})
input.onPinPressed(TouchPin.P2, function () {
    if (1 == 開機狀態) {
        pins.digitalWritePin(DigitalPin.P7, 1)
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (1 == 開機狀態) {
        pins.digitalWritePin(DigitalPin.P6, 1)
    }
})
let 開機狀態 = 0
開機狀態 = 0
let 控制值 = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.pause(1000)
for (let index = 0; index < 10; index++) {
    basic.showLeds(`
        # # # # #
        # # # # #
        # . # . #
        # # # # #
        # # # # #
        `)
    if (input.buttonIsPressed(Button.AB)) {
        basic.showLeds(`
            . . # . .
            . # # # .
            . . # . .
            . # # # .
            # . . . #
            `)
        basic.pause(1000)
        控制值 = 1
        break;
    }
}
if (1 == 控制值) {
    basic.showLeds(`
        # # # # #
        # . . . .
        # . # # #
        # . . . #
        # # # # #
        `)
    basic.pause(2000)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
        basic.pause(500)
        radio.setGroup(185)
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
            # # # # #
            . . . . #
            # # # # #
            # . . . .
            # # # # #
            `)
        basic.pause(500)
        radio.setGroup(66)
    }
}
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
for (let index = 0; index < randint(4, 8); index++) {
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
}
basic.clearScreen()
開機狀態 = 1
basic.showLeds(`
    . . . . #
    . . . . #
    . . . # .
    # . # . .
    . # . . .
    `)
basic.forever(function () {
    if (1 == 開機狀態) {
        if (input.buttonIsPressed(Button.AB)) {
            basic.pause(500)
            if (input.buttonIsPressed(Button.AB)) {
                basic.pause(1000)
                if (input.buttonIsPressed(Button.AB)) {
                    basic.showLeds(`
                        . . # . .
                        # . # . #
                        # . # . #
                        # . . . #
                        # # # # #
                        `)
                    basic.pause(1000)
                    control.reset()
                }
            }
        }
    }
})
