input.onButtonPressed(Button.A, function () {
    if (sprite2.get(LedSpriteProperty.X) == 0 || sprite2.get(LedSpriteProperty.X) == 4) {
        dir_x = dir_x * -1
    }
    sprite2.change(LedSpriteProperty.X, dir_x)
})
input.onButtonPressed(Button.B, function () {
    if (sprite2.get(LedSpriteProperty.Y) == 0 || sprite2.get(LedSpriteProperty.Y) == 4) {
        dir_y = dir_y * -1
    }
    sprite2.change(LedSpriteProperty.Y, dir_y)
})
let dir_y = 0
let dir_x = 0
let sprite2: game.LedSprite = null
let sprite1 = game.createSprite(2, 2)
sprite2 = game.createSprite(randint(0, 4), randint(0, 4))
dir_x = 1
dir_y = 1
basic.forever(function () {
    if (sprite1.isTouching(sprite2)) {
        basic.showString("Win!")
    }
})
