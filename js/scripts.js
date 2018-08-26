var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();


jQuery(document).ready(function($) {


  // Open
  $("button").click(function() {
    $("#bottom").fadeIn("slow");
  });
  // Close
  $(".close").click(function() {
    $("#bottom").fadeOut("slow");
  });
  // Close on off click
  $(document).mouseup(function(e) {
    var container = $("#bottom");
    if (container.has(e.target).length === 0) {
      container.fadeOut("slow");
    }
  });


});
