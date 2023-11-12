import './style.css';
import backImage from './backImageSm.jpg';
import Logo from './logo.jpg';
import StartModule from './startModule';


const Tab3Module = (function() {

 
function tab3Component() {
  const tab3Div = document.getElementById('tab3');
    const tab3Element = document.createElement('div');
    const tab3Heading = document.createElement('h1');
    const subHeading = document.createElement('p');
    const wonderfulText = document.createElement('p');
    const btn = document.createElement('button');

    tab3Heading.setAttribute('class', 'h1Tab3'); 
    subHeading.setAttribute('class', 'style1Tab3'); 
    wonderfulText.setAttribute('class', 'style2Tab3' );
    btn.setAttribute('class', 'tab3-joinBtn');

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
  
  
  tab3Heading.textContent = 'Menu';    
  subHeading.textContent = 'Prices';    
  wonderfulText.textContent = ['item1', 'item2', 'item3'];


  tab3Element.append(tab3Heading);
  tab3Element.append(subHeading);
  tab3Element.append(wonderfulText);   
  tab3Element.appendChild(btn);
  console.log('this works');

    

    tab3Div.append(tab3Element);
  }
   
  
    return {
      tab3Component:tab3Component,
    };
  })();
  
  export default Tab3Module;