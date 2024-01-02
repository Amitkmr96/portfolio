$(".line").each(function () {
    $(this).css(
      {
        width: $(this).attr("data-progress") + "%",
      }
      
    );
    
  });

 
 
    $(".view-btn").click(function(){
      $(".hide-row").slideToggle("slow");
      
    });
 


 
  $(document).ready(function(){
    $("#flip").click(function(){
      $("#mnav").slideToggle("slow");
      if($("#flip").hasClass("fa-bars"))
      {
        $("#flip").removeClass("fa-bars");
        $("#flip").addClass("fa-times");
      }
      else
      {
        $("#flip").addClass("fa-bars");
        $("#flip").removeClass("fa-times");
      }
      
    });
  });

 
