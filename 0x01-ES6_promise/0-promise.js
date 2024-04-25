function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const responseData = { data: 'This is the API response' };
      resolve(responseData);
    }, 2000);
  });
}

export default getResponseFromAPI;
