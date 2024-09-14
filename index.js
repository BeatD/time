let btnPress = 0;

document.addEventListener("DOMContentLoaded", ()=>{
    let time = document.getElementById("time");
    setInterval(() => {
        let CurrentTime = new Date();
        let Minutes = CurrentTime.getMinutes();
        let seconds = CurrentTime.getSeconds();
        if (seconds < 10) {
            seconds = "0" + seconds ;
        }
        else  {
            console.log("debug complete")
        }
        if (Minutes < 10) {
            Minutes = "0" + Minutes ;
        }
        else  {
            console.log("debug complete")
        }
        time.innerHTML = CurrentTime.getHours() + ":" + Minutes+ ":" + seconds
    }, 1000);
})

function centerTime() {
    if (btnPress === 0) {
        let time = document.getElementById("time");
        document.getElementById("btn").innerHTML = "Put back the time please >:("
        time.style.transition = "all"
        time.style.transitionDuration  = "2s"
        time.style.marginLeft = "41%"
        btnPress = btnPress + 1;
        time.style.fontSize = "70px"   
    }
    else {
        let time = document.getElementById("time");
        time.style.transition = "all"
        time.style.transitionDuration  = "2s"
        time.style.marginLeft = "0%"
        btnPress = btnPress - 1;
        document.getElementById("btn").innerHTML = "Thanks now i know u clicked on me :0"
        time.style.fontSize = "15px"   
    }
}
document.addEventListener("DOMContentLoaded", () => {
    let hue = 0;
    let gradient = document.getElementById("body");

    function updateGradient() {
        hue = (hue + 1) % 360; // Increment hue and wrap around after 360
        gradient.style.backgroundImage = `linear-gradient(hsl(${hue}, 100%, 50%), hsl(${(hue + 120) % 360}, 100%, 50%))`;
    }

    setInterval(updateGradient, 30); // Update every 100ms
});
