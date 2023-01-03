import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const videoPlayer = new Player(iframe);

videoPlayer.on('timeupdate', throttle(saveCurrentTimeToLocalStorage, 1000));

const currentTime = getCurrentTimeFromLocalStorage();

videoPlayer.setCurrentTime(currentTime).catch(err => {
  console.log(`${err.name}`);
});

function saveCurrentTimeToLocalStorage(e) {
  localStorage.setItem('videoplayer-current-time', `${e.seconds}`);
}

function getCurrentTimeFromLocalStorage() {
  return localStorage.getItem('videoplayer-current-time');
}
