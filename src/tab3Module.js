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
    const parentContainer = document.getElementById('tab3');
    const sideItems = [
      { title: 'Homestyle Mashed Potatoes', price: 3.99 },
      { title: 'Dressed Baked Potato', price: 3.99 },
      { title: 'Aussie Fries', price: 3.99 },
      { title: 'Sweet Potato with Honey & Brown Sugar', price: 3.99 },
      { title: 'Fresh Steamed Seasonal Veggies', price: 3.99 },
      { title: 'Seasoned Rice', price: 3.99 },
      { title: 'Steakhouse Mac & Cheese', price: 5.99 },
      { title: 'Loaded Mashed Potatoes', price: 4.99 }
    ]; 
    

  tab3Heading.setAttribute('class', 'h1Tab3');
  subHeading.setAttribute('class', 'style1Tab3'); 
  wonderfulText.setAttribute('class', 'style2Tab3' );
  btn.setAttribute('class', 'tab3-joinBtn'); 
  
  tab3Heading.textContent = 'Side\'s';    
  subHeading.textContent = 'Prices';    
  wonderfulText.textContent = ['item1', 'item2', 'item3'];


  tab3Div.append(tab3Heading);
  // tab3Element.append(subHeading);
  // tab3Element.append(wonderfulText);   
  // tab3Element.appendChild(btn);
  tab3Div.append(tab3Element);
  
   // Iterate through burgerInfo
sideItems.forEach(sideItem => {
  // Create a div element for each sideItem
  const sideItemDiv = document.createElement('div');
  sideItemDiv.classList.add('sideItem-container'); // Optional: Add a class for styling

  // Create elements for title and description
  const titleElement = document.createElement('h2');
  titleElement.textContent = sideItem.title;

  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = sideItem.price;

  // Append title and description to the sideItem div
  sideItemDiv.appendChild(titleElement);
  sideItemDiv.appendChild(descriptionElement);

  // Append the sideItem div to the parent container
  parentContainer.appendChild(sideItemDiv);
  
});
 

 

    
  }
     
    return {
      tab3Component:tab3Component,
    };
  })();
  
  export default Tab3Module;