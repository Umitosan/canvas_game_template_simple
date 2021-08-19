/*jshint esversion: 6 */


function Game() {
  this.timeGap = 0;  // gap in ms between updates
  this.lastUpdate = 0;  // ms time of last update
  this.lastDirKeyX = undefined;
  this.lastDirKeyY = undefined;
  this.paused = false;
  this.bg = new Image();
  this.boxy = undefined;
  this.pausedTxt = undefined;
  this.mode = 'init';

  this.init = function() {
    this.bg.src = 'bg1.png';
    this.boxy = new Box(20,20,myColors.red,20,1);
    this.lastUpdate = performance.now();
  };

  this.pauseIt = function() {
    myGame.paused = true;
  };
  this.unpauseIt = function() {
    myGame.paused = false;
    this.lastUpdate = performance.now();
    this.timeGap = 0;
  };

  this.drawBG = function() { // display background over canvas
    ctx.imageSmoothingEnabled = false;  // turns off AntiAliasing
    ctx.drawImage(this.bg,0,0,CANVAS.width,CANVAS.height);
  };

  this.draw = function() {  // draw everything!
    this.boxy.draw();
  }; // end draw

  this.update = function() {
    if (this.paused === false) {
      this.timeGap = performance.now() - this.lastUpdate;
      this.boxy.update();
      this.lastUpdate = performance.now();
    } else if (this.paused === true) {
      // PAUSED! do nothin
    } else {
      console.log('game pause issue');
    }
  }; // end update

} // end myGame
