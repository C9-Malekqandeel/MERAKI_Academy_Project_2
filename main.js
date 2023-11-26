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
        Price: 2.69,
        category: "Clothing"
    },


    {
        id:4 ,
        title: " Baby Jackets",
        imageSrc : 'src="./pictures of items/jacket.jpg"',
        description :"New Baby Boys Cute Graphic Hooded Padded Coat, Kids Warm Zip Up Long Sleeve Jacket, Winter/fall",
        amount : 'Price :JOD 11.25',
        Price: 11.25,
        category: "Clothing"
    },

    {
        id:5 ,
        title: " Knitted Sweater",
        imageSrc : 'src="./pictures of items/sweater.jpg"',
        description :"Baby Boy's Knit Sweater, All-match Warm Casual Pullover Top For Outdoor Travel",
        amount : 'Price :JOD 13.12',
        Price: 13.12,
        category: "Clothing"
    },
    {
        id:6 ,
        title: "Children Home Slipper",
        imageSrc : 'src="./pictures of items/slipper.jpg"',
        description :"Cool Club Children Home Slipper, Christmas Design, Color : Light Grey,Gender: Both,recommended age : 4-5 years , size : 27-28",
        amount : 'Price :JOD 4.35',
        Price: 4.35,
        category: "Clothing"
    },
    {
        id:7,
        title: "Baby Bottle",
        imageSrc : 'src="./pictures of items/bottle.jpg"',
        description :"The Perfect Nursing Bottle for Newborns: Keep Baby Safe While Drinking Water & Milk!",
        amount : 'Price :JOD 2.54',
        Price: 2.54,
        category: "Feeding"
    },
    {
        id:8 ,
        title: "cups & water Bottle",
        imageSrc : 'src="./pictures of items/cups.jpg"',
        description :"Baby Learning Drinking Cup, Baby Sippy Cup, BPA Free",
        amount : 'Price :JOD 3.85',
        Price: 3.85,
        category: "Feeding"
    },
    {
        id:9 ,
        title: "Food Storage and Containers",
        imageSrc : 'src="./pictures of items/storage.jpg"',
        description :"Baby Formula Dispenser, 4 Layers Stackable Formula Container, Milk Powder Formula Dispenser, Baby Feeding Travel Storage Container, BPA Free",
        amount : 'Price :JOD 5.25',
        Price: 5.25,
        category: "Feeding"
    },

    {
        id:10,
        title: "Nipples",
        imageSrc : 'src="./pictures of items/nipple.jpg"',
        description :"Tommee Tippee Closer To Nature Teats Nipples Fast Flow Teats 6m+ (Pack of 2)",
        amount : 'Price :JOD 2.85',
        Price: 2.85,
        category: "Feeding"
    },

    {
        id:11 ,
        title: "BabyJem Safety Belt - Black",
        imageSrc : 'src="./pictures of items/jem.jpg"',
        description :"This First steps Safety Reins allow you to help baby take his/her first steps and keep them near you when walking in dangerous or crowded places.",
        amount : 'Price :JOD 9.55',
        Price: 9.55,
        category: "Healthy and Safety"
    },

    {
        id:12,
        title: "Baby Care Set",
        imageSrc : 'src="./pictures of items/care.jpg"',
        description :"Baby Care Set, 10 Piece Baby Health Set For Baby Daily Care With Comb Nail Scissors Baby Healthcare Kit Baby First Equipment Care Set For Newborn Gift",
        amount : 'Price :JOD 21.95',
        Price: 21.95,
        category: "Healthy and Safety"
    },
    {
        id:13,
        title: "Pacifier",
        imageSrc : 'src="./pictures of items/paci.jpg"',
        description :"2 Options Matte Surface Baby Pacifier With Cover, Orthodontic& Cherry Round Shape Soother Pacifiers For Boy And Girl",
        amount : 'Price :JOD 2.85',
        Price: 2.85,
        category: "Pacifiers and soothers"
    },
    {
        id:14,
        title: "Diapers",
        imageSrc : 'src="./pictures of items/diapers.jpg"',
        description :"The best diapers to handle newborns, blowouts, overnights, and more",
        amount : 'Price :JOD 8.95',
        Price: 8.95,
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
let current = 1;

let width = 600;
let animationSpeed = 3000;
let pause = 5000;


const startADD = ()=>{
    let interval = setInterval(() => {
        ADDs.animate({'margin-top':`-=${width}px`},animationSpeed,()=>{
            current++
            if(current === 5){
                current=1
                ADDs.css('margin-top',"0")
            }
        })
    },pause);
    

    // setInterval(show,2000)
}
startADD()

//--------------Category--------
const categories =['Clothing', 'Feeding','Healthy and Safety', 'Pacifiers and soothers', 'Diapering'];

const box_category =$('.category');

const addCategory = ()=>{
    const createCategory = (categories)=>{
        for (let index = 0; index < categories.length; index++) {
            let showCategory= $(`<div>
            <img class ="imgCategory" src="./pictures of items/${categories[index]}.jpg" alt="" >
            <h4 class="info">${categories[index]}</h4>
            </div>`)
            box_category.append(showCategory)


            showCategory.on('click',()=>{
                    $('.Box-items').html("")
                    $('.items').html("");
                    $('.items').show();
                    box_category.hide()
                    //const renderCategory = (Clothing)

                    console.log(categories[index]);

                    const head = $(`<h2 id="headOfCategory">${categories[index]}</h2>`)
                    $('.Box-items').append(head)


                    const result=product.filter((e,i)=>
                    {
                        return e.category===categories[index]
                    })
                    render(result)

                    $('.items').css({
                        'background-color': '#F0EB58'
                    
                    })


                    // for (let index = 0; index < Clothing.length; index++) {
                        
                    // const imgCate = $(`<img ${Clothing[index].imageSrc} alt="">`);
                    // console.log(Clothing[index]);
                    // const titleCate = $(`<h3>${Clothing[index].title}</h3>`)
                    // const items_Category = $(`<div class="Cate"></div>`);
                    // items_Category.append(imgCate);
                    // items_Category.append(titleCate);

                        
                    // }

                    
               
            })
            
                    /* 
                    for (let index = 0; index < Clothing.length; index++) {
                    const img = $(`<img ${product[index].imageSrc} alt="">`);
                    const title = $(`<h3>${product[index].title}</h3>`);
                    const card = $(`
                    <div class="item">
                    <img id="imgMain" ${product[index].imageSrc} alt="">
                    <div id="titleMain"><h3>${product[index].title}</h3> 
                    </div>
                    <div class="rate">
                    <br>
                    <h2>Reviews(s25)</h2>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    </div>`)
                    
                     */

                }

        
    
    }
    createCategory(categories);

}
addCategory()
//----------------------

const box_item = $('.items')

const cart = [];
const cart_box = $('.cart')

$('.cart').hide()


const wishCart = [];

const render = (product)=> {
console.log(product);
    for (let index = 0; index < product.length; index++) {
        const img = $(`<img ${product[index].imageSrc} alt="">`);
        const title = $(`<h3>${product[index].title}</h3>`);
        const card = $(`
        <div class="item">
        <img id="imgMain" ${product[index].imageSrc} alt="">
        <div id="titleMain"><h3>${product[index].title}</h3> 
        </div>
        <div class="rate">
        <br>
        <h2>Reviews(s25)</h2>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
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

           // localStorage.setItem("item",product[index])


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
    $('.cart').show()
    $('.item-page').html("");
    $('.main-page').hide();
    $('.calculate').hide();


let totalCart = 0;

    for (let index = 0; index < localStorage.length; index++) {
        console.log(localStorage);
        const nameLine = localStorage.key(index);
        console.log(nameLine);
        
        const itemCart =JSON.parse(localStorage.getItem(nameLine))||[];
        console.log(JSON.parse(localStorage.getItem(nameLine)));

        const box_cart = $(`<div class="calculate"></div>`);
        const img = $(`<img ${itemCart.imageSrc} alt="">`)
        const title_cart = $(`<h3>${itemCart.title}</h3>`)
        const amount = $(`<h3>${itemCart.amount}</h3>`)
        const btn_delete_cart = $(`<button>Remove</button>`)
        box_cart.append(img);
        box_cart.append(title_cart);
        box_cart.append(amount);
        box_cart.append(btn_delete_cart);
        cart_box.append(box_cart);

        


        //totalCart = totalCart + itemCart.price

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
        //console.log(itemCart.Price);
        let price_item = itemCart.Price

        console.log(itemCart.Price);
       
        totalCart = totalCart + price_item

        console.log(totalCart);


    }
    
    const box_checkout = $(`<div class="checkout" ></div>`);
    const btn_checkout = $(`<button class="calculate" >Place your Order</button>`)

    const cart_page = $('.totalCart');

    const totalAmount = $(`<h1 class="calculate">The Total amount of your order:  ${totalCart} JOD </h1>`)
    //box_checkout.append(totalAmount);
    cart_page.append(totalAmount);
    cart_page.append(btn_checkout)
    //box_checkout.append(cart_page)
     
    totalAmount.css({

    'font-size': '35px',
    'display': 'flex',
    'justify-content': 'space-around',
    'font-weight': 'lighter',
    'border': '#C2F059 solid 10px',
    'margin': '35px',
    'padding': '35px',
    })

    btn_checkout.css({
    'padding': '20px',
    'font-size': '15px',
    'font-weight': 'bolder',
    'margin-left': '35px',
    'background-color': '#83F059',
    'cursor': 'pointer',
    'border': '#C2F059 solid 10px',
    })



})

$('#headOfCategory').html("")

//------------
const home = $('.home');
home.on('click', ()=>{
    $('.regis').hide()
    $('#create-account').hide()
    $('#create-account').html("")
    $('.Box-items').html("")
    $('.animation').show();
    $('.cart').hide()
    $('.item-page').html("");
    $('.main-page').show();
    $('.cart').html("");
    $('.calculate').hide();
    $('.placeItem').hide();
    box_category.show();
    //$('.items').hide()
    render(product)

    $('.items').css({
        'background-color': '#F0C659'
    
    })
    



    

})


// ----------- Register -----------

const Register = $('#register')

Register.on('click',()=>{
    $('.main-page').hide();


    const account = $(` <input class="regis" placeholder="Your Name" type="text">`);
    const email = $(`<input class="regis" placeholder="Email" type="email">`);
    const password = $(`<input class="regis" placeholder="Password" type="password">`);
    const confirmPassword = $(`<input class="regis" placeholder=" Confirm Password" type="password">`);
    const body = $('body');

    const create = $(`<button id="create-account"> Create </button>`);

    
    body.append(account)
    body.append(email);
    body.append(password)
    body.append(confirmPassword);
    body.append(create)

})


const clickIn = $('#create-account')

clickIn.on('click',()=>{
    console.log("$('.regis').val()");
})



class account {
    constructor (name,email,password){
        this.name= name;
        this.email=email;
        this.password=password;
    }
}

//----------------------------





const logIn = $(`#logIn`);
logIn.on('click', ()=>{
    $('.main-page').hide();
    const Name = $(` <input class="regis" placeholder="Your Name" type="text">`);
    const email = $(`<input class="regis" placeholder="Email" type="email">`);
    const password = $(`<input class="regis" placeholder="Password" type="password">`);
    const body = $('body');

    const yourAccount = $(`<button id="create-account"> LogIn</button>`);




    body.append(Name)
    body.append(email);
    body.append(password);
    body.append(yourAccount)



})
// -----------------Search

const Search = $('.search .h4');
const btnSearch = $('#btnSearch');
Search.on('click',()=>{
    $('.Box-items').html("")
    $('.items').html("");
    $('.items').show();
    box_category.hide();
    $('.animation').hide();


    let text = $('#btnSearch').val();
    
    const search =product.filter((e,i)=>
                    {
                        return e.title === text
                    })
                    render(search)

})







/* 
const accountInfo = (name, email,password)=>{
    const info={};

    info.name = name;
    info.email=email;
    info.password = password;

}
 */





/* 
const signUp = $(`<h1>SignUp</h2>
<br>
<h1>SignIn</h2>`);

const header = $('.Sign');
header.append(signUp); */


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