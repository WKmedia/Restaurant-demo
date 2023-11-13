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
  element.style.display = 'none';
  const pstyle1 = document.getElementById('pstyle1');
  pstyle1.style.display = 'none';
  const pstyle2 = document.getElementById('pstyle2');
  pstyle2.style.display = 'none';
  const joinBtn = document.getElementById('joinBtn');
  joinBtn.style.display = 'none';
  
  document.addEventListener('DOMContentLoaded', function () {
    const bookForm = document.createElement('div');
    bookForm.setAttribute('id', 'bookingForm');
    const bookingForm = document.getElementById('bookingForm');

    bookingForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // You can add form validation and submission logic here
        // For simplicity, let's just log the form data for now
        const formData = new FormData(bookingForm);
        for (const [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }
        return formData;
    });
    bookForm.append(bookingForm);
    tab4Element.append(bookForm);
    return {
    bookForm,
    
   }
   
});

  
  tab4Heading.textContent = 'Contact Us';    
  subHeading.textContent = 'Join us for an extraordinary culinary journey. Book your table today and savor the magic of Our Wonderful Restaurant.  Immerse yourself in a cozy ambiance and enjoy the warm hospitality of our staff. Whether you\'re here for a casual meal with friends or a special celebration, Our Wonderful Restaurant promises an unforgettable dining experience.';    
  wonderfulText.textContent = ['item1', 'item2', 'item3'];


  tab4Element.append(tab4Heading);
  tab4Element.append(subHeading);
  tab4Element.append(wonderfulText);   
  tab4Element.appendChild(btn);
  
  
  tab4Div.append(tab4Element);
  }
   
  
    return {
      tab4Component:tab4Component,
    };
  })();
  
  export default Tab4Module;