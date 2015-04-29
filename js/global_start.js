var heart_button_html = "<img class=\"heartbutton\" width=\"32px\" height=\"32px\" src=\"./assets/heart_unfilled.png\" "
+"onmouseover=\"this.src='./assets/heart_unfilled_shadow.png'\" "
+"onmouseout=\"this.src='./assets/heart_unfilled.png'\">";

var heart_button_filled_html = "<img class=\"heartbutton\" width=\"32px\" height=\"32px\" src=\"./assets/heart_filled.png\" "
+"onmouseover=\"this.src='./assets/heart_filled_shadow.png'\" "
+"onmouseout=\"this.src='./assets/heart_filled.png'\">";

var gear_button_html = "<img width=\"32px\" height=\"32px\" src=\"./assets/gear.png\" onmouseover=\"this.src='./assets/gear_shadow.png'\" onmouseout=\"this.src='./assets/gear.png'\">";
var account_button_html = "<img class=\"accountbutton\" width=\"32px\" height=\"32px\" src=\"./assets/account.png\" onmouseover=\"this.src='./assets/account_shadow.png'\" onmouseout=\"this.src='./assets/account.png'\">";

var extlink_button_html = "<img width=\"32px\" height=\"32px\" src=\"./assets/extlink.png\" onmouseover=\"this.src='./assets/extlink_shadow.png'\" onmouseout=\"this.src='./assets/extlink.png'\">";

var up_button_html = "<img class=\"upbutton\" width=\"15px\" height=\"15px\" src=\"./assets/arrow_up.png\" onmouseover=\"this.src='./assets/arrow_up_shadow.png'\" onmouseout=\"this.src='./assets/arrow_up.png'\">";
var down_button_html = "<img class=\"downbutton\" width=\"15px\" height=\"15px\" src=\"./assets/arrow_down.png\" onmouseover=\"this.src='./assets/arrow_down_shadow.png'\" onmouseout=\"this.src='./assets/arrow_down.png'\">";
var up_button_filled_html = "<img class=\"upbutton\" width=\"15px\" height=\"15px\" src=\"./assets/arrow_up_filled.png\" onmouseover=\"this.src='./assets/arrow_up_filled_shadow.png'\" onmouseout=\"this.src='./assets/arrow_up_filled.png'\">";
var down_button_filled_html = "<img class=\"downbutton\" width=\"15px\" height=\"15px\" src=\"./assets/arrow_down_filled.png\" onmouseover=\"this.src='./assets/arrow_down_filled_shadow.png'\" onmouseout=\"this.src='./assets/arrow_down_filled.png'\">";

var placeControlPanel = function() {
	$(document.body).prepend("<div id=\"controlpanel\"></div>");
	$("#controlpanel").append("<center><div id=\"cp_div_username\"></div><div id=\"cp_div_buttons\"</div></center>");
	$("#cp_div_username").append("<span id=\"username\">infinitestory</span>");
	$("#cp_div_buttons").append(account_button_html);
	$("#cp_div_buttons").append(gear_button_html);
	$("#cp_div_buttons").append(heart_button_html);
    $('.heartbutton:first').click(function() {
            window.location = "./favorites.html";
    });
    $('.accountbutton:first').click(function() {
            window.location = "./profile.html";
    });
}

var placeMiniSearchBar = function() {
	$(document.body).prepend("<hr width=\"100%\" size=\"1\" style=\"margin-left:0px; color:gainsboro;\"></hr>");
	$(document.body).prepend("<div id=\"minisearchbar\"></div>");
	$("#minisearchbar").append("<center><div id=\"logo\"></div><div id=\"inputbox\"></div></center>");
	$("#logo").append("<a href=\"./main.html\"><img id=\"logo_main\" src=\"assets/logo_main.png\" width=\"180px\" height=\"60px\" alt=\"Checkmate.gg logo\"></a>");
	$("#inputbox").append("<form id=\"searchform\" action=\"./results.html\" method=\"get\"><input id=\"searchfield\" type=\"text\" name=\"tags\" size=\"80\"/><button type=\"submit\" style=\"display: none;\"></form>");
	$("#searchfield").select2({tags: ['caro-kann', 'opening', 'endgame', 'midgame'], multiple: true, width: '60%', openOnEnter: false});
	/*$("#searchform").submit(function() {
		console.log($("#searchfield").val());
		window.location.href = "./results.html?tags="+$("#searchfield").val();
	});*/
}

var placeTopOfPage = function() {
	placeControlPanel();
	placeMiniSearchBar();
}