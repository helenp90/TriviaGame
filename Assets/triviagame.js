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


        $(".btn").on("click", function (){
  //Q2
  //On click resets te timer

            $("#startcontainer").hide();
            $(".timer_container").show();
            $(".q1_container").hide();
            $(".q2_container").show();

            $(".btn").on("click", function(){
                

                $("#startcontainer").hide();
                $(".timer_container").show();
                $(".q2_container").hide();
                $(".q3_container").show();
                
            })
        })


            })
        
        
        
        //Ending function for doc.ready
        })