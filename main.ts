input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    startwinkel = input.compassHeading()
    basic.showNumber(startwinkel)
    calliBot2E.motor(C2eMotor.links, C2eDir.vorwärts, 100)
    calliBot2E.motor(C2eMotor.rechts, C2eDir.rückwärts, 100)
    while (drehung_aktiv == 1) {
    	
    }
    calliBot2E.motorStop(C2eMotor.beide, C2eStop.Bremsen)
    basic.showNumber(startwinkel)
})
let startwinkel = 0
let drehung_aktiv = 0
drehung_aktiv = 0
startwinkel = 0
loops.everyInterval(10, function () {
    if (input.compassHeading() >= startwinkel + 90) {
        drehung_aktiv = 0
    }
})
