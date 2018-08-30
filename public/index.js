
// Initialize Firebase
var config = {
    apiKey: "AIzaSyDX8myqZhSBYg-DH13Cy4moZSnSh8Hxs6k",
    authDomain: "olx-clone-app.firebaseapp.com",
    databaseURL: "https://olx-clone-app.firebaseio.com",
    projectId: "olx-clone-app",
    storageBucket: "olx-clone-app.appspot.com",
    messagingSenderId: "318699316380"
  };
  firebase.initializeApp(config);
  // Retrieve Firebase Messaging object.
var messaging = firebase.messaging();
// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('service-worker.js');
//     // window.addEventListener('load', () => {
//     // });
// }
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('service-worker.js').then((registration) => {
        // Successfully registers service worker
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
        messaging.useServiceWorker(registration);
      })
      .then(() => {
        // Requests user browser permission
        return messaging.requestPermission();
      })
      .then(() => {
        // Gets token
        return messaging.getToken();
      })
      .then((token) => {
        // Simple ajax call to send user token to server for saving
        localStorage.setItem('token',token)
        // $.ajax({
        //   type: 'POST',
        //   url: '/message/settokken',
        //   dataType: 'json',
        //   data: JSON.stringify({token: token}),
        //   contentType: 'application/json',
        //   success: (data) => {
        //     console.log('Success ', data);
        //   },
        //   error: (err) => {
        //     console.log('Error ', err);
        //   }
        // })
        console.log('index.js ',token)
      })
      .catch((err) => {
        console.log('ServiceWorker registration failed: ', err);
      });
    });
    }