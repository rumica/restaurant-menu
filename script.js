//Choose elements
const foodItemDiv = document.querySelector('.food-item')
const allBtn = document.querySelector('.all-btn')
const breakBtn = document.querySelector('.break-btn')
const lunchBtn = document.querySelector('.lunch-btn')
const dinnerBtn = document.querySelector('.dinner-btn')
const dessertBtn = document.querySelector('.dessert-btn')
const filterBtn = document.querySelector('.filter-btn')

const menuItem = [
    {id: 1,
     title: 'Beef Stroganoff',
     img: 'https://www.eatthis.com/wp-content/uploads/sites/4/2019/02/beef-stroganoff.jpg?resize=768,563&quality=82&strip=all',
     desc: 'Beef Stroganoff may have hit peak popularity in America in the 1950s and 1960s, but its been around far longer than that. The recipe originated in 17th century Russia and gets its name from Count Pavel Alexandrovich Stroganov, a diplomat from the Russian Stroganov family.',
     category: 'dinner'
    },

    {id: 2,
        title: 'Sandwich',
        img: 'https://www.eatthis.com/wp-content/uploads/sites/4/2019/02/sandwich.jpg?resize=768,563&quality=82&strip=all',
        desc: 'Now you know where the "Reuben" comes from, but what about the concept of a sandwich itself? Well, according to PBS, the sandwich is named after 18th-century aristocrat John Montagu, the fourth Earl of Sandwich, who enjoyed eating sliced meats between two pieces of bread.',
        category: 'breakfast'
       },

       {id: 3,
        title: 'Waldorf Salad',
        img: 'https://www.eatthis.com/wp-content/uploads/sites/4/2019/02/waldorf-salad.jpg?resize=768,563&quality=82&strip=all',
        desc: 'The Waldorf salad, which features apples, celery, grapes, and chopped walnuts over a bed of greens, is named after the establishment that birthed it: the Waldorf-Astoria Hotel in New York City. According to The New York Times, the dish was dreamed up by maitre-d-hotel Oscar Tschirky.',
        category: 'lunch'
       },

       {id: 4,
        title: 'Eggs Benedict',
        img: 'https://www.eatthis.com/wp-content/uploads/sites/4/2018/09/eggs-benedict.jpg?resize=768,563&quality=82&strip=all',
        desc: 'You are hardly alone if you thought Eggs Benedict was named after famed traitor Arnold Benedict or Pope Benedict XIII. According to Atlas Obscura, this brunch staple got its name from Lemuel Benedict.',
        category: 'breakfast'
       },

       {id: 5,
        title: 'Fettuccine Alfredo',
        img: 'https://www.eatthis.com/wp-content/uploads/sites/4/2018/12/bowl-of-fettuccine-alfredo.jpg?resize=768,563&quality=82&strip=all',
        desc: 'Di Lelio later added the item to the menu at his restaurant in Rome, where two famous American silent film movie stars—Mary Pickford and Douglas Fairbanks—tried it and brought the recipe home with them. And though we have come to call it "fettuccine Alfredo" in the states, the dish is known as "fettuccine al burro" or "fettuccine burro e Parmigiano" in Italy.',
        category: 'dinner'
       },

       {id: 6,
        title: 'Pound Cake',
        img: 'https://www.eatthis.com/wp-content/uploads/sites/4/2017/11/pound-cake.jpg?resize=768,563&quality=82&strip=all',
        desc: 'You might think that a pound cake gets its name from its dense weight, but that is not exactly right. The name actually references the fact that a pound cake, according to PopSugar, requires one pound of each key ingredient: butter, flour, eggs, and sugar. No wonder they are so delicious.',
        category: 'dessert'
       },

       {id: 7,
        title: 'Mississippi Mud Pie',
        img: 'https://www.eatthis.com/wp-content/uploads/sites/4/2018/07/mississippi-mud-pie-shutterstock.jpg?resize=768,563&quality=82&strip=all',
        desc: 'This rich, gooey chocolate dessert is named after its appearance and texture: It looks and feels like the muddy banks of the Mississippi River. According to the book Our Fifty States, the earliest confirmed mention of this legendary.',
        category: 'dessert'
       },

       {id: 8,
        title: 'Kung Pao Chicken',
        img: 'https://www.eatthis.com/wp-content/uploads/sites/4/2019/02/kung-pao-chicken.jpg?resize=768,563&quality=82&strip=all',
        desc: 'Kung Pao Chicken—which is made up of diced chicken, chilis, leeks, and peanuts—is a polarizing dish. It is hugely popular in the U.S. and U.K., but it is scorned as inauthentic foreigner fare in the Sichuan Province of China.',
        category: 'dinner'
       },
]

//Show all data on UI
 menuItem.map(item =>{
    foodItemDiv.innerHTML += `<div class="box">
    <img src=${item.img}>
    <div class="description">
        <h2>${item.title}</h2> 
        <p>${item.desc}</p>
    </div>
    </div>`;
})

//Filtering with buttons
const filterBreak = menuItem.filter(item =>  item.category === 'breakfast')
const filterLunch = menuItem.filter(el => el.category === 'lunch')
const filterDinner = menuItem.filter(el => el.category === 'dinner')
const filterDessert = menuItem.filter(el => el.category === 'dessert')

breakBtn.addEventListener('click', function(){
    filterBreak.map(item =>{
        foodItemDiv.innerHTML += `<div class="box">
        <img src=${item.img}>
        <div class="description">
            <h2>${item.title}</h2> 
            <p>${item.desc}</p>
        </div>
        </div>`;
    })
})

lunchBtn.addEventListener('click', function(){
    filterLunch.map(item =>{
        foodItemDiv.innerHTML += `<div class="box">
        <img src=${item.img}>
        <div class="description">
            <h2>${item.title}</h2> 
            <p>${item.desc}</p>
        </div>
        </div>`;
    })
})

dinnerBtn.addEventListener('click', function(){
    filterDinner.map(item =>{
        foodItemDiv.innerHTML += `<div class="box">
        <img src=${item.img}>
        <div class="description">
            <h2>${item.title}</h2> 
            <p>${item.desc}</p>
        </div>
        </div>`;
    })
})
dessertBtn.addEventListener('click', function(){
    filterDessert.map(item =>{
        foodItemDiv.innerHTML += `<div class="box">
        <img src=${item.img}>
        <div class="description">
            <h2>${item.title}</h2> 
            <p>${item.desc}</p>
        </div>
        </div>`;
    })
})

//Item modal
/* let modal = document.querySelector('.modal')
let body = document.querySelector('.overlay')
let closeMod = document.querySelector('.close-modal')
let box = document.querySelectorAll('.box')
let div = document.querySelector('body')
let field = document.querySelector('.field')


for(var i = 0; i < box.length; i++){
    box[i].addEventListener('click' , showBox) 
}

function showBox (){
    field.innerHTML = `
    <div class="modal hidden">
    <button class="close-modal">&times;</button>
    <img src="">
    <h1>Title</h1>
    <p>
      ${menuItem.map((item, index) => {
        return item.desc
      })}
    </p>
  </div>
`
} 

const closeBox = function (){
    console.log('success')
}

closeMod?.addEventListener('click', closeBox) 
body.addEventListener('click', closeBox)

document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        closeBox();
    }
}) */
