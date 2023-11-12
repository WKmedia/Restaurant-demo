import './style.css';
import backImage from './backImageSm.jpg';
import Logo from './logo.jpg';

const Tab1Module = (function() {

 
function component() {
    const tab1Div = document.getElementById('tab1');
    const element = document.createElement('div');
    const mainHeading = document.createElement('h1');
    const subHeading = document.createElement('p');
    const wonderfulText = document.createElement('p');
    const btn = document.createElement('button');
  
    mainHeading.setAttribute('class', 'h1style'); 
    subHeading.setAttribute('class', 'pstyle1'); 
    wonderfulText.setAttribute('class', 'pstyle2' );
    btn.setAttribute('class', 'joinBtn');
  
    element.innerHTML = ('Hello there!');
      btn.innerHTML = 'Click me and check the console!';   
      myImage.src = backImage;   
      mainHeading.textContent = 'Join us for an extraordinary culinary journey.';    
      subHeading.textContent = 'Book your table today and savor the magic of Our Wonderful Restaurant.';    
      wonderfulText.textContent = 'Whether you\'re here for a casual meal with friends or a special celebration, Our Wonderful Restaurant promises an unforgettable dining experience.';
  
  
      element.append(mainHeading);
      element.append(subHeading);
      element.append(wonderfulText);   
      element.appendChild(btn);
      console.log('this works');
  
      
  
      tab1Div.append(element);
    }
   
  
    return {
      component:component,
    };
  })();
  
  export default Tab1Module;