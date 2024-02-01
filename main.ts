input.onButtonPressed(Button.A, function () {
    radio.sendString("receved")
})
radio.onReceivedString(function (receivedString) {
    basic.showString("Hello!")
})
radio.setGroup(1)
