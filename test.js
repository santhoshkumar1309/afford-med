const axios = require('axios');

async function testGet() {
  try {
    const response = await axios.get('http://localhost:3000/api/hello');
    console.log('GET /api/hello response:', response.data);
  } catch (error) {
    console.error('Error in GET request:', error);
  }
}

async function testPost() {
  try {
    const payload = { name: 'Alice' };
    const response = await axios.post('http://localhost:3000/api/echo', payload);
    console.log('POST /api/echo response:', response.data);
  } catch (error) {
    console.error('Error in POST request:', error);
  }
}

testGet();
testPost();
