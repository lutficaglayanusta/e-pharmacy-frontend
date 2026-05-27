import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = "https://e-pharmacy-cjka.onrender.com/api";
axios.defaults.withCredentials = true

export const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => { 
    try {
        const res = await axios.post('/auth/register', credentials)
        return res.data
    }catch(error) {
        return thunkAPI.rejectWithValue(error.message)
    }

})
export const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
    try {
        const res = await axios.post('/auth/login', credentials)
        return res.data
    }catch(error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        await axios.get('/auth/logout')
    }catch(error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})