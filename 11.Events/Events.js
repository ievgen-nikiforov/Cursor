const qLetter = new Audio( "q.mp3" );
const wLetter = new Audio( "w.mp3" );
const eLetter = new Audio( "e.mp3" );
const rLetter = new Audio( "r.mp3" );
const tLetter = new Audio( "t.mp3" );

document.addEventListener('keypress', function (e) {
    const eCode = e.code 
    switch (eCode) {
        case "KeyQ": qLetter.play();
        break;
    }
    switch (eCode) {
        case "KeyW": wLetter.play();
        break;
    }
    switch (eCode) {
        case "KeyE": eLetter.play();
        break;
    }
    switch (eCode) {
        case "KeyR": rLetter.play();
        break;
    }
    switch (eCode) {
        case "KeyT": tLetter.play();
        break;
    }
});
