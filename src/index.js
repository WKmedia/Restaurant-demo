import './style.css';
import Icon from './icon.png';
import printMe from './print.js';


if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
  }


function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
    const myIcon = new Image();
       
        
    // Lodash, now imported by this script
    element.innerHTML = ('Hello webpack');
    element.classList.add('hello');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    myIcon.src = Icon;
    
  
   
   
   
   
    element.appendChild(myIcon);  
    element.appendChild(btn);
    console.log('this works');

    return element;
  }
 
  document.body.appendChild(component());
