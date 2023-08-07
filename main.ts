let value2 = 0
let value1 = 0
let valueForwards = 0
let valueTurn = 0
let thisRoll = 0
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
        thisRoll = Math.map(input.rotation(Rotation.Roll), -90, 90, -100, 100)
        radio.sendValue("M1", thisRoll)
        radio.sendValue("M2", thisRoll)
        radio.sendValue("M3", thisRoll)
        radio.sendValue("M4", thisRoll)
    } else if (input.buttonIsPressed(Button.A)) {
        comment = "Drive and slide"
        valueTurn = Math.map(input.rotation(Rotation.Roll), -90, 90, -100, 100)
        valueForwards = -1 * Math.map(input.rotation(Rotation.Pitch), -90, 90, -100, 100)
        value1 = Math.constrain(valueForwards + valueTurn, -100, 100)
        value2 = Math.constrain(valueForwards - valueTurn, -100, 100)
        radio.sendValue("M1", value2)
        radio.sendValue("M2", value1)
        radio.sendValue("M3", value1)
        radio.sendValue("M4", value2)
    } else if (input.buttonIsPressed(Button.B)) {
        comment = "Spinning"
        thisRoll = Math.map(input.rotation(Rotation.Roll), -90, 90, -100, 100)
        radio.sendValue("M1", -1 * thisRoll)
        radio.sendValue("M2", thisRoll)
        radio.sendValue("M3", thisRoll)
        radio.sendValue("M4", thisRoll)
    } else {
        radio.sendValue("M1", 0)
        radio.sendValue("M2", 0)
        radio.sendValue("M3", 0)
        radio.sendValue("M4", 0)
    }
})
