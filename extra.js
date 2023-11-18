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



// <% for (var i =1; i <=10; i++ ) { %>
//   <section class="product">
//     <!-- <img src="product1.jpg" alt="Gift 1" /> -->
//     <h2><%= ProductName %></h2>

//     <img src="<%= ImageUrl %>" alt="image-url" />
//     <p>₹<%= Price %></p>
//     <p>Description: <%= Description %></p>
//     <button>Add to Cart</button>
//   </section>
//   <%# will output the numbers 1-10 %> <% } %>