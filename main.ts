let valueHigh = 0
let valueLow = 0
let comment = ""
radio.setGroup(242)
basic.showLeds(`
    # # . # #
    . . . . .
    . # # # .
    . . # . .
    . . # . .
    `)
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        comment = "Strafing"
        radio.sendValue("M1", Math.map(input.rotation(Rotation.Roll), -90, 90, -100, 100))
        radio.sendValue("M2", Math.map(input.rotation(Rotation.Roll), -90, 90, -100, 100))
        radio.sendValue("M3", Math.map(input.rotation(Rotation.Roll), -90, 90, 100, -100))
        radio.sendValue("M4", Math.map(input.rotation(Rotation.Roll), -90, 90, 100, -100))
    } else if (input.buttonIsPressed(Button.A)) {
        valueLow = Math.map(input.rotation(Rotation.Roll), -90, 90, -100, 100)
        valueHigh = Math.map(input.rotation(Rotation.Pitch), -90, 90, -100, 100)
        comment = "Drive and slide"
        if (valueLow < 0) {
            radio.sendValue("M1", valueHigh)
            radio.sendValue("M2", -1 * (valueHigh + valueLow))
            radio.sendValue("M3", valueHigh + valueLow)
            radio.sendValue("M4", -1 * valueHigh)
        } else {
            radio.sendValue("M1", valueHigh)
            radio.sendValue("M2", -1 * (valueHigh - valueLow))
            radio.sendValue("M3", valueHigh - valueLow)
            radio.sendValue("M4", -1 * valueHigh)
        }
    } else if (input.buttonIsPressed(Button.B)) {
        comment = "Spinning"
        radio.sendValue("M1", Math.map(input.rotation(Rotation.Roll), -90, 90, -100, 100))
        radio.sendValue("M2", Math.map(input.rotation(Rotation.Roll), -90, 90, 100, -100))
        radio.sendValue("M3", Math.map(input.rotation(Rotation.Roll), -90, 90, 100, -100))
        radio.sendValue("M4", Math.map(input.rotation(Rotation.Roll), -90, 90, -100, 100))
    } else {
        radio.sendValue("M1", 0)
        radio.sendValue("M2", 0)
        radio.sendValue("M3", 0)
        radio.sendValue("M4", 0)
    }
})
