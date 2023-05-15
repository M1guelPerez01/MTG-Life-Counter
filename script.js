var P1Counter = 20;
var P2Counter = 20;

function P1Increase() {
  P1Counter++;
  document.getElementById('P1LifeTotal').innerHTML = P1Counter;
}

function P1Decrease() {
  P1Counter--;
  document.getElementById('P1LifeTotal').innerHTML = P1Counter;
}

function P2Increase() {
  P2Counter++;
  document.getElementById('P2LifeTotal').innerHTML = P2Counter;
}

function P2Decrease() {
  P2Counter--;
  document.getElementById('P2LifeTotal').innerHTML = P2Counter;
}  

//"Resets life totals back to 20"//
function Reset() {
  if (true) {
    P1Counter = 20;
    P2Counter = 20;
    document.getElementById('P1LifeTotal').innerHTML = P1Counter;
    document.getElementById('P2LifeTotal').innerHTML = P2Counter;
  }
}

//"Button Actions"//
function prepareOnClicks() {
    document.getElementById('P1LifeUp').onclick = function() { P1Increase(); };
    document.getElementById('P1LifeDown').onclick = function() { P1Decrease(); };
    document.getElementById('P2LifeUp').onclick = function() { P2Increase(); };
    document.getElementById('P2LifeDown').onclick = function() { P2Decrease(); };
    document.getElementById('reset').onclick = function() { Reset(); };
}

window.onload = function() {
  prepareOnClicks();
  var elem = document.querySelector('#P1LifeDown');
  var draggie = new Draggabilly( elem, {
    axis: 'y'
  });
  document.getElementById('P1LifeTotal').innerHTML = P1Counter;
  document.getElementById('P2LifeTotal').innerHTML = P2Counter;
};