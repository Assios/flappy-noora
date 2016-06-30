var menu = {
    preload: function() {
        //game.load.spritesheet('soundbtn', 'assets/soundbtn.png', 100, 100);
        game.load.spritesheet('playbtn', 'assets/play.png', 150, 150);
    },

    create: function() {
        BEST = parseInt(this.readCookie("bestcookie"));
        TOTAL = parseInt(this.readCookie("totalcookie"));
        NICOBEST = parseInt(this.readCookie("nicobest"));

        if (isNaN(BEST))
            BEST = 0;

        if (isNaN(TOTAL))
            TOTAL = 0;

        if (isNaN(NICOBEST))
            NICOBEST = 0;

        this.bgsky = game.add.sprite(0, 0, 'menu');

        this.hashtagtext = this.game.add.text(80, 600, "#flappynoora", {
            fill: "#fff900",
            align: "center"
        });

        this.hashtagtext.fontWeight = "bold";
        this.hashtagtext.font = "Helvetica";
        this.hashtagtext.fontSize = "30px";
        this.hashtagtext.angle = "-30";


        this.playbtn = game.add.button(90, 690, 'playbtn', this.play_game, this, 0, 1);
        this.playbtn.scale.setTo(0.80, 0.8);

        this.playlvl2 = game.add.button(275, 690, 'playbtn', this.play_nico, this, 0, 1);
        this.playlvl2.scale.setTo(0.8, 0.8);
        this.playlvl2.tint = 0x8f00ff;

        this.playlvl3 = game.add.button(465, 690, 'playbtn', this.play_next, this, 0, 1);
        this.playlvl3.scale.setTo(0.8, 0.8);
        this.playlvl3.tint = 0xff0000;


        /*this.button = game.add.button(500, 1000, 'soundbtn', this.toggle, this);

        if (SOUND == 1)
            this.button.frame = 1;
        else
            this.button.frame = 0;
        */

        this.standardmode = this.game.add.text(90, 800, "STANDARD", {
            fill: "#000",
            align: "center"
        });

        this.standardmode.fontWeight = "bold";
        this.standardmode.font = "Helvetica";
        this.standardmode.fontSize = "20px";

        this.standardmode = this.game.add.text(270, 800, "NICOMODE", {
            fill: "#000",
            align: "center"
        });

        this.standardmode.fontWeight = "bold";
        this.standardmode.font = "Helvetica";
        this.standardmode.fontSize = "20px";

        this.standardmode = this.game.add.text(490, 800, "????", {
            fill: "#000",
            align: "center"
        });

        this.standardmode.fontWeight = "bold";
        this.standardmode.font = "Helvetica";
        this.standardmode.fontSize = "20px";

        this.totaltext = this.game.add.text(W/2, H-70, "TOTAL: " + TOTAL, {
            fontSize: "100px",
            fill: "#fff900",
            align: "center",
        });
        this.totaltext.fontWeight = "bold";
        this.totaltext.font = "Helvetica";
        this.totaltext.fontSize = "60px";
        this.totaltext.anchor.setTo(0.5, 0);

        this.besttext = this.game.add.text(W/2, H-225, "REKORD: " + BEST, {
            fontSize: "100px",
            fill: "#fff900",
            align: "center",
        });
        this.besttext.fontWeight = "bold";
        this.besttext.font = "Helvetica";
        this.besttext.fontSize = "60px";
        this.besttext.anchor.setTo(0.5, 0);

        if (BEST >= 50) {
            this.recordnico = this.game.add.text(W/2, H-150, "NICOREKORD: " + NICOBEST, {
                fontSize: "100px",
                fill: "#fff900",
                //align: "center"
            });
            this.recordnico.fontWeight = "bold";
            this.recordnico.font = "Helvetica";
            this.recordnico.fontSize = "60px";
            this.recordnico.align = "center";
            this.recordnico.anchor.setTo(0.5, 0);
        }

        if (LAST) {
            this.lasttext = this.game.add.text(W/2, H-280, "DU FIKK " + LAST + " POENG", {
                fill: "#fff900",
                //align: "center"
            });

            this.lasttext.fontWeight = "bold";
            this.lasttext.font = "Helvetica";
            this.lasttext.fontSize = "40px";
            this.lasttext.align = "center";
            this.lasttext.anchor.setTo(0.5, 0);
        }
    },

    update: function() {

    },

    play_game: function() {
        this.game.state.start('play');
    },

    play_nico: function() {
        BEST = parseInt(this.readCookie("bestcookie"));

        if (isNaN(BEST))
            BEST = 0;

        if (BEST < 50) {

            if (this.notyet)
                this.notyet.destroy();

            this.notyet = this.game.add.text(110, 615, "Nicomode krever en rekord på 50", {
                fill: "#000",
                align: "center"
            });

            this.notyet.fontWeight = "bold";
            this.notyet.font = "Helvetica";
            this.notyet.fontSize = "30px";
        }
        else {
            this.game.state.start('play_nico');
        }
    },

    play_next: function() {

            if (this.notyet)
                this.notyet.destroy();

            this.notyet = this.game.add.text(100, 615, "Du kan ikke spille denne banen enda", {
                fill: "#000",
                align: "center"
            });

            this.notyet.fontWeight = "bold";
            this.notyet.font = "Helvetica";
            this.notyet.fontSize = "30px";
        
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
