 module.exports = {
   find: ()=>{
     return fetch('notes',{method:'GET'})
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log("fetch_"+myJson);
  }).catch(err=>{console.log("--error")});
   }
 }
