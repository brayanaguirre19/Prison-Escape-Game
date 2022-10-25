var button;
var button2;
var back;
var fondopiso;
var logo;
var logo1;
var players = {
	preload: function() 
	{
		game.load.spritesheet('button', 'img/player1.png', 233, 305);
		game.load.spritesheet('button2', 'img/player2.png', 233, 305);
		game.load.spritesheet('back', 'img/back.png', 52, 68);
		game.load.image('negro', 'img/negro.jpg');
		game.load.image('fondo', 'img/fondomenu.png');
		game.load.image('logo', 'img/logo2.png');
		game.load.image('fondo1', 'img/m1.png');
		// game.stage.backgroundColor ='#5B5B5B';
	},

	create: function()
	{
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



	// piso
	logo1 = game.add.physicsGroup();
	logo1.create(40,110, 'fondo1');
	// logo1.create(400,800, 'negro');
	logo1.setAll('body.immovable', true);

	// logo
		logo = game.add.physicsGroup();
		logo.create(1400,10, 'logo');
		logo.scale.x = 0.3;
		logo.scale.y = 0.3;
		logo.setAll('body.immovable', true);


	// boton
	button = game.add.button(250, 300, 'button', this.actionOnClick, this, 1, 0, 2);

	button2 = game.add.button(530, 300, 'button2', this.actionOnClick2, this, 2, 0, 1);

	back = game.add.button(10, 10, 'back', this.actionOnClick3, this, 1, 0, 2);

	// texto
	text = "Selecciona un personaje";
	textexit = game.add.text(100, 135, text, {font:"12px arial black", fill: "#F8F8F8"} );
	textexit.fontSize = 60;
	// textexit.visible = false;
	},

	
	actionOnClick: function () 
	{
		game.state.start("nivel1", nivel1);
	},

	actionOnClick2: function () 
	{
		game.state.start("nivel2", nivel2);
	},

	actionOnClick3: function () 
	{
		game.state.start("menu", menu);
	}
}