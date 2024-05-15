 // toggle menus
 $(document).ready(function() {
	$('.like').click(function() {
		if ($('#add').is(':visible')) {
			$('#add').slideUp();
		}
		if ($('#share').is(':visible')) {
			$('#share').slideUp();
		}
		if ($('#report').is(':visible')) {
			$('#report').slideUp();
		}
		$('#like').slideToggle();
	});

	$('.add').click(function() {
		if ($('#like').is(':visible')) {
			$('#like').slideUp();
		}
		if ($('#share').is(':visible')) {
			$('#share').slideUp();
		}
		if ($('#report').is(':visible')) {
			$('#report').slideUp();
		}
		$('#add').slideToggle();
	});

	$('.share').click(function() {
		if ($('#like').is(':visible')) {
			$('#like').slideUp();
		}
		if ($('#add').is(':visible')) {
			$('#add').slideUp();
		}
		$('#share').slideToggle();
	});
	
	$('.report').click(function() {
		if ($('#like').is(':visible')) {
			$('#like').slideUp();
		}
		if ($('#add').is(':visible')) {
			$('#add').slideUp();
		}
		$('#report').slideToggle();
	});
});




 // Toggle the liking state
	$(document).ready(function() {
		var likingState = false; // Initial state of liking

		$('.liking').click(function() {
			likingState = !likingState; 

			if (likingState) {
				$(this).css('background-image', 'url(img/icon-heart-set.png)');
				$('.like').css('background-image', 'url(img/icon-heart-set.png)');
				$(this).text('liked');
			} else {
				$(this).css('background-image', 'url(img/icon-heart.png)');
				$('.like').css('background-image', 'url(img/icon-heart.png)');
				$(this).text('like');
			}
		});
	});
 // Toggle search
	$(document).ready(function() {
		var searchstate = false; // Initial state of liking

		$('.search').click(function() {
			searchstate = !searchstate; 

			if (searchstate) {
				$(this).css('width', '190px');
				$('.search').css('width', '190px');
				$(this).css('height', '20px');
				$(this).css('bottom', '-45px');
				$(this).css('border-radius', '27px');
				$(this).css('font-size', '18px');
				$(this).css('padding', '6px 4px 6px 12px');

			} else {
				$(this).css('width', '15px');
				$('.search').css('width', '15px');
				$(this).css('height', '15px');
				$(this).css('bottom', '-30px');
				$(this).css('border-radius', '10px');
				$(this).css('font-size', '0');
				$(this).css('padding', '0');
			
			}
		});
	});




   // fake search result page
$(document).ready(function(){
	$('.search').keydown(function(event){
		if(event.keyCode == 13) {
			// Redirect to searchresult.php
			window.location.href = 'searchresults.php';
		}
	});
});


    var element = document.documentElement; // Fullscreen the entire document

    // Toggle fullscreen mode when the user taps the document
    document.addEventListener("click", function() {
      toggleFullscreen();
    });

    // Request fullscreen
    function requestFullscreen(element) {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) { /* Firefox */
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) { /* IE/Edge */
        element.msRequestFullscreen();
      } else if (element.webkitEnterFullscreen) { /* iOS Safari */
        element.addEventListener("touchstart", function() {
          element.webkitEnterFullscreen(); // This is specific to iOS Safari
          document.getElementById("fullscreenButton").style.display = "block"; // Show exit fullscreen button
        });
      }
    }

    // Exit fullscreen
    function exitFullscreen() {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) { /* Firefox */
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) { /* Chrome, Safari & Opera */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { /* IE/Edge */
        document.msExitFullscreen();
      } else if (document.webkitExitFullscreen) { /* iOS Safari */
        document.webkitExitFullscreen();
      }
      document.getElementById("fullscreenButton").style.display = "none"; // Hide exit fullscreen button
    }

    // Toggle fullscreen mode
    function toggleFullscreen() {
      if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
        requestFullscreen(element); // Enter fullscreen mode
      }
    }
	 // Add event listener to fullscreen button (if exists)
	 window.onload = function() {
        var fullscreenButton = document.getElementById("fullscreenButton");
        if (fullscreenButton) {
            fullscreenButton.addEventListener("click", function() {
                toggleFullscreen();
            });
        }
    };

    // Check if fullscreen mode is active on page load
    document.addEventListener("DOMContentLoaded", function() {
        if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
            document.getElementById("fullscreenButton").style.display = "block"; // Show exit fullscreen button
        } else {
            document.getElementById("fullscreenButton").style.display = "none"; // Hide exit fullscreen button
        }
    });
	let startY;

	(function() {
		var supportTouch = $.support.touch,
			scrollEvent = "touchmove scroll",
			touchStartEvent = supportTouch ? "touchstart" : "mousedown",
			touchStopEvent = supportTouch ? "touchend" : "mouseup",
			touchMoveEvent = supportTouch ? "touchmove" : "mousemove";
		
		$.event.special.swipeupdown = {
			setup: function() {
				var thisObject = this;
				var $this = $(thisObject);
				$this.bind(touchStartEvent, function(event) {
					var data = event.originalEvent.touches ?
							event.originalEvent.touches[0] :
							event,
						start = {
							time: (new Date).getTime(),
							coords: [data.pageX, data.pageY],
							origin: $(event.target)
						},
						stop;
	
					function moveHandler(event) {
						if (!start) {
							return;
						}
						var data = event.originalEvent.touches ?
							event.originalEvent.touches[0] :
							event;
						stop = {
							time: (new Date).getTime(),
							coords: [data.pageX, data.pageY]
						};
	
						// prevent scrolling
						if (Math.abs(start.coords[1] - stop.coords[1]) > 10) {
							event.preventDefault();
						}
					}
					$this
						.bind(touchMoveEvent, moveHandler)
						.one(touchStopEvent, function(event) {
							$this.unbind(touchMoveEvent, moveHandler);
							if (start && stop) {
								if (stop.time - start.time < 1000 &&
									Math.abs(start.coords[1] - stop.coords[1]) > 30 &&
									Math.abs(start.coords[0] - stop.coords[0]) < 75) {
									start.origin
										.trigger("swipeupdown")
										.trigger(start.coords[1] > stop.coords[1] ? "swipeup" : "swipedown");
								}
							}
							start = stop = undefined;
						});
				});
			}
		};
	
		$.each({
			swipedown: "swipeupdown",
			swipeup: "swipeupdown"
		}, function(event, sourceEvent) {
			$.event.special[event] = {
				setup: function() {
					$(this).bind(sourceEvent, $.noop);
				}
			};
		});
	
		// Handle swipe events
		$(document).on('swipedown swipeup', function(event) {
			toggleSecondVideo();
		});
	
		// Handle keyboard navigation
		$(document).on('keydown', function(event) {
			switch (event.key) {
				case "ArrowUp":
					// Code to navigate to the previous video
					navigateVideo(-1);
					break;
				case "ArrowDown":
					// Code to navigate to the next video
					navigateVideo(1);
					break;
			}
		});
	
		// Function to navigate between videos
		function navigateVideo(direction) {
			var videoPlayer = document.getElementById("video1");
			var currentSourceIndex = parseInt(videoPlayer.dataset.sourceIndex || 0);
			var numSources = videoPlayer.getElementsByTagName("source").length;
			var nextIndex = (currentSourceIndex + direction) % numSources;
			
			if (direction === 1 && currentSourceIndex === 1 && nextIndex === 0) {
				// Special case: swiping down from the second video to bring the first video up again
				videoPlayer = document.getElementById("video2");
				nextIndex = 0;
			}
	
			if (nextIndex < 0) {
				nextIndex = numSources - 1;
			}
	
			videoPlayer.src = "./video/test" + (nextIndex + 1) + ".mp4";
			videoPlayer.dataset.sourceIndex = nextIndex;
			videoPlayer.play();
		}
	 // Handle swipe events
      // Initially hide the second video
	var video2 = document.getElementById("video2");
		video2.style.display = "none"; 
	
		// Function to toggle the visibility of the second video
		function toggleSecondVideo() {
			var video2 = document.getElementById("video2");
			console.log("video2:", video2); // Check if video2 is correctly retrieved
			if (video2.style.display === "none") {
				console.log("Toggling to block");
				video2.style.display = "block";
			} else {
				console.log("Toggling to none");
				video2.style.display = "none";
			}
		}
		
	})();
	// Handle swipe events
$(document).on('swipedown', function(event) {
    navigateVideo(-1); // Navigate to the previous video
});
// Handle swipe events
$(document).on('swipedown swipeup', function(event) {
    if (event.type === 'swipedown') {
        navigateVideo(-1); // Navigate to the previous video
    } else {
        navigateVideo(1); // Navigate to the next video
    }
});
