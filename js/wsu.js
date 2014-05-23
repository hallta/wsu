( function() {
    $(document).ready( function() {
        var $slides = $('div.step.slide');
        var step  = 1;
        var total = parseInt($slides.size()); 

        $slides.each( function() {
            var paged = !$(this).hasClass('wsu-no-page');
            var $div = $('<div></div>').addClass('wsu-wrapper');
            $(this).children().appendTo($div);
            $(this).append($div)
                .append(
                    $('<div>').addClass('wsu-footer')
                        .append( $('<hr>').addClass('wsu-hr') )
                        .append( paged ? $('<p></p>').addClass('wsu-page').html( step++ + ' of <span class="wsu-total"></span>' ) : '' )
                )

                if ( ! paged ) total--;
            ;
        } );

        $('span.wsu-total').text(total);
    } );
}() )
