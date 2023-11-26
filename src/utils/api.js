// utils/api.js
const BASE_URL = 'https://capetownfestival.co.za'; // Replace with your API base URL

const api = {
  async get(endpoint) {
    const response = await fetch(`${BASE_URL}/${endpoint}`);
    return response.json();
  },

  async post(endpoint, data) {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  // Add more methods as needed (PUT, DELETE, etc.)
};

export default api;
