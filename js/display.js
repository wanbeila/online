var displayVideo = function() {
	var video_url = document.getElementById('video_url');
	console.log(video_url)
	if (video_url.value != '') {
		location.href = 'display.html?' + 'url=' + video_url.value; 
	}
}