input.onPinPressed(TouchPin.P0, function () {
    basic.showNumber(randint(20, 40))
})
input.onButtonPressed(Button.A, function () {
    basic.showString("2012012")
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showNumber(randint(0, 10))
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showNumber(randint(5, 15))
})
basic.showString("WELCOME")
