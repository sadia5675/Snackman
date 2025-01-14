package de.hs_rm.backend.gamelogic.characters.players;

public enum NutriScore {
    EGG("White", loadCalorieBonusForEgg()),
    A("Blue", 10),
    B("Green",20),
    C("Yellow", 30),
    D("Orange", 40),
    E("Red", 50);

    private final String color;
    private final int calorieBonus;

    NutriScore(String color, int calorieBonus) {
        this.color = color;
        this.calorieBonus = calorieBonus;
    }

    public String getColor() {
        return color;
    }

    public int getCalorieBonus() {
        return calorieBonus;
    }


    private static int loadCalorieBonusForEgg() {
        NutriscoreConfig config = new NutriscoreConfig();
        return config.getEggCalorieBonus();
    }

}
