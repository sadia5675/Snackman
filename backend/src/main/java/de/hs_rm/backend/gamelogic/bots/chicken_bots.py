# -*- coding: utf-8 -*-
from org.jgrapht.graph import DefaultUndirectedGraph
from org.jgrapht.graph import DefaultEdge
from org.jgrapht.alg.shortestpath import DijkstraShortestPath
from de.hs_rm.backend.gamelogic.map import PlayMap

# play_map = PlayMap("map1")

# java2dArray = play_map.getMap()

# pythonList = ["".join(row) for row in java2dArray]

# print("Map-Details: ")
# for line in pythonList:
#     print(line)


# Testmap
map_array = [
    ["*", "*", "*", "*"],
    ["*", " ", " ", "*"],
    ["*", "*", " ", "*"],
    ["*", "*", "*", "*"]
]

# Start und Ziel Punkter
start = (1, 1)
ziel = (2, 2)


graph = DefaultUndirectedGraph(DefaultEdge)

rows = len(map_array)
cols = len(map_array[0])


# Einfügen der Knoten auf Weg-Felder " "
def insertKnodes(map): 
    for x in range(rows):
        for y in range(cols):
            if map[x][y] == " ":
                graph.addVertex((x, y))


# Kanten bestimmen (zwei nebeneinander liegende Knoten besitzen eine Kante)
def insertEdges(map):
    for x in range(rows):
        for y in range(cols):
            if map[x][y] == " ":
                if x > 0 and map_array[x-1][y] == " ":
                    graph.addEdge((x, y), (x-1, y))
                if y > 0 and map_array[x][y-1] == " ":
                    graph.addEdge((x, y),(x, y-1)) 


# Kürzesten Weg berechnen mit Dijktra Algorithmus
def getPathWithDijkstra(graph, start, ziel):
    dijkstra = DijkstraShortestPath(graph)
    path = dijkstra.getPath(start, ziel)
    return path

insertKnodes(map_array)
insertEdges(map_array)
shortestPath = getPathWithDijkstra(graph, start, ziel)

print("Kürzester Weg: ", shortestPath)


