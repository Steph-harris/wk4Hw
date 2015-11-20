$(document).ready(function() {  
  debugger;
  $(document).on("click","table .btn-danger", function() {
    $(this).parents("tr").remove();
  });
});
