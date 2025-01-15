# -*- coding: utf-8 -*-
import time
# PythonInterpreter ist nur in der Lage Python bis 2.7 zu interpretieren


chickenObj = chicken
environmentObj = environment



print("Vorherige Chicken Position: ", chickenObj.getPosX(), chickenObj.getPosY())

def move_logic():

    # map_width = environment.getMapWidth()
    # map_height = environment.getMapHeight()
    actuell_environment = environmentObj.getEnvironment(chickenObj.getPosX(), chickenObj.getPosY())
    chicken_index_environment_list = 4

    # print("Acteull Environment: ", actuell_environment)
    # print("Chicken bekommt zum Start im script das Tile: ", actuell_environment[chicken_index_environment_list])


    # print("Map Width: ", map_width)
    # print("Map Height: ", map_height)
    # print("Chicken Index on Tile evironment List: ", chicken_index_environment_list)

    print_environment(actuell_environment)
  
    richtung = {
        "Norden": -3,
        "Osten": 1,
        "Süden": +3,
        "Westen": -1
    }

   
    # Wenn das Tile im Osten ein SURFACE ist, bewege das Chicken nach Osten    
    if (actuell_environment[chicken_index_environment_list + richtung["Osten"]].getType().name() == "SURFACE"):
        actuell_environment[chicken_index_environment_list].removeChicken(chickenObj)
        new_pos_x = chickenObj.getPosX() + 1
        new_pos_y = chickenObj.getPosY()
        new_angle = chickenObj.getAngle()
        chickenObj.move(new_pos_x, new_pos_y, new_angle)
        print("Chicken bewegt sich nach Osten") 
        # print("Index Wert für richtung Osten: ", chicken_index_environment_list + richtung["Osten"])
        actuell_environment[chicken_index_environment_list + richtung["Osten"]].addChicken(chickenObj)
        print("Bewegungsschritt abgeschlossen")
    elif (actuell_environment[chicken_index_environment_list + richtung["Norden"]].getType().name() == "SURFACE"):
        actuell_environment[chicken_index_environment_list].removeChicken(chickenObj)
        new_pos_x = chickenObj.getPosX()
        new_pos_y = chickenObj.getPosY() + 1
        new_angle = chickenObj.getAngle() - 90
        print("Chicken bewegt sich nach Norden")
        actuell_environment[chicken_index_environment_list + richtung["Norden"]].addChicken(chickenObj)
    elif (actuell_environment[chicken_index_environment_list] + richtung["Süden"].getType().name() == "SURFACE"):
        actuell_environment[chicken_index_environment_list].removeChicken(chickenObj)
        new_pos_x = chickenObj.getPosX()
        new_pos_y = chickenObj.getPosY() - 1
        new_angle = chickenObj.getAngle() + 90
        print("Chicken bewegt sich nach Süden")
        actuell_environment[chicken_index_environment_list + richtung["Süden"]].addChicken(chickenObj)
        print("Bewegungsschritt abgeschlossen")
    else:
        actuell_environment[chicken_index_environment_list].removeChicken(chickenObj)
        new_pos_x = chickenObj.getPosX() - 1
        new_pos_y = chickenObj.getPosY()
        new_angle = chickenObj.getAngle() - 180
        chickenObj.move(new_pos_x, new_pos_y, new_angle)
        print("Chicken bewegt sich nach Westen")
        actuell_environment[chicken_index_environment_list + richtung["Westen"]].addChicken(chickenObj)
        print("Bewegungsschritt abgeschlossen")




        
    


    print("Neue Chicken Position: ", chickenObj.getPosX(), chickenObj.getPosY(), chickenObj.getAngle())
    
       
 
    


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
        move_logic()
        time.sleep(1)
   

