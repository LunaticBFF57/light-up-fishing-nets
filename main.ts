input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
})
/** 

Below is to set or preconfigure varibles and other jazz like that.
light_level is level is of which, then turns on the script. 


 */
let count_beats = 0
music.setVolume(255)
radio.setGroup(155)
//  Change light_level to any number to adjust the sensitvity.
let light_level = 100
/** This is the script below. */
basic.forever(function on_forever() {
    
    if (input.lightLevel() <= light_level) {
        //  Honestly I think that should a script like "basic.all_leds_on" or something that make all the LEDs on, like the opposite of "
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.clearScreen()
        //  Plays Sound
        music.playTone(988, music.beat(BeatFraction.Whole))
        count_beats += 1
    } else {
        basic.clearScreen()
    }
    
})
