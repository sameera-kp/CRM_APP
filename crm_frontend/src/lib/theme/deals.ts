const BASE_URL = 'http://localhost:8000/api';

const getToken = () => localStorage.getItem('token');

const headers = () => ({
  'Content-Type': 'application/json',
  Authorization: `Token ${getToken()}`,
});

export const dealsApi = {
  getAll: async () => {
    const res = await fetch(`${BASE_URL}/deals/`, { headers: headers() });
    if (!res.ok) throw new Error('Failed to fetch deals');
    return res.json();
  },

  getById: async (id: string) => {
    const res = await fetch(`${BASE_URL}/deals/${id}/`, { headers: headers() });
    if (!res.ok) throw new Error('Failed to fetch deal');
    return res.json();
  },

  create: async (data: object) => {
    const res = await fetch(`${BASE_URL}/deals/`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('Failed to create deal');
    return res.json();
  },

  update: async (id: string, data: object) => {
    const res = await fetch(`${BASE_URL}/deals/${id}/`, {
      method: 'PUT',
      headers: headers(),
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('Failed to update deal');
    return res.json();
  },

  delete: async (id: string) => {
    const res = await fetch(`${BASE_URL}/deals/${id}/`, {
      method: 'DELETE',
      headers: headers(),
    });
    if (!res.ok) throw new Error('Failed to delete deal');
  },
};

// ── Users API ─────────────────────────────────────────────────────────────────
export const usersApi = {
  getAll: async () => {
    const res = await fetch(`${BASE_URL}/auth/users/`, { headers: headers() });
    if (!res.ok) throw new Error('Failed to fetch users');
    return res.json();
  },
};