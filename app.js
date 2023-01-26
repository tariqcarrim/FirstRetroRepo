
//Retrieve From My API
//---------------------------------------------------------------------------------------------------------------------
var axios = require('axios');
axios.all([
  axios.get('http://127.0.0.1:6060/posts/1'),
  //axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2017-08-02')
]).then(axios.spread((response1, response2) => {
  
  console.log(response1.data.message.title);
  //console.log(response2.data);
})).catch(error => {
  console.log(error);
});
//------------------------------------------------------------------------------------------------------------------------