
let data = JSON.stringify({
  "login_id": "test@sunbasedata.com",
  "password": "Test@123"
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://qa2.sunbasedata.com/sunbase/portal/api/assignment_auth.jsp',
  headers: { 
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



