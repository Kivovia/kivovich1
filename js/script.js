// Get a handle to the player
	player       = document.getElementById('video-element');
	btnPlayPause = document.getElementById('btnPlayPause');
    player1       = document.getElementById('video-element1');
	btnPlayPause1 = document.getElementById('btnPlayPause1');
    player2       = document.getElementById('video-element2');
	btnPlayPause2 = document.getElementById('btnPlayPause2');

	// Add a listener for the play and pause events so the buttons state can be updated
	player.addEventListener('play', function() {
		// Change the button to be a pause button
		changeButtonType(btnPlayPause, 'pause');
	}, false);
  
	player.addEventListener('pause', function() {
		// Change the button to be a play button
		changeButtonType(btnPlayPause, 'play');
	}, false);


    player1.addEventListener('play', function() {
		// Change the button to be a pause button
		changeButtonType(btnPlayPause1, 'pause');
	}, false);
  
	player1.addEventListener('pause', function() {
		// Change the button to be a play button
		changeButtonType(btnPlayPause1, 'play');
	}, false);


    player2.addEventListener('play', function() {
		// Change the button to be a pause button
		changeButtonType(btnPlayPause2, 'pause');
	}, false);
  
	player2.addEventListener('pause', function() {
		// Change the button to be a play button
		changeButtonType(btnPlayPause2, 'play');
	}, false);

  function playPauseVideo(btn) {
  	if (player.paused || player.ended) {
  		// Change the button to a pause button
  		changeButtonType(btn, 'pause');
  		player.play();
  	}
  	else {
  		// Change the button to a play button
  		changeButtonType(btn, 'play');
  		player.pause();
  	}
  }
  function changeButtonType(btn, value) {
      if (value == "pause") {
          btn.style.background = "none";
        btn.style.backgroundColor = "rgba(0,0,0,0)";
        btn.children[0].style.visibility = "hidden";
      } else {
          btn.style.background = "linear-gradient(180deg, #CBA040 0%, #EFDA7D 100%)";
          btn.children[0].style.visibility = "visible";
      }
    btn.className = value;
}