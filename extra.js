const axios = require('axios');
let data = JSON.stringify({
  "first_name": "Satyam",
  "last_name": "Jain",
  "street": "Elvnu Street",
  "address": "H no 2 ",
  "city": "Delhi",
  "state": "Delhi",
  "email": "sam@gmail.com",
  "phone": "12345678"
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=create',
  headers: { 
    'Authorization': 'Bearer dGVzdEBzdW5iYXNlZGF0YS5jb206VGVzdEAxMjM=', 
    'Content-Type': 'application/json', 
    'Cookie': 'JSESSIONID=A701E15FA0F79A04AA58119B7B74FDC4'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
