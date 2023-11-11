import './style.css';
import Icon from './icon.png';


function component() {
    const element = document.createElement('div');
 
    // Lodash, now imported by this script
    element.innerHTML = ('Hello webpack');
    element.classList.add('hello');
 
    const myIcon = new Image();
    myIcon.src = Icon;
  
    element.appendChild(myIcon);



    console.log('this works');
    return element;
  }
 
  document.body.appendChild(component());
