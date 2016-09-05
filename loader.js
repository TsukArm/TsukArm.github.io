$(function() {
  var page_addr = "." + window.location.href.match(/\/[^\/]+$/)[0];
	$("#header-container").load("header.html", function() {
    $("#header-container li:has([href='" + page_addr + "'])").addClass("selected");
  });
	//$("#footer").load("footer.html");
});