var W = 640;
var H = 1136;
var SCORE = 0;
var BEST = 0;
var LAST = 0;
var TOTAL = 0;
var NICOBEST = 0;
var SOUND = 1;
var SANA = 0;
var SANACOUNT = 0
var game = new Phaser.Game(W, H, Phaser.CANVAS, 'game', null, false, false);
game.state.add('load', load);
game.state.add('menu', menu);
game.state.add('play', play);
game.state.add('play_nico', play_nico);
game.state.start('load');
