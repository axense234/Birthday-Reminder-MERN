const registerSW = async () => {
  try {
    await navigator.serviceWorker.register(`${process.env.PUBLIC_URL}/sw.js`, {
      scope: "/",
    });
  } catch (error) {
    console.log(error);
  }
};

export default registerSW;
