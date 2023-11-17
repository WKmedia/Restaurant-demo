import './style.css';
import backImage from './backImageSm.jpg';
import Logo from './logo.jpg';
import StartModule from './startModule';


const Tab3Module = (function() {

 
function tab3Component() {

    const element = document.getElementById('h1style');
    element.style.display = 'none';
    const pstyle1 = document.getElementById('pstyle1');
    pstyle1.style.display = 'none';
    const pstyle2 = document.getElementById('pstyle2');
    pstyle2.style.display = 'none';
    const joinBtn = document.getElementById('joinBtn');
    joinBtn.style.display = 'none';

    const tab3Div = document.getElementById('tab3');
    const tab3Element = document.createElement('div');
    const tab3Heading = document.createElement('h1');
    const subHeading = document.createElement('p');
    const wonderfulText = document.createElement('p');
    const btn = document.createElement('button');
    
    const sideItems = [
      { title: 'Homestyle Mashed Potatoes', description:'Creamy and velvety mashed potatoes made with Our Homestyle hand-selected potatoes, mashed to perfection and blended with butter, cream, and a touch of seasoning.', price: 3.99 },
      { title: 'Dressed Baked Potato',description:'symphony of toppings, creating a flavor flawlessly fluffy interior topped with a luscious blend of sour cream, melted cheddar cheese, crispy bacon bits, and a sprinkle of chives.', price: 3.99 },
      { title: 'Aussie Fries', description: 'Sliced from premium potatoes and perfectly seasoned, crispiness and flavor, golden  fluffy interior, accompanied by your favorite dipping sauce.',price: 3.99 },
      { title: 'Sweet Potato with Honey & Brown Sugar',description:'tender, oven-roasted sweet potatoes, natural sugars caramelized to perfection, combination of honey and brown sugar glaze.', price: 3.99 },
      { title: 'Fresh Steamed Seasonal Veggies', description:'vibrant medley of colors and textures in the crispness of green beans, the tenderness of broccoli, and the sweetness of carrots.', price: 3.99 },
      { title: 'Seasoned Rice', description: 'medley of flavors, from the warmth of cumin to the subtle hints of herbs, transforms a simple bowl of rice', price: 3.99 },
      { title: 'Steakhouse Mac & Cheese', description: ' combines the creamy richness of classic macaroni and cheese with tender pieces of perfectly grilled steak smothered in a velvety and robust cheese sauce.', price: 5.99 },
      { title: 'Loaded Mashed Potatoes',description: 'a velvety bed of mashed potatoes adorned with generous portions of crispy bacon, melted cheddar cheese, chopped green onions, and a dollop of sour cream. ', price: 4.99 }
    ]; 
    

  tab3Heading.setAttribute('class', 'h1Tab3');
  subHeading.setAttribute('class', 'style1Tab3'); 
  wonderfulText.setAttribute('class', 'style2Tab3' );
  btn.setAttribute('class', 'tab3-joinBtn'); 
  
  tab3Heading.textContent = 'Side\'s';    
  subHeading.textContent = 'Elevating Your Meal: Savory Selections to Enhance Every Bite of Your Culinary Journey. Book your table today and savor the magic of Our Wonderful Restaurant.';    
  wonderfulText.textContent = 'Elevating Your Meal: Savory Selections to Enhance Every Bite of Your Culinary Journey. Book your table today and savor the magic of Our Wonderful Restaurant.';


  tab3Div.append(tab3Heading);
  tab3Div.append(subHeading);
  tab3Div.append(tab3Element);
  
   // Iterate through burgerInfo
sideItems.forEach(sideItem => {
  // Create a div element for each sideItem
  const sideItemDiv = document.createElement('div');
  sideItemDiv.classList.add('sideItem-container'); // Optional: Add a class for styling

  // Create elements for title and description
  const titleElement = document.createElement('h2');
  titleElement.textContent = sideItem.title;
  titleElement.classList.add('title-item');
  
  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = sideItem.description;
  descriptionElement.classList.add('discript-element')

  const priceElement = document.createElement('p');
  priceElement.classList.add('price-element')
  priceElement.textContent = sideItem.price;

  // Append title and description to the sideItem div
  
  sideItemDiv.appendChild(titleElement);
  titleElement.appendChild(descriptionElement);
  titleElement.appendChild(priceElement);

  // Append the sideItem div to the parent container
  tab3Div.appendChild(sideItemDiv);
  
});
 
}
     
    return {
      tab3Component:tab3Component,
    };
  })();
  
  export default Tab3Module;