// Constant variables
const CACHE_STORAGE = "v1Cache";

// Handle push event
this.addEventListener("push", async (e) => {
  let payload = e.data.json();
  payload.icon = "https://i.ibb.co/g9qXcYc/Calendar-Flatline.png";
  await e.waitUntil(
    self.registration.showNotification("Birthday Time", payload)
  );
});

// Handle Adding Cache upon Installation
this.addEventListener("install", async (e) => {
  try {
    const cache = await caches.open(CACHE_STORAGE);
    await cache.addAll([
      "/",
      "/index.html",
      "/login",
      "/signup",
      "/profile",
      "/user/reminders",
      "/create-reminder",
      "/edit-reminder",
      "/subscribe",
      "/notify",
      "/reminders",
      "/favicon.ico",
      "/manifest.json",
      "/logo192.png",
      "/res.cloudinary.com/birthdayreminder",
    ]);
  } catch (error) {
    console.log(error);
  }
});

// Fetching from cache
this.addEventListener("fetch", async (e) => {
  try {
    if (!navigator.onLine) {
      const res = await e.waitUntil(caches.match(e.request.url));
      if (res) {
        console.log(res);
        return res;
      }
    }
  } catch (error) {
    console.log(error);
  }
});
