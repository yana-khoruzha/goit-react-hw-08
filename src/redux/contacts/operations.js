import { createAsyncThunk } from '@reduxjs/toolkit';
import { contactsAPI } from './api';

const setAuthHeader = (token) => {
  contactsAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    if (!token) return thunkAPI.rejectWithValue('No token');

    setAuthHeader(token);

    try {
      const response = await contactsAPI.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contactData, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    if (!token) return thunkAPI.rejectWithValue('No token');

    setAuthHeader(token);

    try {
      const response = await contactsAPI.post('/contacts', contactData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    if (!token) return thunkAPI.rejectWithValue('No token');

    setAuthHeader(token);

    try {
      await contactsAPI.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

