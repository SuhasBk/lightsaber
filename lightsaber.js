console.log('may the force be with you, jedi!');

var lightsaber = document.getElementById('light');

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

    if( lightsaber.classList.contains('hide') ) {
        saberHum.pause();
    }
    else {
        saberOn.play();
        
    }
}