import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"

export const getusers=createAsyncThunk("user/get", async()=>{
    try {
        let result= await axios.get("https://newcontact-list.vercel.app/user/");
        return result
    } catch (error) {
        console.log(error)
    }
})
export const adduser=createAsyncThunk("user/add", async(newuser)=>{
    try {
        let result= await axios.post("https://newcontact-list.vercel.app/user/add", newuser);
        return result
    } catch (error) {
        console.log(error)
    }
})
export const deleteuser=createAsyncThunk("user/delete", async(id)=>{
    try {
        let result= await axios.delete(`https://newcontact-list.vercel.app/user/${id}`);
        return result
    } catch (error) {
        console.log(error)
    }
})
export const edituser=createAsyncThunk("user/delete", async({id, edited})=>{
    try {
        let result= await axios.put(`https://newcontact-list.vercel.app/user/${id}`, edited);
        return result
    } catch (error) {
        console.log(error)
    }
})


const initialState = {
  userlist: [],
  status:""
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getusers.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getusers.fulfilled, (state, action) => {
        state.status = "success";
        state.userlist = action.payload.data.users;
      })
      .addCase(getusers.rejected, (state) => {
        state.status = "fail";
      })
         .addCase(adduser.pending, (state) => {
        state.status = "pending";
      })
      .addCase(adduser.fulfilled, (state, action) => {
        state.status = "success";

      })
      .addCase(adduser.rejected, (state) => {
        state.status = "fail";
      })

     
        .addCase(edituser.pending, (state) => {
        state.status = "pending";
      })
      .addCase(edituser.fulfilled, (state, action) => {
        state.status = "success";

      })
      .addCase(edituser.rejected, (state) => {
        state.status = "fail";
      })
  }


})

// Action creators are generated for each case reducer function
// export const { } = userSlice.actions

export default userSlice.reducer