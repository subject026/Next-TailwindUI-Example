import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../pages/api/axios";

const initialState = {
  isDataAvailable: false,
  numberOfProjects: -1,
  projects: [],
};

export const findProjects = createAsyncThunk("find projects", async () => {
  const response = await apiClient({
    data: {
      query: `query{
        findMember(fields:{
          _id: "995604464469803048"
        }){
          projects {
            champion
            info {
              title
              description
              team {
                memberInfo {
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
  return response.data.data.findMember;
});

export const projectsInspectSlice = createSlice({
  name: "projectsInspect",
  initialState,
  reducers: {},
  extraReducers: {
    [findProjects.fulfilled]: (
      state,
      { payload: { discordName, projects } }
    ) => {
      state.isDataAvailable = true;
      state.numberOfProjects = projects.length;
      state.projects = projects;
    },
  },
});

export default projectsInspectSlice.reducer;
