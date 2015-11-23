
$(window).scroll(function() {
if ($(this).scrollTop() > 1){  
    $('.home-header').addClass("sticky-nav");
  }
  else{
    $('.home-header').removeClass("sticky-nav");
  }
});



// $(window).scroll(function() {
//   var lastScrollTop = 0;
//   var delta = 5;
//   var navbarHeight = $("header").outerHeight();
//   var st = $(this).scrollTop();

//   if (Math.abs(0 — st) <= delta)
//   return;

// if (st > lastScrollTop && st > navbarHeight){  
//     $('.site-header').hide();
//   }
//   else {
//     if (st + $(window).height() < $(document).height()){  
//       $('.site-header').show();
//     }
//   }
//   lastScrollTop = st;
// });


var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();
$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.site-header').hide();
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.site-header').show();
        }
    }
    
    if (st + $(window).height() == $(document).height()){
        $('.jp-gui').hide();
    }
    else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.jp-gui').show();
        }
    }
    lastScrollTop = st;
}

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
      title:"&#8216;I&#8217;m So Proud To Have You As A Daughter&#8217;",
      mp3:"/portfolio/assets/audio/20150619_me_im_so_proud_to_have_you_as_a_daughter.mp3",
      intro:'“An immigrant from Haiti talks with his high-IQ daughter about his love for her, and why he works so hard to provide for her education.”',
      link:"http://www.npr.org/2015/06/19/415461277/im-so-proud-to-have-you-as-a-daughter",
      dek:"I pitched this story as an intern at StoryCorps and co-facilitated the interview with Nicholas Heyward Sr. at StoryCorps/’ lower Manhattan recording booth."
    },
    {
      title:"Dad Aches For Son Killed By Policeman 20 Years Ago",
      mp3:"/portfolio/assets/audio/20150515_me_dad_aches_for_tween_son_killed_by_policeman_20_years_ago.mp3",
      intro:'“Thirteen-year-old Nicholas Heyward Jr. was playing with a toy gun in the stairwell of the housing complex where he lived in Brooklyn when a police officer shot and killed him in 1994.”',
      link:"http://www.npr.org/2015/05/15/406735395/dad-aches-for-tween-son-killed-by-policeman-20-years-ago",
      dek:"I pitched this story as an intern at StoryCorps and co-facilitated the interview with Nicholas Heyward Sr. at StoryCorps’ lower Manhattan recording booth."
    },
    {
      title:"10 Years Later, A Pair Of Strangers Revisit A Leap Not Taken",
      mp3:"/portfolio/assets/audio/20150306_me_ten_years_later_two_strangers_revisit_what_might_have_been_lost.mp3",
      intro:'“On March 11, 2005, Kevin Berthia wanted to jump off the Golden Gate Bridge. California Highway Patrol Officer Kevin Briggs talked him out of it. The two met recently to discuss what happened that day.”',
      link:"http://www.npr.org/2015/03/06/390970491/ten-years-later-two-strangers-revisit-what-might-have-been-lost",
      dek:"I pitched this story as an intern at StoryCorps and booked the interviews with Kevin Briggs and Kevin Berthia."
    },
    {
      title:"Remembering A &#8216;Giant&#8217;: &#8216;Everything We Did, We Did Together&#8217;",
      mp3:"/portfolio/assets/audio/20150116_me_remembering_a_giant.mp3",
      intro:'“In his early 20s, Max was in a near-fatal car accident, leaving him quadriplegic and living in a nursing home. One day, he came across a young woman who worked at that nursing home. Her name was Colleen. And at StoryCorps, Colleen sat down with her daughter, Meaghan, to remember Max.”',
      link:"http://www.npr.org/2015/01/16/377450795/remembering-a-giant-everything-we-did-we-did-together",
      dek:"I contributed to the production of this piece by creating the first edit of the original 40-minute interview between Colleen and Meaghan Starkloff."
    },
    {
      title:"For Veteran, Hospice Care Work Connects Him To Family",
      mp3:"/portfolio/assets/audio/20141114_me_for_veteran_hospice_care_work_connects_him_to_family.mp3",
      intro:'“Ron Riveira, who served in the Navy and Marines, now does hospice care for vets and says it allows him to help people like his grandparents. \'Every time I go into a home, I see a piece of my family.\'”',
      link:"http://www.npr.org/2014/11/14/363762702/for-veteran-hospice-care-work-connects-him-to-family",
      dek:"I contributed to the production of this piece by creating the first edit of the original 40-minute interview with Ron Riveira."
    }
  ], {
    swfPath: "{{ site.baseurl }}",
    supplied: "oga, mp3",
    wmode: "window",
    useStateClassSkin: true,
    autoBlur: false,
    smoothPlayBar: true,
    keyEnabled: true,
    remainingDuration: true
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

