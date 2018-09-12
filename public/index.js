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
messaging.onMessage(function(payload) {
  console.log("Message received. ", payload);
});
if ("serviceWorker" in navigator) {
  var deferredPrompt;

  window.addEventListener("beforeinstallprompt", function(e) {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;

    showAddToHomeScreen();
  });
  function addToHomeScreen() {
    var a2hsBtn = document.querySelector(".ad2hs-prompt");

    // hide our user interface that shows our A2HS button
    a2hsBtn.style.display = "none";

    // Show the prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then(function(choiceResult) {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the A2HS prompt");
      } else {
        console.log("User dismissed the A2HS prompt");
      }

      deferredPrompt = null;
    });
  }
  window.addEventListener("load", function(event) {
    navigator.serviceWorker
      .register("service-worker.js")
      .then(function(registration) {
        // Successfully registers service worker
        console.log(
          "ServiceWorker registration successful with scope: ",
          registration.scope
        );
        messaging.useServiceWorker(registration);
      })
      .then(function() {
        // Requests user browser permission
        return messaging.requestPermission();
      })
      .then(function() {
        // Gets token
        return messaging.getToken();
      })
      .then(function(token) {
        // Simple ajax call to send user token to server for saving
        localStorage.setItem("token", token);
        console.log("index.js ", token);
      })
      .catch(function(err) {
        console.log("ServiceWorker registration failed: ", err);
      });
  });
}
