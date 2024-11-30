/*

The calculateNetPayable() function should accept 3 inputs:
pricePerKilo, quantityInKilo and discountPercentage.

Calculate the net amount post discount that would be payable.

The function should return the computed value.

The function should return error message "Invalid Input Types, All Inputs Should Be of Type Number !!", 
for any non-numeric value passed to the function.

*/

module.exports = function calculateNetPayable(pricePerKilo, quantityInKilo, discountPercentage) {
  // Check if all inputs are of type number
  if (typeof pricePerKilo !== 'number' || typeof quantityInKilo !== 'number' || typeof discountPercentage !== 'number') {
      return "Invalid Input Types, All Inputs Should Be of Type Number !!";
  }

  // Calculate total price
  const totalAmount = pricePerKilo * quantityInKilo;

  // Calculate discount amount
  const discountAmount = (discountPercentage / 100) * totalAmount;

  // Calculate net payable amount
  const netPayable = totalAmount - discountAmount;

  return netPayable.toString();
}
