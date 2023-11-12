import './style.css';
import backImage from './backImageSm.jpg';
import Logo from './logo.jpg';
import StartModule from './startModule';


const Tab2Module = (function() {

 
function tab2Component() {
  const tab2Div = document.getElementById('tab2');
    const tab2Element = document.createElement('div');
    const tab2Heading = document.createElement('h1');
    const subHeading = document.createElement('p');
    const wonderfulText = document.createElement('p');
    const btn = document.createElement('button');

    tab2Heading.setAttribute('class', 'h1Tab2'); 
    subHeading.setAttribute('class', 'style1Tab2'); 
    wonderfulText.setAttribute('class', 'style2Tab2' );
    btn.setAttribute('class', 'tab2-joinBtn');

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
  
  
  tab2Heading.textContent = 'Menu';    
  subHeading.textContent = 'Prices';    
  wonderfulText.textContent = ['item1', 'item2', 'item3'];


  tab2Element.append(tab2Heading);
  tab2Element.append(subHeading);
  tab2Element.append(wonderfulText);   
  tab2Element.appendChild(btn);
  console.log('this works');

    

    tab2Div.append(tab2Element);
  }
   
  
    return {
      tab2Component:tab2Component,
    };
  })();
  
  export default Tab2Module;