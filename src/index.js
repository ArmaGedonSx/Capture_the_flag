import { Game } from 'phaser';
import { Scene1 } from './scenes/scene1.js';
import { Scene2 } from './scenes/scene2.js';

const game = new Game({
    type: Phaser.AUTO,
    width: 1024,
    height: 768,
    scene: [Scene1,Scene2]
});