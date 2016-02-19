module.exports.capitalizeFirstLetter = function(string){
  return string.trim().charAt(0).toUpperCase() + string.trim().slice(1);
}