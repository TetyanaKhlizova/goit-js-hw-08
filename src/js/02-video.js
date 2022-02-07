// import Player from '@vimeo/player';


import throttle from 'lodash/throttle';

const TIME = 'videoplayer-current-time';
const time = localStorage.getItem(TIME);
// ---

const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);
  if (time) {
   player.setCurrentTime(time);
 }
    // player.on('play', function() {
    //     console.log('played the video!');
    // });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

     player.on('timeupdate', throttle(timeUpdate, 1000));

function timeUpdate({ seconds }) {
  localStorage.setItem(TIME, seconds);
}




    