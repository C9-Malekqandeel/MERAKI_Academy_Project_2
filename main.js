const product = [
    {
        id:1 ,
        title: " Baby Boys And Girls Casual Cute Knit Sock Shoes, Soft Sole Non-slip Thick Fleece Thermal Toddler Shoes",
        imageSrc : "src='./pictures of items/Baby Boys And Girls Casual Cute Knit Sock Shoes, Soft Sole Non-slip Thick Fleece Thermal Toddler Shoes.jpg'",
        description :"Baby Boys And Girls Casual Cute Knit Sock Shoes, Soft Sole Non-slip Thick Fleece Thermal Toddler Shoes For Winter Walking",
        amount : 'JOD 3.27',
        category: "Clothing"
    },
    {
        id:2 ,
        title: " Baby sleeveless",
        imageSrc : 'src="./pictures of items/baby sleeves.jpg"',
        description :"Summer Solid Short-sleeved Baby Bodysuit Cotton Soft 0-12Months Unisex Infant Clothes",
        amount : 'JOD 3.75',
        category: "Clothing"
    },
    
    {
        id:3 ,
        title: " Blended Tights Set",
        imageSrc : 'src="./pictures of items/blended tights.jpg"',
        description :"Cool Club Blended Tights Set, White Color, 2 Pieces",
        amount : 'JOD 2.69',
        category: "Clothing"
    },


    {
        id:4 ,
        title: " Baby Jackets",
        imageSrc : 'src="./pictures of items/jacket.jpg"',
        description :"New Baby Boys Cute Graphic Hooded Padded Coat, Kids Warm Zip Up Long Sleeve Jacket, Winter/fall",
        amount : 'JOD 11.25',
        category: "Clothing"
    },

    {
        id:5 ,
        title: " Knitted Sweater",
        imageSrc : 'src="./pictures of items/sweater.jpg"',
        description :"Baby Boy's Knit Sweater, All-match Warm Casual Pullover Top For Outdoor Travel",
        amount : 'JOD 13.12',
        category: "Clothing"
    },
    {
        id:6 ,
        title: "Children Home Slipper",
        imageSrc : 'src="./pictures of items/slipper.jpg"',
        description :"Cool Club Children Home Slipper, Christmas Design, Color : Light Grey,Gender: Both,recommended age : 4-5 years , size : 27-28",
        amount : 'JOD 4.35',
        category: "Clothing"
    },
    {
        id:7,
        title: "Baby Bottle",
        imageSrc : 'src="./pictures of items/bottle.jpg"',
        description :"The Perfect Nursing Bottle for Newborns: Keep Baby Safe While Drinking Water & Milk!",
        amount : 'JOD 2.54',
        category: "Feeding"
    },
    {
        id:8 ,
        title: "cups & water Bottle",
        imageSrc : 'src="./pictures of items/cups.jpg"',
        description :"Baby Learning Drinking Cup, Baby Sippy Cup, BPA Free",
        amount : 'JOD 3.85',
        category: "Feeding"
    },
    {
        id:9 ,
        title: "Food Storage and Containers",
        imageSrc : 'src="./pictures of items/storage.jpg"',
        description :"Baby Formula Dispenser, 4 Layers Stackable Formula Container, Milk Powder Formula Dispenser, Baby Feeding Travel Storage Container, BPA Free",
        amount : 'JOD 5.25',
        category: "Feeding"
    },

    {
        id:10,
        title: "Nipples",
        imageSrc : 'src="./pictures of items/nipple.jpg"',
        description :"Tommee Tippee Closer To Nature Teats Nipples Fast Flow Teats 6m+ (Pack of 2)",
        amount : 'JOD 2.85',
        category: "Feeding"
    },

    {
        id:11 ,
        title: "BabyJem Safety Belt - Black",
        imageSrc : 'src="./pictures of items/jem.jpg"',
        description :"This First steps Safety Reins allow you to help baby take his/her first steps and keep them near you when walking in dangerous or crowded places.",
        amount : 'JOD 9.55',
        category: "Healthy and Safety"
    },

    {
        id:12,
        title: "Baby Care Set",
        imageSrc : 'src="./pictures of items/care.jpg"',
        description :"Baby Care Set, 10 Piece Baby Health Set For Baby Daily Care With Comb Nail Scissors Baby Healthcare Kit Baby First Equipment Care Set For Newborn Gift",
        amount : 'JOD 21.95',
        category: "Healthy and Safety"
    },
    {
        id:13,
        title: "Pacifier",
        imageSrc : 'src="./pictures of items/paci.jpg"',
        description :"2 Options Matte Surface Baby Pacifier With Cover, Orthodontic& Cherry Round Shape Soother Pacifiers For Boy And Girl",
        amount : 'JOD 2.85',
        category: "Pacifiers and soothers"
    },
    {
        id:14,
        title: "Diapers",
        imageSrc : 'src="./pictures of items/diapers.jpg"',
        description :"The best diapers to handle newborns, blowouts, overnights, and more",
        amount : 'JOD 8.95',
        category: "Diapering"
    }

]
console.log(product.length);

//---------------

const Clothing = []

const category_1 = (product)=>{
    for (let index = 0; index < product.length; index++) {
        if (product[index].category === "Clothing" ) {
            Clothing.push(product[index])
        }
    }
}
category_1(product)
console.log(Clothing);

const Feeding = []

const category_2 = (product)=>{
    for (let index = 0; index < product.length; index++) {
        if (product[index].category === "Feeding" ) {
            Feeding.push(product[index])
        }
    }
}
category_2(product)
console.log(Feeding);

const Healthy = []

const category_3 = (product)=>{
    for (let index = 0; index < product.length; index++) {
        if (product[index].category === "Healthy and Safety" ) {
            Healthy.push(product[index])
        }
    }
}
category_3(product)
console.log(Healthy);

const Pacifiers = []

const category_4= (product)=>{
    for (let index = 0; index < product.length; index++) {
        if (product[index].category === "Pacifiers and soothers" ) {
            Pacifiers.push(product[index])
        }
    }
}
category_4(product)
console.log(Pacifiers);

const Diapering = []

const category_5= (product)=>{
    for (let index = 0; index < product.length; index++) {
        if (product[index].category === "Diapering" ) {
            Diapering.push(product[index])
        }
    }
}
category_5(product)
console.log(Diapering);


//----------------

const ADDs = $('.ADDs');
const ADD = ADDs.find('.ADD');

const startADD = ()=>{
    let interval = setInterval(() => {
        ADDs.animate()
    }, interval);
}

//----------------------
const main_items = $('item')
const img_item = $('#img')
const title_item = $('#title')
const box_item = $('.item')

const render = (product)=> {
    for (let index = 0; index < product.length; index++) {
        const img = $(`<img ${product[index].imageSrc} alt="">`);
        const title = $(`<h3>${product[index].title}</h3>`);
        const card = $(`
        <div class="item">
        <div id="img"><img ${product[index].imageSrc} alt=""></div>
        <div id="title"><h3>${product[index].title}</h3></div>
    </div>`)
        box_item.append(card);
    }
}
render(product);


//------------------------
