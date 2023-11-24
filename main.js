const product = [
    {
        id:1 ,
        title: "Casual Cute Knit Sock Shoes",
        imageSrc : "src='./pictures of items/Baby Boys And Girls Casual Cute Knit Sock Shoes, Soft Sole Non-slip Thick Fleece Thermal Toddler Shoes.jpg'",
        description :"Baby Boys And Girls Casual Cute Knit Sock Shoes, Soft Sole Non-slip Thick Fleece Thermal Toddler Shoes For Winter Walking",
        amount : 'Price : JOD 3.27',
        Price : 3.27,
        category: "Clothing"
    },
    {
        id:2 ,
        title: " Baby sleeveless",
        imageSrc : 'src="./pictures of items/baby sleeves.jpg"',
        description :"Summer Solid Short-sleeved Baby Bodysuit Cotton Soft 0-12Months Unisex Infant Clothes",
        amount : 'Price :JOD 3.75',
        Price : 3.75,
        category: "Clothing"
    },
    
    {
        id:3 ,
        title: " Blended Tights Set",
        imageSrc : 'src="./pictures of items/blended tights.jpg"',
        description :"Cool Club Blended Tights Set, White Color, 2 Pieces",
        amount : 'Price :JOD 2.69',
        price:2.69,
        category: "Clothing"
    },


    {
        id:4 ,
        title: " Baby Jackets",
        imageSrc : 'src="./pictures of items/jacket.jpg"',
        description :"New Baby Boys Cute Graphic Hooded Padded Coat, Kids Warm Zip Up Long Sleeve Jacket, Winter/fall",
        amount : 'Price :JOD 11.25',
        price:11.25,
        category: "Clothing"
    },

    {
        id:5 ,
        title: " Knitted Sweater",
        imageSrc : 'src="./pictures of items/sweater.jpg"',
        description :"Baby Boy's Knit Sweater, All-match Warm Casual Pullover Top For Outdoor Travel",
        amount : 'Price :JOD 13.12',
        price:13.12,
        category: "Clothing"
    },
    {
        id:6 ,
        title: "Children Home Slipper",
        imageSrc : 'src="./pictures of items/slipper.jpg"',
        description :"Cool Club Children Home Slipper, Christmas Design, Color : Light Grey,Gender: Both,recommended age : 4-5 years , size : 27-28",
        amount : 'Price :JOD 4.35',
        price:4.35,
        category: "Clothing"
    },
    {
        id:7,
        title: "Baby Bottle",
        imageSrc : 'src="./pictures of items/bottle.jpg"',
        description :"The Perfect Nursing Bottle for Newborns: Keep Baby Safe While Drinking Water & Milk!",
        amount : 'Price :JOD 2.54',
        price:2.54,
        category: "Feeding"
    },
    {
        id:8 ,
        title: "cups & water Bottle",
        imageSrc : 'src="./pictures of items/cups.jpg"',
        description :"Baby Learning Drinking Cup, Baby Sippy Cup, BPA Free",
        amount : 'Price :JOD 3.85',
        price:3.85,
        category: "Feeding"
    },
    {
        id:9 ,
        title: "Food Storage and Containers",
        imageSrc : 'src="./pictures of items/storage.jpg"',
        description :"Baby Formula Dispenser, 4 Layers Stackable Formula Container, Milk Powder Formula Dispenser, Baby Feeding Travel Storage Container, BPA Free",
        amount : 'Price :JOD 5.25',
        price:5.25,
        category: "Feeding"
    },

    {
        id:10,
        title: "Nipples",
        imageSrc : 'src="./pictures of items/nipple.jpg"',
        description :"Tommee Tippee Closer To Nature Teats Nipples Fast Flow Teats 6m+ (Pack of 2)",
        amount : 'Price :JOD 2.85',
        price:2.85,
        category: "Feeding"
    },

    {
        id:11 ,
        title: "BabyJem Safety Belt - Black",
        imageSrc : 'src="./pictures of items/jem.jpg"',
        description :"This First steps Safety Reins allow you to help baby take his/her first steps and keep them near you when walking in dangerous or crowded places.",
        amount : 'Price :JOD 9.55',
        price:9.55,
        category: "Healthy and Safety"
    },

    {
        id:12,
        title: "Baby Care Set",
        imageSrc : 'src="./pictures of items/care.jpg"',
        description :"Baby Care Set, 10 Piece Baby Health Set For Baby Daily Care With Comb Nail Scissors Baby Healthcare Kit Baby First Equipment Care Set For Newborn Gift",
        amount : 'Price :JOD 21.95',
        price:21.95,
        category: "Healthy and Safety"
    },
    {
        id:13,
        title: "Pacifier",
        imageSrc : 'src="./pictures of items/paci.jpg"',
        description :"2 Options Matte Surface Baby Pacifier With Cover, Orthodontic& Cherry Round Shape Soother Pacifiers For Boy And Girl",
        amount : 'Price :JOD 2.85',
        price:2.85,
        category: "Pacifiers and soothers"
    },
    {
        id:14,
        title: "Diapers",
        imageSrc : 'src="./pictures of items/diapers.jpg"',
        description :"The best diapers to handle newborns, blowouts, overnights, and more",
        amount : 'Price :JOD 8.95',
        price:8.95,
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

const anim = $('.anim-1')
const ADDs = $('.ADDs');
const ADD = $('.ADD');
let current = 0;

const startADD = ()=>{
    let interval = setInterval(() => {
        ADDs.animate({'margin-top':"-=400px"},1000)
        current++
        if(current === 5){
            current=0
            // ADDs.css('margin-top':"0")
        }
    },5000);

    // setInterval(show,2000)
}
startADD()

//----------------------

const box_item = $('.items')

const cart = [];
const cart_box = $('.cart')


const wishCart = [];

const render = (product)=> {
    for (let index = 0; index < product.length; index++) {
        const img = $(`<img ${product[index].imageSrc} alt="">`);
        const title = $(`<h3>${product[index].title}</h3>`);
        const card = $(`
        <div class="item">
        <img id="imgMain" ${product[index].imageSrc} alt="">
        <div id="titleMain"><h3>${product[index].title}</h3> 
        </div>
    </div>`)
    const itemClick = $('.item')
    const cartAdd = $('#cartMain');
    const createBtn = $(`<button id="cartMain"> Add to Cart</button>`)

    card.on('mouseover',()=>{
        card.append(createBtn);
    })

    const boxMessage = $('.boxCart');
    boxMessage.hide()


    createBtn.on('click',()=>{
        let toString = JSON.stringify(product[index]);
        localStorage.setItem(product[index].title,toString)
        cart.push( product[index])
        card.off('click')

        boxMessage.show()
            })

        const backHome = $('#back')
        const removeClass = ()=>{
            boxMessage.hide()
        }
        backHome.on('click',removeClass)



        card.on('click',()=>{
            $('.main-page').hide();
            const item_page = $('.item-page')
            const title_item = $(`<h1>${product[index].title}</h1>`);
            const box = $(`<div></div>`)
            const inner_box = $(`<div></div>`)

           title_item.css({
                'color': 'black',
                'margin-top': 0,
                'margin-bottom': '2%',
                'font-size': 'xxx-large',
                'font-weight': 'bold',
            })
            const img_item = $(`<img ${product[index].imageSrc} alt="">`);
            const description_item = $(`<h1>${product[index].description}</h1>`);
            const amount_item = $(`<h1>${product[index].amount}</h1>`);

            const rating = $(`
            <br>
            <br>
            <h2>Ratings</h2>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>`);

            const description_box = $(`<div></div>`)


            const btn1 = $(`<button class="cartItem"> Add to Cart</button>`);
            const btn3 = $(`<button class="cartItem"> Home Page</button>`);
            const btn2 = $(`<button class="cartItem"> Add to WishCart</button>`);
            box.css({
                'border':'5px solid black',
                'display': "grid",
                'grid-template-columns': 'repeat(2, 1fr)',
                'grid-template-rows': "1ft 2ft",
            })
            img_item.css({
                'width':"400px",
                'height':"400px",
                'margin':'120px',
                'margin-top':'50px',
            })
            description_item.css({
                'border':'5px solid black',
                'padding':'50px',
                'display': 'flex'
            })
            amount_item.css({
                'font-size': 'xxx-large',
                'font-weight': 'bold',
            })

            rating.css({
                'font-size': 'xx-large',
            })



            item_page.append(title_item);
            item_page.append(box);
            box.append(img_item);
            box.append(inner_box);
            inner_box.append(amount_item)
            inner_box.append(rating);
            inner_box.append(btn1);
            inner_box.append(btn2);
            item_page.append(description_item);
            description_box.append(btn3)
            description_item.append(btn3);

            btn1.css({
                'background-color': 'yellow',
                'padding': '25px',
                'font-size': 'x-large',
                'font-weight': 'bold',
                'border': '10px solid black',
            })
            btn2.css({
                'background-color': 'yellow',
                'padding': '25px',
                'font-size': 'x-large',
                'font-weight': 'bold',
                'border': '10px solid black',
                'margin-left':"20px"
            })
            btn3.css({
                'background-color': '#83F059',
                'padding': '25px',
                'font-size': 'xx-large',
                'font-weight': 'bold',
                'border': '5px solid black',
                'margin-right': '20px',
                'position':'relative',
                'left':'20%'


                
            })

            const next_page = function(){
                $('.item-page').html("")
                $('.main-page').show();
            }

            btn3.on('click',next_page)
            $('.item-page').show()

            localStorage.setItem("item",product[index])


            btn1.on('click',()=>{
                console.log(product[index]);  
                let toString = JSON.stringify(product[index]);
                localStorage.setItem(product[index].title,toString)
                cart.push( product[index])
                
                    })
            btn2.on('click',()=>{
                wishCart.push(product[index])
            })

        })
        box_item.append(card);
       
    }
}
render(product);


//------------------------

const icon = $('.icon');
icon.on('click',()=>{
    $('.item-page').html("");
    $('.main-page').hide();

let totalCart = 0
    for (let index = 0; index < localStorage.length; index++) {
        console.log(localStorage);
        const nameLine = localStorage.key(index);
        console.log(nameLine);
        
        const itemCart =JSON.parse(localStorage.getItem(nameLine))||[];
        console.log(JSON.parse(localStorage.getItem(nameLine)));
        console.log(itemCart);

        const box_cart = $(`<div></div>`);
        const img = $(`<img ${itemCart.imageSrc} alt="">`)
        const title_cart = $(`<h3>${itemCart.title}</h3>`)
        const amount = $(`<h3>${itemCart.amount}</h3>`)
        const btn_delete_cart = $(`<button>Remove</button>`)
        box_cart.append(img);
        box_cart.append(title_cart);
        box_cart.append(amount);
        box_cart.append(btn_delete_cart);
        cart_box.append(box_cart);
        totalCart = totalCart + itemCart.price

        btn_delete_cart.css({
            'background-color': '#f3200a',
            'padding': '8px',
            'font-size': '15px',
            'font-weight': 'bolder',
            'margin-left': '55px',
            'cursor': 'grabbing',
        })

        btn_delete_cart.on('click', function(){
            cart.splice(1,1,itemCart)
            box_cart.html('')
            localStorage.removeItem(nameLine)      
        })
       console.log(itemCart.price);
        totalCart = totalCart + itemCart.price
       console.log(totalCart);


    }
    const price = $(`<div></div>`);
    const cart_page = $('.totalCart');

    const totalAmount = $(`<h1>The Total amount of your order:JOD </h1>`)
    cart_page.append(totalAmount)
    

})

//------------
const home = $('.home');
home.on('click', ()=>{
    $('.item-page').html("");
    $('.main-page').show();
    $('.cart').html("");

})



/* 
const memory = (cart)=>{
    for (let index = 0; index < cart.length; index++) {
        console.log(cart[index]);
        let toString = JSON.stringify(cart[index]);
        localStorage.setItem('item',toString)
    }
}
memory(cart) *//* 

console.log(localStorage.key(0));
console.log(localStorage.getItem(localStorage.key(0))); */