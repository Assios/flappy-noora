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

            game.load.image('sky', 'assets/nissen.jpg');
            game.load.image('skymirror', 'assets/nissen_mirror.jpg');
            game.load.image('nisse', 'assets/noora1.png');
            game.load.image('polkagris', 'assets/william.png');
            game.load.image('polkagris2', 'assets/william2.png');
            game.load.image('menu', 'assets/flappynoora.jpg');
            game.load.spritesheet('bird', 'assets/spritesheet.png', 72, 64);

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
