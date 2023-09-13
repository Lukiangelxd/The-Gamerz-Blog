const homeDirect = async () => {
    const response = await fetch('/', {
      method: 'GET',
    });
    if (!response.ok) {
        alert(response.statusText);
      }
  };
  
  const profileDirect = async () => {
    const response = await fetch('/profile', {
      method: 'GET',
    });
    if (!response.ok) {
        alert(response.statusText);
      }
  };

  const aboutDirect = async () => {
    const response = await fetch('/about', {
      method: 'GET',
    });
    if (!response.ok) {
        alert(response.statusText);
      }
  };
  const nintendoDirect = async () => {
    const response = await fetch('/gaming/nintendo', {
      method: 'GET',
    });
    if (!response.ok) {
        alert(response.statusText);
      }
  };

  const pcDirect = async () => {
    const response = await fetch('/gaming/pcgaming', {
      method: 'GET',
    });
    if (!response.ok) {
        alert(response.statusText);
      }
  };

  const playDirect = async () => {
    const response = await fetch('/gaming/playstat', {
      method: 'GET',
    });
    if (!response.ok) {
        alert(response.statusText);
      }
  };

  const xboxDirect = async () => {
    const response = await fetch('/gaming/xbox', {
      method: 'GET',
    });
    if (!response.ok) {
        alert(response.statusText);
      }
  };

  document.querySelector('.home-btn').addEventListener('click', homeDirect);
  document.querySelector('#profile').addEventListener('click', profileDirect);
  document.querySelector('#about').addEventListener('click', aboutDirect);
  document.querySelector('#nintendo').addEventListener('click', nintendoDirect);
  document.querySelector('#pcgaming').addEventListener('click', pcDirect);
  document.querySelector('#playstat').addEventListener('click', playDirect);
  document.querySelector('#xbox').addEventListener('click', xboxDirect);