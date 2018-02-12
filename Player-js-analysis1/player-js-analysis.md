1. This file declares a class, `Player`, instantiates it, and assigns it to a global `player` variable.
2. The `Player` class contains four methods:
    - `constructor()`
    - `playPause()`
    - `skipTo()`
    - `setVolume()`
3. The `constructor()` method sets initial values for the `currentlyPlaying`, `playState`, `volume`, and `soundObject` properties.
    - `currentlyPlaying` is set to the first item in `album.songs`.
    -  The initial `playState` is `"stopped"`.
    -  The `volume` is set to the number `80`.
    -  The `soundObject` instantiates a new `buzz.sound` object using the `soundFileUrl` property of `this.currentlyPlaying`. The `buzz` variable doesn't appear to be initialized here, so presumably it's a dependency loaded elsewhere.
4. The `playPause()` method accepts one parameter, `song`. It sets it to `this.currentlyPlaying` by default. It checks to see if `this.currentlyPlaying` is different from `song`, and if so, it:
    - Stops the `soundObject` property.
    - Removes the `"playing"` and `"paused"` classes from the `element` property of `this.currentlyPlaying`.
    - Sets `this.currentlyPlaying` to the function's parameter, `song`.
    - Changes the `playState` property to `"stopped"`.
    - Instantiates a new sound object using `this.currentlyPlaying`, which was just updated to `song`.
    If `playState` property is `"paused"` or `playState` property is `"stopped"` is not true.
    - `soundObject.setVolume` is set to `this.volume`.
    - Play the the `soundObject` property.
    - Changes the `playState` to `"playing"`.
    - Removes the `"paused"` class.
    - Adds the `"playing"` class.
   If If `playState` property is `"paused"` or `playState` property is `"stopped"`is true.
   - Pause the `soundObject` property.
   - Changes `playState` to `"paused"`.
   - Removes the `"playing"` class.
   - Adds the `"paused"` class.
5. The `skipTo()` method accepts one parameter, `percentage`.
  - if the `playState` is not `"playing"`, the `soundObject` property will display the time as a `percentage` out of `100`.
6. The `setVolume()` method accepts one parameter , `percentage`.
  - The `volume` will be displayed as a `percent`.
  - `soundObject.setVolume` is set to a parameter, `percentage`.
7.  New constant variable `player` assigned to `new Player()` method
