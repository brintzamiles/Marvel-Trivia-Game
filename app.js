$(document).ready(function(){
  $("#start-button").click(function(){
// ----------------------------------------------------------------
 // declaring the value for the timer to 60 seconds
 // hide the start button and rules
  	var number = 50;
    $("#start-button").on("click", start);  // starts the games 
    $("#submit").on("click", finish);  // submits answers and finishes the game
    $("#restart").on("click", restart);  // restarts the games 
// ----------------------------------------------------------------
// functions
    function start(){
    	counter = setInterval(timer, 1000);
    	showMe(".question");
    	showMe(".answers");
    	showMe("#submit");
	    hideMe("#start-button");
	    hideMe("#restart");
	    hideMe("#results");
    }
    function timer(){
      number-- // decrements the timer by 1
      $("#show-number").html("<h2>" + number + "</h2>" );
      console.log(number);
      console.log("#show-number");


      if (number === 0){
        alert("Times Up!")
        stop(); // calls the stop function
      }
    }
    function stop(){
    	clearInterval(counter); // stops the timer
    	$("#results").show();
    	$("#restart").show();
		$(".question").hide();
		$(".answers").hide();
		$("#submit").hide();
    }
    function finish(){
      console.log("finish");
    	number = 1; // if number is equal to 0 number will show -1 so 1 has to be selected
    	clearInterval(counter); // stops the timer
    	timer();
    }

    function restart(){
    	number = 50;
    	start();
    }

    function hideMe(e) {
    	$(e).hide();
    }
    function showMe(e) {
    	$(e).show();
    }
    $(document).ready(function() 
    {    $("#results").click(function() {                
    
    if (!$("input[@name=question1]:checked").val() ||            
    !$("input[@name=question2]:checked").val() ||            
    !$("input[@name=question3]:checked").val() ||            
    !$("input[@name=question4]:checked").val() ||            
    !$("input[@name=question5]:checked").val()                     
    ) {            
    alert("Please select an answer for all trivia questions");        
    }        
    
    else {            
    var cat1name = "1";            
    var cat2name = "2";            
    var cat3name = "3";            
    var cat4name = "4";            
    var cat5name = "5";            
              
    var cat6name = "None";            
                
    
    var cat1 = ($("input[@name=question1]:checked").val() != "1"); 
               
    var cat2 = ($("input[@name=question2]:checked").val() != "3");  
    
    var cat3 = ($("input[@name=question3]:checked").val() != "1");  
    
    var cat4 = ($("input[@name=question4]:checked").val() != "3");  
    
    var cat5 = ($("input[@name=question5]:checked").val() != "2"); 
    
    
    
    var cat6 = (!cat1 && !cat2 && !cat3 && !cat4 && !cat5); 
    var categories = [];                        
    
    if (cat1) { categories.push(cat1name) };            
    if (cat2) { categories.push(cat2name) };            
    if (cat3) { categories.push(cat3name) };            
    if (cat4) { categories.push(cat4name) };            
    if (cat5) { categories.push(cat5name) };            
              
    if (cat6) { categories.push(cat6name) };                        
    
    var catStr = 'You answered the following questions incorrectly: ' + categories.join(', ') + '';                     
    $("#categorylist").text(catStr);                        
    $("#categorylist").show("slow");            
    
    if (cat1) { $("#category1").show("slow"); };            
    if (cat2) { $("#category2").show("slow"); };            
    if (cat3) { $("#category3").show("slow"); };            
    if (cat4) { $("#category4").show("slow"); };            
    if (cat5) { $("#category5").show("slow"); };            
    if (cat6) { $("#category6").show("slow"); };            
    if (cat7) { $("#category7").show("slow"); };            
    if (cat8) { $("#category8").show("slow"); };            
    if (cat9) { $("#category9").show("slow"); };            
    if (cat10) { $("#category10").show("slow"); };            
    if (cat11) { $("#category11").show("slow"); };
    { $("#closing").show("slow"); };
    }
    });});
// ----------------------------------------------------------------
//calling functions
  	start(); // calls the start function
  });
});


