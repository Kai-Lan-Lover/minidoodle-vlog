basic.forever(function () {
    music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Whole))
})
