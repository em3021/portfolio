$(document).ready(function(){









  new jPlayerPlaylist({
    jPlayer: "#jquery_jplayer_1",
    cssSelectorAncestor: "#jp_container_1"
  }, [
    {
      title:" &#8216;I Can Smell The Dirt And The Fear&#8217;: Up From Soil, The Soul Of A Law Career",
      mp3:"/portfolio/assets/audio/20160422_me_i_can_smell_the_dirt_and_the_fear_up_from_soil_the_soul_of_a_law_career.mp3",
      ogg:"/portfolio/assets/audio/20160422_me_i_can_smell_the_dirt_and_the_fear_up_from_soil_the_soul_of_a_law_career_01.ogg",
      intro:'“Vito de la Cruz grew up in a family of migrant farm workers in the 1960s. And, though the civil rights lawyer is now far from those fields, he\'s still motivated by the memory of a brutal day.”',
      link:"http://www.npr.org/2016/04/22/475130720/i-can-smell-the-dirt-and-the-fear-up-from-soil-the-soul-of-a-law-career",
      dek:"I contributed to the production of this piece by creating the first edit of the original 40-minute interview using Pro Tools. I then went through several stages of editing the piece with our executive producer, Michael Garofalo, until it was approved by StoryCorps founder, Dave Isay, and editors at NPR\'s Morning Edition. Lastly, I chose the music and mixed the piece. "
    },
    {
      title:"&#8216;I&#8217;m So Proud To Have You As A Daughter&#8217;",
      mp3:"/portfolio/assets/audio/20150619_me_im_so_proud_to_have_you_as_a_daughter.mp3",
      ogg:"/portfolio/assets/audio/20150619_me_im_so_proud_to_have_you_as_a_daughter_01.ogg",
      intro:'“An immigrant from Haiti talks with his high-IQ daughter about his love for her, and why he works so hard to provide for her education.”',
      link:"http://www.npr.org/2015/06/19/415461277/im-so-proud-to-have-you-as-a-daughter",
      dek:"I pitched this story as an intern at StoryCorps and co-facilitated the interview with participants Mabou Loiseau and her father Mario Loiseau at StoryCorps’ lower Manhattan recording booth."
    },
    {
      title:"Dad Aches For Son Killed By Policeman 20 Years Ago",
      mp3:"/portfolio/assets/audio/20150515_me_dad_aches_for_tween_son_killed_by_policeman_20_years_ago.mp3",
      ogg:"/portfolio/assets/audio/20150515_me_dad_aches_for_tween_son_killed_by_policeman_20_years_ago_01.ogg",
      intro:'“Thirteen-year-old Nicholas Heyward Jr. was playing with a toy gun in the stairwell of the housing complex where he lived in Brooklyn when a police officer shot and killed him in 1994.”',
      link:"http://www.npr.org/2015/05/15/406735395/dad-aches-for-tween-son-killed-by-policeman-20-years-ago",
      dek:"I pitched this story as an intern at StoryCorps and co-facilitated the interview with Nicholas Heyward Sr. at StoryCorps’ lower Manhattan recording booth. I also worked with producer Jud Esty-Kendall on editing the narrative structure of the piece."
    },
    {
      title:"10 Years Later, A Pair Of Strangers Revisit A Leap Not Taken",
      mp3:"/portfolio/assets/audio/20150306_me_ten_years_later_two_strangers_revisit_what_might_have_been_lost.mp3",
      ogg:"/portfolio/assets/audio/20150306_me_ten_years_later_two_strangers_revisit_what_might_have_been_lost_01.ogg",
      intro:'“On March 11, 2005, Kevin Berthia wanted to jump off the Golden Gate Bridge. California Highway Patrol Officer Kevin Briggs talked him out of it. The two met recently to discuss what happened that day.”',
      link:"http://www.npr.org/2015/03/06/390970491/ten-years-later-two-strangers-revisit-what-might-have-been-lost",
      dek:"I pitched this story as an intern at StoryCorps and booked the interviews with Kevin Briggs and Kevin Berthia."
    },
    {
      title:"Remembering A &#8216;Giant&#8217;: &#8216;Everything We Did, We Did Together&#8217;",
      mp3:"/portfolio/assets/audio/20150116_me_remembering_a_giant.mp3",
      ogg:"/portfolio/assets/audio/20150116_me_remembering_a_giant_01.ogg",
      intro:'“In his early 20s, Max was in a near-fatal car accident, leaving him quadriplegic and living in a nursing home. One day, he came across a young woman who worked at that nursing home. Her name was Colleen. And at StoryCorps, Colleen sat down with her daughter, Meaghan, to remember Max.”',
      link:"http://www.npr.org/2015/01/16/377450795/remembering-a-giant-everything-we-did-we-did-together",
      dek:"I contributed to the production of this piece by creating the first edit of the original 40-minute interview between Colleen and Meaghan Starkloff."
    },
    {
      title:"For Veteran, Hospice Care Work Connects Him To Family",
      mp3:"/portfolio/assets/audio/20141114_me_for_veteran_hospice_care_work_connects_him_to_family.mp3",
      ogg:"/portfolio/assets/audio/20141114_me_for_veteran_hospice_care_work_connects_him_to_family_01.ogg",
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



// $(window).scroll(function() {
//     var sticky = function(index) {
//         $('li').removeClass('active'), $('.' + index + '-nav').addClass('active');
//       };
//     $('.jp-playlist li').each(function(){
//       var cur = $(this);
//       var curTop = cur.offset().top;
//       var curInx = cur.attr("id");
//       var sidebarTop = $('.'+curInx+'-nav').offset().top - 60;
//         if (sidebarTop > curTop) {
//           sticky(curInx);
//         }
//     });
//   });


});



