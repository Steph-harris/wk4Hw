$(document).ready(function() {  
  
  $(document).on("click","table .btn-danger", function() {
    $(this).parents("tr").remove();
  });

  $(".btn-success").on("click", function(e) {
    
    e.preventDefault();   
    var forminput = $("#formtext").val ();
    var addRow = $("<tr>");
    var rowTd1 = $("<td>").append(forminput);
    var checkbox = $("<input>", {
      type:"checkbox"
    });
    var rowTd2 = $("<td>").append(checkbox);
    var delButton = $("<button>").addClass("btn btn-danger").append("Delete");
    var rowTd3 = $("<td>").append(delButton);    
    addRow.append(rowTd1);
    addRow.append(rowTd2);    
    addRow.append(rowTd3);
    $("tbody").append(addRow);   
  });

  // $(document).on("click","table input",function(){
  //   // debugger;
  //   $("tr:first-child").addClass("checked");
  // } )
});
// empty the form-control after the row is added to table