
$(window).scroll(function() {
if ($(this).scrollTop() > 1){  
    $('.site-header').addClass("sticky-nav");
  }
  else{
    $('.site-header').removeClass("sticky-nav");
  }
});

// Hammertime.js --------------/

// $.mobile.autoInitializePage = false;

// $(window).load(function() {
// initHammertime();
// });

// function initHammertime() {

// var myElement = document.getElementById('home');

// var swipeOptions = {
//   dragLockToAxis: true,
//   dragBlockHorizontal: true
// };

// var hammertime = new Hammer(myElement, swipeOptions);

// hammertime.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL });

// hammertime.on('panleft swipeleft', function(e) {

// window.location.href = "audio";

// });

// }

$(document).ready(function() {

    $("#jquery_jplayer_1").jPlayer({
        ready: function(event) {
            $(this).jPlayer("setMedia", {
				title: "Bubble",
				m4a: "http://jplayer.org/audio/mp3/Miaow-07-Bubble.mp3",
				oga: "http://jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
            });
        },
        // swfPath: "http://jplayer.org/latest/dist/jplayer",
        supplied: "mp3, oga",
		volume: 0.8,
		// wmode: "window",
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true,
		remainingDuration: true,
		toggleDuration: true
    });
});                                      


