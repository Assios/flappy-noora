var menu = {
    create: function() {

    	//read BEST score from cookie
    	BEST = parseInt(this.readCookie("bestcookie"));

		if (isNaN(BEST))
			BEST = 0;

        this.bgsky = game.add.sprite(0, 0, 'menu');
        this.game.add.text(20, 20, "REKORD: " + BEST, {
            font: "35px Arial",
            fill: "#fff",
            align: "center"
        });
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
	}
};
