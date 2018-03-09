class helper {
  playPauseAndUpdate (song) {
    player.playPause.getTime(song);
    player.playPause = helper.playPauseAndUpdate;
  };
}
