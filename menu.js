var menu = {
    preload: function() {
        //game.load.spritesheet('soundbtn', 'assets/soundbtn.png', 100, 100);
    },

    create: function() {

    	//read BEST score from cookie
    	BEST = parseInt(this.readCookie("bestcookie"));

		if (isNaN(BEST))
			BEST = 0;

        this.bgsky = game.add.sprite(0, 0, 'menu');
        this.recordtext = this.game.add.text(80, H-200, "REKORD: " + BEST, {
            fontSize: "100px",
            fill: "#fff900",
            align: "center"
        });
        this.recordtext.fontWeight = "bold";
        this.recordtext.font = "Helvetica";
        this.recordtext.fontSize = "80px";

        /*this.button = game.add.button(500, 1000, 'soundbtn', this.toggle, this);

        if (SOUND == 1)
            this.button.frame = 1;
        else
            this.button.frame = 0;
        */
    },

    update: function() {

        if (game.input.activePointer.isDown || game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).isDown) {
            this.game.state.start('play')
        }
    },


	readCookie: function(name) {

	    var nameEQ = name + "=";
	    var ca = document.cookie.split(';');
	    for(var i=0;i < ca.length;i++) {
	        var c = ca[i];
	        while (c.charAt(0)==' ') c = c.substring(1,c.length);
	        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	    }
	    return null;
	},

    toggle: function() {
        
        if (this.button.frame == 0) {
            this.button.frame = 1;
            SOUND = 1;
        }
        else {
            this.button.frame = 0;
            SOUND = 0;
        }
    },
};
