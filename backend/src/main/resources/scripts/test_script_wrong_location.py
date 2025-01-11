# -*- coding: utf-8 -*-
import time
# PythonInterpreter ist nur in der Lage Python bis 2.7 zu interpretieren

print("Vorherige Chicken Position: ", chicken.getPosX(), chicken.getPosY())

def move_logic():

    actuell_environment = environment.getEnvironment(chicken.getPosX(), chicken.getPosY())
    map_width = environment.getMapWidth()
    map_height = environment.getMapHeight()
    chicken_index_environment_list = 4


    print("Map Width: ", map_width)
    print("Map Height: ", map_height)
    print("Chicken Index on Tile evironment List: ", chicken_index_environment_list)

    print_environment(actuell_environment)
  
    richtung = {
        "Norden": -3,
        "Osten": 1,
        "Süden": +3,
        "Westen": -1
    }

   
    # Wenn das Tile im Osten ein SURFACE ist, bewege das Chicken nach Osten    
    if (actuell_environment[chicken_index_environment_list + richtung["Osten"]].getType().name() == "SURFACE"):
        actuell_environment[chicken_index_environment_list].removeChicken(chicken)
        new_pos_x = chicken.getPosX() + 1
        new_pos_y = chicken.getPosY()
        chicken.move(new_pos_x, new_pos_y)
        print("Chicken bewegt sich nach Osten") 
        print("Index Wert für richtung Osten: ", chicken_index_environment_list + richtung["Osten"])
        actuell_environment[chicken_index_environment_list + richtung["Osten"]].addChicken(chicken)

        print("Bewegungsschritt abgeschlossen")
    else:
        print("Chicken hat Wand erreicht")
    


    print("Neue Chicken Position: ", chicken.getPosX(), chicken.getPosY())
    
       
 
    


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
   

