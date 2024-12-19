# -*- coding: utf-8 -*-
from org.jgrapht.graph import DefaultUndirectedGraph
from org.jgrapht.graph import DefaultEdge
from org.jgrapht.alg.shortestpath import DijkstraShortestPath
from de.hs_rm.backend.gamelogic.map import PlayMap
from de.hs_rm.backend.gamelogic.characters.players import Chicken
from de.hs_rm.backend.gamelogic.characters.players import FoodItems
from de.hs_rm.backend.gamelogic.map import Vertex
import os





class ChickenBotMovement:
    def __init__(self, playMap):
        self.playMap = playMap
        # Müssen noch in Konstruktor
        self.chicken = None
        self.item = None
       


    # Bewegung der chicken Bots
    def chickenMovement():
        # Ziel des Huhns sollte sein, auf dem schnellsten Weg zum nächstgelegenem FoodItem zu kommen?
        None



# ---------------Test: Instanz erstellen und Parameter mitgeben-----------------
maps_directory = "/Users/judithschlegel/Desktop/Uni/WS2024/SoftwareTechnikProjektNeu/2024swtpro02/backend/base/maps/"



# Debugging: Überprüfe die Existenz und den Inhalt der Map-Datei
map_file_path = os.path.join(maps_directory, "testMap.txt")
if os.path.exists(map_file_path):
    with open(map_file_path, "r") as file:
        lines = file.readlines()
        print("Map File Content:")
        for line in lines:
            print(line.strip())
else:
    print("Map file not found: {map_file_path}")

# ChickenBotMovmeent Objekt an einem Ort initialisieren der PlayMap, Chicken und FoodItems verwaltet
playMap = PlayMap("testMap", maps_directory)
chicken = Chicken(1,1)
footItem = FoodItems(None, 2, 2, None)

start = Vertex(1,1)
# Ziel = Nächst gelegenes FoodItem
ziel = Vertex(2,2)

# testMap = [
#     ["*", "*", "*", "*"],
#     ["*", " ", " ", "*"],
#     ["*", "*", " ", "*"],
#     ["*", "*", "*", "*"]
# ]

chickenBotMovementInstanz = ChickenBotMovement(playMap)

shortestPath = playMap.getShortestPathWithDijkstra(start, ziel)

print("Kürzester Weg: ", shortestPath)







