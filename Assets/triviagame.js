// SETTING  Global variables

var counter = 15;

var rightAnswers = 0;

var wrongAnswers = 0;

$(document).ready(function () {

            //initialize the game with hidden divs.    
            $(".timer_container").hide();
            $(".score_container").hide();
            $(".game_container").hide();

            $("#startButton").on("click", function () {

                $(".timer_container").show();
                $(".game_container").show();
                $("#startcontainer").hide();

            })
        
        
        
        //Ending function for doc.ready
        })