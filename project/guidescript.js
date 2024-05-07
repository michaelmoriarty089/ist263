function JamOff() {
    document.getElementById('mercury').style.display = 'none';
    document.getElementById('venus').style.display = 'none';
    document.getElementById('earth').style.display = 'none';
    document.getElementById('mars').style.display = 'none';
    document.getElementById('jupiter').style.display = 'none';
    document.getElementById('saturn').style.display = 'none';
    document.getElementById('uranus').style.display = 'none';
    document.getElementById('neptune').style.display = 'none';
    document.getElementById('mercuryinfo').style.display = 'none';
    document.getElementById('venusinfo').style.display = 'none';
    document.getElementById('earthinfo').style.display = 'none';
    document.getElementById('marsinfo').style.display = 'none';
    document.getElementById('jupiterinfo').style.display = 'none';
    document.getElementById('saturninfo').style.display = 'none';
    document.getElementById('uranusinfo').style.display = 'none';
    document.getElementById('neptuneinfo').style.display = 'none';
}
function CamdenOn() {
    document.getElementById('camden').style.display = 'block';
    document.getElementById('camdendesc1').style.display = 'block';
}
function TweezerOn() {
    document.getElementById('venus').style.display = 'block';
    document.getElementById('venusinfo').style.display = 'block';
}
function KillDevilFallsOn() {
    document.getElementById('earth').style.display = 'block';
    document.getElementById('earthinfo').style.display = 'block';
}




// Load the IFrame Player API code asynchronously.
var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Instantiate the Player.
function onYouTubeIframeAPIReady() {
  var player = new YT.Player("camdenvid", {
    height: "390",
    width: "640",
    videoId: "1xZMHQjRTSM"
});

  // This is the source "window" that will emit the events.
var iframeWindow = player.getIframe().contentWindow;

  // Listen to events triggered by postMessage,
  // this is how different windows in a browser
  // (such as a popup or iFrame) can communicate.
  // See: https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage
window.addEventListener("message", function(event) {
    // Check that the event was sent from the YouTube IFrame.
    if (event.source === iframeWindow) {
      var data = JSON.parse(event.data);

      // The "infoDelivery" event is used by YT to transmit any
      // kind of information change in the player,
      // such as the current time or a playback quality change.
      if (
        data.event === "infoDelivery" &&
        data.info &&
        data.info.currentTime
      ) {
        // currentTime is emitted very frequently (milliseconds),
        // but we only care about whole second changes.
        var time = Math.floor(data.info.currentTime);

        if (time === 285) {
          document.getElementById("camdendesc2").style.animation-play-state = 'running';
        }
      }
    }
  });
}

