
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
// Add the public key generated from the console here
messaging.usePublicVapidKey("BPt9Pyr4t7xXnjMVnyn2zKV65i2yE4NgGQqmEz5aSSwhqtsO9efzDH1CRfcZhxMhdMkIIcenjDh8Rbo9lkK_NpI");
messaging.requestPermission()
.then(function() {
    console.log('Notification permission granted.');
    console.log(`${messaging.messagingSenderId} is sender id`);
    return messaging.getToken();
  })
  .then((tokken)=>{
      console.log(tokken);
  })
  .catch(function(err) {
    console.log('Unable to get permission to notify.', err);
  });
  // Get Instance ID token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
messaging.onMessage((payload)=>{
    console.log('onMessage ' , payload);
})
