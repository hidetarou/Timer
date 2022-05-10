'use strict'
{
 let timerID;
 let startTime;
 let timeToAdd = 0;
 let elapsedTime;
 let startID;
 let stopID;
 const time = document.getElementById('time');
 const start = document.getElementById('start');
 const stop = document.getElementById('stop');
 const reset = document.getElementById('reset');

 function timerSet () {
   const m = Math.floor(elapsedTime / 60000);
   const s = Math.floor((elapsedTime % 60000) / 1000);
   const ms = Math.floor(elapsedTime % 1000);
   const mn = ('0' + m).slice(-2);
   const sc = ('0' + s).slice(-2);
   const msc = ('0' + ms).slice(-3);
   time.textContent = mn + ':' + sc + ':' + msc;
 }

 function timerCount () {
   elapsedTime = Date.now() - startTime + timeToAdd;
   timerSet();
   timerStart();
 }

 function timerStart () {
   timerID = setTimeout(timerCount, 10);
 }

 start.addEventListener('click', () => {
   if (startID){
     return;
   }
   startID = true;
   stopID = false;
  startTime = Date.now();
  timerStart();

 });

 stop.addEventListener('click', () => {
   if (stopID) {
     return;
   }
   startID = false;
   stopID = true;
  clearTimeout(timerID);
  timeToAdd += Date.now() - startTime;
 });

 reset.addEventListener('click', () => {
  clearTimeout(timerID);
  startID = false;
  startTime   = 0;
  timeToAdd   = 0;
  elapsedTime = 0;
  timerSet();
 });

}