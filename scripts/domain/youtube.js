const videos = ['', 'TZipNpBCmzI', 'TZipNpBCmzI', 'TZipNpBCmzI', 'TZipNpBCmzI'];
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var players = [];
function onYouTubeIframeAPIReady() {
  videos.map((video, index) => {
    players[index] = new YT.Player('player-' + index, {
      videoId: video,
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.UNSTARTED || event.data == YT.PlayerState.PLAYING) {
    $(event.target.a).parents('.video').addClass('play');
    $('body').addClass('video-play');
  }
  if (event.data == YT.PlayerState.PAUSED || event.data == YT.PlayerState.ENDED  || event.data == YT.PlayerState.CUED) {
    $(event.target.a).parents('.video').removeClass('play');
    $('body').removeClass('video-play');
  }
}
$('.close').click(function() {
  let parent = $(this).parents('.video');
  const id = parent.data('id');
  players[id].stopVideo();
})
$('.video .text-wrap').click(function() {
  let parent = $(this).parents('.video');
  const id = parent.data('id');
  players[id].playVideo();
})