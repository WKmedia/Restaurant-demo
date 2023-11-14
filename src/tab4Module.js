import './style.css';



const Tab4Module = (function() {
  const bookingFormContainer = document.createElement('div');
  const bookingFormTitle = document.createElement('h1')
  const bookForm = document.createElement('form');
  const formLabelName = document.createElement('label');
  const inputFieldName = document.createElement('input');

  const formLabelEmail = document.createElement('label');
  const inputFieldEmail = document.createElement('input');

  const formLabelPhone = document.createElement('label');
  const inputFieldPhone = document.createElement('input');

  const formLabelDate = document.createElement('label');
  const inputFieldDate = document.createElement('input');

  const formLabelMessage = document.createElement('label');
  const inputFieldMessage = document.createElement('textarea');

  const submitFormBtn = document.createElement('button');

 
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
  

    tab4Heading.textContent = 'Contact Us';    
    subHeading.textContent = 'Join us for an extraordinary culinary journey. Book your table today and savor the magic of Our Wonderful Restaurant.  Immerse yourself in a cozy ambiance and enjoy the warm hospitality of our staff. Whether you\'re here for a casual meal with friends or a special celebration, Our Wonderful Restaurant promises an unforgettable dining experience.';    
    wonderfulText.textContent = ['item1', 'item2', 'item3'];
  
  
    tab4Element.append(tab4Heading);    
    tab4Div.prepend(tab4Element);

   
    
  const BookForm =(function () {
  
    
    bookingFormContainer.setAttribute('class','container');
    bookingFormTitle.setAttribute('id','h1-Booking');
    bookingFormTitle.textContent = 'Contact Us for Bookings';
    bookForm.setAttribute('id', 'bookingForm');

    formLabelName.setAttribute('for', 'name');
    formLabelName.textContent = 'Name:';
      inputFieldName.setAttribute('type', 'text');
      inputFieldName.setAttribute('id', 'name');
      inputFieldName.setAttribute('name', 'name');
      inputFieldName.setAttribute('required', '');
    
    formLabelEmail.setAttribute('for', 'email');
    formLabelEmail.textContent = 'Email:';
      inputFieldEmail.setAttribute('type', 'email');
      inputFieldEmail.setAttribute('id', 'email');
      inputFieldEmail.setAttribute('name', 'email');
      inputFieldEmail.setAttribute('required', '');
    
    formLabelPhone.setAttribute('for', 'phone');
    formLabelPhone.textContent = 'Phone:';
      inputFieldPhone.setAttribute('type', 'tel');
      inputFieldPhone.setAttribute('id', 'phone');
      inputFieldPhone.setAttribute('name', 'phone');
      inputFieldPhone.setAttribute('required', '');
    
    formLabelDate.setAttribute('for', 'date');
    formLabelDate.textContent = 'Booking Date:';
      inputFieldDate.setAttribute('type', 'date');
      inputFieldDate.setAttribute('id', 'date');
      inputFieldDate.setAttribute('name', 'date');
      inputFieldDate.setAttribute('required', '');
    
    formLabelMessage.setAttribute('for', 'message');
    formLabelMessage.textContent = 'Additional Information:';
      // inputFieldMessage.setAttribute('type', 'message');
      inputFieldMessage.setAttribute('id', 'message');
      inputFieldMessage.setAttribute('name', 'message');
      inputFieldMessage.setAttribute('rows', '4');

    submitFormBtn.setAttribute('type', 'submit');
    submitFormBtn.textContent = 'Submit';




    bookingFormContainer.appendChild(bookingFormTitle)
    bookingFormContainer.appendChild(bookForm)
    bookingFormContainer.append(subHeading)
    bookForm.appendChild(formLabelName);
    bookForm.appendChild(inputFieldName);
    bookForm.appendChild(formLabelEmail);
    bookForm.appendChild(inputFieldEmail);
    bookForm.appendChild(formLabelPhone);
    bookForm.appendChild(inputFieldPhone);
    bookForm.appendChild(formLabelDate);
    bookForm.appendChild(inputFieldDate);
    bookForm.appendChild(formLabelMessage)
    bookForm.appendChild(inputFieldMessage)
    bookForm.appendChild(submitFormBtn);


  bookForm.addEventListener('submit', function (event) {
      event.preventDefault();

      // You can add form validation and submission logic here
      // For simplicity, let's just log the form data for now
      const formData = new FormData(bookingForm);
      for (const [key, value] of formData.entries()) {
          console.log(`${key}: ${value}`);
      }
    const inName = document.getElementById('name');
    inName.value = '';
    const inEmail = document.getElementById('email');   
    inEmail.value = '';
    const inPhone = document.getElementById('phone'); 
    inPhone.value = '';  
    const inDate = document.getElementById('date');  
    inDate.value = '';
    const inMessage = document.getElementById('message');
    inMessage.value = '';
      
      return formData;
  });
  
   
  })();
  
tab4Element.append(bookingFormContainer);
  }
   
  
    return {
      tab4Component:tab4Component,
    };
})();
  
  export default Tab4Module;