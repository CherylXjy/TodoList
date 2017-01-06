// Check off specific Todos By clicking

// $("li").click(function(){

//add listener to "ul", then when "li" has been added
$("ul").on("click","li",function(){    

    // if($(this).css("color")==="rgb(128, 128, 128)"){
    //     $(this).css({
    //         color:"black",
    //         textDecoration: "none"
    //     });
    // }
    // else{
    //     $(this).css({
    //         color: "gray",
    //         textDecoration: "line-through"
    //     });
    // }

    $(this).toggleClass("completed");
});


//Click on X to delete Todo
// $("span").click(function(event){

$("ul").on("click", "span", function(event){
    // $(this).parent().remove(); 
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});


$("input[type='text']").keypress(function(event){
    //check for enter key
    if(event.which === 13){
        console.log("enter key");
        var val = $(this).val();
        $(this).val("");
        //create a new li and add to ul
        $('ul').append("<li><span><i class='fa fa-trash'></i></span> "+val+"</li>");
    }
});

$("ul").click(function(){
    
});

$("#container").click(function(){
    
});

$("body").click(function(){

});

$(".fa-plus").click(function(){
 $("input[type='text']").fadeToggle();
});
