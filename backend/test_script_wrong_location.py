# -*- coding: utf-8 -*-
import time
# PythonInterpreter ist nur in der Lage Python bis 2.7 zu interpretieren


chickenObj = chicken
environmentObj = environment
CALORIESBONUS_EGG = CALORIESBONUS


chickenObj.setAngle(0)


chicken_index_environment_list = 4




def right_hand_algo():
    print("Vorherige Chicken Position: ", chickenObj.getPosX(), chickenObj.getPosY())

    print("CHICKEN KALORIE: ", chickenObj.getCurrentCalorie())
    # print("KALORIES BONUS EGG: ", CALORIESBONUS_EGG)
    # if (chickenObj.getCurrentCalorie() >= CALORIESBONUS_EGG):
    #     time.sleep(5)
    if (chickenObj.getCurrentCalorie() >= 600):
        time.sleep(5)

   
    actuell_environment = environmentObj.getEnvironment(chickenObj.getPosX(), chickenObj.getPosY())
    # print("ENV: ")
    # print(actuell_environment)

  
    

    movements = {
        0: {"delta_x": 0, "delta_y": -1, "check_index": -3},
        90: {"delta_x": 1, "delta_y": 0, "check_index": 1},
        180: {"delta_x": 0, "delta_y": 1, "check_index": 3},
        270: {"delta_x": -1, "delta_y": 0, "check_index": -1}
    }

    current_angle = chickenObj.getAngle()

    movement_priority = [
        current_angle % 360,         # Geradeaus
        (current_angle + 90) % 360,  # Rechts
        (current_angle - 90) % 360,  # Links
        
        
        (current_angle + 180) % 360  # Hinter mir
    ]

    for angle in movement_priority:
        move = movements[angle]
        chicken_new_position = chicken_index_environment_list + move["check_index"]

        
        
        if (actuell_environment[chicken_new_position].getType().name() == "SURFACE"):
            move_to(move["delta_x"], move["delta_y"], angle, chicken_new_position, actuell_environment)
            return
        
        

 


def move_to(delta_x, delta_y, change_angle, chicken_new_position, actuell_environment):

    actuell_environment[chicken_index_environment_list].removeChicken(chickenObj)

    new_pos_x = chickenObj.getPosX() + delta_x
    new_pos_y = chickenObj.getPosY() + delta_y
    # new_angle = chickenObj.getAngle() + change_angle
    # new_angle = (chickenObj.getAngle() + change_angle) % 360
    new_angle = change_angle
    chickenObj.move(new_pos_x, new_pos_y, new_angle)
    

    actuell_environment[chicken_new_position].addChicken(chickenObj)


def print_environment(actuell_environment):
    print("print_environment ausgeführt")
   
    
    print("Umgebung:")
    tile_width = 10
   
    print("{:<{width}} {:<{width}} {:<{width}}".format(
        actuell_environment[0].getType().name(),
        actuell_environment[1].getType().name(),
        actuell_environment[2].getType().name(),
        width=tile_width
    ))
    print("{:<{width}} {:<{width}} {:<{width}}".format(
        actuell_environment[3].getType().name(),
        actuell_environment[4].getType().name(),
        actuell_environment[5].getType().name(),
        width=tile_width
    ))
    print("{:<{width}} {:<{width}} {:<{width}}".format(
        actuell_environment[6].getType().name(),
        actuell_environment[7].getType().name(),
        actuell_environment[8].getType().name(),
        width=tile_width
    ))


def run_auto():
    print("run_auto ausgeführt")
    while True:
        right_hand_algo()
        time.sleep(1)
   

