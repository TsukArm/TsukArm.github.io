$(function() {
  var addr = window.location.href.match(/\/[^\/]+$/);
  var page_addr = "." + (addr ? addr[0] : "/index.html");
	$("#header-container").load("header.html", function() {
    $("#header-container li:has([href='" + page_addr + "'])").addClass("selected");
  });
	//$("#footer").load("footer.html");
});