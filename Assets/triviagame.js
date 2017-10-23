// SETTING  Global variables

var timeCounter = 60;

var rightAnswers = 0;

var wrongAnswers = 0;

//With the timer function

function timer() {
    timeCounter++;
    let interval = setInterval(function () {
        timeCounter--;
        if (timeCounter < 0) {
            clearInterval(interval);
            return;
        }
        console.log(timeCounter);
    }, 1000)
}


$(document).ready(function () {

    //Start Button is showing.    
    //initialize the game with hidden divs.    
    $(".timer_container").hide();
    $(".score_container").hide();
    $(".q1_container").hide();
    $(".q2_container").hide();
    $(".q3_container").hide();

    $("#startButton").on("click", function () {
        //calling the timer
        timer();
        //Q1
        //On click start triggers the timer

        $("#startcontainer").hide();
        $(".timer_container").show();
        $(".q1_container").show();

        //If Statement


        $(".btn").on("click", function () {
            //Q2
            //On click resets the timer

            $(".q1_container").hide();
            $(".q2_container").show();

            //IF Statement.

            $(".btn").on("click", function () {
                //Q3
                //On click resets the timer

                $(".q2_container").hide();
                $(".q3_container").show();

                //If Statement

                $(".btn").on("click", function () {
                    //score_container
                    //Timer's done
                    //Want to try again brings you to the start button.
                    
                    $(".timer_container").hide();
                    $(".q3_container").hide();
                    $(".score_container").show();

                    //I think the easy way would be to have this bring you back to the start button.
                    //The commands are there and I have a hunch that it'll reset itself
                })

            })
        })


    })



    //Ending function for doc.ready
})
//Want the timer to show up
//IF you feel ambitious get that timer to reset for every question
//store the answers and have an on click function that will add up the rights and wrongs.
//bring back to start again.