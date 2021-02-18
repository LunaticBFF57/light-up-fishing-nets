def on_button_pressed_a():
    pass
input.on_button_pressed(Button.A, on_button_pressed_a)

"""

Below is to set or preconfigure varibles and other jazz like that.
light_level is level is of which, then turns on the script. 

"""
count_beats = 0
music.set_volume(255)
radio.set_group(155)
light_level = 100
"""

This is the script below.

"""
def on_forever():
    global count_beats
    if input.light_level() <= light_level:
        # Honestly I think that should a script like "basic.all_leds_on" or something that make all the LEDs on, like the opposite of "
        basic.show_leds("""
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            """)
        basic.clear_screen()
        # Plays Sound
        music.play_tone(988, music.beat(BeatFraction.WHOLE))
        count_beats += 1
    else:
        basic.clear_screen()
basic.forever(on_forever)
