radio.onReceivedNumber(function (receivedNumber) {
    basic.pause(5000)
    if (hand == 1 && receivedNumber == 1) {
        basic.showIcon(IconNames.Asleep)
    } else if (hand == 2 && receivedNumber == 1) {
        basic.showIcon(IconNames.Happy)
    } else if (hand == 2 && receivedNumber == 2) {
        basic.showIcon(IconNames.Asleep)
    } else if (hand == 3 && receivedNumber == 1) {
        basic.showIcon(IconNames.Happy)
    } else if (hand == 2 && receivedNumber == 3) {
        basic.showIcon(IconNames.Sad)
    } else if (hand == 3 && receivedNumber == 2) {
        basic.showIcon(IconNames.Happy)
    } else if (hand == 3 && receivedNumber == 3) {
        basic.showIcon(IconNames.Asleep)
    } else if (hand == 1 && receivedNumber == 2) {
        basic.showIcon(IconNames.Sad)
    } else if (hand == 1 && receivedNumber == 3) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Heart)
    }
})
input.onGesture(Gesture.Shake, function () {
    hand = randint(1, 3)
    radio.sendNumber(hand)
    if (hand == 1) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (hand == 2) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
let hand = 0
radio.setGroup(68)
