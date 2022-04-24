$("h1").css("color","blue")

$("button").css("color","red")

//$("h1").addClass("big-title")     //nice way to make change in appereance by keeping styles to styles.css

//$("h1").hasClass("margin-50")     //return's true or false if the class have been applied or not on the element

//$("button").text("Plese click here")  //used to manipulate text in jQuery

//$("button").html("<em>click</em>")    //update out website use html-method

//$("a").attr("href")   //gives the attributes applied
//$("a").attr("href","https://www.facebook.com")        //use attr-method to update attributes

//adding a event listerner through jQuery
// $("h1").click(function(){
//     $("h1").css("color","red")
// })

//activity - update h1 with the event of keypress
// $("body").keypress(function(event){
//     $("h1").text(event.key)
// })

//use on method for listing to events
// $("h1").on("mouseover",function(){
//     $("h1").css("color","purple")
// })

//add elemets - use before or after or prepend or append method
// $("h1").before("<button>before</button>")
// $("h1").after("<button>after</button>")
// $("h1").prepend("<button>prepend</button>")
// $("h1").append("<button>append</button>")

//remove elements - use remove element
// $("button").remove()





//adding animation to our webpage

// $("button").on("click",function(){
//     $("h1").hide();
// })  //hide any element

//$("h1").show()    //to show it again

// $("button").on("click",function(){
//     $("h1").fadeOut();
// })  //fades out any element

//$("h1").fadeIn()  //fade in any element

// $("button").on("click",function(){
//     $("h1").slideUp();
// })  //slide up any element

// $(h1).slideDown()   //slide down any element

// we can use hideToggle and slideToggle to use them as toggle

//use .animate({}) to make some custom animation and remenber onl numerical value can appear in {}
