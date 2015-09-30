$.mobile.autoInitializePage = false;

$(window).load(function() {
initHammertime();
});

function initHammertime() {

var myElement = document.getElementById('home');

var hammertime = new Hammer(myElement);
hammertime.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL });
hammertime.on('panright swiperight', function(e) {
console.log(this);
window.location = "/portfolio/audio";
});

}