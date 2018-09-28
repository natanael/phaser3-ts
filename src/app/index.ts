import 'phaser';

const config = {
	type: Phaser.AUTO,
	width: window.innerWidth,
	height: window.innerHeight,
	scene: {
		preload: preload,
		create: create,
		update: update
	}
};

const _game = new Phaser.Game(config);

function preload() {}

function create() {
	(window as any).game = this;
	this.text = this.add.text(16, 16, 'score: 42', {
		fontFamily: 'monospace',
		fontSize: '32px',
		fill: '#fff'
	});
}

function update() {
	// this.text.setPosition()
	// this.text.text = `${i}`;
	this.text.y = (this.text.y + 1) % window.innerHeight;
	this.text.x = (this.text.x + 1) % window.innerWidth;
}
