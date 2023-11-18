const axios = require('axios');
let data = '';

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=delete&uuid=test1983e04e7b824fde9095fb968609e103',
  headers: { 
    'Authorization': 'Bearer dGVzdEBzdW5iYXNlZGF0YS5jb206VGVzdEAxMjM=', 
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

//update uuid