var player;
		var facing =  'right';
		var jumping = 'right';
		var platform2;
		var key;
		var sound;
		var sound2;
		var police;
		var vel = -100;
		var vel2 = -100;
		var vel1 = -120;
		var bullets;
		var bulletTime = 1;
		var bullet;
		var map;
		var layer;
		var key1;
		var fondo;
		var lives;
		var saw;
		var x1;
		var y1;
		var x2;
		var y2;
		var dx;
		var dy;
		var dx2;
		var dy2;
		var dis;
		var dis2;
		var dis3;
		var dis4;
		var saw2;
		var saw3;
		var saw4;
		var saw5;
		var police2;
		var police3;
		var police4;
		var x3;
		var y3;
		var bullets2;
		var bullet2;
		var police3;
		var bullets3;
		var bullet3;
		var bullets4;
		var bullet4;
		var x4;
		var y4;
		var dx4;
		var dy4;
		var x5;
		var y5;
		var dx5;
		var dy5;
		var exit;
		var ascensor;
		var sound2;
		var posx;
		var posy;
		var velx = 200;
		var vely = 200;
		var text = "";
		var textexit ;
		var t = 0;
		var x6;
		var y6;
		var dis5;
		var dx5;
		var dy5;
		var button;
		var buttonplay;
		var botonmenu;
		var m2;
		var m1;
		var logo;
		var textgameover = "";
		var textexit1 ;
		var gameover;
		var buttonres;
		var buttonmen;
		var llave = false;
		var nivel2 = {
		//var dis;

  preload: function() 
		{
			game.load.image('gameover', 'img/gameover2.png');
			game.load.spritesheet('ladron', 'img/ladron2.png', 62, 88);
			game.load.image('platform2', 'img/plataforma2.png');
			game.load.image('platform3', 'img/plataforma3.png');
			game.load.spritesheet('key', 'img/llave.png', 77, 63);
			game.load.audio('sound', ['audio/llave.mp3']);
			game.load.spritesheet('police', 'img/policia.png', 62, 88);
			game.load.image('bullet', 'img/bala.png');
			game.load.tilemap('map', 'map/m1.csv', null, Phaser.Tilemap.CSV);
			game.load.image('imgmap', 'img/tiled2.png');
			game.load.spritesheet('key2', 'img/llave2.png', 62, 51);
			game.load.image('fondo', 'img/fondo.png');
			game.load.image('live', 'img/live.png');
			game.load.image('exit', 'img/door.png');
			game.load.spritesheet('ascensor', 'img/ascensor.png');
			game.load.spritesheet('saw', 'img/saw.png', 52, 53);
			game.load.audio('music', ['audio/musica.mp3']);
			game.load.spritesheet('button', 'img/pause.png', 52, 68);
			game.load.spritesheet('play', 'img/continue.png', 236.6, 96);
			game.load.spritesheet('menu', 'img/menu.png', 236.6, 96);
			game.load.image('m2', 'img/m2.png');
			game.load.image('negro', 'img/negro.jpg');
			game.load.image('m1', 'img/m1.png');
			game.load.spritesheet('buttonres', 'img/restart.png', 236.6, 96);
		},

		
create: function()
		{
			// fondo
			fondo = game.add.physicsGroup();
			fondo.create(0,0, 'fondo');
			fondo.setAll('body.immovable', true);



			// puerta
    		exit = game.add.physicsGroup();
    		game.physics.enable(exit);
    		exit.create(2200, 40, 'exit');
		    exit.setAll('body.immovable', true);

		    // ascensor
    		ascensor = game.add.physicsGroup();
    		//ascensor.setAll('body.immovable', true);
    		ascensor.create(2200, 870, 'ascensor');
    		game.physics.enable(ascensor);
    		ascensor.setAll('body.immovable', true);
    		//ascensor.body.velocity.y = -20;
		    //ascensor.setAll('body.immovable', false);
		    //ascensor.body.gravity.y = -20;

			// jugador
			player = game.add.sprite(70, 114, 'ladron');
			game.physics.enable(player);
			player.body.collideWorldBounds = true;
			player.body.setSize(43, 68, 10, 10);
    		player.body.gravity.y = 500;
    		player.animations.add('left', [6,7,8,9], 7, true);
    		player.animations.add('right',[1,2,3,4], 7, true);
    		player.animations.add('aboveR',[11], 10, false);
    		player.animations.add('aboveL',[13], 10, false);
    		player.animations.add('downR',[12], 10, false);
    		player.animations.add('downL',[10], 10, false);

    		

		    //policia
		    police = game.add.physicsGroup();
		    police = game.add.sprite(660,448, 'police');
		    game.physics.enable(police);
		    police.body.collideWorldBounds = true;
		    police.body.setSize(43, 68, 10, 10);
		    police.body.gravity.y = 500;
		    police.animations.add('left1', [0,1,2,3,4], 7, true);
		    police.animations.add('right1',[5,6,7,8,9], 7, true);
		    police.body.velocity.x = -90;

		    //policia2
		    police2 = game.add.physicsGroup();
		    police2 = game.add.sprite(200,1010, 'police');
		    game.physics.enable(police2);
		    police2.body.collideWorldBounds = true;
		    police2.body.setSize(43, 68, 10, 10);
		    police2.body.gravity.y = 500;
		    police2.animations.add('left1', [0,1,2,3,4], 7, true);
		    police2.animations.add('right1',[5,6,7,8,9], 7, true);
		    police2.body.velocity.x = -90;

		     //policia3
		    police3 = game.add.physicsGroup();
		    police3 = game.add.sprite(1130,1010, 'police');
		    game.physics.enable(police3);
		    police3.body.collideWorldBounds = true;
		    police3.body.setSize(43, 68, 10, 10);
		    police3.body.gravity.y = 500;
		    police3.animations.add('left1', [0,1,2,3,4], 7, true);
		    police3.animations.add('right1',[5,6,7,8,9], 7, true);
		    police3.body.velocity.x = -90;

		    //policia4
		    police4 = game.add.physicsGroup();
		    police4 = game.add.sprite(837,1330, 'police');
		    game.physics.enable(police4);
		    police4.body.collideWorldBounds = true;
		    police4.body.setSize(43, 68, 10, 10);
		    police4.body.gravity.y = 500;
		    police4.animations.add('left1', [0,1,2,3,4], 7, true);
		    police4.animations.add('right1',[5,6,7,8,9], 7, true);
		    police4.body.velocity.x = -90;

		    // sierra
		    saw = game.add.physicsGroup();
		    saw = game.add.sprite(800, 480, 'saw');
		    game.physics.enable(saw);
		    saw.animations.add('left', [0,1,2,3], 20, true);
		    saw.body.velocity.x = -120;

		    // sierra
		    saw2 = game.add.physicsGroup();
		    saw2 = game.add.sprite(800, 740, 'saw');
		    game.physics.enable(saw2);
		    saw2.animations.add('left', [0,1,2,3], 20, true);
		    saw2.body.velocity.x = -120;

		    // sierra
		    saw3 = game.add.physicsGroup();
		    saw3 = game.add.sprite(-10, 1570, 'saw');
		    game.physics.enable(saw3);
		    saw3.animations.add('left', [0,1,2,3], 20, true);
		    saw3.body.velocity.x = 120;

		    // sierra4
		    saw4 = game.add.physicsGroup();
		    saw4 = game.add.sprite(250, 1570, 'saw');
		    game.physics.enable(saw4);
		    saw4.animations.add('left', [0,1,2,3], 20, true);
		    saw4.body.velocity.x = 120;

		    // sierra5
		    saw5 = game.add.physicsGroup();
		    saw5 = game.add.sprite(450, 1570, 'saw');
		    game.physics.enable(saw5);
		    saw5.animations.add('left', [0,1,2,3], 20, true);
		    saw5.body.velocity.x = 120;

		    // camara
		    game.camera.follow(player);

		    //disparo
		    bullets = game.add.group();
		    bullets.enableBody = true;
		    bullets.physicsBodyType = Phaser.Physics.ARCADE;
		    for (var i = 0; i < 5; i++)
		    {
		        var b = bullets.create(0, 0, 'bullet');
		        b.name = 'bullet' + i;
		        b.exists = false;
		        b.visible = false;
		        b.checkWorldBounds = true;
		        b.events.onOutOfBounds.add(this.resetBullet, this);
		    }

		    //disparo2
		    bullets2 = game.add.group();
		    bullets2.enableBody = true;
		    bullets2.physicsBodyType = Phaser.Physics.ARCADE;
		    for (var i = 0; i < 5; i++)
		    {
		        var b = bullets2.create(0, 0, 'bullet');
		        b.name = 'bullet' + i;
		        b.exists = false;
		        b.visible = false;
		        b.checkWorldBounds = true;
		        b.events.onOutOfBounds.add(this.resetBullet, this);
		    }

		    //disparo3
		    bullets3 = game.add.group();
		    bullets3.enableBody = true;
		    bullets3.physicsBodyType = Phaser.Physics.ARCADE;
		    for (var i = 0; i < 5; i++)
		    {
		        var b = bullets3.create(0, 0, 'bullet');
		        b.name = 'bullet' + i;
		        b.exists = false;
		        b.visible = false;
		        b.checkWorldBounds = true;
		        b.events.onOutOfBounds.add(this.resetBullet, this);
		    }

		    //disparo4
		    bullets4 = game.add.group();
		    bullets4.enableBody = true;
		    bullets4.physicsBodyType = Phaser.Physics.ARCADE;
		    for (var i = 0; i < 5; i++)
		    {
		        var b = bullets4.create(0, 0, 'bullet');
		        b.name = 'bullet' + i;
		        b.exists = false;
		        b.visible = false;
		        b.checkWorldBounds = true;
		        b.events.onOutOfBounds.add(this.resetBullet, this);
		    }
		    
		    // mapa
		    map = game.add.tilemap('map', 64, 64);
		    map.addTilesetImage('imgmap');
		    layer = map.createLayer(0);
		    layer.resizeWorld();
		    map.setCollisionBetween(34,98);



		    // cursors
    		cursors = game.input.keyboard.createCursorKeys();
    		jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    		game.input.keyboard.addKeyCapture([ Phaser.Keyboard.X ]);

    		

		    //plataforma2
		    platform2 = game.add.physicsGroup();
		    platform2.enableBody = true;
		    map.createFromTiles(102,-1, 'platform2', layer, platform2);
		    platform2.setAll('body.immovable', true);

		    // vidas
		    lives = game.add.physicsGroup();
			lives.fixedToCamera = true;
			for (var i = 0; i < 3; i++) 
		    {
		        live = lives.create(870 + (50 * i), 25, 'live');
		        live.anchor.setTo(0.5, 0.5);
		        live.alpha = 1;
		    }

		    //llave
		    
		    key = game.add.sprite(1970, 1515, 'key');
		    game.physics.enable(key);
		    // key.fixedToCamera = true;
		    key.animations.add('turn', [0,1,2,3,4,5,6,,7,8], 10, true);
		    key.animations.play('turn');

    		// llave 2
    		//musica 
		    sound2 = game.add.audio('music');
		    sound2.play();
		    sound2.volume = 1.2;
		    // music.detune = 100;

		    	// piso
			fondopiso = game.add.physicsGroup();
			fondopiso.create(0,0, 'negro');
			fondopiso.scale.x= 1.6;
			fondopiso.scale.y= 1.6;
			fondopiso.alpha= 0; 
			// fondopiso.create(400,800, 'negro');
			fondopiso.fixedToCamera = true;
			fondopiso.setAll('body.immovable', true);
		    //key1.alpha = 0;
		    // ascensor.body.velocity.y = -75;
		    // piso
			m2 = game.add.physicsGroup();
			m2.create(230,250, 'm2');
			m2.fixedToCamera = true;
			// logo1.create(400,800, 'negro');
			m2.setAll('body.immovable', true);
			m2.visible = false;

			// logo
			logo = game.add.physicsGroup();
			logo.create(1350,880, 'logo');
			logo.scale.x = 0.3;
			logo.scale.y = 0.3;
			logo.setAll('body.immovable', true);
			logo.fixedToCamera = true;
			logo.visible = false;

			

			// piso
			m1 = game.add.physicsGroup();
			m1.create(40,180, 'm1');
			m1.fixedToCamera = true;
			m1.visible = false;
			// logo1.create(400,800, 'negro');
			m1.setAll('body.immovable', true);

			textgameover = "Game Over";
			textexit1 = game.add.text(270, 200, textgameover, {font:"12px arial black", fill: "#FFFFFF"} );
			textexit1.visible= false;
			textexit1.fixedToCamera= true;
			textexit1.fontSize = 80;

			// fondo
			gameover = game.add.physicsGroup();
			gameover.create(200,350, 'gameover');
			gameover.visible= false;
			gameover.fixedToCamera= true;
			gameover.setAll('body.immovable', true);

		    // texto
		    text = "la puerta esta cerrada \n       busca la llave";
		    textexit = game.add.text(1800, 0, text, {font:"12px arial black", fill: "#C91414"} );
		    textexit.fontSize = 30;
		    textexit.visible = false;
		 //    text = game.add.text(game.world.centerX, game.world.centerY, "hola");
		 //    // text.anchor.setTo(0.5);
			// text.fontSize = 60;

			// boton
			button = game.add.button(10, 10, 'button', this.actionOnClick, this, 1, 0, 2);
			button.visible = true;
			button.fixedToCamera = true;

			buttonplay = game.add.button(380, 420, 'play', this.actionOnClick2, this, 2, 0, 1);
			buttonplay.fixedToCamera = true;
			buttonplay.visible = false;

			botonmenu = game.add.button(380, 550, 'menu', this.actionOnClick3, this, 2, 0, 1);
			botonmenu.fixedToCamera = true;
			botonmenu.visible = false;

			buttonres = game.add.button(200, 650, 'buttonres', this.actionOnClick4, this, 2, 0, 1);
			buttonres.fixedToCamera = true;
			buttonres.visible = false;

			buttonmen = game.add.button(500, 650, 'menu', this.actionOnClick5, this, 2, 0, 1);
			buttonmen.fixedToCamera = true;
			buttonmen.visible = false;
		}, 

		actionOnClick: function () 
		{
			game.paused = true;
			fondopiso.alpha= 0.6;
			button.visible = false;
			buttonplay.visible = true;
			botonmenu.visible = true;
			m2.visible = true;
			logo.visible = true;
		},

		actionOnClick2: function () 
		{
			game.paused = false;
			fondopiso.alpha= 0;
			button.visible = true;
			buttonplay.visible = false;
			botonmenu.visible = false;
			m2.visible = false;
			logo.visible = false;
		},

		actionOnClick3: function () 
		{
			game.paused = false;
			sound2.stop();
			// game.state.add("menu", menu);
			game.state.start("menu", menu);
		},

		actionOnClick4: function () 
		{
			game.paused = false;
			sound2.stop();
			// game.state.add("menu", menu);
			game.state.start("nivel2", nivel2);
		},

		actionOnClick5: function () 
		{
			game.paused = false;
			sound2.stop();
			// game.state.add("menu", menu);
			game.state.start("menu", menu);
		},



		update: function()
		{
			ascensor.position.y -= 1;
			 //console.log(ascensor.position);
			if (ascensor.position.y <= -310) {
			 	ascensor.position.y = 120;
			 	// console.log(player.position)
			 }

			 
			
	 		// colision positiva
    		game.physics.arcade.collide(player, layer);
    		game.physics.arcade.collide(police, layer);
    		game.physics.arcade.collide(police2, layer);
    		game.physics.arcade.collide(police3, layer);
    		game.physics.arcade.collide(police4, layer);
    		game.physics.arcade.collide(bullets, layer, this.fin);
    		game.physics.arcade.collide(bullets, platform2, this.fin);
    		game.physics.arcade.collide(bullets2, layer, this.fin);
    		game.physics.arcade.collide(bullets2, platform2, this.fin);
    		game.physics.arcade.collide(bullets3, layer, this.fin);
    		game.physics.arcade.collide(bullets3, platform2, this.fin);
    		game.physics.arcade.collide(bullets4, layer, this.fin);
    		game.physics.arcade.collide(bullets4, platform2, this.fin);
    		game.physics.arcade.collide(ascensor,player);
    		
    		// colision negativa
    		game.physics.arcade.overlap(player, platform2, this.obstacle, null, this);
    		game.physics.arcade.overlap(player, police, this.obstacle, null, this);
    		game.physics.arcade.overlap(player, police2, this.obstacle, null, this);
    		game.physics.arcade.overlap(player, police3, this.obstacle, null, this);
    		game.physics.arcade.overlap(player, police4, this.obstacle, null, this);
    		game.physics.arcade.overlap(player, bullets, this.death, null, this);
    		game.physics.arcade.overlap(player, bullets2, this.death, null, this);
    		game.physics.arcade.overlap(player, bullets3, this.death, null, this);
    		game.physics.arcade.overlap(player, bullets4, this.death, null, this);
    		game.physics.arcade.overlap(player, key, this.bonus, null, this);
    		game.physics.arcade.overlap(player, saw, this.obstacle, null, this);
    		game.physics.arcade.overlap(player, saw2, this.obstacle, null, this);
    		game.physics.arcade.overlap(player, saw3, this.obstacle, null, this);
    		game.physics.arcade.overlap(player, saw4, this.obstacle, null, this);
    		game.physics.arcade.overlap(player, saw5, this.obstacle, null, this);
    		game.physics.arcade.overlap(player, exit, this.win, null, this);

    		// movimiento x jugador
			player.body.velocity.x = 0;
		    if (cursors.left.isDown)
		    {
		        player.body.velocity.x = -200;

		        if (facing = 'left')
		        {
		            player.animations.play('left');
		            facing = 'left';
		        }
		    }
		    else if (cursors.right.isDown)
		    {
		        player.body.velocity.x = 200;

		        if (facing = 'right')
		        {
		            player.animations.play('right');
		            facing = 'right';
		        }
		    }
		    else
		    {
		        if (facing != 'idle')
		        {
		            player.animations.stop();

		            if (facing == 'left')
		            {
		                player.frame = 5;
		            }
		            else
		            {
		                player.frame = 0;
		            }

		            facing = 'idle';
		        }
		    }


		    // movimiento Y jugador
		    if (facing != 'left')
		    {
			    if (player.body.velocity.y >= 1) 
			    {
			    	if (player.body.velocity.x >= 1) 
			    	{
				    	player.animations.play('downR');
				    }        
			    }
			    else if (player.body.velocity.y <= -1) 
			    {
			       	if (player.body.velocity.x >= 1) 
			       	{
			            player.animations.play('aboveR');
			        }
				}
			}
			
			else 
			{
				if (player.body.velocity.y >= 1) 
				{
					if (player.body.velocity.x <= -1) 
					{
			        	player.animations.play('downL');
			        }
			    }
			    else if (player.body.velocity.y <= -1) 
			    {
			            player.animations.play('aboveL');
			    }
			}


			// salto
		    if (jumpButton.isDown && (player.body.onFloor() || player.body.touching.down))
    		{
    		    player.body.velocity.y = -360;
    		}

    		// posicion
    		x1 = player.position.x;
    		y1 = player.position.y;
    		x2 = police.position.x;
    		y2 = police.position.y;
    		x3 = police2.position.x;
    		y3 = police2.position.y;
    		x4 = police3.position.x;
    		y4 = police3.position.y;
    		x5 = police4.position.x;
    		y5 = police4.position.y;
    		posx = player.position.x;
    		posy = player.position.y;
    		x6 = exit.position.x;
    		y6 = exit.position.y;

    		dx = x1 - x2;
    		dy = y1 - y2;
    		dis =  Math.sqrt(dx * dx + dy * dy);
    		Dx = posx - x2;
    		Dy = posy - y2;
    		dz = Dx/Dy;
    		an = Math.atan(dz);
    		angle = an;
    		if (dis< 300) 
    		{    			
    			this.fireBullet();
    		}

    		dx2 = x1 - x3;
    		dy2 = y1 - y3;
    		dis2 =  Math.sqrt(dx2 * dx2 + dy2 * dy2);
    		if (dis2< 300) 
    		{
    			this.fireBullet2();
    		}

    		dx3 = x1 - x4;
    		dy3 = y1 - y4;
    		dis3 =  Math.sqrt(dx3 * dx3 + dy3 * dy3);
    		if (dis3< 300) 
    		{
    			this.fireBullet3();
    		}

    		dx4 = x1 - x5;
    		dy4 = y1 - y5;
    		dis4 =  Math.sqrt(dx4 * dx4 + dy4 * dy4);
    		if (dis4< 300) 
    		{
    			this.fireBullet4();
    		}

    		dx5 = x1 - x6;
    		dy5 = y1 - y6;
    		dis5 =  Math.sqrt(dx5 * dx5 + dy5 * dy5);
    		/*if (key) 
    		{
    			if (dis5 > 2150) 
    			{
    				textexit.visible = true;
    			}
    			else 
    			{
    				textexit.kill();
    			}
    		}
    		else {
    			textexit.kill();
    		}*/

    		
    		

    		

    		
    		// sierra
    		saw.animations.play('left');
    		saw2.animations.play('left');
    		saw3.animations.play('left');
    		saw4.animations.play('left');
    		saw5.animations.play('left');

    		//policia
    		if (police.body.position.x <=200) 
    		{
		        police.body.velocity.x =-vel;
		        if (police.body.velocity.x = -vel) 
		        {
		            police.animations.play('right1');
		        }
		    }

		    if (police.body.position.x >=660) 
		    {
		        police.body.velocity.x = vel;
		        if (police.body.velocity.x = vel) 
		        {
		            police.animations.play('left1');
		        }
		    }   //console.log(player.position)

		    //policia2
    		if (police2.body.position.x <=200) 
    		{
		        police2.body.velocity.x =-vel;
		        if (police2.body.velocity.x = -vel) 
		        {
		            police2.animations.play('right1');
		        }
		    }

		    if (police2.body.position.x >=900) 
		    {
		        police2.body.velocity.x = vel;
		        if (police2.body.velocity.x = vel) 
		        {
		            police2.animations.play('left1');
		        }
		    } 

		    //policia3
    		if (police3.body.position.x <=1130) 
    		{
		        police3.body.velocity.x =-vel;
		        if (police3.body.velocity.x = -vel) 
		        {
		            police3.animations.play('right1');
		        }
		    }

		    if (police3.body.position.x >=1670) 
		    {
		        police3.body.velocity.x = vel;
		        if (police3.body.velocity.x = vel) 
		        {
		            police3.animations.play('left1');
		        }
		    } 

		    //policia4
    		if (police4.body.position.x <=815) 
    		{
		        police4.body.velocity.x =-vel;
		        if (police4.body.velocity.x = -vel) 
		        {
		            police4.animations.play('right1');
		        }
		    }

		    if (police4.body.position.x >=910) 
		    {
		        police4.body.velocity.x = vel;
		        if (police4.body.velocity.x = vel) 
		        {
		            police4.animations.play('left1');
		        }
		    } 


		    //sierra
    		if (saw.body.position.x <=680) 
    		{
		        saw.body.velocity.x =-vel1;
		        if (saw.body.velocity.x = -vel1) 
		        {
		            saw.animations.play('right1');
		        }
		    }

		    if (saw.body.position.x >=1160) 
		    {
		        saw.body.velocity.x = vel1;
		        if (saw.body.velocity.x = vel1) 
		        {
		            saw.animations.play('left1');
		        }
		    }

		    //sierra
    		if (saw2.body.position.x <=760) 
    		{
		        saw2.body.velocity.x =-vel1;
		        if (saw2.body.velocity.x = -vel1) 
		        {
		            saw2.animations.play('right1');
		        }
		    }

		    if (saw2.body.position.x >=910) 
		    {
		        saw2.body.velocity.x = vel1;
		        if (saw2.body.velocity.x = vel1) 
		        {
		            saw2.animations.play('left1');
		        }
		    }

		    //sierra3
    		if (saw3.body.position.x <=-10) 
    		{
		        saw3.body.velocity.x =-vel1;
		        if (saw3.body.velocity.x = -vel1) 
		        {
		            saw3.animations.play('right1');
		        }
		    }

		    if (saw3.body.position.x >=199) 
		    {
		        saw3.body.velocity.x = vel1;
		        if (saw3.body.velocity.x = vel1) 
		        {
		            saw3.animations.play('left1');
		        }
		    }

		    //sierra3
    		if (saw4.body.position.x <=240) 
    		{
		        saw4.body.velocity.x =-vel1;
		        if (saw4.body.velocity.x = -vel1) 
		        {
		            saw4.animations.play('right1');
		        }
		    }

		    if (saw4.body.position.x >=398) 
		    {
		        saw4.body.velocity.x = vel1;
		        if (saw4.body.velocity.x = vel1) 
		        {
		            saw4.animations.play('left1');
		        }
		    }

		    //sierra5
    		if (saw5.body.position.x <=440) 
    		{
		        saw5.body.velocity.x =-vel1;
		        if (saw5.body.velocity.x = -vel1) 
		        {
		            saw5.animations.play('right1');
		        }
		    }

		    if (saw5.body.position.x >=587) 
		    {
		        saw5.body.velocity.x = vel1;
		        if (saw5.body.velocity.x = vel1) 
		        {
		            saw5.animations.play('left1');
		        }
		    }

		    

		    //console.log(player.position);
		    
		},

		bonus: function (player, key) 
		{
			// llave
			llave = true;
			key.kill();
		    key1 = game.add.sprite(940,50, 'key2');
		    key1.fixedToCamera = true;
		    key1.animations.add('turn', [0,1,2,3,4,5,6,,7,8], 10, true);
		    key1.animations.play('turn');
		    //key1.alpha = 1;

		    //sonido 
		    sound = game.add.audio('sound');
		    sound.play();
		    sound.volume = 0.5;
		    // sound.detune = 100;
		},

		fin: function (bullet) 
		{
		    bullet.kill();    
		},

		

		obstacle: function  (player, platform2) 
		{							
			//console.log("aqui");
			this.reboot();

		},

		death: function  (player, bullets) 
		{
		    bullets.kill();
		    this.reboot();
		},

		reboot: function ()
		{
			
			player.kill();
			player.reset(0, 114);
			llave = false;;

			if (key1) 
			{
				key1.kill();
			
			}

			if (key) 
			{
				key.reset(1970, 1515);
			
			}
			/*if (key.kill()) {
				key.reset(200,114);
			}*/
			
 
			//key1.alpha = 0;
			//key.reset(433, 114);
			//key.reset();
		    live = lives.getFirstAlive();
		    if (live)
		    {
		        live.kill();
		       
		    }
		    if (lives.countLiving() < 1)
		    {
		        player.kill();
		        sound2.stop();
		        fondopiso.alpha= 0.6;
		        game.paused = true;
		        button.visible = false;
		        m1.visible = true;
		        textexit1.visible= true;
		        gameover.visible= true;
		        buttonres.visible = true;
				buttonmen.visible = true;
		        // game.state.start("perdio", perdio);
		    }
		    
		},

		

		fireBullet: function  () 
		{
		    	
		    	if (game.time.now > bulletTime)
		    	{	
		    		bullet = bullets.getFirstExists(false);
		        	if (bullet)
		        	{
		            	bullet.reset(police.x + 6, police.y + 25);
		            	bullet.body.velocity.setTo(dx, dy);
		            	// bullet.body.velocity.y = angle;
		            	// game.physics.arcade.moveToObject(player,police);
		            	//Bullet.reset(player.body.x, player.body.y);
		            	bulletTime = game.time.now + 2000;
		        	}
		    	}

		},

		fireBullet2: function  () 
		{
		    	
		    	if (game.time.now > bulletTime)
		    	{	
		    		bullet2 = bullets2.getFirstExists(false);
		        	if (bullet2)
		        	{
		            	bullet2.reset(police2.x + 6, police2.y + 25);
		            	bullet2.body.velocity.setTo(dx2, dy2);
		            	// bullet2.body.velocity.y = -200;
		            	//Bullet.reset(player.body.x, player.body.y);
		            	bulletTime = game.time.now + 2000;
		        	}
		    	}

		},

		fireBullet3: function  () 
		{
		    	
		    	if (game.time.now > bulletTime)
		    	{	
		    		bullet3 = bullets3.getFirstExists(false);
		        	if (bullet3)
		        	{
		            	bullet3.reset(police3.x + 6, police3.y + 25);
		            	bullet3.body.velocity.setTo(dx3, dy3);
		            	// bullet3.body.velocity.y = -200;
		            	//Bullet.reset(player.body.x, player.body.y);
		            	bulletTime = game.time.now + 2000;
		        	}
		    	}

		},

		fireBullet4: function  () 
		{
		    	
		    	if (game.time.now > bulletTime)
		    	{	
		    		bullet4 = bullets4.getFirstExists(false);
		        	if (bullet4)
		        	{
		            	bullet4.reset(police4.x + 6, police4.y + 25);
		            	bullet4.body.velocity.setTo(dx4, dy4);
		            	// bullet4.body.velocity.y = -200;
		            	//Bullet.reset(player.body.x, player.body.y);
		            	bulletTime = game.time.now + 1000;
		        	}
		    	}

		},

		resetBullet: function (bullet) 
		{
    		bullet.kill();
		},

		

		win: function () 
		{
			if (llave == true) {
				// key1.kill();
				sound2.stop();
				game.state.start("win2", win2);
				llave= false;
			}

			else 
			{
				
				if (dis5 >2180) 
				{
					textexit.visible = true;
				}
				if (dis5 >2270) 
				{
					textexit.visible = false;
				}
				if (dis5 < 2179) {
					textexit.visible = false;
				}
				
			}
		},

		/*restart: function  () 
		{
		    lives.callAll('revive');
			player.revive(0, 114);
			key1.kill();
		},*/

	}

	