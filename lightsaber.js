console.log('may the force be with you, jedi!');

var colors = ['red', 'green', 'blue'];
var lightsaber = document.getElementById('light');
var hilt = document.getElementById('hilt');

var saberOn = document.getElementById('saberOn');
var saberOff = document.getElementById('saberOff');
var saberHum = document.getElementById('saberHum');

saberOn.onended = () => {
    saberHum.play();
}

saberHum.onpause = () => {
    saberOff.play();
}

saberOff.onended = () => {
    saberHum.pause();
    saberHum.currentTime = 0;
}

fire = () => {
    lightsaber.classList.toggle('hide');
    lightsaber.classList.toggle('show');

    if( lightsaber.classList.contains('hide') ) {
        saberHum.pause();
    }
    else {
        saberOn.play();
    }
}

changeColor = () => {
    let newColor = colors[parseInt(Math.random() * 3)];
    lightsaber.setAttribute('src', `assets/${newColor}.png`)
}