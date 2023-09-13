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
  document.querySelector('.profile-btn').addEventListener('click', profileDirect);
  document.querySelector('.about-btn').addEventListener('click', aboutDirect);
  document.querySelector('.nintendo-btn').addEventListener('click', nintendoDirect);
  document.querySelector('.pcgaming-btn').addEventListener('click', pcDirect);
  document.querySelector('.playstat-btn').addEventListener('click', playDirect);
  document.querySelector('.xbox-btn').addEventListener('click', xboxDirect);