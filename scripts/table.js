$(document).ready(function() {  
  
  $(document).on("click","table .btn-danger", function() {
    $(this).parents("tr").remove();
  });

  $(".btn-success").on("click", function(e) {   
    e.preventDefault();   
    var forminput = $("#formtext").val ();
    var addRow = $("<tr>");
    var rowTd1 = $("<td>").append(forminput);
    var checkbox = $("<input>").attr("checkbox");
    var rowTd2 = $("<td>").append(checkbox);
    var delButton = $("<button>").addClass("btn btn-danger").append("Delete");
    var rowTd3 = $("<td>").append(delButton);    

    addRow.append(rowTd1);
    addRow.append(rowTd2);    
    addRow.append(rowTd3);
    $("tbody").append(addRow); 
    
    $("#formtext").val("").focus();  
  });

  $(document).on("click","table input",function(){   
    $(this).parents("tr").addClass("checked"); 
    $(this).remove();  
  });

  //clear table except for first table row
  $(".btn-warning").on("click", function(){
    var sure = confirm("Are you sure? Once the data is gone you can't get it back!");
    if (sure === false){
      return;
    }
    $("td").remove();
  });
});
