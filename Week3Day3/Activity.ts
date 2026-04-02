
type PaymentMethod ="UPI"|"CreditCard"|"Paypal";
function specificPayment(Method:PaymentMethod)
{
    console.log(Method);
}
specificPayment("UPI"); // Output: UPI
specificPayment("CreditCard"); // Output: CreditCard
specificPayment("Paypal"); // Output: Paypal
//specificPayment("NetBanking"); // Error: Argument of type '"NetBanking"' is not assignable to 
// parameter of type 'PaymentMethod'.    