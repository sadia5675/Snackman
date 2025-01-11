# -*- coding: utf-8 -*-
import time
# PythonInterpreter ist nur in der Lage Python bis 2.7 zu interpretieren

print("Vorherige Chicken Position: ", chicken.getPosX(), chicken.getPosY())

def move_logic():

    actuell_environment = environment.getEnvironment(chicken.getPosX(), chicken.getPosY())
    map_width = environment.getMapWidth()
    map_height = environment.getMapHeight()
    tile_index_game_list = chicken.getPosX() + chicken.getPosY() * map_width
    chicken_index_environment_list = 4


    print("Map Width: ", map_width)
    print("Map Height: ", map_height)
    print("Tile Index game List: ", tile_index_game_list)
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

        print("Betritt IF-Bedingung: actuell_environment[chicken_index_environment_list + richtung[\"Osten\"]] == SURFACE")
        new_pos_x = chicken.getPosX() + 1
        new_pos_y = chicken.getPosY()
        actuell_environment[tile_index_game_list].removeChicken(chicken)
        chicken.move(new_pos_x, new_pos_y)
        print("Chicken bewegt sich nach Osten") 
        actuell_environment[richtung["Osten"]].addChicken(chicken)

    # Anonsten, wenn das Tile im Norden ein SURFACE ist, bewege das Chicken nach Norden
    elif (actuell_environment[chicken_index_environment_list + richtung["Norden"]].getType().name() == "SURFACE"):

        print("Betritt ELSE-IF-Bedingung: actuell_environment[1] == SURFACE")
        new_pos_x = chicken.getPosX()
        new_pos_y = chicken.getPosY() + 1
        actuell_environment[tile_index_game_list].removeChicken(chicken)
        chicken.move(new_pos_x, new_pos_y)
        print("Chicken bewegt sich nach Norden")
        actuell_environment[richtung["Norden"]].addChicken(chicken)

    # Anonsten, wenn das Tile im Westen ein SURFACE ist, bewege das Chicken nach Westen
    elif (actuell_environment[chicken_index_environment_list + richtung["Westen"]].getType().name() == "SURFACE"):

        print("Betritt ELSE-IF-Bedingung: actuell_environment[3] == SURFACE")
        new_pos_x = chicken.getPosX() - 1
        new_pos_y = chicken.getPosY()
        actuell_environment[tile_index_game_list].removeChicken(chicken)
        chicken.move(new_pos_x, new_pos_y)
        print("Chicken bewegt sich nach Westen")
        actuell_environment[richtung["Westen"]].addChicken(chicken)

    # Anonsten, wenn das Tile im Süden ein SURFACE ist, bewege das Chicken nach Süden
    elif (actuell_environment[chicken_index_environment_list + richtung["Süden"]].getType().name() == "SURFACE"):

        print("Betritt ELSE-IF-Bedingung: actuell_environment[7] == SURFACE")
        new_pos_x = chicken.getPosX()
        new_pos_y = chicken.getPosY() - 1
        actuell_environment[tile_index_game_list].removeChicken(chicken)
        chicken.move(new_pos_x, new_pos_y)
        print("Chicken bewegt sich nach Süden")
        actuell_environment[richtung["Süden"]].addChicken(chicken)
        print("ELSE-IF-Bedingung actuell_environment[7] == SURFACE abgeschlossen")

    else:
        print("Kein Weg gefunden")


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
        "CHICKEN",
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
   

