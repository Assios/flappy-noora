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

            game.load.audio('nisse', 'assets/nissehistorie.mp3')
	        game.stage.backgroundColor = '#ff0000';

            game.add.text(50, 100, "LOADING...", { font: "80px Arial", fill: "#fff", align: "center" });


            game.load.image('sky', 'assets/nissen.jpg');
            game.load.image('skymirror', 'assets/nissen_mirror.jpg');
            game.load.image('nisse', 'assets/noora2.png');
            game.load.image('polkagris', 'assets/william.jpg');
            game.load.image('polkagris2', 'assets/william2.jpg');
            game.load.image('menu', 'assets/bakgrunn.jpg');
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
