$(document).ready(function(){

    //declaring variables 
    var matureTeddy;
    var sillyTeddy;
    var taxiTeddy;
    var bearTeddy;
    var tedNumber;
    var totalBones =0;
    var win = 0;
    var losses=0;
    randomBones();
    // console.log(matureTeddy, sillyTeddy, taxiTeddy, bearTeddy, tedNumber)
//create random number for each picture, number is <100//

function randomBones() 
{
    tedNumber = Math.floor(Math.random() * 101) + 19;

    matureTeddy= Math.floor(Math.random()*12)+1;
    sillyTeddy=Math.floor(Math.random()*12)+1;
    taxiTeddy=Math.floor(Math.random()*12)+1;
    bearTeddy=Math.floor(Math.random()*12)+1;

}
collectBones();
//functions
function collectBones()
{
    // newBones();
    totalBones=0;
    $("#matureTeddy").attr("boneValues", matureTeddy);
    $("#sillyTeddy").attr("boneValues",sillyTeddy);
    $("#taxiTeddy").attr("boneValues", taxiTeddy);
    $("#bearTeddy").attr("boneValues" , bearTeddy);
    $("#tedNumber").text(tedNumber);
    $("#totalBones").text(totalBones);
    $("#wins").text(win);
    $("#losses").text(losses);
    $("#winOrLost").text(""); 
}


//on click functions 
$(".teddyPics").on('click',function() {
    // if (totalBones>=tedNumber){
    //     return;
    // }
   
    var teddyValue = $(this).siblings().attr("boneValues");
    teddyValue = parseInt(teddyValue);
    totalBones += teddyValue;

    $('#totalBones').text(totalBones);
    
    if (totalBones===tedNumber){
        YEAH();

    } else if (totalBones>tedNumber){
        Boo();
    }
})

    //Player Won
function YEAH(){
    alert("You won!");
    win++;
    $('#win').text(win);
    reset();
}

//Player Lost 

function Boo(){
    alert("Try again!");
    losses++;
    $("#losses").text(losses);
    reset();
}

// $(".btn").on("click",function(){
//     console.log('clicked me');
function reset(){
    randomBones()
    collectBones();
    // tedNumber=Math.floor(Math.random()*100);
    // //console.log(tedNumber)
    // $('#tedNumber').text(tedNumber);
    // matureTeddy= Math.ceil(Math.random()*10);
    // sillyTeddy=Math.ceil(Math.random()*10);
    // taxiTeddy=Math.ceil(Math.random()*10);
    // bearTeddy=Math.ceil(Math.random()*10);
    // totalBones=0;
    // $('#Score').text(totalBones);
}
})

