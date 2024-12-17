# -*- coding: utf-8 -*-
from org.jgrapht.graph import DefaultUndirectedGraph
from org.jgrapht.graph import DefaultEdge
from org.jgrapht.alg.shortestpath import DijkstraShortestPath
from de.hs_rm.backend.gamelogic.map import PlayMap



class ChickenBotMovement:
    def __init__(self, playMap):
        self.playMap = playMap
        # self.chicken = chicken
        # self.item = item
        self.mapData = playMap.getMap()
        self.graph = DefaultUndirectedGraph(DefaultEdge)
        # Sollte eher in PlayMap klasse aufgenommen werden
       
    
        
    # Einfügen der Knoten auf Weg-Felder " "
    def insertKnodes(self, mapData): 
        print("Map Rows: ", self.playMap.getMapRow())
        print("Map Columns: ", self.playMap.getMapCol())
        for x in range(self.playMap.getMapRow()):
            for y in range(self.playMap.getMapCol()):
                if mapData[x][y] == " ":
                    self.graph.addVertex((x, y))


    # Kanten bestimmen (zwei nebeneinander liegende Knoten besitzen eine Kante)
    def insertEdges(self, mapData):
        for x in range(self.playMap.getMapRow()):
            for y in range(self.playMap.getMapRow()):
                if mapData[x][y] == " ":
                    if x > 0 and mapData[x-1][y] == " ":
                        self.graph.addEdge((x, y), (x-1, y))
                    if y > 0 and mapData[x][y-1] == " ":
                        self.graph.addEdge((x, y),(x, y-1)) 


    # Kürzesten Weg berechnen mit Dijktra Algorithmus
    def getPathWithDijkstra(self, start, ziel):
        dijkstra = DijkstraShortestPath(self.graph)
        path = dijkstra.getPath(start, ziel)
        return path


    # insertKnodes(map_array)
    # insertEdges(map_array)
    # shortestPath = getPathWithDijkstra(graph, start, ziel)

    # print("Kürzester Weg: ", shortestPath)






# ---------------Test: Instanz erstellen und Parameter mitgeben-----------------


start = (1, 1)
ziel = (2, 2)

map_array = [
    ["*", "*", "*", "*"],
    ["*", " ", " ", "*"],
    ["*", "*", " ", "*"],
    ["*", "*", "*", "*"]
]

playMap = PlayMap("testMap")
chickenBotMovementInstanz = ChickenBotMovement(playMap)

chickenBotMovementInstanz.insertKnodes(playMap.getMap())
chickenBotMovementInstanz.insertEdges(playMap.getMap())
shortestPath = chickenBotMovementInstanz.getPathWithDijkstra(start, ziel)

print("Kürzester Weg: ", shortestPath)







