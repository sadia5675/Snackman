print("chicken-Position vorher: ", chicken.getPosX(), chicken.getPosY())

new_pos_x = chicken.getPosX() + 1
new_pos_y = chicken.getPosY() + 1

chicken.move(new_pos_x, new_pos_y)

print("chicken-Position nachher: ", chicken.getPosX(), chicken.getPosY())