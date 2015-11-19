
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
      intro:'“An immigrant from Haiti talks with his high-IQ daughter about his love for her, and why he works so hard to provide for her education.”',
      link:"http://www.npr.org/2015/06/19/415461277/im-so-proud-to-have-you-as-a-daughter"
    },
    {
      title:"Dad Aches For Son Killed By Policeman 20 Years Ago",
      mp3:"/portfolio/assets/audio/20150515_me_dad_aches_for_tween_son_killed_by_policeman_20_years_ago.mp3",
      intro:'“Thirteen-year-old Nicholas Heyward Jr. was playing with a toy gun in the stairwell of the housing complex where he lived in Brooklyn when a police officer shot and killed him in 1994.”',
      link:"http://www.npr.org/2015/05/15/406735395/dad-aches-for-tween-son-killed-by-policeman-20-years-ago"
    },
    {
      title:"10 Years Later, A Pair Of Strangers Revisit A Leap Not Taken",
      mp3:"/portfolio/assets/audio/20150306_me_ten_years_later_two_strangers_revisit_what_might_have_been_lost.mp3",
      intro:'“On March 11, 2005, Kevin Berthia wanted to jump off the Golden Gate Bridge. California Highway Patrol Officer Kevin Briggs talked him out of it. The two met recently to discuss what happened that day.”',
      link:"http://www.npr.org/2015/03/06/390970491/ten-years-later-two-strangers-revisit-what-might-have-been-lost"
    },
    {
      title:"Remembering A \'Giant\': \'Everything We Did, We Did Together\'",
      mp3:"/portfolio/assets/audio/20150116_me_remembering_a_giant.mp3",
      intro:'“In his early 20s, Max was in a near-fatal car accident, leaving him quadriplegic and living in a nursing home. One day, he came across a young woman who worked at that nursing home. Her name was Colleen. And at StoryCorps, Colleen sat down with her daughter, Meaghan, to remember Max.”',
      link:"http://www.npr.org/2015/01/16/377450795/remembering-a-giant-everything-we-did-we-did-together"
    },
    {
      title:"For Veteran, Hospice Care Work Connects Him To Family",
      mp3:"/portfolio/assets/audio/20141114_me_for_veteran_hospice_care_work_connects_him_to_family.mp3",
      intro:'“Ron Riveira, who served in the Navy and Marines, now does hospice care for vets and says it allows him to help people like his grandparents. \'Every time I go into a home, I see a piece of my family.\'”',
      link:"http://www.npr.org/2014/11/14/363762702/for-veteran-hospice-care-work-connects-him-to-family"
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

