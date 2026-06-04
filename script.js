function switchItUp(){
    document.getElementById("Smoke").style.visibility = "hidden";
    document.getElementById("Mirrors").style.visibility = "visible";
}

var count = 0
var cards = []
cards.push(document.getElementById("c1"))
cards.push(document.getElementById("c2"))
cards.push(document.getElementById("c3"))

console.log(cards)

cards.forEach(x => {
    x.addEventListener("click",function(){
        if(count == 0){
            x.src="img/Playing_card_spade_2.svg.png"
            count = 1
        }
        else if(count == 1){
            switchItUp();
            document.documentElement.requestFullscreen()
        }
    })
});
