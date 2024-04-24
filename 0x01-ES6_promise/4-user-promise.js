function signUpUser(firstName, lastName) {
    return new Promise((resolve, reject) => {
        // Check if both firstName and lastName are provided
        if (!firstName || !lastName) {
            // If not, reject the promise with an error message
            reject(new Error("Both firstName and lastName must be provided"));
        } else {
            // If provided, resolve the promise with the object containing firstName and lastName
            resolve({ firstName, lastName });
        }
    });
}

module.exports = signUpUser;
