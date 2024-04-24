function handleProfileSignup() {
    const { uploadPhoto, createUser } = require('./utils.js');

    const photoPromise = uploadPhoto();
    const userPromise = createUser();

    Promise.all([photoPromise, userPromise])
        .then(([photoResult, userResult]) => {
            const { body: photoBody } = photoResult;
            const { body: userBody } = userResult;

            console.log(`Body: ${userBody.firstName} ${userBody.lastName}`);
        })
        .catch((error) => {
            console.error('Signup system offline');
        });
}

module.exports = handleProfileSignup;
