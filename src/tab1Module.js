import './style.css';
import Burger1 from './burger1.jpg';
import Burger2 from './burger2.png';
import Burger3 from './burger3.jpg';
import Burger4 from './burger4.jpg';
import Burger5 from './burger5.jpg';
import Burger6 from './burger6.jpg';
import Burger7 from './burger7.jpg';
import Burger8 from './burger8.jpg';
import Burger9 from './burger9.png';



const Tab1Module = (function() {

 
 
function tab1Component() {
  const myLogo = document.getElementById('my-logo')
  const tab1Div = document.getElementById('tab1');
  const tab1Element = document.createElement('div');
  const tab1Heading = document.createElement('h1');
  const subHeading = document.createElement('p');
  const wonderfulText = document.createElement('p');
  const btn = document.createElement('button');
  const burgerInfo = [
    {
      image: Burger1,
      title: 'Hamburger',
      description: 'The hamburger is the original and the best-known burger to date. It is believed that it was first created in Rome with a squashed beef meatball between the slices of bread.'
    },
    {
      image: Burger2,
      title: 'Turkey Burger',
      description: 'The turkey sandwich inspired the turkey burger. Turkey is the tastiest, most delicious, and most dry meat with different flavors, making it the ideal alternative to the red meat used in burger patties.'
    },
    {
      image: Burger3,
      title: 'Classic Burger',
      description: 'The classic beef burger is a staple of Australian cuisine. It typically consists of a beef patty, lettuce, tomato, cheese, and various sauces, all served on a bun. The patty can be made from a variety of cuts of beef, such as chuck or sirloin, and is often seasoned with salt, pepper, and other spices.'
    },
    {
      image: Burger4,
      title: 'Lamb Burger',
      description: 'Lamb burgers are made with ground lamb meat. They tend to have a distinct, rich flavor and are sometimes seasoned with herbs, such as rosemary, mint, or cumin. Lamb burgers can also sometimes be topped with feta cheese or tzatziki sauce.'
    },
    {
      image: Burger5,
      title: 'Chicken Burger',
      description: 'Chicken burgers are made with ground chicken meat, which can be seasoned with various herbs and spices to give them a unique flavor. They are often topped with cheese and various condiments, such as mayonnaise, ketchup, and mustard.'
    },
    {
      image: Burger6,
      title: 'Specialty Burger',
      description: 'In Australia, specialty burgers made with kangaroo or crocodile meat are less common and are usually found in specialty or gourmet restaurants. These meats are leaner and have a distinct taste. Kangaroo meat is rich and gamey, while crocodile meat is mild and slightly sweet. It\'s worth noting that some of these meats, particularly kangaroo and crocodile, may be considered controversial due to conservation and/or cultural reasons and may not be available in all parts of Australia or be legal to consume.'
    },
    {
      image: Burger7,
      title: 'Cheese Burger',
      description: 'A cheeseburger is a burger with a beef patty and cheese on top. The cheese is usually added on top of the patty while it\'s still cooking, so it melts and covers the patty. This can be any type of cheese like cheddar, Swiss, American, Blue cheese, etc. The cheeseburger is typically served with lettuce, tomato, onion, and condiments, such as ketchup, mustard, and mayonnaise, on a bun.'
    },
    {
      image: Burger8,
      title: 'Bacon Burger',
      description: 'A bacon cheeseburger is a cheeseburger with bacon added. The bacon is typically crispy and added on top of the cheese and beef patty. Some places also put the bacon between the cheese and patty. The bacon adds a smoky and salty flavor to the burger, making it more savory and indulgent.'
    },
    {
      image: Burger9,
      title: 'Veggie Burger',
      description: 'A veggie burger is a burger made with plant-based ingredients. These burgers do not contain any meat, and they are often used as a meatless alternative. They can be made with a variety of ingredients, including black beans, kidney beans, chickpeas, lentils, mushrooms, and various vegetables, such as carrots, zucchini, and bell peppers. These ingredients are often ground and formed into a patty, which is then seasoned and grilled or pan-fried. Veggie burgers are often served on a bun with toppings similar to those with meat patties.'
    }
  ];
  
  // Get the parent container where you want to append the divs
  // const parentContainer = document.getElementById('tab1');

  
  tab1Heading.setAttribute('class', 'h1Tab1');
  wonderfulText.setAttribute('class', 'style2Tab1' );
  btn.setAttribute('class', 'tab1-joinBtn');

 
  const element = document.getElementById('h1style');
  
  element.style.display = 'none';
  const pstyle1 = document.getElementById('pstyle1');
  
  pstyle1.style.display = 'none';
  const pstyle2 = document.getElementById('pstyle2');
  
  pstyle2.style.display = 'none';
  const joinBtn = document.getElementById('joinBtn');
  
  joinBtn.style.display = 'none';
  

  tab1Element.setAttribute('id', 'tab-1-element');
  
  tab1Heading.textContent = 'Burger\'s';    
  subHeading.textContent = ' Hamburger' ;    
  wonderfulText.textContent = 'The hamburger is the original and the best-known burger to date. It is believed that it was first created in Rome with a squashed beef meatball between the slices of bread.';


  tab1Div.append(tab1Heading);
 
  tab1Element.append(wonderfulText);   
    

    tab1Div.append(tab1Element);

    // Iterate through burgerInfo
  burgerInfo.forEach(burger => {
    // Create a div element for each burger
    const burgerDiv = document.createElement('div');
    burgerDiv.classList.add('burger-container'); // Optional: Add a class for styling
  
    // Create elements for title and description
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');
    const imageElement = document.createElement('img');
    imageElement.src = burger.image;
    imageElement.classList.add('burger-img');
    

    
    const titleElement = document.createElement('h2');
    titleElement.textContent = burger.title;
  
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = burger.description;
  
    // Append title and description to the burger div
    burgerDiv.appendChild(imageContainer);
    imageContainer.appendChild(imageElement);
    burgerDiv.appendChild(titleElement);
    burgerDiv.appendChild(descriptionElement);
  
    // Append the burger div to the parent container
    tab1Div.appendChild(burgerDiv);
    });
  
  }
  
    return {
      tab1Component:tab1Component,
    };
  
})();
  
  export default Tab1Module;

