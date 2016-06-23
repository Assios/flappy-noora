var play = {
    create: function() {
        this.sky = game.add.sprite(0, 0, 'sky');
        this.skymirror = game.add.sprite(1024, 0, 'skymirror');
        this.sky.scale.y = 2.0;
        this.skymirror.scale.y = 2.0;
        //this.nisse = this.game.add.audio('nisse');
        //this.nisse.volume = 1.5;
        //this.nisse.play()
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
        this.player = this.game.add.sprite(W / 2, H / 2 - 100, 'bird');
        this.player.scale.setTo(2.3, 2.3);
        this.player.animations.add('jump1', [1, 0], 4, false);
        this.player.animations.add("start", [0], 1, false);
        this.player.animations.add("jump2", [2, 0, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 2, 1, 0, 2, 1, 0, 2, 1], 5, false);
        game.physics.arcade.enable(this.player);
        game.physics.arcade.enable(this.polkagris);
        game.physics.arcade.enable(this.polkagris2);
        this.player.anchor.setTo(0.5, 0.5);
        this.score = 0;

        if (SOUND) {
            this.dick = this.game.add.audio("dick");
            this.dick.loop = true;
            this.dick.volume = 0.2;

            this.m1 = this.game.add.audio("herreguddritkult")
            this.m2 = this.game.add.audio('m2');
            this.m3 = this.game.add.audio('m3');
            this.m4 = this.game.add.audio('m4');
            this.m5 = this.game.add.audio('m5');
            this.m6 = this.game.add.audio("nooraokey")
            this.m7 = this.game.add.audio("harderenomat");
            this.m8 = this.game.add.audio("iloveyou")
            this.m9 = this.game.add.audio("javel")
            this.m10 = this.game.add.audio("jeggiropp")
            this.m11 = this.game.add.audio("russebuss")


            this.m1.volume = 1.0;
            this.m2.volume = 1.2;
            this.m3.volume = 1.0;
            this.m4.volume = 1.2;
            this.m5.volume = 0.6;
            this.m6.volume = 1.3;
            this.m7.volume = 1.3;
            this.m8.volume = 1.3;
            this.m9.volume = 1.4;
            this.m10.volume = 1.4;
            this.m11.volume = 1.4;

            var quotes = [this.m1, this.m2, this.m3, this.m4, this.m5, this.m6, this.m7, this.m8, this.m9, this.m10, this.m11];


            this.pikk = this.game.add.audio("dutrengerpikknoora")

        }

        this.player.animations.play("start");        

        this.scoretext = this.game.add.text(230, 20, "POENG: 0", {
            font: "35px Helvetica",
            fill: "#E4DF01",
            align: "center"
        });

        this.besttext = this.game.add.text(210, 80, "REKORD: " + BEST, {
            font: "35px Helvetica",
            fill: "#E4DF01",
            align: "center"
        });
        this.scoretext.fontWeight = "bold";
        this.scoretext.font = "Helvetica";
        this.besttext.fontWeight = "bold";
        this.besttext.font = "Helvetica"

        this.player.body.setSize(32, 80, 25, 25);
        this.player.body.gravity.y = 1600;
        this.timer = this.game.time.events.loop(1800, this.add_p, this);
        this.game.time.events.loop(1800, this.updateScore, this);
        if (SOUND) {
            this.randomS = this.game.time.events.loop(10000, this.randomSound, this);
        }

        //this.animations = ["jump1", "jump2", "jump1", "jump2"];
        if (SOUND) {
            this.dick.play();
        }

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
        this.sky.x -= 0.4;
      } else {}
        this.sky.x -=0.4;

      if (this.skymirror.x < -1024) {
        this.skymirror.x = 1024;
        this.skymirror.x -= 0.4;
      } else {}
        this.skymirror.x -=0.4;

        if (this.score%50==0 && this.score != 0) {
            this.player.animations.play("jump2");
        }

    },
    render: function() {
        game.debug.body(this.polkagris)
    },
    jump: function() {
        //var change_expression = Math.floor(Math.random() * 20);

        if (!this.score%50==0 || this.score==0) {
        this.player.animations.stop(null, true);
        this.player.animations.play("jump1");
        }

        this.player.body.velocity.y = -600;
        tweenz = this.game.add.tween(this.player);
        tweenz.to({
            angle: -20
        }, 100);
        tweenz.start();

    },
    restart: function() {
        this.dick.stop();
        this.dick.stop();
        this.dick.stop();
        this.pikk.play();
        game.state.start('menu');

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
            document.cookie = 'bestcookie='+BEST+'; expires=Fri, 1 Aug 2030 20:47:11 UTC; path=/';
        }

        this.scoretext.text = "POENG: " + this.score;
        this.besttext.text = "REKORD: " + BEST
    },
    randomSound: function() {
            ind = Math.floor((Math.random() * 11) + 1);
            quotes[ind].play();
        }
    }

}
