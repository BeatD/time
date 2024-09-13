let btnPress = 0;

document.addEventListener("DOMContentLoaded", ()=>{
    let time = document.getElementById("time");
    setInterval(() => {
        let CurrentTime = new Date();
        let seconds = CurrentTime.getSeconds();
        if (seconds < 10) {
            seconds = "0" + seconds ;
        }
        else  {
            console.log("debug complete")
        }
        time.innerHTML = CurrentTime.getHours() + ":" + CurrentTime.getMinutes() + ":" + seconds
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