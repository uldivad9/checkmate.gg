var placeControlPanel = function() {
	$(document.body).prepend("<div id=\"controlpanel\"></div>");
	$("#controlpanel").append("<center><div id=\"cp_div_username\"></div><div id=\"cp_div_buttons\"</div></center>");
	$("#cp_div_username").append("<span id=\"username\">usernamegoeshere</span>");
	$("#cp_div_buttons").append("<span id=\"cp_button1\" class=\"ui-icon ui-icon-person\"></span>");
	$("#cp_div_buttons").append("<span id=\"cp_button2\" class=\"ui-icon ui-icon-gear\"></span>");
	$("#cp_div_buttons").append("<span id=\"cp_button3\" class=\"ui-icon ui-icon-heart\"></span>");
}

var placeMiniSearchBar = function() {
	$(document.body).prepend("<hr width=\"200%\" size=\"1\" style=\"margin-left:-10px; color:gainsboro;\"></hr>");
	$(document.body).prepend("<div id=\"minisearchbar\"></div>");
	$("#minisearchbar").append("<center><div id=\"logo\"></div><div id=\"inputbox\"></div></center>");
	$("#logo").append("<a href=\"./main.html\"><img id=\"logo_main\" src=\"assets/logo_main.png\" width=\"180px\" height=\"60px\" alt=\"Checkmate.gg logo\"></a>");
	$("#inputbox").append("<form id=\"searchform\"><input id=\"searchfield\" type=\"text\" size=\"80\"/></form>");
	
}

var placeTopOfPage = function() {
	placeControlPanel();
	placeMiniSearchBar();
}