/*

The checkPassword() function should accept password as input and check if it is valid.

The validation criteria for password are:
- should have minimum 6 characters and maximum 20 characters
- should have at least one lower-case and one upper-case alphabet
- should have at least one digit
- should have at least one symbol

The function should return true if validation criteria is satisfied else should return false.

Use Regular Expression to perform validation check.

*/

module.exports = function checkPassword(password) {
  // Check if the password is between 6 and 20 characters
  if (password.length < 6 || password.length > 20) {
    return false;
  }

  // Regular expression for validation criteria:
  // - (?=.*[a-z]): at least one lowercase letter
  // - (?=.*[A-Z]): at least one uppercase letter
  // - (?=.*\d): at least one digit
  // - (?=.*[!@#$%^&*(),.?":{}|<>]): at least one special character
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{6,20}$/;

  // Test the password against the regex
  return regex.test(password);
};
