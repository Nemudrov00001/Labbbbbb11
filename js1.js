$(document).ready(function(){ 
	
	var newImg = $("<img>");
	$(newImg).attr("src","36449961.png").appendTo("body").css("width","800px").css("height","95vh").attr("class","backgroundImg");

	var head = $("<div>");
	$(head).appendTo("body").attr("class","head").css("position","absolute").css("height","598px").css("top","50px");/*.css("border","3px solid red")*/;

	var logHeading = $("<p>");
	$(logHeading).appendTo(head).attr("id","heading").text("Sign up").css("line-height","45px").css("font-family","Poppins").css("font-weight","500").css("font-size","30px");

    var logRegister1 = $("<p>");
	$(logRegister1).appendTo(head).css("line-height","24px").text("If you don’t have an account register").css("font-family","Poppins").css("font-weight","400").css("font-size","16px");

	var logRegister2 = $("<p>");
	$(logRegister2).appendTo(head).css("line-height","24px").html(`You can <a href="registration.html" id="sReg">Register here !</a>`).css("font-family","Poppins").css("font-weight","400").css("font-size","16px");

	$("a#sReg").css("font=weight","600").css("color","#FF432A").css("text-decoration","none");


	var Form = $("<form>");
	$(Form).appendTo(head).attr("class","Form").css("position","relative").css("height","205px");

	var email = $("<p>");
	$(email).appendTo(Form).text("Email").css("line-height","19px").css("font-family","Poppins").css("font-weight","500").css("font-size","13px");

	var enterEmail = $('<input type="text">');
	$(enterEmail).appendTo(Form).attr("placeholder","Enter your email address").keypress(function(){
			document.getElementById('rectEmail').style.backgroundColor="#FF432A";
	}).css("line-height","24px").css("font-family","Poppins").css("font-weight","400").css("font-size","16px").css("margin-left","6.29%").css("border","none").css("outline","none");

	var rectEmail = $('<div id="rectEmail">');
	$(rectEmail).appendTo(Form).css("height","2px").css("background-color","black");

	var user = $("<p>");
	$(user).appendTo(Form).text("Username").css("line-height","19px").css("margin-top","60px").css("font-family","Poppins").css("font-weight","500").css("font-size","13px");

	var enterUser = $(`<input type="username">`);
	$(enterUser).appendTo(Form).attr("placeholder","Enter your User name").keypress(function(){
			document.getElementById('rectUser').style.backgroundColor="#FF432A";
	}).css("width","90%").css("line-height","24px").css("font-family","Poppins").css("font-weight","400").css("font-size","16px").css("margin-left","6.29%").css("border","none").css("outline","none");

	var rectUser = $('<div id="rectUser">');
	$(rectUser).appendTo(Form).css("height","2px").css("background-color","#000000");

    var password = $("<p>");
	$(email).appendTo(Form).text("Password").css("line-height","19px").css("font-family","Poppins").css("font-weight","500").css("font-size","13px").css("padding-top","50px");

	var enterPassword = $('<input type="password">');
	$(enterPassword).appendTo(Form).attr("placeholder","Enter your Password").keypress(function(){
			document.getElementById('rectPassword').style.backgroundColor="#FF432A";
	}).css("line-height","24px").css("font-family","Poppins").css("font-weight","400").css("font-size","16px").css("margin-left","6.29%").css("border","none").css("outline","none");

	var rectPassword = $('<div id="rectPassword">');
	$(rectPassword).appendTo(Form).css("height","2px").css("background-color","black");

	 var confrim = $("<p>");
	$(confrim).appendTo(Form).text("Confrim Password").css("line-height","19px").css("font-family","Poppins").css("font-weight","500").css("font-size","13px").css("padding-top","50px");

	var enterConfrim = $('<input type="confrim">');
	$(enterConfrim).appendTo(Form).attr("placeholder","Confrim your Password").keypress(function(){
			document.getElementById('rectConfrim').style.backgroundColor="#FF432A";
	}).css("line-height","24px").css("font-family","Poppins").css("font-weight","400").css("font-size","16px").css("margin-left","6.29%").css("border","none").css("outline","none");

	var rectConfrim = $('<div id="rectConfrim">');
	$(rectConfrim).appendTo(Form).css("height","2px").css("background-color","black");

	

	var button = $('<input type="button" id="btn">');
	$(button).appendTo(Form).css("color","#ffffff").mouseover(function(){
		document.getElementById("btn").style.backgroundColor="#ed6a32";
	}).mouseout(function(){
		document.getElementById("btn").style.backgroundColor="#FF432A";
	}).attr("value","Register").css("border","none").css("outline","none").css("background-color","#FF432A").css("font-family","Poppins").css("font-weight","500").css("font-size","17px").css("line-height","25.5px").css("height","53px").css("border-radius","32px").css("box-shadow","0px 4px 26px rgba(0, 0, 0, 0.25)").css("margin-top","60px");

     
    var imgEmail = $('<img>');
	$(imgEmail).appendTo(Form).attr("id","imgEmail").css("position","relative").attr("src","Vector.svg");

	var imgLock = $('<img>');
	$(imgLock).appendTo(Form).attr("id","imgLock").css("position","relative").attr("src","user 1.svg");
    
    var imgPassword = $('<img>');
	$(imgPassword).appendTo(Form).attr("id","imgPassword").css("position","relative").attr("src","vec1.svg");

    var imgConfrim = $('<img>');
	$(imgConfrim).appendTo(Form).attr("id","imgConfrim").css("position","relative").attr("src","vec2.svg");

	var smicons = $('<div>');
	$(smicons).attr("id","smicons").appendTo(head).css("position","absolute");

   
	

	
});
