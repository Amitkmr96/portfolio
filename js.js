$(".line").each(function () {
  $(this).css({
    width: $(this).attr("data-progress") + "%",
  });
});

$(".view-btn").click(function () {
  $(".hide-row").slideToggle("slow");
});

$(document).ready(function () {
  $("#flip").click(function () {
    $("#mnav").slideToggle("slow");
    if ($("#flip").hasClass("fa-bars")) {
      $("#flip").removeClass("fa-bars");
      $("#flip").addClass("fa-times");
    } else {
      $("#flip").addClass("fa-bars");
      $("#flip").removeClass("fa-times");
    }
  });
});

$(document).ready(function () {
  // Hide all tab content except the first one
  $(".tab-content:not(:first)").hide();

  // Add 'active' class to the first tab link
  $(".tab-links li:first").addClass("active");

  // Click function for tab links
  $(".tab-links a").on("click", function (e) {
    var currentAttrValue = $(this).attr("href");

    // Show/Hide tabs
    $(".tab-content").hide();
    $(currentAttrValue).show();

    // Change active tab link
    $(".tab-links li").removeClass("active");
    $(this).parent("li").addClass("active");

    e.preventDefault();
  });
});
