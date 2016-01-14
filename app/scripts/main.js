
$( document ).ready(function() {


$("#quitter").click(function(){
  $( "#dialog-confirm" ).dialog({
        resizable: false,
        height:140,
        modal: true,
        buttons: {
          "Quitter la place": function() {
            $( this ).dialog( "close" );
          },
          Annuler: function() {
            $( this ).dialog( "close" );
          }
        }
      });
});




    });
