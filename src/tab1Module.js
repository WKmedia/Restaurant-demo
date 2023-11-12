import './style.css';
import backImage from './backImageSm.jpg';
import Logo from './logo.jpg';
import StartModule from './startModule';


const Tab1Module = (function() {

 
function tab1Component() {
  const tab1Div = document.getElementById('tab1');
    const tab1Element = document.createElement('div');
    const tab1Heading = document.createElement('h1');
    const subHeading = document.createElement('p');
    const wonderfulText = document.createElement('p');
    const btn = document.createElement('button');

    tab1Heading.setAttribute('class', 'h1Tab1'); 
    subHeading.setAttribute('class', 'style1Tab1'); 
    wonderfulText.setAttribute('class', 'style2Tab1' );
    btn.setAttribute('class', 'tab1-joinBtn');

  const element = document.getElementById('h1style');
  console.log(element);
  element.style.display = 'none';
  const pstyle1 = document.getElementById('pstyle1');
  console.log(pstyle1);
  pstyle1.style.display = 'none';
  const pstyle2 = document.getElementById('pstyle2');
  console.log(pstyle2);
  pstyle2.style.display = 'none';
  const joinBtn = document.getElementById('joinBtn');
  console.log(joinBtn);
  joinBtn.style.display = 'none';
  
  
  tab1Heading.textContent = 'Menu';    
  subHeading.textContent = 'Prices';    
  wonderfulText.textContent = ['item1', 'item2', 'item3'];


  tab1Element.append(tab1Heading);
  tab1Element.append(subHeading);
  tab1Element.append(wonderfulText);   
  tab1Element.appendChild(btn);
  console.log('this works');

    

    tab1Div.append(tab1Element);
  }
   
  
    return {
      tab1Component:tab1Component,
    };
  })();
  
  export default Tab1Module;