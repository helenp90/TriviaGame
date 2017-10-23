// SETTING  Global variables

var timeCounter = 30;

var rightAnswers = 0;

var wrongAnswers = 0;

$(document).ready(function () {

            //initialize the game with hidden divs.    
            $(".timer_container").hide();
            $(".score_container").hide();
            $(".q1_container").hide();
            $(".q2_container").hide();

            $("#startButton").on("click", function () {

                $("#startcontainer").hide();
                $(".timer_container").show();
                $(".q1_container").show();
                $(".q2_container").hide();

            })
        
        
        
        //Ending function for doc.ready
        })