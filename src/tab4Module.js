import './style.css';
import backImage from './backImageSm.jpg';
import Logo from './logo.jpg';
import StartModule from './startModule';


const Tab4Module = (function() {

 
function tab4Component() {
  const tab4Div = document.getElementById('tab4');
    const tab4Element = document.createElement('div');
    const tab4Heading = document.createElement('h1');
    const subHeading = document.createElement('p');
    const wonderfulText = document.createElement('p');
    const btn = document.createElement('button');

    tab4Heading.setAttribute('class', 'h1Tab4'); 
    subHeading.setAttribute('class', 'style1Tab4'); 
    wonderfulText.setAttribute('class', 'style2Tab4' );
    btn.setAttribute('class', 'tab4-joinBtn');

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
  
  
  tab4Heading.textContent = 'Menu';    
  subHeading.textContent = 'Prices';    
  wonderfulText.textContent = ['item1', 'item2', 'item3'];


  tab4Element.append(tab4Heading);
  tab4Element.append(subHeading);
  tab4Element.append(wonderfulText);   
  tab4Element.appendChild(btn);
  console.log('this works');

    

    tab4Div.append(tab4Element);
  }
   
  
    return {
      tab4Component:tab4Component,
    };
  })();
  
  export default Tab4Module;