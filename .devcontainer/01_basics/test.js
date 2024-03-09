const accountId = 144553
let accountEmail ="luckey@google.com"
var accountPassword = "12345"
accountCity = "jaipur"
letaccountState;

//accountId = 2//not allowed

accountEmail = "lu@lu.com"
accountPassword = "12121212"
accountCity = "bengaluru"

console.log (accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity])