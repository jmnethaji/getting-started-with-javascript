/*
The drawPattern() function should accept number of rows as input.
The function should return string that contains the pyramid structure for the number of rows inputted.
The pyramid structure should have the following pattern:
        *
       * *
      * * *
     * * * *
    * * * * *
The function should return error message "Invalid Input Type, Row Input Should Be of Type Number !!", 
if non-numeric value is passed to the function.
*/
module.exports = function drawPattern(rows) {
  // Check if the input is a number
  if (typeof rows !== "number") {
    return "Invalid Input Type, Row Input Should Be of Type Number !!";
  }

  let pattern = "";

  for (let i = 1; i <= rows; i++) {
    // Add spaces to center the pyramid
    pattern += " ".repeat(rows - i);

    // Add the asterisks with spaces between them
    pattern += "* ".repeat(i).trimEnd() + " ";

    // Add a newline after each row, except the last one
    pattern += "\n";
  }

  return pattern;
};
