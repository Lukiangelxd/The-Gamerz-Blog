
//Get Request for Home Button.
const homeDirect = async () => {
  console.log("Home Button Clicked!");
    const response = await fetch('/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.replace('/')
      }
      else {
        alert(response.statusText);
      }
  };
  //get request for profile page
  const profileDirect = async () => {
    console.log("Profile Button Clicked!");
    const response = await fetch('/profile', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.replace('/profile')
    }
    else {
      alert(response.statusText);
    }
  };
//get request for selected user's profile page
  const userSearchDirect = async () => {
    console.log("Profile Button Clicked!");
    const params = event.target.getAttribute('data-user')
    const url ='/profile'+params
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.replace(url)
    }
    else {
      alert(response.statusText);
    }
  };
//get request for about page
  const aboutDirect = async () => {
    console.log("About Button Clicked!");
    const response = await fetch('/about', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.replace('/about')
    }
    else {
      alert(response.statusText);
    }
  };
  //get request for nintendo page
  const nintendoDirect = async () => {
    console.log("Nintendo Button Clicked!");
    const response = await fetch('/blogs/nintendo', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.replace('/blogs/nintendo')
    }
    else {
      alert(response.statusText);
    }
  };
//get request for pc page
  const pcDirect = async () => {
    console.log("PC Button Clicked!");
    const response = await fetch('/blogs/pcgaming', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.replace('/blogs/pcgaming')
    }
    else {
      alert(response.statusText);
    }
  };
//get request for playstation
  const playDirect = async () => {
    console.log("Play Button Clicked!");
    const response = await fetch('/blogs/playstation', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.replace('/blogs/playstation')
    }
    else {
      alert(response.statusText);
    }
  };
//get request for xbox
  const xboxDirect = async () => {
    console.log("Xbox Button Clicked!");
    const response = await fetch('/blogs/xbox', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.replace('/blogs/xbox')
    }
    else {
      alert(response.statusText);
    }
  };
//adds event listeners to trigger get requests
  document.querySelector('.home-btn').addEventListener('click', homeDirect);
  document.querySelector('.profile-btn').addEventListener('click', profileDirect);
  document.querySelector('.about-btn').addEventListener('click', aboutDirect);
  document.querySelector('.nintendo-btn').addEventListener('click', nintendoDirect);
  document.querySelector('.pcgaming-btn').addEventListener('click', pcDirect);
  document.querySelector('.playstation-btn').addEventListener('click', playDirect);
  document.querySelector('.xbox-btn').addEventListener('click', xboxDirect);
  if (document.querySelector('.user')) {
    const userElements = document.querySelectorAll('.user')
    userElements.forEach(function (element) {
      element.addEventListener('click', userSearchDirect)
    })
  }
