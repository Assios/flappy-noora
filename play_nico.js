var play_nico = {
    create: function() {
        this.sky = game.add.sprite(0, 0, 'sky2');
        this.skymirror = game.add.sprite(956, 0, 'skymirror2');
        this.sky.scale.y = 2.0;
        this.skymirror.scale.y = 2.0;
        this.space = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        this.nico = game.add.group();
        this.nico.createMultiple(5, 'nico');
        this.nico.setAll('checkWorldBounds', true);
        this.nico.setAll('outOfBoundsKill', true);
        this.nico.enableBody = true;
        this.nico.scale.setTo(1.27, 1.27);
        this.nico2 = game.add.group();
        this.nico2.createMultiple(5, 'nico2');
        this.nico2.setAll('checkWorldBounds', true);
        this.nico2.setAll('outOfBoundsKill', true);
        this.nico2.enableBody = true;
        this.nico2.scale.setTo(1.27, 1.27);
        game.physics.startSystem(Phaser.Physics.ARCADE);
        this.player = this.game.add.sprite(W / 2, H / 2 - 100, 'bird');
        this.player.scale.setTo(2.3, 2.3);
        this.player.animations.add('jump1', [1, 0], 4, false);
        this.player.animations.add("start", [0], 1, false);
        this.player.animations.add("jump2", [2, 0, 1, 2, 0, 1, 2, 1, 0, 2, 1, 0, 2, 1, 2, 0, 2, 1, 0, 2, 1, 0, 2, 1], 5, false);
        game.physics.arcade.enable(this.player);
        game.physics.arcade.enable(this.nico);
        game.physics.arcade.enable(this.nico2);
        this.player.anchor.setTo(0.5, 0.5);
        this.score = 0;

        if (SOUND) {
            this.dick = this.game.add.audio("freaky");
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
            this.m12 = this.game.add.audio("lagenoaent")
            this.m13 = this.game.add.audio("ikkenoespise")



            this.m1.volume = 1.2;
            this.m2.volume = 1.4;
            this.m3.volume = 1.2;
            this.m4.volume = 1.4;
            this.m5.volume = 0.8;
            this.m6.volume = 1.5;
            this.m7.volume = 1.5;
            this.m8.volume = 1.5;
            this.m9.volume = 1.5;
            this.m10.volume = 1.5;
            this.m11.volume = 1.6;
            this.m12.volume = 1.0;
            this.m13.volume = 1.2;

            this.d1 = this.game.add.audio("dutrengerpikknoora")
            this.d2 = this.game.add.audio("erduserr")
            this.d3 = this.game.add.audio("omg")
            this.d4 = this.game.add.audio("nooramedtooer")

        }

        this.player.animations.play("start");        

        this.scoretext = this.game.add.text(W/2, 20, "POENG: 0", {
            font: "35px Helvetica",
            fill: "#E4DF01",
            align: "center"
        });

        this.scoretext.anchor.setTo(0.5, 0);
        this.scoretext.fontWeight = "bold";
        this.scoretext.font = "Helvetica";

        this.besttext = this.game.add.text(W/2, 80, "NICOREKORD: " + NICOBEST, {
            font: "35px Helvetica",
            fill: "#E4DF01",
            align: "center"
        });

        this.besttext.fontWeight = "bold";
        this.besttext.font = "Helvetica";
        this.besttext.anchor.setTo(0.5, 0);

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

        this.backgroundSpeed = 0.4;

    },
    update: function() {
        if (this.player.angle < 20) this.player.angle += 1;
        game.input.onDown.add(this.jump, this);
        this.space.onDown.add(this.jump, this);
        if (this.player.inWorld == false) this.restart();
        game.physics.arcade.collide(this.player, this.nico, 0, this.restart, this);
        game.physics.arcade.collide(this.player, this.nico2, 0, this.restart, this);

      if (this.sky.x < -956) {
        this.sky.x = 956;
        this.sky.x -= this.backgroundSpeed;
      } else {}
        this.sky.x -= this.backgroundSpeed;

      if (this.skymirror.x < -956) {
        this.skymirror.x = 956;
        this.skymirror.x -= this.backgroundSpeed;
      } else {}
        this.skymirror.x -= this.backgroundSpeed;

        if (this.score%50==0 && this.score != 0) {
            this.player.animations.play("jump2");
        }


    },
    render: function() {
        game.debug.body(this.nico)
    },
    jump: function() {

        this.backgroundSpeed += 0.03;

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

        TOTAL += this.score;

        document.cookie = 'totalcookie='+TOTAL+'; expires=Fri, 1 Aug 2020 20:47:11 UTC; path=/';

        if (this.score >= NICOBEST) {
            NICOBEST = this.score;
            document.cookie = 'nicobest='+NICOBEST+'; expires=Fri, 1 Aug 2020 20:47:11 UTC; path=/';
        }

        LAST = this.score;

        this.randomDeathSound();

        game.state.start('menu');

    },
    add_p: function() {
        var obstacle = this.nico.getFirstDead();
        var obstacle2 = this.nico2.getFirstDead();
        obstacle.body.setSize(169, 581, 50, 90);
        obstacle2.body.setSize(169, 581, 50, 40);
        var random = Math.floor(Math.random() * 400) - 200;
        obstacle.reset(W, -275 + random);
        obstacle2.reset(W, 550 + random);
        obstacle.body.velocity.x = -250;
        obstacle2.body.velocity.x = -250;

        if ((Math.floor(Math.random() * 2) + 1) == 1)
            obstacle_speed = 45;
        else
            obstacle_speed = -45;
        obstacle.body.velocity.y = obspacle_speed;
        obstacle2.body.velocity.y = obstacle_speed;

    },
    updateScore: function() {
        this.score += 1;
        this.scoretext.text = "POENG: " + this.score;
        if (this.score > NICOBEST)
            NICOBEST = this.score;
        this.besttext.text = "NICOREKORD: " + NICOBEST;
    },
    randomDeathSound: function() {
        switch(Math.floor((Math.random() * 4) + 1)) {
            case 1:
                this.d1.play();
                break;
            case 2:
                this.d2.play();
                break;
            case 3:
                this.d3.play();
                break;
            case 4:
                this.d4.play();
                break;
        }
    },
    randomSound: function() {
        switch(Math.floor((Math.random() * 13) + 1)) {
            case 1:
                this.m1.play();
                break;
            case 2:
                this.m2.play();
                break;
            case 3:
                this.m3.play();
                break;
            case 4:
                this.m4.play();
                break;
            case 5:
                this.m5.play();
                break;
            case 6:
                this.m6.play();
                break;
            case 7:
                this.m7.play();
                break;
            case 8:
                this.m8.play();
                break;
            case 9:
                this.m9.play();
                break;
            case 10:
                this.m10.play();
                break;
            case 11:
                this.m11.play();
                break;
            case 12:
                this.m12.play();
                break;
            case 13:
                this.m13.play();
                break;
        }
    }

}
