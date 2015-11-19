
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
      title:"\'I\'m So Proud To Have You As A Daughter\'",
      mp3:"/portfolio/assets/audio/20150619_me_im_so_proud_to_have_you_as_a_daughter.mp3",
      intro:"intro"
    },
    {
      title:"Dad Aches For Son Killed By Policeman 20 Years Ago",
      mp3:"/portfolio/assets/audio/20150515_me_dad_aches_for_tween_son_killed_by_policeman_20_years_ago.mp3",
      intro:"intro"
    },
    {
      title:"10 Years Later, A Pair Of Strangers Revisit A Leap Not Taken",
      mp3:"/portfolio/assets/audio/20150306_me_ten_years_later_two_strangers_revisit_what_might_have_been_lost.mp3",
      intro: "intro"
    },
    {
      title:"Remembering A \'Giant\': \'Everything We Did, We Did Together\'",
      mp3:"/portfolio/assets/audio/20150116_me_remembering_a_giant.mp3",
      intro: "intro"
    },
    {
      title:"For Veteran, Hospice Care Work Connects Him To Family",
      mp3:"/portfolio/assets/audio/20141114_me_for_veteran_hospice_care_work_connects_him_to_family.mp3",
      intro: "intro"
    }
  ], {
    swfPath: "{{ site.baseurl }}",
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

