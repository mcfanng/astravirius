import 'phaser';
import './fonts/minim.otf';
import './css/bootstrap.min.css';
import './css/app.css';
import  'bootstrap';
import { GameConfig as MainGameConfig } from './gameConfig/mainGameConfig';
import { SimpleGame } from './gameClasses/simpleGame';



window.onload = () => {
    const updatedDateElement = document.getElementById("updatedDate");
    updatedDateElement.innerHTML = new Date().toDateString();
    const game = new SimpleGame(MainGameConfig);
    console.log(game.isBooted);
};

