var text = "";
var textexit ;
var button;
var image;
var image2;
var police;
var soundwin;
var win = {

	preload: function() 
	{
		game.load.spritesheet('button', 'img/menu.png', 236.6, 96);
		game.load.image('image', 'img/win.png');
		game.load.image('image2', 'img/carcel.png');
		// game.stage.backgroundColor ='#5B5B5B';
		game.load.spritesheet('police', 'img/ladron.png', 62, 88);
		game.load.audio('soundwin', ['audio/win.mp3']);
	},

	create: function()
	{
		// fondo
		image = game.add.physicsGroup();
		image.create(0,2000, 'image');
		image.scale.x=0.1;
		image.scale.y=0.1;
		// fondo.create(400,800, 'negro');
		image.setAll('body.immovable', true);

		

		//policia
		    police = game.add.physicsGroup();
		    police = game.add.sprite(400,500, 'police');
		    game.physics.enable(police);
		    // police.body.collideWorldBounds = true;
		    police.body.setSize(43, 68, 10, 10);
		    police.scale.x=0.8;
		    police.scale.y=0.8;
		    // police.body.gravity.y = 500;
		    // police.animations.add('left1', [0,1,2,3,4], 7, true);
		    police.animations.add('right',[1,2,3,4], 7, true);
		    police.body.velocity.x = 70;

	// boton
	button = game.add.button(360, 630, 'button', this.actionOnClick, this, 2, 0, 1);

	// texto
	text = "Ganaste";
	textexit = game.add.text(320, 100, text, {font:"12px arial black", fill: "#FFFFFF"} );
	textexit.fontSize = 80;
	// textexit.visible = false;

	soundwin = game.add.audio('soundwin');
		soundwin.play();
		soundwin.volume = 0.6;
		// soundwin.detune = 100;
	},

	update: function () 
	{


		if (police.body.velocity.x == 70) {
			police.animations.play('right');
		}
		//policia
    		/*if (police.body.position.x <=200) 
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
		    }   //console.log(player.position)*/
	},

	actionOnClick: function () 
	{
		// game.state.add("menu", menu);
		soundwin.stop();
		game.state.start("menu", menu);
	}

}
