# -*- coding: utf-8 -*-
import time





print("Vorherige Chicken Position: ", chicken.getPosX(), chicken.getPosY())

def move_logic():

    

    actuell_environment = environment.getEnvironment(chicken.getPosX(), chicken.getPosY())

    print("Aktuelle Umgebung: ", actuell_environment)


    new_pos_x = chicken.getPosX() + 1
    new_pos_y = chicken.getPosY() + 1

    print("Neue Chicken Position: ", chicken.getPosX(), chicken.getPosY())
    chicken.move(new_pos_x, new_pos_y)

def run_auto():
    print("run_auto ausgeführt")
    while True:
        move_logic()
        time.sleep(1)
   

