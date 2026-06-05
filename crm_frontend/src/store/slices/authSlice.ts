import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// ── Types ─────────────────────────────────────────────────────────────────────
interface AuthState {
  token:      string | null;
  email:      string | null;
  firstName:  string | null;
  lastName:   string | null;
  loading:    boolean;
  error:      string | null;
}

interface CredentialsPayload {
  token:      string;
  email:      string;
  first_name: string;
  last_name:  string;
}
export interface RegisterPayload {
  first_name:        string;
  last_name:         string;
  email:             string;
  phone_number:      string;
  company_name:      string;
  industry_type:     string;
  country_or_region: string;
  role:              string;
  password:          string;
  confirm_password:  string;
}

// ── Fix: all null initially — no localStorage on server ──────────────────────
const initialState: AuthState = {
  token:     null,
  email:     null,
  firstName: null,
  lastName:  null,
  loading:   false,
  error:     null,
};

// ── Async Thunks ──────────────────────────────────────────────────────────────
export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ email, password }: { email: string; password: string }, { rejectWithValue }) => {
    const res = await fetch(`${BASE_URL}/auth/login/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    if (!res.ok) {
      const err = await res.json();
      return rejectWithValue(err.error || 'Login failed');
    }
    return res.json();
  }
);
export const registerUser = createAsyncThunk(
  'auth/register',
  async (payload: RegisterPayload, { rejectWithValue }) => {
    try {
      const res = await fetch(`${BASE_URL}/auth/register/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        // Return structured backend validation errors or standard fallback
        return rejectWithValue(data.email?.[0] || data.error || 'Registration failed.');
      }
      return data;
    } catch (err: any) {
      return rejectWithValue(err?.response?.data?.message || 'Registration failed. Please try again.');
    }
  }
);

export const logoutUser = createAsyncThunk('auth/logout', async (_, { getState }) => {
  const state = getState() as { auth: AuthState };
  const token = state.auth.token;
  await fetch(`${BASE_URL}/auth/logout/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
  });
});

export const passwordReset = createAsyncThunk(
  'auth/passwordReset',
  async ({ email }: { email: string }, { rejectWithValue }) => {
    try {
      const res = await fetch(`${BASE_URL}/auth/password-reset/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        return rejectWithValue(data.email?.[0] || data.error || 'Something went wrong. Please try again.');
      }
      return data;
    } catch (err: any) {
      return rejectWithValue(err?.response?.data?.message || 'Something went wrong. Please try again.');
    }
  }
);
export const confirmPasswordReset = createAsyncThunk(
  'auth/confirmPasswordReset',
  async ({ token, password }: { token: string; password: string }, { rejectWithValue }) => {
    try {
      const res = await fetch(`${BASE_URL}/auth/password-reset/confirm/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        const errorMessage =
          data.password?.[0] ||
          data.token?.[0] ||
          data.detail ||
          'Reset failed.';
        return rejectWithValue(errorMessage);
      }
      return data;
    } catch (err: any) {
      return rejectWithValue('Something went wrong. Please try again.');
    }
  }
);

// ── Slice ─────────────────────────────────────────────────────────────────────
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // ── Hydrate Redux directly from already-fetched login data ────────────────
    setCredentials: (state, action: PayloadAction<CredentialsPayload>) => {
      state.token     = action.payload.token;
      state.email     = action.payload.email;
      state.firstName = action.payload.first_name;
      state.lastName  = action.payload.last_name;
    },
    clearAuth: (state) => {
      state.token     = null;
      state.email     = null;
      state.firstName = null;
      state.lastName  = null;
      localStorage.removeItem('token');
      localStorage.removeItem('email');
      localStorage.removeItem('firstName');
      localStorage.removeItem('lastName');
    },
    // ── Load persisted auth from localStorage on client mount ─────────────────
    loadAuthFromStorage: (state) => {
      state.token     = localStorage.getItem('token');
      state.email     = localStorage.getItem('email');
      state.firstName = localStorage.getItem('firstName');
      state.lastName  = localStorage.getItem('lastName');
    },
  },
  extraReducers: (builder) => {
    // ── Login ──
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.error   = null;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading   = false; 
      state.token     = action.payload.token;
      state.email     = action.payload.email;
      state.firstName = action.payload.first_name;
      state.lastName  = action.payload.last_name;
      localStorage.setItem('token',     action.payload.token);
      localStorage.setItem('email',     action.payload.email);
      localStorage.setItem('firstName', action.payload.first_name);
      localStorage.setItem('lastName',  action.payload.last_name);
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error   = action.payload as string;
    });
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
      state.error   = null;
    });
    builder.addCase(registerUser.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
      state.error   = action.payload as string;
    });

    // ── Logout ──
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.token     = null;
      state.email     = null;
      state.firstName = null;
      state.lastName  = null;
      localStorage.removeItem('token');
      localStorage.removeItem('email');
      localStorage.removeItem('firstName');
      localStorage.removeItem('lastName');
    });
    // ── Password Reset ──
    builder.addCase(passwordReset.pending, (state) => {
      state.loading = true;
      state.error   = null;
    });
    builder.addCase(passwordReset.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(passwordReset.rejected, (state, action) => {
      state.loading = false;
      state.error   = action.payload as string;
    });
    builder.addCase(confirmPasswordReset.pending, (state) => {
      state.loading = true;
      state.error   = null;
    });
    builder.addCase(confirmPasswordReset.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(confirmPasswordReset.rejected, (state, action) => {
      state.loading = false;
      state.error   = action.payload as string;
    });
  },
});

export const { clearAuth, loadAuthFromStorage, setCredentials } = authSlice.actions;
export default authSlice.reducer;