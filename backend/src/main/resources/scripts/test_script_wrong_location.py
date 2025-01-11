# -*- coding: utf-8 -*-
import time



print("Vorherige Chicken Position: ", chicken.getPosX(), chicken.getPosY())

def move_logic():

    actuell_environment = environment.getEnvironment(chicken.getPosX(), chicken.getPosY())
    map_width = environment.getMapWidth()
    map_height = environment.getMapHeight()

    tile_index = chicken.getPosX() + chicken.getPosY() * map_width
    print("Tile Index: ", tile_index)

    chicken_index_on_tile = chicken.getPosX() + chicken.getPosY() * 3
    print("Chicken Index on Tile: ", chicken_index_on_tile)



    if len(actuell_environment) != 9:
        print("Ungültige Umgebung")
        return
  
    print("Chicken Position: ", chicken.getPosX(), chicken.getPosY())
    print_environment(actuell_environment)
  
    richtungen = {
        "Norden": -3,
        "Osten": 1,
        "Süden": +3,
        "Westen": -1
    }

   
    if (actuell_environment[chicken_index_on_tile + richtungen["Osten"]].getType().name() == "SURFACE"):

        print("Betritt IF-Bedingung: actuell_environment[chicken_index_on_tile + richtungen[\"Osten\"]] == SURFACE")
        new_pos_x = chicken.getPosX() + 1
        print("Neue Position X berechnet:", new_pos_x)
        new_pos_y = chicken.getPosY()
        print("Neue Position Y berechnet:", new_pos_y)
        chicken.move(new_pos_x, new_pos_y)
        print("Chicken bewegt sich nach Osten")
        actuell_environment[tile_index].removeChicken(chicken)
        print("Chicken von aktuellem Tile entfernt")
        actuell_environment[richtungen["Osten"]].addChicken(chicken)
        print("Chicken auf neues Tile gesetzt")
        print("IF-Bedingung actuell_environment[5] == SURFACE abgeschlossen")


    elif (actuell_environment[chicken_index_on_tile + richtungen["Norden"]].getType().name() == "SURFACE"):

        print("Betritt ELSE-IF-Bedingung: actuell_environment[1] == SURFACE")
        new_pos_x = chicken.getPosX()
        print("Neue Position X berechnet:", new_pos_x)
        new_pos_y = chicken.getPosY() + 1
        print("Neue Position Y berechnet:", new_pos_y)
        chicken.move(new_pos_x, new_pos_y)
        print("Chicken bewegt sich nach Norden")
        actuell_environment[tile_index].removeChicken(chicken)
        print("Chicken von aktuellem Tile entfernt")
        actuell_environment[richtungen["Norden"]].addChicken(chicken)
        print("Chicken auf neues Tile gesetzt")
        print("ELSE-IF-Bedingung actuell_environment[1] == SURFACE abgeschlossen")

    elif (actuell_environment[chicken_index_on_tile + richtungen["Westen"]].getType().name() == "SURFACE"):

        print("Betritt ELSE-IF-Bedingung: actuell_environment[3] == SURFACE")
        new_pos_x = chicken.getPosX() - 1
        print("Neue Position X berechnet:", new_pos_x)
        new_pos_y = chicken.getPosY()
        print("Neue Position Y berechnet:", new_pos_y)
        chicken.move(new_pos_x, new_pos_y)
        print("Chicken bewegt sich nach Westen")
        actuell_environment[tile_index].removeChicken(chicken)
        print("Chicken von aktuellem Tile entfernt")
        actuell_environment[richtungen["Westen"]].addChicken(chicken)
        print("Chicken auf neues Tile gesetzt")
        print("ELSE-IF-Bedingung actuell_environment[3] == SURFACE abgeschlossen")

    elif (actuell_environment[chicken_index_on_tile + richtungen["Süden"]].getType().name() == "SURFACE"):

        print("Betritt ELSE-IF-Bedingung: actuell_environment[7] == SURFACE")
        new_pos_x = chicken.getPosX()
        print("Neue Position X berechnet:", new_pos_x)
        new_pos_y = chicken.getPosY() - 1
        print("Neue Position Y berechnet:", new_pos_y)
        chicken.move(new_pos_x, new_pos_y)
        print("Chicken bewegt sich nach Süden")
        actuell_environment[7].removeChicken(chicken)
        print("Chicken von aktuellem Tile entfernt")
        actuell_environment[richtungen["Süden"]].addChicken(chicken)
        print("Chicken auf neues Tile gesetzt")
        print("ELSE-IF-Bedingung actuell_environment[7] == SURFACE abgeschlossen")

    else:
        print("Kein Weg gefunden")

        
    print("Neue Chicken Position: ", chicken.getPosX(), chicken.getPosY())
    
       
 
    


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
   

