var tappedCardDeck=0;
var dropinvalidcard=0;
$(document).ready(function(){
    setTimeout(interoanima,1000);
    
    $("#pileofcard").bind("click",function(){
        if(tappedCardDeck==1){
            flip();
        }
            
    });
    $("#game-area #topc4").bind("click",function(){
        if(dropinvalidcard==1){

        }
    })
   
    $("#game-area #correctcard").bind("click",function(){
       
        $("#game-area #correctcard img").css("animation", "none");
        $('#game-area #correctcard').delay(00).animate({left:"209px",top:"121px",width:"73px"}, {
            step: function(now,fx) {
              $(this).css('-webkit-transform','rotate(26deg)'); 
              $(this).css('-moz-transform','rotate(26deg)');
              $(this).css('transform','rotate(26deg)');
            },
            duration:1000
        
        },1000,animateinCorrectCard());
       
        $("#game-area #correctcard img").css("box-shadow", "none");
    });
    $("#game-area #clickableareaforinvalidcard").bind("click",function(){
        deleteWrongCard()
    })
})


function interoanima(){
    $("#game-area #pileofcard").animate({left:"96px",top:"7px"},1000,function(){
       $("#game-area .msg").html("MAKE A SEQUENCE");
        setTimeout(tapToPick,1500)
    });
   
    $("#game-area #card1").addClass("animateCards");
    $("#game-area #bottomcardcontainer").delay(500).animate({top:"94px"},500)
    
}

function tapToPick(){
    $("#game-area .msg").html("TAP TO PICK A CARD");
    //$("#game-area #card1").addClass("containerglow");
    tappedCardDeck=1;
    
}
function flip() {
    $('#game-area .carddef').addClass('flipped');;
    setTimeout(moveCardFromdeck,1000);

    
}
function moveCardFromdeck(){
    console.log("onside it")
    $("#game-area .container").animate({left:"65px"},"slow",function(){
        $("#game-area .msg").html("TAP TO COMPLETE THE SEQUENCE");
        tappedCardDeck=2;
        $("#card1").css({opacity:"0"});
        $("#correctcard").css({opacity:"1"});
    });
    
}
function animateinCorrectCard(){ 
    setTimeout(function(){
        $("#game-area .msg").html("TAP TO DROP THE INVALID CARD");
    $("#game-area #topc4").addClass("animateIncorrectCard");
    dropinvalidcard=1;
    $("#clickableareaforinvalidcard").css({display:'block'})
    },1000)
    
}
function deleteWrongCard(){
    console.log("delete it")
    $("#game-area #topc4").removeClass("animateIncorrectCard");
    
    $('#game-area #topc4').delay(00).animate({left:"162px",top:"-87px",width:"43px"}, {
        step: function(now,fx) {
          $(this).css('-webkit-transform','rotate(0deg)'); 
          $(this).css('-moz-transform','rotate(0deg)');
          $(this).css('transform','rotate(0deg)');
        },
        duration:1000
    
    },1000,nextAnim());

    $('#game-area #correctcard').delay(00).animate({left:"178px",top:"110px",width:"81px"}, {
        step: function(now,fx) {
          $(this).css('-webkit-transform','rotate(14deg)'); 
          $(this).css('-moz-transform','rotate(14deg)');
          $(this).css('transform','rotate(14deg)');
        },
        duration:1000
    
    },1000,nextAnim());
    
   setTimeout(function(){
    $('#game-area #invalidcard').css({display:'block'});
    $("#game-area #clickableareaforinvalidcard").hide();
   },1000)
    $('#game-area #topc4').delay(1100).animate({opacity:"0"},function(){
        
    })
}


function nextAnim(){
    console.log("done")
    
    $("#game-area .msg").html("SEQUENCE COMPLETE");
    setTimeout(function(){
        $("#game-area #confetti3").addClass("animateConfetti")
        $("#game-area .msg").html("CONGRATULATIONS!");
        
    },1200);
    setTimeout(function(){
        uplifeCards();
    },2200)
}

function uplifeCards(){
    $("#game-area #pileofcard").animate({opacity:"0"},400);
    $("#game-area #invalidcard").animate({opacity:"0"},400,function(){
        $('#game-area #topc4').css({transform:"rotate(14deg)",left:"175px",top:"15px",opacity:"1",width:"84px"});
        $('#game-area #topc4 img').attr("src","./assets/card-9-club.png");
        $("#game-area #correctcard").hide();
        $("#game-area #bottomcardcontainer").animate({top:"27px"},1000,showFinal)
    })
}

function showFinal(){
    $("#game-area .msg2").show();
    $("#game-area #bottomcardcontainer").hide();
    $("#game-area #money").show();
    setTimeout(function(){
        $("#game-area #page1").hide();
        $("#game-area #page2").show();
        $("#game-area #confetti4").addClass("animateConfetti1");
        animateendcard();
    },2000);
}

function animateendcard(){
    setTimeout(function(){
        $("#game-area .msg1").hide();
        $("#game-area .msg3").show();
    },2000)
}

