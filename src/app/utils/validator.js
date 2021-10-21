export function validator(data, config) {
  const errors = {};
  function validate(validateMethod, data, config) {
    let statusValidate;
    switch (validateMethod) {
      case "isRequired":
        statusValidate = data.trim() === "";
        break;
      case "isTooShort":
        statusValidate = data.trim().length < 3;
        break;
      case "isValidYearOfBirth": {
        const currentYear = new Date().getFullYear();
        statusValidate = data < currentYear - 110 || data > currentYear - 3;
        break;
      }
      case "isSiteAdress": {
        const siteRegExp = /^https?:\/\/\S+\.\S+$/g;
        statusValidate = !siteRegExp.test(data.trim());
        break;
      }

      default:
        break;
    }
    if (statusValidate) return config.message;
  }
  for (const fieldName in data) {
    for (const validateMethod in config[fieldName]) {
      const error = validate(
        validateMethod,
        data[fieldName],
        config[fieldName][validateMethod]
      );
      if (error) {
        errors[fieldName] = error;
      }
    }
  }
  return errors;
}
