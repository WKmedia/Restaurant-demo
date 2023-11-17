import './style.css';





const Tab4Module = (function() {
  const tab4Element = document.createElement('div');
  const bookingFormContainer = document.createElement('div');
  const bookingFormTitle = document.createElement('h1')
  const bookingFormSubTitle = document.createElement('p')
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
  const scriptSource = '(g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({key: "AIzaSyARhZDZRDhrvq3g83Hx9w8orQyt-q-Xnh8",v: "weekly",});';

  const mapScript = document.createElement('script');
  mapScript.async = true;  
  mapScript.append(scriptSource);

  console.log(mapScript);
  document.head.append(mapScript);
 
  const mapContainer = document.createElement('div');
  mapContainer.setAttribute('id','map');


  async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");
     mapContainer;
      const mapOptions = {
        center: { lat: 40.65407943725586, lng: -73.87084197998047 },
        zoom: 15, // Adjust the zoom level as needed
      };

   const map = new Map(mapContainer, mapOptions);

   // Optionally, you can add a marker
      const marker = await new google.maps.Marker({
        position: { lat: 40.65407943725586, lng: -73.87084197998047 },
        map: map,
        title: 'Nappy Burger\'s & Steak\'s',
      });
  }

  initMap();
  
 
function tab4Component() {
  const tab4Div = document.getElementById('tab4');

    const element = document.getElementById('h1style');
    element.style.display = 'none';
    const pstyle1 = document.getElementById('pstyle1');
    pstyle1.style.display = 'none';
    const pstyle2 = document.getElementById('pstyle2');
    pstyle2.style.display = 'none';
    const joinBtn = document.getElementById('joinBtn');
    joinBtn.style.display = 'none';
 
    const tab4Heading = document.createElement('h1');
    const subHeading = document.createElement('p');
    const wonderfulText = document.createElement('p');
    
    tab4Heading.textContent = 'Contact Us';
    tab4Heading.classList.add('h1Tab4') ;   
    subHeading.textContent = ' Hamburger' ;    
    wonderfulText.textContent = 'Join us for an extraordinary culinary journey.'
    wonderfulText.classList.add('padding-bottom-side');
  
    tab4Div.append(tab4Heading);
   
    tab4Element.append(wonderfulText);   
      
  
      tab4Div.append(tab4Element);
  const BookForm =(function () {
      
    bookingFormContainer.setAttribute('class','container');
    bookingFormTitle.setAttribute('id','h1-Booking');
    bookingFormTitle.textContent = 'Contact Us for Bookings';     
    bookingFormSubTitle.textContent = 'Book your table today and savor the magic of Our Wonderful Restaurant. Immerse yourself in a cozy ambiance and enjoy the warm hospitality of our staff.';    
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
      inputFieldMessage.setAttribute('id', 'message');
      inputFieldMessage.setAttribute('name', 'message');
      inputFieldMessage.setAttribute('rows', '4');

    submitFormBtn.setAttribute('type', 'submit');
    submitFormBtn.textContent = 'Submit';




    // bookingFormContainer.appendChild(bookingFormTitle);
    bookingFormContainer.appendChild(bookingFormSubTitle);
    bookingFormContainer.appendChild(bookForm);
    bookingFormContainer.append(mapContainer);
    bookForm.appendChild(formLabelName);
    bookForm.appendChild(inputFieldName);
    bookForm.appendChild(formLabelEmail);
    bookForm.appendChild(inputFieldEmail);
    bookForm.appendChild(formLabelPhone);
    bookForm.appendChild(inputFieldPhone);
    bookForm.appendChild(formLabelDate);
    bookForm.appendChild(inputFieldDate);
    bookForm.appendChild(formLabelMessage);
    bookForm.appendChild(inputFieldMessage);
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

    tab4Div.append(tab4Element);
    tab4Element.append(bookingFormContainer);

  }
  
    return {
      tab4Component:tab4Component,
    };
})();
  
  export default Tab4Module;