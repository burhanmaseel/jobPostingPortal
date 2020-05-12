export default createError = errorCode => {
  switch (errorCode) {
    case 200:
      return {
        success: true,
        message: "Success"
      };
      break;
    case 400:
      return {
        success: false,
        message: "Bad Request"
      };
      break;
    case 500:
      return {
        success: false,
        message: "Internal Server Error"
      };
      break;
    default:
      return {
        success: false,
        message: "Failed"
      };
  }
};