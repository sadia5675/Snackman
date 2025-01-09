import time


print("chicken-Position vorher: ", chicken.getPosX(), chicken.getPosY())

def move_logic():
    new_pos_x = chicken.getPosX() + 1
    new_pos_y = chicken.getPosY() + 1
    chicken.move(new_pos_x, new_pos_y)

def run_auto():
    while True:
        move_logic()
        time.sleep(1)
   

print("chicken-Position nachher: ", chicken.getPosX(), chicken.getPosY())