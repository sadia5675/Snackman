# -*- coding: utf-8 -*-
from org.jgrapht.graph import DefaultUndirectedGraph
from org.jgrapht.graph import DefaultEdge
from de.hs_rm.backend.gamelogic.map import PlayMap

play_map = PlayMap("map1")

java2dArray = play_map.getMap()

pythonList = ["".join(row) for row in java2dArray]

print("Map-Details: ")
for line in pythonList:
    print(line)



# Erstelle einen ungerichteten Graphen
graph = DefaultUndirectedGraph(DefaultEdge)

# Knoten hinzufügen
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")

# Kanten hinzufügen
graph.addEdge("A", "B")
graph.addEdge("B", "C")
graph.addEdge("C", "A")

# Knoten und Kanten ausgeben
print("Knoten:", graph.vertexSet())
print("Kanten:", graph.edgeSet())