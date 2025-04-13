import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit'

const setAuthHeader = (value) => { axios.defaults.headers.common.Authorization = value };


export const register = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {
        try {
            const response = await axios.post('/users/signup', credentials);

            setAuthHeader(`Bearer ${response.data.token}`);

            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    });


export const logIn = createAsyncThunk('auth/logIn', async (credentials, thunkAPI) => {
    try {
        const response = await axios.post('/users/login', credentials);
        setAuthHeader(`Bearer ${response.data.token}`);
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});
//Post logIn

export const logOut = createAsyncThunk(
    'auth/logOut',
    async (_, thunkAPI) => {
        try {
            const state = thunkAPI.getState();
            const token = state.auth.token;
            if (!token) {
                return thunkAPI.rejectWithValue('No token provided');
            }
            setAuthHeader(`Bearer ${token}`);
            await axios.post('/users/logout');
            setAuthHeader("");
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    });
//Post logOut

export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (__, thunkAPI) => {
        try {
            const reduxState = thunkAPI.getState();
            setAuthHeader(`Bearer ${reduxState.auth.token}`);
            const response = await axios.get("/users/current")
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }

    },
    {
        condition: (_, thunkAPI) => {
            const reduxState = thunkAPI.getState();
            return reduxState.auth.token !== null;
        },
    }
)