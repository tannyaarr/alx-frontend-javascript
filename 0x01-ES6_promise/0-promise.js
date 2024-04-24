function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulating an API call with a setTimeout
    setTimeout(() => {
      // Simulated successful response
      const responseData = { data: "This is the API response" };
      resolve(responseData);
      
      // Simulated error response
      // reject(new Error("Failed to fetch data from API"));
    }, 2000); // Simulating a 2-second delay
  });
}

export default getResponseFromAPI;
