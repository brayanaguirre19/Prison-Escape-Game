var button;
var logo;
var map;
var layer;
var fondopiso;
var fondo;
var player;
		var facing =  'right';
		var jumping = 'right';
this.menu ={

	preload: function() 
	{
			game.load.image('logo', 'img/logo.png');
			game.load.spritesheet('ladron', 'img/ladron.png', 62, 88);
			game.load.spritesheet('button', 'img/start.png', 202, 97);
			game.load.spritesheet('key', 'img/llave.png', 77, 63);
			game.load.tilemap('map', 'map/menu.csv', null, Phaser.Tilemap.CSV);
			game.load.image('imgmap', 'img/tiled2.png');
			game.load.image('negro', 'img/negro.jpg');
			game.load.image('fondo', 'img/fondomenu.jpg');
			// game.stage.backgroundColor ='#5B5B5B';
	},

	create: function()
	{
		// tiled
		map = game.add.tilemap('map', 1, 1);
		map.addTilesetImage('imgmap');
		layer = map.createLayer(0);
		layer.resizeWorld();

		
		// fondo
		fondo = game.add.physicsGroup();
		fondo.create(-250,0, 'fondo');
		fondo.scale.x=1.5;
		fondo.scale.y=1.32;
		// fondo.create(400,800, 'negro');
		fondo.setAll('body.immovable', true);

		// piso
		fondopiso = game.add.physicsGroup();
		fondopiso.create(0,800, 'negro');
		fondopiso.create(400,800, 'negro');
		fondopiso.setAll('body.immovable', true);


		// logo
		logo = game.add.physicsGroup();
		logo.create(220,200, 'logo');
		logo.setAll('body.immovable', true);

		

		// boton
		button = game.add.button(400, 550, 'button', this.actionOnClick, this, 2, 0, 1);

		// jugador
			player = game.add.sprite(500, 720, 'ladron');
			game.physics.enable(player);
			player.body.collideWorldBounds = true;
			player.body.setSize(43, 68, 10, 10);
    		player.body.gravity.y = 500;
    		player.animations.add('left', [6,7,8,9], 7, true);
    		player.animations.add('right',[1,2,3,4], 7, true);
    		player.animations.add('aboveR',[10], 10, false);
    		player.animations.add('aboveL',[12], 10, false);
    		player.animations.add('downR',[11], 10, false);
    		player.animations.add('downL',[13], 10, false);
	
		key = game.add.sprite(Math.random()*game.width-100, 720, 'key');
		    game.physics.enable(key);
		    // key.fixedToCamera = true;
		    key.animations.add('turn', [0,1,2,3,4,5,6,,7,8], 10, true);
		    key.animations.play('turn');

		// cursors
    		cursors = game.input.keyboard.createCursorKeys();
    		jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    		game.input.keyboard.addKeyCapture([ Phaser.Keyboard.X ]);
	},

	update: function()
	{

		game.physics.arcade.overlap(player, key, this.bonus, null, this);

		// console.log(player.position);
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
	},

	bonus: function ()
	{
		key.kill();
		key = game.add.sprite(Math.random()*game.width-20, 720, 'key');
		    game.physics.enable(key);
		    game.physics.enable(key);
		    // key.fixedToCamera = true;
		    key.animations.add('turn', [0,1,2,3,4,5,6,,7,8], 10, true);
		    key.animations.play('turn');
	},

	actionOnClick: function () 
	{
		game.state.start("players", players);
	}
}