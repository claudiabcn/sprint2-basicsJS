console.log("Exercise 3.4");
function processString(string, callback) {
  const upperString = string.toUpperCase();
  callback(upperString);
}

processString('hello Claudia', function(result) {
  console.log(result);
});