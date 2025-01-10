# -*- coding: utf-8 -*-
import time



print("Vorherige Chicken Position: ", chicken.getPosX(), chicken.getPosY())

def move_logic():

    
    
    actuell_environment = environment.getEnvironment(chicken.getPosX(), chicken.getPosY())

   
    for element in actuell_environment:

        # print("Element: ", element.getType()) if anweidsung funkltioniert nicht?
        if element.getType()== "WALL":
            print("Wand gefunden")
            # break



    


    new_pos_x = chicken.getPosX() + 1
    new_pos_y = chicken.getPosY()
   
    print_environment(actuell_environment)










    print("Neue Chicken Position: ", chicken.getPosX(), chicken.getPosY())
    chicken.move(new_pos_x, new_pos_y)


def print_environment(actuell_environment):
    print("print_environment ausgeführt")
   
    
    print("Umgebung:")
    for i in range(3):  
        row = actuell_environment[i * 3:(i + 1) * 3]  
        formatted_row = [element.getType() for element in row]  
        print(formatted_row)


def run_auto():
    print("run_auto ausgeführt")
    while True:
        move_logic()
        time.sleep(1)
   

