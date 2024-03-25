import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const URL = "https://65ae4d981dfbae409a747fd6.mockapi.io/users"
const course = "https://65f80f3db4f842e80886c92e.mockapi.io/course/courses"

export const showUser = createAsyncThunk("showUser", async(arg,{rejectWithValue}) => {
    const response = await fetch(URL)
    const result = await response.json()

    try {
        return result
    } catch(err) {
         rejectWithValue(err)
    }
})

export const createUser = createAsyncThunk('createUsesr', async(value,{rejectWithValue}) => {
  const response = await fetch(URL,{
    method:"POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(value)
  })
  const result = await response.json()
  try {
    return result
  }
  catch(err) {
    return rejectWithValue(err)
  }
})

export const deleteJob = createAsyncThunk("deleteJob", async(id,{rejectWithValue}) => {
  const response = await fetch(`https://65ae4d981dfbae409a747fd6.mockapi.io/users/${id}`, {
    method:"DELETE"
  })
  try {
    const result = response.json()
    return result
  } catch(err) {
     rejectWithValue(err)
  }
})

export const updateJob = createAsyncThunk("updateJob", async(data, {rejectWithValue}) => {
  const response = await fetch(`https://65ae4d981dfbae409a747fd6.mockapi.io/users/${data.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  const result = await response.json()
  try {
    return result
  } catch (err) {
    rejectWithValue(err)
  }
})


// COURSES
export const showCourse = createAsyncThunk("showCourse", async (arg,{rejectWithValue}) => {
  const response = await fetch(course)
  const result = await response.json()
  try {
    return result
  } catch (err) {
    rejectWithValue(err)
  }
})

export const addCourse = createAsyncThunk("addCourse", async(data,{rejectWithValue}) => {
  const response = await fetch(course, {
    method: "POST",
    headers : {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(data)
  })
  const result = await response.json()
  try {
    return result
  } catch(err) {
    rejectWithValue(err)
  }
})


export const deleteCourse = createAsyncThunk("deleteCourse", async(id, {rejectWithValue}) => {
  const response = await fetch(`https://65f80f3db4f842e80886c92e.mockapi.io/course/courses/${id}`, {
    method: "DELETE",
  })
  const result = await response.json()
  try {
    return result
  } catch (err) {
    rejectWithValue(err)
  }
})

export const updateCourse = createAsyncThunk("updateCourse", async(data,{rejectWithValue}) => {
  const response = await fetch(`https://65f80f3db4f842e80886c92e.mockapi.io/course/courses/${data.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  const result = await response.json()
  try {
    return result
  } catch (err) {
    rejectWithValue(err)
  }
})



const showLoad = createAction(showUser.pending)
const showFullfill = createAction(showUser.fulfilled)
const showError = createAction(showUser.rejected)

const createFullfill = createAction(createUser.fulfilled)
const createError = createAction(createUser.rejected)

const deleteFullfill = createAction(deleteJob.fulfilled);
const deleteError = createAction(deleteJob.rejected)

const jobUpdate = createAction(updateJob.fulfilled)
const updateLoading = createAction(updateJob.pending)
const jobError = createAction(updateJob.rejected)

//Courses
const courseload = createAction(showCourse.pending)
const coursefullfilled = createAction(showCourse.fulfilled)
const courseError = createAction(showCourse.rejected) 

const createCourse = createAction(addCourse.fulfilled)
const addError = createAction(addCourse.rejected)

const removeCourse = createAction(deleteCourse.fulfilled)
const removeCoursepending = createAction(deleteCourse.pending)
const removeError = createAction(deleteCourse.rejected)

const courseUpdate = createAction(updateCourse.fulfilled)
const updateCoursepending = createAction(updateCourse.pending)
const updateCourseerror = createAction(updateCourse.rejected)


const initialState = {
    value:0,
    jobs:[],
    loading: false,
    error:null,
    courses:[]
}

export const slice = createSlice({
    name: 'counter',
    initialState,
    extraReducers: (builder) => {
      builder.addCase(showLoad, (state,action) => {
        state.loading = true
      })
      .addCase(showFullfill, (state, action ) => {
        state.loading = false
        state.jobs = action.payload
      })
      .addCase(showError, (state, action) => {
        state.loading = false,
        state.error = action.payload
      })

      // Create User
      .addCase(createFullfill, (state, action) => {
         state.jobs.push(action.payload)
      })
      .addCase(createError, (state,action) => {
        state.error = action.payload
      })

      // Delete Job
      .addCase(deleteFullfill, (state, action) => {
        const {id} = action.payload
        if(id) {
          state.jobs = state.jobs.filter(ele => ele.id !== id)
        }
      })
      .addCase(deleteError, (state,action) => {
        state.loading = false
        state.error = action.payload
    })
    .addCase(updateLoading, (state,action) => {
      state.loading = true
    })
    .addCase(jobUpdate, (state,action) => {
      const update = action.payload
      const index = state.jobs.find(ele => ele.id === update.id)
      if(index) {
        state.jobs[index] = update
      }
    })
    .addCase(jobError, (state, action) => {
      state.error = action.payload
    })


    //Courses
    .addCase(courseload, (state, action) => {
      state.loading = true
    })
    .addCase(coursefullfilled, (state,action) => {
      state.loading = false
      state.courses = action.payload
    })
    .addCase(courseError, (state,action) => {
      state.loading = false
      state.error = action.payload
    })

    .addCase(createCourse,(state,action) => {
      state.courses.push(action.payload)
    })
    .addCase(addError,(state,action) => {
      state.error = action.payload
    })
    
    .addCase(removeCoursepending, (state,action) => {
      state.loading = true
    })
    .addCase(removeCourse,(state,action) => {
      const {id} = action.payload
      if(id) {
        state.courses = state.courses.filter(ele => ele.id !== id)
      }
    })
    .addCase(removeError, (state,action) => {
      state.error = action.payload
    })

    .addCase(updateCoursepending, (state,action) => {
      state.loading = true
    })
    .addCase(courseUpdate, (state,action) => {
       const update = action.payload
       const index = state.courses.find(ele => ele.id === update.id)
       if(index) {
         state.courses[index] = update
       }  
    })
    .addCase(updateCourseerror, (state,action) => {
      state.error = action.payload
    })
    }
})

export default slice.reducer