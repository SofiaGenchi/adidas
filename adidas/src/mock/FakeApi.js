const productos = [
    {   id: '01',
        name: 'CAMISETA TITULAR BOCA JUNIORS 22/23',
        description: 'Esta camiseta titular de Boca Juniors adidas irradia la energía de principios de los 90 con su cuello distintivo y la franja cosida en el pecho. En contraste con sus detalles retro, los modernos paneles de mesh y la tecnología de absorción AEROREADY se combinan para mantener cómodos a los hinchas del club. El escudo tejido es el toque final que completa este estilo de fútbol.',
        price: 14.999,
        img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4fcfb797d457430eaccaaec200dafeb7_9366/Camiseta_Titular_Boca_Juniors_22-23_Azul_HE6323_01_laydown.jpg',
        stock: 8
    },
    {
        id: '02',
        name: 'CAMISETA TITULAR AJAX AMSTERDAM 22/23',
        description: 'Manteniéndose fiel al rico legado del Ajax de Amsterdam, esta camiseta titular adidas conserva un look atemporal. Una segunda mirada revela detalles de finas rayas y hebras de oro que celebran una historia de éxito resplandeciente. Diseñada para jugadores e hinchas, esta camiseta brinda comodidad en todo momento gracias a sus paneles de malla y tecnología de absorción AEROREADY.',
        price: 14.999,
        img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b30e2d27fcac4efeb84aaea500a0829f_9366/Camiseta_Titular_Ajax_Amsterdam_22-23_Rojo_H58243_21_model.jpg',
        stock: 4
    },
    {
        id: '03',
        name: 'CAMISETA UNIFORME DE TITULAR JUVENTUS 22/23',
        description: 'Durante su historia repleta de trofeos, las estrellas se han convertido en una parte tan importante de la identidad de la Juventus como las franjas. Esta camiseta de fútbol de adidas une ambas cosas, formando las icónicas rayas negras del club a partir de los pequeños símbolos en forma de estrella. Confeccionada especialmente para hinchas del club, combina comodidad y orgullo con tecnología de absorción AEROREADY y un escudo bordado.',
        price: 14.999,
        img: 'https://assets.adidas.com/images/h_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/ef37b79dac5f41da8dd8ae8a009d8814_9366/Camiseta_Uniforme_de_Titular_Juventus_22-23_Blanco_H38907_21_model.jpg',
        stock: 24
    },
    {
        id: '04',
        name: 'CAMISETA TITULAR MANCHESTER UNITED 21/22',
        description: 'Con su diseño sencillo en rojo y cuello redondo acanalado blanco, esta camiseta de fútbol de titular adidas se inspira en el uniforme icónico que los llevó a algunos de sus momentos más memorables. Diseñada para hinchas, esta camiseta brinda comodidad mientras ves a una nueva generación de jugadores perseguir la gloria en la cancha gracias a su tejido suave con tecnología de absorción AEROREADY.',
        price: 14.999,
        img: 'https://assets.adidas.com/images/h_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/bfac4aab68ec4ddb82dcad2c0074a997_9366/Camiseta_Titular_Manchester_United_21-22_Rojo_H31447_21_model.jpg',
        stock: 10
    }
]


export const data = new Promise((resolve, reject) => {

    let condition = true
    setTimeout(() => {
        if(condition) {
            resolve(productos)
        }else{
            reject('La pagina no funciona, intente mas tarde.')
        }

    },3000)

})