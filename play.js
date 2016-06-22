var play = {
    create: function() {
        this.sky = game.add.sprite(0, 0, 'sky');
        this.skymirror = game.add.sprite(1024, 0, 'skymirror');
        this.sky.scale.y = 2.0;
        this.skymirror.scale.y = 2.0;
        this.nisse = this.game.add.audio('nisse');
        this.nisse.volume = 1.5;
        this.nisse.play()
        this.space = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        this.polkagris = game.add.group();
        this.polkagris.createMultiple(5, 'polkagris');
        this.polkagris.setAll('checkWorldBounds', true);
        this.polkagris.setAll('outOfBoundsKill', true);
        this.polkagris.enableBody = true;
        this.polkagris.scale.setTo(1.27, 1.27);
        this.polkagris2 = game.add.group();
        this.polkagris2.createMultiple(5, 'polkagris2');
        this.polkagris2.setAll('checkWorldBounds', true);
        this.polkagris2.setAll('outOfBoundsKill', true);
        this.polkagris2.enableBody = true;
        this.polkagris2.scale.setTo(1.27, 1.27);
        game.physics.startSystem(Phaser.Physics.ARCADE);
        this.player = this.game.add.sprite(W / 2, H / 2 - 100, 'nisse');
        this.player.scale.setTo(0.3, 0.3);
        game.physics.arcade.enable(this.player);
        game.physics.arcade.enable(this.polkagris);
        game.physics.arcade.enable(this.polkagris2);
        this.player.anchor.setTo(0.5, 0.5);
        this.score = 0;

        this.scoretext = this.game.add.text(200, 20, "JULEGAVER: 0", {
            font: "35px Arial",
            fill: "#ff0000",
            align: "center"
        });
        this.besttext = this.game.add.text(220, 80, "REKORD: " + BEST, {
            font: "35px Arial",
            fill: "#fff",
            align: "center"
        });
        this.player.body.setSize(420, 420, 25, 25);
        this.player.body.gravity.y = 1600;
        this.timer = this.game.time.events.loop(1800, this.add_p, this);
        this.game.time.events.loop(1800, this.updateScore, this);

    },
    update: function() {
        if (this.player.angle < 20) this.player.angle += 1;
        game.input.onDown.add(this.jump, this);
        this.space.onDown.add(this.jump, this);
        if (this.player.inWorld == false) this.restart();
        game.physics.arcade.collide(this.player, this.polkagris, 0, this.restart, this);
        game.physics.arcade.collide(this.player, this.polkagris2, 0, this.restart, this);

      if (this.sky.x < -1024) {
        this.sky.x = 1024;
        this.sky.x -= 0.2;
      } else {}
        this.sky.x -=0.2;

      if (this.skymirror.x < -1024) {
        this.skymirror.x = 1024;
        this.skymirror.x -= 0.2;
      } else {}
        this.skymirror.x -=0.2;


    },
    render: function() {
        game.debug.body(this.polkagris)
    },
    jump: function() {
        this.player.body.velocity.y = -600;
        tweenz = this.game.add.tween(this.player);
        tweenz.to({
            angle: -20
        }, 100);
        tweenz.start();

    },
    restart: function() {
        this.nisse.stop();
        this.nisse.stop();
        this.nisse.stop();
        game.state.start('menu')
    },
    add_p: function() {
        var power = this.polkagris.getFirstDead();
        var power2 = this.polkagris2.getFirstDead();
        power.body.setSize(169, 581, 50, 90);
        power2.body.setSize(169, 581, 50, 40);
        var random = Math.floor(Math.random() * 400) - 200;
        power.reset(W, -275 + random);
        power2.reset(W, 550 + random);
        power.body.velocity.x = -250;
        power2.body.velocity.x = -250
    },
    updateScore: function() {
        this.score += 1;
        if (this.score > BEST) {
            BEST = this.score;
            document.cookie = 'bestcookie='+BEST+'; expires=Fri, 1 Aug 2020 20:47:11 UTC; path=/';
        }

        this.scoretext.text = "JULEGAVER: " + this.score;
        this.besttext.text = "REKORD: " + BEST
    },
}
