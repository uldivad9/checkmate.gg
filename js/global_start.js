var heart_button_html = "<img width=\"32px\" height=\"32px\" src=\"./assets/heart_unfilled.png\" onmouseover=\"this.src='./assets/heart_unfilled_shadow.png'\" onmouseout=\"this.src='./assets/heart_unfilled.png'\">";
var gear_button_html = "<img width=\"32px\" height=\"32px\" src=\"./assets/gear.png\" onmouseover=\"this.src='./assets/gear_shadow.png'\" onmouseout=\"this.src='./assets/gear.png'\">";
var account_button_html = "<img width=\"32px\" height=\"32px\" src=\"./assets/account.png\" onmouseover=\"this.src='./assets/account_shadow.png'\" onmouseout=\"this.src='./assets/account.png'\">";

var placeControlPanel = function() {
	$(document.body).prepend("<div id=\"controlpanel\"></div>");
	$("#controlpanel").append("<center><div id=\"cp_div_username\"></div><div id=\"cp_div_buttons\"</div></center>");
	$("#cp_div_username").append("<span id=\"username\">usernamegoeshere</span>");
	$("#cp_div_buttons").append(account_button_html);
	$("#cp_div_buttons").append(gear_button_html);
	$("#cp_div_buttons").append(heart_button_html);
}

var placeMiniSearchBar = function() {
	$(document.body).prepend("<hr width=\"100%\" size=\"1\" style=\"margin-left:0px; color:gainsboro;\"></hr>");
	$(document.body).prepend("<div id=\"minisearchbar\"></div>");
	$("#minisearchbar").append("<center><div id=\"logo\"></div><div id=\"inputbox\"></div></center>");
	$("#logo").append("<a href=\"./main.html\"><img id=\"logo_main\" src=\"assets/logo_main.png\" width=\"180px\" height=\"60px\" alt=\"Checkmate.gg logo\"></a>");
	$("#inputbox").append("<form id=\"searchform\" onsubmit=\"return false;\"><input id=\"searchfield\" type=\"text\" size=\"80\"/></form>");
	$("#searchform").submit(function() {
		console.log($("#searchfield").val());
		window.location.href = "./results.html?tags="+$("#searchfield").val();
	});
}

var placeTopOfPage = function() {
	placeControlPanel();
	placeMiniSearchBar();
}