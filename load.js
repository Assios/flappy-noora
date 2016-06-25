var load = {
	preload: function() {
            this.input.maxPointers = 1;
            this.stage.disableVisibilityChange = false;
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.minWidth = 260;
            this.scale.minHeight = 480;
            this.scale.maxWidth = 640;
            this.scale.maxHeight = 1136;
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;
            this.scale.setScreenSize(true);

            //game.load.audio('nisse', 'assets/nissehistorie.mp3')
	        game.stage.backgroundColor = '#ff0000';

            this.loadingtext = game.add.text(135, 200, "LASTER...", { font: "80px Arial", fill: "#E4DF01", align: "center" });

            this.loadingtext.fontWeight = "bold";
            this.loadingtext.font = "Helvetica";
            this.loadingtext.fontSize = "80px";

            game.load.image('sky', 'club.jpg');
            game.load.image('skymirror', 'assets/nissen_mirror.jpg');
            game.load.image('polkagris', 'assets/nico.png');
            game.load.image('polkagris2', 'assets/nico2.png');
            game.load.image('menu', 'assets/flappynoora.jpg');
            game.load.spritesheet('bird', 'assets/spritesheet.png', 72, 64);

        game.load.audio("herreguddritkult", "assets/quotes/herreguddritkult.mp3")
        game.load.audio("nooraokey", "assets/quotes/nooraokey.mp3")
        game.load.audio("iloveyou", "assets/quotes/iloveyou.mp3")
        game.load.audio("javel", "assets/quotes/javel.mp3")
        game.load.audio("russebuss", "assets/quotes/russebuss.mp3")
        game.load.audio("harderenomat", "assets/quotes/harderenomat.mp3")
        game.load.audio("jeggiropp", "assets/quotes/jeggiropp.mp3")
        game.load.audio("lagenoaent", "assets/quotes/lagenoaent.mp3")
        game.load.audio("ikkenoespise", "assets/quotes/ikkenoespise.mp3")

        game.load.audio("dutrengerpikknoora", "assets/quotes/dutrengerpikknoora.mp3")
        game.load.audio("erduserr", "assets/erduserr.mp3")
        game.load.audio("omg", "assets/omg.mp3")
        game.load.audio("nooramedtooer", "assets/nooramedtooer.mp3")

        game.load.audio('m2', 'assets/quotes/s2.mp3');
        game.load.audio('m3', 'assets/quotes/s3.mp3');
        game.load.audio('m4', 'assets/quotes/s4.mp3');
        game.load.audio('m5', 'assets/quotes/s5.mp3');


        game.load.audio("dick", "assets/dick.mp3");

	},

	create: function() {
        this.input.maxPointers = 1;
        this.stage.disableVisibilityChange = false;

        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.minWidth = 260;
        this.scale.minHeight = 480;
        this.scale.maxWidth = 640;
        this.scale.maxHeight = 1136;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.scale.setScreenSize(true);

        this.game.state.start('menu');
	}
}
