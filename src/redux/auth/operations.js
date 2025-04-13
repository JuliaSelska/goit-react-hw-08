import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit'

const setAuthHeader = (value) => { axios.defaults.headers.common.Authorization = value };


export const register = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {
        try {
            const responce = await axios.post('/users/signup', credentials);

            setAuthHeader(`Bearer ${response.data.token}`);

            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    });
// POST USER LOGIN

export const logIn = createAsyncThunk('auth/logIn', async (credentials, thunkAPI) => {
    try {
        const responce = await axios.post('/users/login', credentials);
        setAuthHeader(`Bearer ${response.data.token}`);
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});
//Post logIn

export const logOut = createAsyncThunk('auth/logOut', async () => {
    await axios.post('/users/logout');
    setAuthHeader("");
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