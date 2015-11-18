
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




$(document).ready(function(){

  new jPlayerPlaylist({
    jPlayer: "#jquery_jplayer_1",
    cssSelectorAncestor: "#jp_container_1"
  }, [
    {
      title:"Veteran Hospice Care",
      mp3:"20141114_me_for_veteran_hospice_care_work_connects_him_to_family.mp3"
    },
    {
      title:"Your Face",
      mp3:"http://www.jplayer.org/audio/mp3/TSP-05-Your_face.mp3",
      oga:"http://www.jplayer.org/audio/ogg/TSP-05-Your_face.ogg"
    },
    {
      title:"Cyber Sonnet",
      mp3:"http://www.jplayer.org/audio/mp3/TSP-07-Cybersonnet.mp3",
      oga:"http://www.jplayer.org/audio/ogg/TSP-07-Cybersonnet.ogg"
    },
    {
      title:"Tempered Song",
      mp3:"http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3",
      oga:"http://www.jplayer.org/audio/ogg/Miaow-01-Tempered-song.ogg"
    },
    {
      title:"Hidden",
      mp3:"http://www.jplayer.org/audio/mp3/Miaow-02-Hidden.mp3",
      oga:"http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
    },
    {
      title:"Lentement",
      free:true,
      mp3:"http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
      oga:"http://www.jplayer.org/audio/ogg/Miaow-03-Lentement.ogg"
    }
  ], {
    swfPath: "{{ site.baseurl }}/assets/audio",
    supplied: "oga, mp3",
    wmode: "window",
    useStateClassSkin: true,
    autoBlur: false,
    smoothPlayBar: true,
    keyEnabled: true
  });

});

// $(document).ready(function() {
 
//     $("#jquery_jplayer_1").jPlayer({
//         ready: function(event) {
//             $(this).jPlayer("setMedia", {
//         title: "Bubble",
//         m4a: "http://jplayer.org/audio/mp3/Miaow-07-Bubble.mp3",
//         oga: "http://jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
//             });
//         },
//         swfPath: "http://jplayer.org/latest/dist/jplayer",
//         supplied: "mp3, oga",
//     volume: 0.8,
//     // wmode: "window",
//     useStateClassSkin: true,
//     autoBlur: false,
//     smoothPlayBar: true,
//     keyEnabled: true,
//     remainingDuration: true,
//     toggleDuration: true
//     });
// });  

