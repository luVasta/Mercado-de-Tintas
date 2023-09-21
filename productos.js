class Producto {
    constructor (codigo, nombre, varietal, descripcion, precio, stock, imagen){
        this.codigo = codigo;
        this.nombre = nombre;
        this.varietal = varietal;
        this.descripcion = descripcion;
        this.precio = precio;
        this.stock = stock;
        this.imagen = imagen;
        this.vendido = false;    
    };
    vender() {
        if (this.stock > 0) {
            this.stock--;
            this.vendido = true;
        };
    };
};

let productos = [];

let producto1 = new Producto(
    1, 
    "Alma Mora",
    "Cabernet Sauvignon", 
    "Vino de color rojo rubí. Aromas a frutas negras, pimiento rojo, vainilla y chocolate. En boca se presenta con mediana estructura, de taninos maduros y sabor duradero. El 40% del vino se conserva en Roble Americano por 4 meses.", 
    1900, 
    60,
    "https://www.espaciovino.com.ar/media/default/0001/55/thumb_54030_default_big.jpeg"
);

let producto2 = new Producto(
    2, 
    "Emilia", 
    "Red Blend", 
    "De color rojo intenso con reflejos violáceos, en nariz presenta notas de vainilla, aportadas por la madera durante el añejamiento en la misma, especias y frutas rojas, en boca cuenta con una amable estructura entregada por la delicadeza de sus taninos.", 
    2300, 
    54,
    "https://www.espaciovino.com.ar/media/default/0001/63/thumb_62388_default_big.jpeg"
);

let producto3 = new Producto(
    3, 
    "El Enemigo", 
    "Malbec", 
    "Elegante. En vista un rojo rubí de alta intensidad y destellos violáceos. En nariz mucha madera. Tarda en abrirse en copa y luego del agite aparece fruta roja madura. Algo dulce y carnoso de muy buen equilibrio y acidez con taninos muy marcados.",
    8500,
    30,
    "https://www.espaciovino.com.ar/media/default/0001/62/thumb_61259_default_big.jpeg"
);

let producto4 = new Producto(
    4,
    "Trumpeter",
    "Cabernet Franc",
    "En nariz, expresa aromas a frutas rojas maduras y suaves notas mentoladas, finamente mezclados con otros aportados por el roble (cacao, tabaco, vainilla). Su manifiesta tipicidad deja percibir sabores que evocan ciruelas y especias como pimienta rosa, aguaribay.",
    5500,
    48,
    "https://www.espaciovino.com.ar/media/default/0001/63/thumb_62976_default_big.jpeg"
);

let producto5 = new Producto(
    5,
    "Aguijon de Abeja Reina",
    "Malbec",
    "De origen protagónico proviene de San Patricio del Chañar, Neuquén y ofrece buena estructura y concentración. Con aromas a frutos rojos propios del sur como cassis y guinda, también combina tabaco y chocolate blanco.",
    4900,
    54,
    "https://www.espaciovino.com.ar/media/default/0001/64/thumb_63735_default_big.jpeg"
);

let producto6 = new Producto(
    6,
    "Hey",
    "Malbec",
    "Frutas rojas se combinan con aromas florales y pimienta negra. Taninos suaves y maduros que nos dan un final dulce y amable, permite un paso en boca aterciopelado. Luján de Cuyo. Provincia de Mendoza, Argentina.",
    3850,
    59,
    "https://www.espaciovino.com.ar/media/default/0001/61/thumb_60498_default_big.jpeg"
);

let producto7 = new Producto(
    7,
    "Santa Julia",
    "Syrah Rosé",
    "De color rosado granate cereza. De aroma intenso a cerezas frescas, frutillas, granada y flores como violetas y jazmin. Con sabor de entrada amable, excelente equilibrio entre acidez y estructura, buen volumen y largo recuerdo.",
    2200,
    72,
    "https://www.espaciovino.com.ar/media/default/0001/62/thumb_61639_default_medium.jpeg"
);

let producto8 = new Producto(
    8,
    "Durigutti",
    "Petit Verdot",
    "Con origen en Barrancas, Maipú, combina color, aroma y un perfil dulce en boca, buenos taninos, volumen y mineralidad. Luego se perciben notas especiadas que le suman complejidad. Duerme 8 meses en barricas americanas.",
    7600,
    48,
    "https://www.espaciovino.com.ar/media/default/0001/64/thumb_63717_default_big.jpeg"
);

let producto9 = new Producto(
    9,
    "Las Perdices Chac Chac",
    "Malbec Rosé",
    "A la vista de color rosa tenue y brillante. En boca tiene una entrada agradable y con buen volumen. Provoca cierta sensación cítrica debido a su equilibrada acidez. También se destacan notas de cereza, guinda y frutilla.",
    5900,
    24,
    "https://www.espaciovino.com.ar/media/default/0001/64/thumb_63089_default_big.jpeg"
);

let producto10 = new Producto(
    10,
    "La Poderosa",
    "Extra Brut",
    "A la vista tiene un aspecto brillante con destellos cobrizos, dando origen a un elegante Extra Brut de finas burbujas. Posee un aroma a flores blancas y cítricos, con delicadas notas a pan tostado. El efecto en boca es refrescante.",
    3900,
    60,
    "https://www.espaciovino.com.ar/media/default/0001/57/thumb_56277_default_big.jpeg"
);

let producto11 = new Producto(
    11,
    "Viniterra",
    "Malbec",
    "Vino complejo con muy buena expresión varietal. A la vista presenta un color rojo intenso y matices azules. Es concentrado en aromas a frutos rojos. La madera donde es estacionado contribuye a entregar elegancia.",
    1800,
    36,
    "https://www.espaciovino.com.ar/media/default/0001/58/thumb_57195_default_big.jpeg"
);


let producto12 = new Producto(
    12,
    "Luigi Bosca De Sangre",
    "Malbec",
    "Color violeta brillante, y aromas en los que se destaca la fruta roja nítida que recuerda a cereza madura. En el paladar entra con redondez, mucha fruta roja y algo de especias. Un tinto de final largo y compacto, con mucho carácter.",
    9500,
    18,
    "https://www.espaciovino.com.ar/media/default/0001/63/thumb_62969_default_big.jpeg"
);

let producto13 = new Producto(
    13,
    "Familia Gascon",
    "Syrah",
    "De color rojo granate intenso. Aromas a frutas negras como la mora y la grosella se destacan en su nariz junto a sutiles notas a cuero y especias. En la boca es amable, expresivo y de muy buena longitud. 70% roble francés 30% roble americano.",
    1750,
    120,
    "https://www.espaciovino.com.ar/media/default/0001/54/thumb_53985_default_big.jpeg"
);

let producto14 = new Producto(
    14,
    "Edelmira Reserva",
    "Cabernet Sauvignon",
    "De color rojo profundo con destellos carmín. En naríz café, cassis y pimientos, en boca gran volumen y madurez tánica aportados por su paso en roble. Su contenido alcohólico da sensación de dulzura. 12 meses en barricas de roble francés.",
    2590,
    90,
    "https://www.espaciovino.com.ar/media/default/0001/67/thumb_66082_default_big.jpeg"
);

let producto15 = new Producto(
    15,
    "Manos Negras",
    "Chardonnay",
    "Es una muestra de piedra blanca brillante, sabores de frutas con un toque tropical.Las noches muy frias ayudan a mantener la acidez natural para un manejo rápido y limpio. De suelos franco arenosos de un metro de profundidad, con piedras calcáreas.",
    2450,
    60,
    "https://www.espaciovino.com.ar/media/default/0001/53/thumb_52967_default_big.jpeg"
);

let producto16 = new Producto(
    16,
    "Casa Boher",
    "Merlot",
    "A la vista presenta un color rojo rubí muy intenso con tintes violáceos. El aroma de este vino refleja la prolongada maduración de sus bayas donde se perciben frutas secas, guindado, suave pimiento dulce y cassis. Con sabores a ciruela y pasas de uva.",
    4400,
    90,
    "https://www.espaciovino.com.ar/media/default/0001/56/thumb_55354_default_big.jpeg"
);

let producto17 = new Producto(
    17,
    "Andeluna",
    "Blanc de Malbec",
    "Color verde pálido acerado, con intensas  notas florales, jazmín y rosas blancas. Reminiscencia de frutos de carozo, como durazno y damasco, en boca se percibe una fresca acidez muy agradable y un final prolongado.",
    2900,
    30,
    "https://www.espaciovino.com.ar/media/default/0001/69/thumb_68242_default_big.jpeg"
);

let producto18 = new Producto(
    18,
    "De Moño Rojo Premium",
    "Cabernet Sauvignon Cabernet Franc",
    "De color rojo rubí intenso, en nariz el Cabernet Franc entrega aromas a pimiento rojo, pimienta negra y frambuesa mientras que el Cabernet Sauvignon aporta frutos negros maduros, un toque balsámico y notas especiadas.",
    3200,
    60,
    "https://www.espaciovino.com.ar/media/default/0001/65/thumb_64243_default_big.jpeg"
);

let producto19 = new Producto(
    19,
    "Cicchitti Blend",
    "Cabernet Franc Cabernet Sauvignon",
    "Rojo rubí intenso, con reflejos violáceos, en boca una viscosa fruta que recuerda a mermelada de mora, disfraza la poderosa pimienta negra, complementada por el dulzor de sus taninos jóvenes. De final Largo e intenso.",
    6900,
    48,
    "https://www.espaciovino.com.ar/media/default/0001/58/thumb_57594_default_big.jpeg"
);

let producto20 = new Producto(
    20,
    "Cruzat Premier",
    "Rosé Extra Brut",
    "Atractivo y sutil color asalmonado, sorprende con aromas a frutos rojos y sabores frescos y persistentes. Con taninos livianos y elegantes y buen balance de acidez que aporta frescura en boca.",
    5950,
    60,
    "https://www.espaciovino.com.ar/media/default/0001/61/thumb_60669_default_big.jpeg"
);


productos.push(producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12, producto13, producto14, producto15, producto16, producto17, producto18, producto19, producto20);