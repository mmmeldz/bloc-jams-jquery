For_each album.songs as song
  song_element =
    <tr>
    <td>
        <button>
          <span class="song-number">${index + 1}</span>
          <span class="ion-play"></span>
          <span class="ion-pause"></span>
        </button>
      </td>
      <td>song.title</td>
      <td>song.duration</td>
    </tr>

append song_element to #song-list

When sound.element is clicked the event player.playPause with method of song is on.
When clicked class "ion-play" is displayed
when hovered class "ion-paused" is displayed


end for_each
