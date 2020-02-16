function handicapCalc(tee, index, sex, per){
    let percent = per/100;

    if(tee ==="red" && sex ==="f"){
        let courseHanicap = (index * 126/113) - (72 - 71.1)
        let playingHandicap = Math.round(courseHanicap * percent)
        console.log(playingHandicap) 
    } else if (tee === "white" && sex ==="f") {
        let courseHanicap = (index * 129/113) - (72 - 75.5)
        let playingHandicap = Math.round(courseHanicap * percent)
        console.log(playingHandicap) 
    } else if (tee === "gold" && sex ==="m") {
        let courseHanicap = (index * 120/113) - (70 - 66.1);
        let playingHandicap = Math.round(courseHanicap * percent);
        console.log(playingHandicap);
    } else if (tee === "white" && sex ==="m") {
        let courseHanicap = (index * 126/113) - (70 - 70)
        let playingHandicap = Math.round(courseHanicap * percent)
        console.log(playingHandicap) 
    } else if (tee === "blue" && sex ==="m") {
        let courseHanicap = (index * 129/113) - (70 - 71.9)
        let playingHandicap = Math.round(courseHanicap * percent)
        console.log(playingHandicap) 
    } else{
        console.log("Sorry enter a valid input")
    }
}


handicapCalc("blue", 17.8, "m", 90)