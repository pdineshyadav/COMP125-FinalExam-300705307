/**
Filename = app.js
@author Dinesh Palle
@date : 17th June 2016
StudentID : 300705307
Website : http://comp125-finalexam-300705307.azurewebsites.net/
@description : This is the main javascript file of this website
*/
var core;
(function (core) {
    "use strict";
    var canvas;
    var stage;
    var randomNumber1 = 0;
    var randomNumber2 = 0;
    var button;
    var lable1;
    var lable2;
    var rollButton;
    // app entry function
    function init() {
        canvas = document.getElementById("canvas");
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", gameLoop);
        main();
    }
    function gameLoop() {
        stage.update();
    }

    function rollButton_clicked() {
        
   
      randomNumber1 = Math.floor((Math.random() * 6) + 1);
   
     console.log(randomNumber1);

      randomNumber2 = Math.floor((Math.random() * 6) + 1);
   
     console.log(randomNumber2);
    }

    function main() {
        // label object
        lable1 = new objects.Lable(randomNumber1, "20px Consolas", "#000000", 160, 160, true);
        stage.addChild(lable1);
        // label object
        lable2 = new objects.Lable(randomNumber2, "20px Consolas", "#000000", 160, 160, true);
        stage.addChild(lable2);
        // button bitmap
        rollButton = new objects.Button("../Assets/images/rollButton.png", core.CANVAS_WIDTH * 0.5, core.CANVAS_HEIGHT * 0.5, true);
        stage.addChild(rollButton);
        rollButton.on("click", rollButton_clicked);
        rollButton.x = 320;
        rollButton.y = 220;
    }
    window.addEventListener("load", init);
})(core || (core = {}));
//# sourceMappingURL=app.js.map