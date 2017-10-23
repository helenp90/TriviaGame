// SETTING  Global variables

var timeCounter = 30;

var rightAnswers = 0;

var wrongAnswers = 0;

//With the timer function








$(document).ready(function () {

    //Start Button is showing.    
    //initialize the game with hidden divs.    
    $(".timer_container").hide();
    $(".score_container").hide();
    $(".q1_container").hide();
    $(".q2_container").hide();
    $(".q3_container").hide();

    $("#startButton").on("click", function () {
        //Q1
        //On click start triggers the timer

        $("#startcontainer").hide();
        $(".timer_container").show();
        $(".q1_container").show();


        $(".btn").on("click", function () {
            //Q2
            //On click resets the timer

            $(".q1_container").hide();
            $(".q2_container").show();

            $(".btn").on("click", function () {
                //Q3
                //On click resets the timer

                $(".q2_container").hide();
                $(".q3_container").show();

                $(".btn").on("click", function () {
                    //score_container
                    //Timer's done
                    //Want to try again brings you to the start button.
                    
                    $(".timer_container").hide();
                    $(".q3_container").hide();
                    $(".score_container").show();

                    
                })

            })
        })


    })



    //Ending function for doc.ready
})