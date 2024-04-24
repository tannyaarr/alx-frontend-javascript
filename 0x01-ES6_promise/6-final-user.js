import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
    // Create promises for signUpUser and uploadPhoto
    const signUpPromise = signUpUser(firstName, lastName);
    const uploadPromise = uploadPhoto(fileName);

    // Execute promises and handle their results
    return Promise.allSettled([signUpPromise, uploadPromise])
        .then(results => {
            // Map the results to the required structure
            return results.map(result => {
                return {
                    status: result.status,
                    value: result.status === 'fulfilled' ? result.value : result.reason
                };
            });
        });
}
