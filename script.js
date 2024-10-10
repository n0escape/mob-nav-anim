$(function(){
    let widthScreen = $('.anim').parent().width()
    let herightScreen = $('.anim').parent().height()
    let diag = Math.sqrt( Math.pow(widthScreen, 2) + Math.pow(herightScreen, 2) )
    
    $('.menu-btn').on('click', function(){
        $( '.top, .center, .bottom' ).width(diag)
        if($('nav').is(':visible')){
            $( '.anchors' ).fadeOut("fast");
            $( '.top, .center, .bottom' ).animate(
                {
                    height: "0",
                }, 
                1000, 
                function() {
                    $('nav').hide("fast");
                }
            );
        }else{
            $('nav').show("fast");
            $( '.top, .center, .bottom' ).show("fast").animate(
                {
                    height: diag,
                }, 
                1000, 
                function() {
                    $( '.anchors' ).fadeIn("fast")
                }
            );
        }
    })
})