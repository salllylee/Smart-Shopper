/* When clicking on delete for creating a list*/
$(document).on("click", ".delete", function(e) {
  $(this).closest('div').remove();
});

$(".close").click(function(e) {
  window.location="Scan-Search-Recipes.html";
});

/* When clicking on + Add New */
$(document).on("click", ".add-new", function() {
  $(this).replaceWith("<input type='text' class='restriction-text' onfocus=" +
                      "'this.value=&quot;&quot;' value='Enter Restriction...'>");
});

/* Add restriction when user presses enter */
$(document).on("keypress", ".restriction-text", function (e) {
  var key = e.which;
  if(key == 13)  // the enter key code
  {
    $(this).replaceWith("<div><p class='restriction'><font size='5'>\xa0\xa0" +
                        "<button class='delete'>-</button>\xa0\xa0" +
                        $(this).val() +
                        "</font></p></div><button class='add-new'>+ Add</button>");
  }
});

$(".btn-back").click(function(e) {
  window.history.back();
});

$(".btn-back-homepage").click(function(e) {
  window.location="Home-Screen.html";
});

$(".to-scan-search-recipes").click(function(e) {
  window.location="Scan-Search-Recipes.html";
});

$(".to-scan").click(function(e) {
  window.location="Scan.html";
});

$(".to-search").click(function(e) {
  window.location="Search.html";
});

$(".to-recipes").click(function(e) {
  window.location="Recipes.html";
});

/* Go to results page */
$(".to-results").click(function(e) {
  window.location="Results.html";
});

/* A bit sloppy, but couldn't get the for loop version to work */
function timeScan() {
  setTimeout(function(){document.getElementById("scanner").innerHTML="<h2 id='scanner'>SCANNING.</h2>";}, 500);
  setTimeout(function(){document.getElementById("scanner").innerHTML="<h2 id='scanner'>SCANNING..</h2>";}, 1000);
  setTimeout(function(){document.getElementById("scanner").innerHTML="<h2 id='scanner'>SCANNING...</h2>";}, 1500);
  setTimeout(function(){document.getElementById("scanner").innerHTML="<h2 id='scanner'>SCANNING.</h2>";}, 2000);
  setTimeout(function(){document.getElementById("scanner").innerHTML="<h2 id='scanner'>SCANNING..</h2>";}, 2500);
  setTimeout(function(){document.getElementById("scanner").innerHTML="<h2 id='scanner'>SCANNING...</h2>";}, 3000);
  setTimeout(function(){document.getElementById("scanner").innerHTML="<h2 id='scanner'>SCANNING.</h2>";}, 3500);
  setTimeout(function(){document.getElementById("scanner").innerHTML="<h2 id='scanner'>SCANNING..</h2>";}, 4000);
  setTimeout(function(){document.getElementById("scanner").innerHTML="<h2 id='scanner'>SCANNING...</h2>";}, 4500);

  setTimeout(function(){window.location="Results.html";}, 5000);
}
