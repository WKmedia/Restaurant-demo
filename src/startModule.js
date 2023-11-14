import './style.css';
import backImage from './backImageSm.jpg';
import Logo from './logo.jpg';
import printMe from './print.js';
import Tab1Module from './tab1Module.js';
import Tab2Module from './tab2Module.js';
import Tab3Module from './tab3Module.js';
import Tab4Module from './tab4Module.js';



if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
  }


const StartModule = (function() 
{
  
function component() {
    
    const element = document.createElement('div');
    const menuDiv = document.createElement('div');//nav container
    const menuNav = document.createElement('ul');//nav menu
    const item1 = document.createElement('li');//nav list item
    const item2 = document.createElement('li');//nav list item
    const item3 = document.createElement('li');//nav list item
    const item4 = document.createElement('li');//nav list item
    const tab1 = document.createElement('div');
    const tab2 = document.createElement('div');
    const tab3 = document.createElement('div');
    const tab4 = document.createElement('div');   
    const mainHeading = document.createElement('h1');
    const subHeading = document.createElement('p');
    const wonderfulText = document.createElement('p');
    const btn = document.createElement('button');
    const myLogo = new Image();
    const myImage = new Image();


    
    
    
    element.classList.add('hello');
    
    mainHeading.setAttribute('id', 'h1style'); 
    subHeading.setAttribute('id', 'pstyle1'); 
    wonderfulText.setAttribute('id', 'pstyle2' );
    btn.setAttribute('id', 'joinBtn');
    btn.onclick = printMe; 

    menuDiv.setAttribute('id', 'menuDiv');
    myLogo.setAttribute('id', 'my-logo');
    menuNav.setAttribute('id', 'menuNav');
    menuNav.setAttribute('class', 'tabs');
    item1.setAttribute('class', 'tab');
    item2.setAttribute('class', 'tab');
    item3.setAttribute('class', 'tab');
    item4.setAttribute('class', 'tab');
    
    tab1.setAttribute('id', 'tab1');
    tab1.setAttribute('class', 'tab-content');
    tab2.setAttribute('id', 'tab2');
    tab2.setAttribute('class', 'tab-content');
    tab3.setAttribute('id', 'tab3');
    tab3.setAttribute('class', 'tab-content');
    tab4.setAttribute('id', 'tab4');
    tab4.setAttribute('class', 'tab-content');

   
    item1.addEventListener('click', function() {
      const existingTabContent = document.getElementById('tab1');

    // Check if the tab1 content is already populated
    if (!existingTabContent.hasChildNodes()) {
        // If not, create a new tab content
        Tab1Module.tab1Component();
        
        // Show the tab
        showTab('tab1');
    } else {
        // If the tab content already exists, just show the tab
        showTab('tab1');
    }
    });
    
    item2.addEventListener('click', function() {
      const existingTabContent = document.getElementById('tab2');

      // Check if the tab2 content is already populated
      if (!existingTabContent.hasChildNodes()) {
          // If not, create a new tab content
          Tab2Module.tab2Component();
          
          // Show the tab
          showTab('tab2');
      } else {
          // If the tab content already exists, just show the tab
          showTab('tab2');
      }
    });
    item3.addEventListener('click', function() {
      const existingTabContent = document.getElementById('tab3');

      // Check if the tab3 content is already populated
      if (!existingTabContent.hasChildNodes()) {
          // If not, create a new tab content
          Tab3Module.tab3Component();
          
          // Show the tab
          showTab('tab3');
      } else {
          // If the tab content already exists, just show the tab
          showTab('tab3');
      }
    });
    item4.addEventListener('click', function() {
      const existingTabContent = document.getElementById('tab4');

    // Check if the tab4 content is already populated
    if (!existingTabContent.hasChildNodes()) {
        // If not, create a new tab content
        Tab4Module.tab4Component();
        
        // Show the tab
        showTab('tab4');
    } else {
        // If the tab content already exists, just show the tab
        showTab('tab4');
    }
    });
    

    myLogo.src = Logo;
    myLogo.addEventListener('click', function() {
      StartModule.component();
    });

    item1.textContent = 'Burger\'s';
    item2.textContent = 'Steak\'s';
    item3.textContent = 'Side\'s';
    item4.textContent = 'Contact\'s';

    

    element.innerHTML = ('Hello there!');
    btn.innerHTML = 'Find out more!';   
    myImage.src = backImage;   
    mainHeading.textContent = 'Join us for an extraordinary culinary journey.';    
    subHeading.textContent = 'Book your table today and savor the magic of Our Wonderful Restaurant.';    
    wonderfulText.textContent = 'Whether you\'re here for a casual meal with friends or a special celebration, Our Wonderful Restaurant promises an unforgettable dining experience.';
   
  
   



    element.prepend(menuDiv);
    menuDiv.prepend(myLogo);
    menuDiv.append(menuNav);
    menuNav.append(item1);
    menuNav.append(item2);
    menuNav.append(item3);
    menuNav.append(item4);
    element.append(tab1);
    element.append(tab2);
    element.append(tab3);
    element.append(tab4);
    
    element.append(mainHeading);
    element.append(subHeading);
    element.append(wonderfulText);   
    element.appendChild(btn);
    console.log('this works');


    document.body.appendChild(element);
    return{
      menuDiv,
    }
  }

  function showTab(tabId) {
    // Implement your logic for showing tabs
    const tabs = document.querySelectorAll('.tab');
            tabs.forEach(tab => tab.classList.remove('active'));

            const tabContents = document.querySelectorAll('.tab-content');
            tabContents.forEach(content => content.classList.remove('active'));

            const selectedTab = document.getElementById(tabId);
            selectedTab.classList.add('active');

            const selectedContent = document.getElementById(tabId);
            selectedContent.classList.add('active');

}
 

    return {
      component:component,
    };
})();

export default StartModule;
