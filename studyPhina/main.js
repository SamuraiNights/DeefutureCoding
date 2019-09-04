phina.globalize();

let ASSETS = {
    image:{
    white:"img/planeship/white.png",
    black:"img/planeship/black.png"
    }
   };

phina.define('MainScene', {
    superClass: 'DisplayScene',
    init: function() { 
        this.superInit();
        var label = Label({text:'l',fontFamily:"impact",fontSize:9000,fill:'darkcyan'}).addChildTo(this)
        var label = Label({text:'=x=',fontFamily:"impact",fontSize:1000,fill:'turquoise'}).addChildTo(this)
        .setPosition(this.gridX.center(), this.gridY.center());
        let white = Sprite("white", 48, 48).addChildTo(this);
    white.x = this.gridX.center();
    white.y = this.gridY.center();
    this.white = white; 
        let black = Sprite("black", 146, 96).addChildTo(this);
    black.x = this.gridX.center();
    black.y = this.gridY.span(4);
    black.scaleY *= -1;
    this.black = black;
    speed = 1.5;
    },
    update:function(app) {
        let white = this.white;
        let black = this.black;
        const key = app.keyboard;
        if (key.getKey("right")) {
        white.x += 2.5;
        }
        if (key.getKey("left")) {
        white.x += -2.5;
        }
        if(black.x < 80 || black.x > 560){
            speed *= -1;
        }
        black.x += speed;
    }
});

phina.main(function() {
    var app = GameApp({
    startLabel: 'main' ,
    assets: ASSETS, 
   });
    app.run();
   });