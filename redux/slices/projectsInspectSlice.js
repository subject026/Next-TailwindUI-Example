import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../pages/api/axios";

const initialState = {
  isDataAvailable: false,
  numberOfProjects: -1,
  projects: [],
};

export const findProjects = createAsyncThunk("find all projects ", async () => {
  const response = await apiClient({
    data: {
      query: `query{
          findMember(fields:{
            _id: "995604464469803048"
          }){
            _id
            discordName
            projects {
              champion
              info {
                _id
                title
                team {
                  memberInfo{
                    discordName
                  }
                  phase
                }
              }
              
            }
              
          }
        }`,
    },
  });
  return response.data.data.findProjects;
});

export const projectsInspectSlice = createSlice({
  name: "projectsInspect",
  initialState,
  reducers: {},
  extraReducers: {
    [findProjects.fulfilled]: (state, { payload }) => {
      state.isDataAvailable = true;
      state.numberOfProjects = payload.length;
      state.projects = payload;
    },
  },
});

export default projectsInspectSlice.reducer;
