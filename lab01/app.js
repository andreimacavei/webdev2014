function firstHideAllVisualStatesThenShowTopSection()
{
  $(".visualstate").hide();
  $("#upabove").show();
  // TODO: Add a "Fade-in" effect
  // document.getElementById("upabove").scrollIntoView();
}
function firstHideAllVisualStatesThenShowPageContent()
{
  $(".visualstate").hide();
  $("#inthecenter").show();
}
function firstHideAllVisualStatesThenShowBottomSection()
{
  $(".visualstate").hide();
  $("#downbelow").show();
}
function firstHideAllVisualStatesThenShowLinkToPopup()
{
  $(".visualstate").hide();
  $("#linkthatshowspopup").show();
}
function showAllVisualStates()
{
  $(".visualstate").show();
}
function showAlertPopup()
{
  alert("JavaScript executed successfully");
}

$("#buttonthatdisplaystheupabovediv").click( firstHideAllVisualStatesThenShowTopSection );
$("#buttonthatdisplaysthecentraldiv").click( firstHideAllVisualStatesThenShowPageContent );
$("#buttonthatdisplaysthedownbelowdiv").click( firstHideAllVisualStatesThenShowBottomSection );
$("#buttonthatdisplaysthelinktopopupdiv").click( firstHideAllVisualStatesThenShowLinkToPopup );
$("#buttonthatdisplayseverything").click( showAllVisualStates );
$("#actualhyperlink").click( function(e) { e.preventDefault(); showAlertPopup(); } );