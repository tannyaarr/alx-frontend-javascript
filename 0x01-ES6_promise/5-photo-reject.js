function uploadPhoto(fileName) {
    return new Promise((resolve, reject) => {
        // Check if fileName is provided
        if (!fileName) {
            // If not, reject the promise with an error message
            reject(new Error("No filename provided"));
        } else {
            // If provided, reject the promise with an error message including the filename
            reject(new Error(`"${fileName}" cannot be processed`));
        }
    });
}

export default uploadPhoto;
