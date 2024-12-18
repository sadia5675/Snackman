# -*- coding: utf-8 -*-
from org.jgrapht.graph import DefaultUndirectedGraph
from org.jgrapht.graph import DefaultEdge
from org.jgrapht.alg.shortestpath import DijkstraShortestPath
from de.hs_rm.backend.gamelogic.map import PlayMap
from de.hs_rm.backend.gamelogic.characters.players import Chicken
from de.hs_rm.backend.gamelogic.characters.players import FoodItems
from de.hs_rm.backend.gamelogic.map import Vertex





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


# ChickenBotMovmeent Objekt an einem Ort initialisieren der PlayMap, Chicken und FoodItems verwaltet
playMap = PlayMap("testMap")
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







