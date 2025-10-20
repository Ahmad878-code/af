// clear the calcultor display
 function clearscreeny() {
    document.getElementById("result").value = "";
 }
 //append the click button's value to the display
 function setscreenvalue(value) {
    document.getElementById("result").value += value;
 }
  //calculates and display results
    function calculateresult() {
        const result element

    }
// === Random Obstacle Spawner for GDevelop ===
// Put this code in a JavaScript event (no conditions needed)

const scene = runtimeScene;

// === Timer Setup ===
if (!scene.hasTimer("spawnTimer")) {
    scene.resetTimer("spawnTimer");
}

// === Check if time to spawn ===
const spawnInterval = gdjs.randomFloatInRange(1.5, 2.5); // random interval between 1.5–2.5 seconds

if (scene.getTimerElapsedTimeInSeconds("spawnTimer") >= spawnInterval) {
    scene.resetTimer("spawnTimer");

    // === Obstacle Types ===
    const obstacleTypes = ["High_spikes", "Low_spikes", "Crates"];
    const randomIndex = Math.floor(Math.random() * obstacleTypes.length);
    const obstacleName = obstacleTypes[randomIndex];

    // === Create Obstacle ===
    const obstacle = scene.createObject(obstacleName);
    if (obstacle) {
        // --- Spawn Position ---
        const spawnX = runtimeScene.getGame().getGameResolutionWidth() + 100;

        // Different Y positions depending on obstacle type
        let groundY = 0;
        if (obstacleName === "High_spikes") groundY = 400;
        else if (obstacleName === "Low_spikes") groundY = 460;
        else if (obstacleName === "Crates") groundY = 450;

        obstacle.setPosition(spawnX, groundY);

        // --- Speed that Increases Over Time ---
        const baseSpeed = 200; // initial speed
        const speedIncrease = runtimeScene.getTimeFromStartInSeconds() * 2; // +2 px/sec per second
        const speed = baseSpeed + speedIncrease;

        // Move obstacle left
        obstacle.addForce(-speed, 0, 1);
    }
}
