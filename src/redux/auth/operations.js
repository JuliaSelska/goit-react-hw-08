import { createAsyncThunk } from '@reduxjs/toolkit'


export const register = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {
        try {
            const responce = await axios.post('/users/signup')
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    });
// POST USER LOGIN

export const logIn = createAsyncThunk('auth/logIn', async () => { });
//Post logIn

export const logOut = createAsyncThunk('auth/logOut', async () => { });
//Post logOut
