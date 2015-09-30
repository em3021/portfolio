$.mobile.autoInitializePage = false;

$(window).load(function() {
initHammertime();
});

function initHammertime() {

var myElement = document.getElementById('home');

var swipeOptions = {
  dragLockToAxis: true,
  dragBlockHorizontal: true
};

var hammertime = new Hammer(myElement, swipeOptions);

hammertime.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL });

hammertime.on('panleft swipeleft', function(e) {
console.log(this);
window.location.href = "audio";
});

}