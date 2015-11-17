
$(window).scroll(function() {
if ($(this).scrollTop() > 1){  
    $('.home-header').addClass("sticky-nav");
  }
  else{
    $('.home-header').removeClass("sticky-nav");
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
        swfPath: "http://jplayer.org/latest/dist/jplayer",
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



// var myPlaylist = new jPlayerPlaylist({
//   jPlayer: "#jquery_jplayer_1",
//   cssSelectorAncestor: "#jp_container_1"
// }, [
//   {
//     title:"Cro Magnon Man",
//     artist:"The Stark Palace",
//     mp3:"http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3",
//     oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
//     poster: "http://www.jplayer.org/audio/poster/The_Stark_Palace_640x360.png"
//   },
//   {
//     title:"Hidden",
//     artist:"Miaow",
//     free: true,
//     mp3:"http://www.jplayer.org/audio/mp3/Miaow-02-Hidden.mp3",
//     oga:"http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg",
//     poster: "http://www.jplayer.org/audio/poster/Miaow_640x360.png"
//   }
// ], {
//   playlistOptions: {
//     enableRemoveControls: true
//   },
//   swfPath: "/js",
//   supplied: "ogv, m4v, oga, mp3",
//   smoothPlayBar: true,
//   keyEnabled: true,
//   audioFullScreen: true // Allows the audio poster to go full screen via keyboard
// });

// myPlaylist.setPlaylist ([
//   {
//     title:"Cro Magnon Man",
//     artist:"The Stark Palace",
//     mp3:"http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3",
//     oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
//     poster: "http://www.jplayer.org/audio/poster/The_Stark_Palace_640x360.png"
//   },
//   {
//     title:"Hidden",
//     artist:"Miaow",
//     free: true,
//     mp3:"http://www.jplayer.org/audio/mp3/Miaow-02-Hidden.mp3",
//     oga:"http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg",
//     poster: "http://www.jplayer.org/audio/poster/Miaow_640x360.png"
//   }
// ]);
