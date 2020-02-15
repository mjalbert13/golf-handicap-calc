function handicapCalc(tee, index, sex, per){
    let percent = per/100;
    if(tee ==="red" && sex ==="f"){
        let slope = 126;
        let rating = 71.1
        let par = 72
        let courseHanicap = (index * slope/113) - (par - rating)
        let playingHandicap = Math.round(courseHanicap * percent)
        console.log(playingHandicap) 
    } else if (tee === "white" && sex ==="f") {
        let slope = 129;
        let rating = 75.5
        let par = 72
        let courseHanicap = (index * slope/113) - (par - rating)
        let playingHandicap = Math.round(courseHanicap * percent)
        console.log(playingHandicap) 
    } else if (tee === "gold" && sex ==="m") {
        let slope = 120;
        let rating = 66.1;
        let par = 72;
        let courseHanicap = (index * slope/113) - (par - rating);
        let playingHandicap = Math.round(courseHanicap * percent);
        console.log(playingHandicap) ;
    } else if (tee === "white" && sex ==="m") {
        let slope = 126;
        let rating = 70
        let par = 72
        let courseHanicap = (index * slope/113) - (par - rating)
        let playingHandicap = Math.round(courseHanicap * percent)
        console.log(playingHandicap) 
    } else if (tee === "blue" && sex ==="m") {
        let slope = 129;
        let rating = 71.9
        let par = 72
        let courseHanicap = (index * slope/113) - (par - rating)
        let playingHandicap = Math.round(courseHanicap * percent)
        console.log(playingHandicap) 
    } else{
        console.log("Sorry enter a valid input")
    }
}


handicapCalc("white", 17.8, "m", 100)