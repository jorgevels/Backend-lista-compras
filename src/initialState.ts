const  initialState  =  {
  
  products : [
    {
      'id': '1',
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1636042498/Lista-Compras/arroz-removebg-preview_nofmsb.png',
      'title' : 'Arroz' ,
      'price': 1700,
      'promotion': '25% de descuento'
    } ,
    {
      'id': '2',
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1636042482/Lista-Compras/leche-removebg-preview_fa3bup.png',
      'title': 'Leche',
      'price': 2400,
      'promotion': '10% de descuento'
    },
    {
      'id': '3',
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1636044219/Lista-Compras/cafe-removebg-preview_wj6dok.png',
      'title' : 'Cafe' ,
      'price': 13200,
      'promotion': 'Sin descuento'
    } ,
    {
      'id': '4',
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1636044211/Lista-Compras/chocolate-removebg-preview_r7c7q1.png',
      'title': 'Chocolate',
      'price': 6400,
      'promotion': '10% de descuento'
    },
    {
      'id': '5',
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1636044436/Lista-Compras/mantequilla-removebg-preview_kak5sj.png',
      'title' : 'Mantequilla' ,
      'price': 7500,
      'promotion': 'Sin descuento'
    } ,
    {
      'id': '6',
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1636044203/Lista-Compras/jamon-removebg-preview_jsue9r.png',
      'title': 'Jamon',
      'price': 9200,
      'promotion': '15% de descuento'
    },{
      'id': '7',
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1636044185/Lista-Compras/queso-removebg-preview_ugegvf.png',
      'title' : 'Queso' ,
      'price': 8500,
      'promotion': '10% de descuento'
    } ,
    {
      'id': '8',
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1636044193/Lista-Compras/pan-removebg-preview_obwch3.png',
      'title': 'Pan',
      'price': 3300,
      'promotion': '20% de descuento'
    },
    {
      'id': '9',
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1636042490/Lista-Compras/cereal-removebg-preview_oxoo0f.png',
      'title' : 'Cereal' ,
      'price': 10000,
      'promotion': 'Sin descuento'
    } ,
    {
      'id': '10',
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1636044228/Lista-Compras/avena-removebg-preview_fx7ifl.png',
      'title': 'Avena',
      'price': 1600,
      'promotion': '20% de descuento'
    },
    {
      'id': '11',
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1636227469/Lista-Compras/pastas-removebg-preview_j9mr3w.png',
      'title': 'Pastas',
      'price': 1200,
      'promotion': '25% de descuento'
    },
    {
      'id': '12',
       'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1636227705/Lista-Compras/Arepa-removebg-preview_bftyma.png',
      'title': 'Arepas',
      'price': 1400,
      'promotion': '5% de descuento'
    },
    {
      'id': '13',
       'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1636227286/Lista-Compras/Azu%CC%81car-removebg-preview_evly1r.png',
      'title': 'Azucar',
      'price': 3400,
      'promotion': '25% de descuento'
    },
    {
      'id': '14',
       'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1636227469/Lista-Compras/salsa-removebg-preview_rogbpv.png',
      'title': 'Salsa de tomate',
      'price': 8900,
      'promotion': 'Sin descuento'
    },
    {
      'id': '15',
       'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1636227287/Lista-Compras/milo-removebg-preview_tatkxi.png',
      'title': 'Milo',
      'price': 13000,
      'promotion': '10% de descuento'
    },
    {
      'id': '16',
       'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1636227286/Lista-Compras/chorizo-removebg-preview_zovfiv.png',
      'title': 'Chorizoz',
      'price': 9500,
      'promotion': 'Sin descuento'
    },
    {
      'id': '17',
       'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1636227285/Lista-Compras/Sopera-removebg-preview_nqazyn.png',
      'title': 'Soperas',
      'price': 1300,
      'promotion': '25% de descuento'
    },
    {
      'id': '18',
       'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1636227270/Lista-Compras/Yogur-removebg-preview_vvdkci.png',
      'title': 'Yogur',
      'price': 5200,
      'promotion': '10% de descuento'
    },
    {
      'id': '19',
       'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1636227254/Lista-Compras/galletas_ltfc3o.png',
      'title': 'Galletas',
      'price': 4200,
      'promotion': 'Sin descuento'
    },
    {
      'id': '20',
       'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1636227243/Lista-Compras/Huevos_lk8kpa.png',
      'title': 'Huevos',
      'price': 12000,
      'promotion': '25% de descuento'
    },
    {
      'id': '21',
       'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1636042509/Lista-Compras/aceite_xy9h5s.png',
      'title': 'Aceite',
      'price': 7300,
      'promotion': '20% de descuento'
    }
    

  ] ,
};

export default initialState