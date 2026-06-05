const NEXT_PUBLIC_BASE_URL = 'http://127.0.0.1:8000/api';

export const getToken = () => localStorage.getItem('token');

export const apiRequest = async (
  endpoint: string,
  method: string = 'GET',
  body?: any
) => {
    // --- ADD THIS LOG ---
  console.log('Full URL:', `${NEXT_PUBLIC_BASE_URL}${endpoint}`);
  console.log('Endpoint received:', endpoint);
  const res = await fetch(`${NEXT_PUBLIC_BASE_URL}${endpoint}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${getToken()}`,
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  return res;
};
