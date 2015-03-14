$(document).ready(function() {
        
        $(function() {
            $('.draggable').draggable();
            
            
        }); 
        $('.iconmenu').click(function(){
            
            $('.newicons').toggle( 'scale', { percent: 0 }, 500 );
        });

        $('.iconpower').click(function(){
            
            $('#power').append('<div id="dialog" title="Power Off"><p>El sistema se esta apagando.</p></div>');
            $('#dialog').dialog();
        });
});
