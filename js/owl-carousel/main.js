/* Código em jQuery que prevêm da documentação do Owl Carousel. */

$('.owl-carousel').owlCarousel({
    loop: true, /* Permite ir e voltar no carousel */
    margin: 10,
    nav: false, /* Mostra os itens < > abaixo das figuras */ 

    /* Responsive: dependendo da largura da tela (0, 600 ou 1000), mostra quantidade de imagens */

    responsive: {
        0: {
            items: 1 
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})