var video;

function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() { 
	video.play();
	video.volume = 1;
	var volumeSpan = document.querySelector("#volume");
	var videoVolPercent = video.volume * 100; 
	volumeSpan.innerHTML = videoVolPercent + '%';
	console.log("Play Video");
} 

function pauseVid() { 
	video.pause();
	console.log("Pause Video");
} 

function decreaseSpeed() { 

	video.playbackRate*=.8;

	// concatenate
  	console.log("Speed is " + video.playbackRate); 
} 

function increaseSpeed() {
	video.playbackRate*=1.25;
	// concatenate
	console.log("Speed is " + video.playbackRate);
} 

function skipAhead() {
	video.currentTime+=60;
	video.play();
	if (video.ended) {
		video.currentTime = 0;
		video.playbackRate = 1;
	}
	// concatenate
	console.log("Current location is " + video.currentTime);
} 

function mute() { 
  		
  		video.muted = !video.muted;
  		var mutedButton = document.querySelector("#mute");
  		if (video.muted) {
			mutedButton.innerHTML = "unmute";
			console.log("Muted");
  		} else {
  			mutedButton.innerHTML = "mute";
  			console.log("Unmuted");
  		}

}

function changeVolume() {
	var rangeValue = document.querySelector("#volumeSlider").value;
	console.log("Volume is " + rangeValue);
	video.volume = rangeValue / 100;
	volume.innerHTML = rangeValue + '%';
}
       

function gray() { 
	video.classList.add('grayscale');
	console.log("In grayscale");
}

function color() {
	video.classList.remove('grayscale');
	console.log("In color") 
}

