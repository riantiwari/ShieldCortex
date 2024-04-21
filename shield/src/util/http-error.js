class HttpError extends Error {
    constructor(message, errorCode) {
      super(message); // Call the parent constructor (Error class)
      this.code = errorCode; // Set the error code
    }
}
  
module.exports = HttpError;