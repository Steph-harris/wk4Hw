$(document).ready(function() {  
  debugger;
  $(document).on("click","table .btn-danger", function() {
    $(this).parents("tr").remove();
  });
  $(".btn-success").on("click", function() {
    $(this).parents("tr").remove();
  });
});
