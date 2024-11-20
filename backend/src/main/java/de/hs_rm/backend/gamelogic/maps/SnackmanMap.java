package de.hs_rm.backend.gamelogic.maps;

import org.apache.tomcat.util.json.JSONParser;

public class SnackmanMap {
/* 
... resource/maps findet man die levels die folgendens beschreiben:
0 = Leer
1 =  Wand
2 = Snack (leicht)
3 = Snack (hochkalorisch)
4 = Ei
5 = Startposition von SnackMan
6 = Startposition von Geistern
7 = Startposition von Hühn
*/
private String name;
private int width;
private int height;
private int[][] tiles;



public String getName() {
    return name;
}
public void setName(String name) {
    this.name = name;
}
public int getWidth() {
    return width;
}
public void setWidth(int width) {
    this.width = width;
}
public int getHeight() {
    return height;
}
public void setHeight(int height) {
    this.height = height;
}
public int[][] getTiles() {
    return tiles;
}
public void setTiles(int[][] tiles) {
    this.tiles = tiles;
}


public void readLevel(String name){

    
}
