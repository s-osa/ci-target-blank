$(function(){
  var ciLinks = $(".commit-build-statuses > a");
  if (ciLinks && ciLinks.length > 0) { ciLinks.attr("target", "_blank") }
});
