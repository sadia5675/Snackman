# Snackman

---

#### Description
Bei Snackman handelt es sich um ein interaktives 3D Multiplayer Spiel in der Ego Perspektive.     
Zum Spielen braucht es einen Snackman, sowie mindestens 3 weitere Geister (Mitspieler). Der Snackman sammelt auf der Map Lebensmittel ein, die je nach Kaloriengehalt und NutriScore verschiedene Boni und Punkte liefern. Die Geister hingegen versuchen den Snackman zu jagen, sollte es einem Geist gelingen, den Snackman zu berühren, so verliert der Snackman ein Leben.

### :trophy: Regeln 

---
Das Spiel ist vorbei, sobald der Snackman eine gewisse Anzahl an Punkten gesammelt hat. (Snackman gewinnt)  
Das Spiel ist außerdem vorbei, sobald der Snackman alle seine Leben verloren hat. (Geister gewinnen)

### :gear: Technologies

---
* Backend
  * **Spring Boot** for building the backend and serving API endpoints
  * **Jython** library for the chicken movement scripts (in python)
* Frontend
  *  **Vue.js** for building the responsive web interface
  * **Three.js** for creating and rendering the immersive 3D environment for the game.
  * **Pinia** to handle api/websocket calls in the frontend

### Installation

---

#### Requirements:
* Java 17

# Development

### 1. Backend Setup

* Clone the repository:
    ```bash
    git clone https://git.mi.hs-rm.de/2024swtpro/2024swtpro02.git
    cd backend
    ```
* For development:
    ```bash
    ./gradlew bootRun
    ```

### 1. Frontend Setup
* Install dependencies:
    ```bash
    cd frontend
    npm install  
    ```
* To start development server:
    ```bash
    npm run dev
    ```

# Production

### 1. Build for production
  ```bash
    cd backend
    ./gradlew bootJar
  ```

Die Jar kann gestartet werden mit java -jar {JARNAME}.jar.
Es wird automatisch ein Ordner erstellt für die Karten und die Hühner Skripts.
Ggf. muss über den MapCreator eine Karte erstellt werden, wenn keine existieren.

Es können außerdem Maps im .txt Format in den Ordner geschoben werden und beim reload vom Backend werden diese auch geladen.


## Anwendungsvorschau
[🎥 SWTP-Video ansehen](https://www.dropbox.com/scl/fi/6v3fxpkp9z1pz1gn8jula/SWTP-Video.mp4?rlkey=wc4jct4ucp63z3x723jd6zso0&st=vq4uux5c&dl=0)
