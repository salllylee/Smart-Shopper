function openLogin(evt, buttonName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(buttonName).style.display = "block";
    evt.currentTarget.className += " active";
}

/* Create the different preset lists */
$("#presets").change(function() {
  /* Delete all restrictions if another preset option is chosen */
  deleteAll();

  var option = $(this).children("option:selected").val();

  if (option == "vegan") {
    document.getElementById("name-text").value = "Vegan";

    addRestriction("Dairy");
    addRestriction("Eggs");
    addRestriction("Meat");
    addRestriction("Seafood");
    addRestriction("Honey");
    addRestriction("Casein");
    addRestriction("Gelatin");
    addRestriction("Insinglass");
    addRestriction("L-cysteine");
    addRestriction("Whey");
  }
  else if (option == "ketogenic") {
    document.getElementById("name-text").value = "Ketogenic";

    addRestriction("Gluten");
    addRestriction("Sugar");
    addRestriction("Maple Syrup");
    addRestriction("Agave");
    addRestriction("Honey");
    addRestriction("Potatoes");
    addRestriction("Sweet Potatoes");
    addRestriction("Rice");
    addRestriction("Beans");
    addRestriction("Margarine");
  }
  else if (option == "vegetarian") {
    document.getElementById("name-text").value = "Vegetarian";

    addRestriction("Meat");
    addRestriction("Seafood");
  }
  else if (option == "gluten") {
    document.getElementById("name-text").value = "Gluten Free";

    addRestriction("Gluten");
  }
});

/* Simulate adding a single item */
function addRestriction(item) {
  var press = jQuery.Event("keypress");
  press.enterKey = false;
  press.which = 13;
  document.getElementById("add").click();
  document.getElementById("restriction-text").value = item;
  $("#restriction-text").trigger(press);
}

/* Delete all elements in the list */
function deleteAll() {
  var items = document.getElementsByClassName("delete");
  while(items[0]) {
    items[0].closest('div').remove();
  }
}

/* When clicking on delete for creating a list*/
$(document).on("click", ".delete", function(e) {
  $(this).closest('div').remove();
});

$(".close").click(function(e) {
  window.location="Scan-Search-Recipes.html";
});

/* When clicking on + Add New */
$(document).on("click", ".add-new", function() {
  $(this).replaceWith("<input type='text' id='restriction-text'" +
                      "onfocus='this.value=&quot;&quot;'" +
                      "placeholder='Enter Restriction...'>");

  document.getElementById("restriction-text").focus();
});

/* Add restriction when user presses enter */
$(document).on("keypress", "#restriction-text", function (e) {
  var key = e.which;
  if(key == 13)  // the enter key code
  {
    $(this).replaceWith("<div class='restrictions'><p class='restriction'><font size='5'>\xa0\xa0" +
                        "<button class='delete'>-</button>\xa0\xa0" +
                        $(this).val() +
                        "</font></p></div><button id='add' class='add-new'>+ Add</button>");
  }
});

$(".btn-back").click(function(e) {
  window.history.back();
});

$(".btn-back-homepage").click(function(e) {
  window.location="lists.html";
});

$("#pops").click(function() {
  localStorage.setItem("imageName", "images/Pops.png");

  window.location="Scan.html";
});

$("#oreos").click(function() {
  localStorage.setItem("imageName", "images/Oreos.png");

  window.location="Scan.html";
});

$("#wine").click(function() {
  localStorage.setItem("imageName", "images/Wine.png");

  window.location="Scan.html";
});

function chooseImage() {
    $("#result-img").attr("src", localStorage.getItem("imageName"));
}

$(".btn-logout").click(function(e) {
  window.location="index.html";
});

$(".to-scan-search-recipes").click(function(e) {
  window.location="Scan-Search-Recipes.html";
});

$(".to-scan").click(function(e) {
  window.location="Prescan.html";
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

/* Go to results page */
$(".to-lists").click(function(e) {
  window.location="lists.html";
});

$( function() {
  var availableTags = [
    "Pops"
  ];
  $( "#search-text" ).autocomplete({
    source: availableTags
  });
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
