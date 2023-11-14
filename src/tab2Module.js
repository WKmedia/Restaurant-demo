import './style.css';
import backImage from './backImageSm.jpg';
import Logo from './logo.jpg';
import StartModule from './startModule';
import Dish1 from './Cote-de1.jpg';
import Dish2 from './Cote-de2.jpg';
import Dish3 from './Cote-de3.jpg';
import Dish4 from './carne-asada-lede.jpg';
import Dish5 from './chicken-fried-steak.jpg';
import Dish6 from './lede.jpg';
import Dish7 from './rareSteak.jpg';
import Dish8 from './StripSteakwithKachumbar.jpeg';
import Dish9 from './texmex-carneasada.jpg';


const Tab2Module = (function() {

 
function tab2Component() {
  const tab2Div = document.getElementById('tab2');
    const tab2Element = document.createElement('div');
    const tab2Heading = document.createElement('h1');
    const subHeading = document.createElement('p');
    const wonderfulText = document.createElement('p');
    const btn = document.createElement('button');
    const recipes = [
      {
        image: Dish1,
        title: 'Côte de Bœuf au Poivre',
        description: 'For this bone-in ribeye steak recipe (a.k.a. côte de bœuf), you’ll encrust the meat with three types of peppercorns and make a silk.'
      },
      {
        image: Dish2,
        title: 'Steak With Preserved-Lemon-Marinated Tomatoes',
        description: 'Toss tomatoes in a simple preserved lemon, soy sauce, and chile marinade while you sear a well-marbled steak for a dinner for two in no time.'
      },
      {
        image: Dish3,
        title: 'Steakhouse Salad With Balsamic and Blue Cheese',
        description: 'You may be tempted to eat this tangy steak all by itself, but the payoff of building it into a salad with funky blue cheese and juicy.'
      },
      {
        image: Dish4,
        title: 'Summer Roll Rice Noodles',
        description: 'A nutty, savory sauce made from pantry staples anchors this cold rice noodle and steak dish inspired by Vietnamese summer rolls.'
      },
      {
        image: Dish5,
        title: 'Mishkaki-Style Strip Steak With Kachumber',
        description: 'Kachumber, a classic side salad in Swahili cuisine, balances out rich steak whose marinade is inspired by East African grille.'
      },
      {
        image: Dish6,
        title: 'Juicy Chicken-Fried Steak With Creamy Gravy',
        description: 'A touch of cornstarch ensures a crisp coating for these shallow-fried cutlets.'
      },
      {
        image: Dish7,
        title: 'Steak Fajitas',
        description: 'Our best steak fajitas recipe features thin strips of skirt steak, marinated in citrus and grilled over mesquite, stuffed into warm flour.'
      },
      {
        image: Dish8,
        title: 'Super-Citrusy Carne Asada',
        description: 'Your next batch of tacos, burritos, or nachos starts with this back-pocket carne asada recipe, supercharged with smoky chile and puckery fresh lime juice.'
      },
      {
        image: Dish9,
        title: 'Texmex Carne Asada',
        description: 'Your next batch of tacos, burritos, or nachos starts with this back-pocket carne asada recipe, supercharged with smoky chile and puckery fresh lime juice.'
      }
    ];
    // const parentContainer = document.getElementById('tab2');



    tab2Heading.setAttribute('class', 'h1Tab2'); 
    // subHeading.setAttribute('class', 'style1Tab2'); 
    wonderfulText.setAttribute('class', 'style2Tab2' );
    // btn.setAttribute('class', 'tab2-joinBtn');

  const element = document.getElementById('h1style');
   element.style.display = 'none';
  const pstyle1 = document.getElementById('pstyle1');
   pstyle1.style.display = 'none';
  const pstyle2 = document.getElementById('pstyle2');
   pstyle2.style.display = 'none';
  const joinBtn = document.getElementById('joinBtn');
   joinBtn.style.display = 'none';

  tab2Element.setAttribute('id', 'tab-2-element');
  tab2Element.style.width ='100%';

  tab2Heading.textContent = 'Steak Dinner\'s';    
  // subHeading.textContent = ;    
  wonderfulText.textContent = 'Opened in 2008, the restaurant drove a culinary revolution in NYC and across the country.';


  tab2Div.prepend(tab2Heading);
  // tab2Div.append(subHeading);
  tab2Element.append(wonderfulText);   
  // tab2Element.appendChild(btn);
  // tab2Div.append(tab2Element);


  tab2Div.append(tab2Element);

   // Iterate through burgerInfo
   recipes.forEach(recipe => {
    // Create a div element for each recipe
    const recipeDiv = document.createElement('div');
    recipeDiv.classList.add('recipe-container'); // Optional: Add a class for styling
  
    // Create elements for title and description
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container')

    const imageElement = document.createElement('img');
    imageElement.src = recipe.image;
    imageElement.classList.add('recipe-img');

    const titleElement = document.createElement('h2');
    titleElement.textContent = recipe.title;

  
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = recipe.description;

    recipeDiv.appendChild(imageContainer)
    imageContainer.appendChild(imageElement);
    // Append title and description to the recipe div
    recipeDiv.appendChild(titleElement);
    recipeDiv.appendChild(descriptionElement);
  
    // Append the recipe div to the parent container
   
    tab2Div.appendChild(recipeDiv);
  });


}
    return {
      tab2Component:tab2Component,
    };
  })();
  
  export default Tab2Module;