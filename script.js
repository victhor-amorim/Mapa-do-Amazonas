(function ($) {
    $(function () {

        var selectChangedByUser = true; // Variável para controlar se o evento change foi acionado pelo usuário

        $('.mapa-svg-estados').click(function () {
            $(this).siblings().removeClass('mapa-svg-estados-active');
            $(this).addClass('mapa-svg-estados-active');
            selectChangedByUser = false; // Define como falso quando o usuário clicou em um path
            $('.class-select').val($(this).attr('id')).trigger('change');
            selectChangedByUser = true; // Define como verdadeiro após acionar o evento change
        })

        $('.class-select > option').each(function(){
            $(this).addClass($(this).attr('value'));
        });

        $('.class-select').change(function() {
            if (selectChangedByUser) { // Verifica se o evento foi acionado pelo usuário
                $('.' + $(this).val() + '-class').siblings().removeClass('mapa-svg-estados-active');
                $('.' + $(this).val() + '-class').addClass('mapa-svg-estados-active');
            }
        });

    });
})(jQuery);
