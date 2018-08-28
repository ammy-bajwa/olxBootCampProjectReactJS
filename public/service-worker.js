
const PRECACHE = 'precache-v2';
const RUNTIME = 'runtime';

// A list of local resources we always want to be cached.
const PRECACHE_URLS = [
  './index.html',
  './app.js', 'olx.png',
  './images/accounting.svg',
  './images/animal.svg',
  './images/apartment.svg',
  './images/aquarium.svg',
  './images/backpack.svg',
  './images/bed.svg',
  './images/bicycle.svg',
  './images/bike.svg',
  './images/bird.svg',
  './images/bluetooth.svg',
  './images/boat.svg',
  './images/books.svg',
  './images/booksShelve.svg',
  './images/business.svg',
  './images/businessman.svg',
  './images/camera.svg',
  './images/car.svg',
  './images/caracessory.svg',
  './images/carKey.svg',
  './images/casualShirt.svg',
  './images/cat.svg',
  './images/catering.svg',
  './images/class.svg',
  './images/cooker.svg',
  './images/cooler.svg',
  './images/cow.svg',
  './images/crane.svg',
  './images/crib.svg',
  './images/customer-service.svg',
  './images/customer.svg',
  './images/deliveryTruck.svg',
  './images/desk.svg',
  './images/desktop.svg',
  './images/diet.svg',
  './images/dinnerTable.svg',
  './images/dog.svg',
  './images/dogFood.svg',
  './images/drawing.svg',
  './images/dress.svg',
  './images/dumbbell.svg',
  './images/dummy.svg',
  './images/electronic.svg',
  './images/factory.svg',
  './images/farmer.svg',
  './images/fashion.svg',
  './images/fish.svg',
  './images/forSale.svg',
  './images/fridge.svg',
  './images/fruits.svg',
  './images/furniture.svg',
  './images/game-controller.svg',
  './images/generator.svg',
  './images/guest.svg',
  './images/guestStar.svg',
  './images/guitar.svg',
  './images/hairdresser.svg',
  './images/heels.svg',
  './images/helmet.svg',
  './images/hen.svg',
  './images/home.svg',
  './images/horse.svg',
  './images/hospital.svg',
  './images/hourglass.svg',
  './images/icon.png',
  './images/if_Tyres_2_753921.svg',
  './images/industry.svg',
  './images/iron.svg',
  './images/jobs.svg',
  './images/jobSearch.svg',
  './images/Kidbicycle.svg',
  './images/kids.svg',
  './images/kite.svg',
  './images/land.svg',
  './images/laundry.svg',
  './images/lecture.svg',
  './images/livingroom.svg',
  './images/maid.svg',
  './images/makeUp.svg',
  './images/manager.svg',
  './images/manufacturing.svg',
  './images/marketing.svg',
  './images/meeting.svg',
  './images/microwave.svg',
  './images/mobile.svg',
  './images/nailPolish.svg',
  './images/necklace.svg',
  './images/newlyweds.svg',
  './images/onlineJob.svg',
  './images/otherVehicle.svg',
  './images/outdoorFence.svg',
  './images/passport.svg',
  './images/pcRepair.svg',
  './images/pills.svg',
  './images/portion.svg',
  './images/programmer.svg',
  './images/promotion.svg',
  './images/property.svg',
  './images/quad.svg',
  './images/rabbit.svg',
  './images/rent.svg',
  './images/rickshaw.svg',
  './images/rug.svg',
  './images/salesman.svg',
  './images/scoter.svg',
  './images/shelves.svg',
  './images/shop.svg',
  './images/smartphone.svg',
  './images/sofa.svg',
  './images/sparepart.svg',
  './images/sunGlasses.svg',
  './images/support.svg',
  './images/swing.svg',
  './images/tablet.svg',
  './images/taxi.svg',
  './images/television.svg',
  './images/tools.svg',
  './images/toothbrush.svg',
  './images/tourism.svg',
  './images/toy.svg',
  './images/tractor.svg',
  './images/vacation.svg',
  './images/van.svg',
  './images/walker.svg',
  './images/window.svg',
  './images/world-wide-web.svg',
  './images/wristwatch.svg',

];

// The install handler takes care of precaching the resources we always need.
self.addEventListener('install', event => {
  console.log('installing service worker')
  event.waitUntil(
    caches.open(PRECACHE)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .catch(err => console.log(err))
      .then(self.skipWaiting())
  );
});

// The activate handler takes care of cleaning up old caches.
self.addEventListener('activate', event => {
  console.log('active service worker')

  const currentCaches = [PRECACHE, RUNTIME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
    }).then(cachesToDelete => {
      return Promise.all(cachesToDelete.map(cacheToDelete => {
        return caches.delete(cacheToDelete);
      }));
    }).then(() => self.clients.claim())
  );
});

// The fetch handler serves responses for same-origin resources from a cache.
// If no response is found, it populates the runtime cache with the response
// from the network before returning it to the page.
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;     // if valid response is found in cache return it
        } else {
          return fetch(event.request)     //fetch from internet
            .then(function(res) {
              return caches.open(PRECACHE)
                .then(function(cache) {
                  cache.put(event.request.url, res.clone());    //save the response for future
                  return res;   // return the fetched data
                })
            })
            .catch(function(err) {       // fallback mechanism
              return caches.open(CACHE_CONTAINING_ERROR_MESSAGES)
                .then(function(cache) {
                  return cache.match('/index.html');
                });
            });
        }
      })
  );
}); 