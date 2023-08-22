import { createReducer } from "@reduxjs/toolkit";

export const jobReducer = createReducer(
  {},
  {
    jobPostRequest: (state) => {
      state.loading = true;
    },
    jobPostSuccess: (state, action) => {
      state.loading = false;
      state.success = action.payload.success;
      state.message = action.payload.message;
    },
    jobPostFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null
    },
    getAllJobsRequest: (state) => {
      state.loading = true;
    },
    getAllJobsSuccess: (state, action) => {
      state.loading = false;
      state.success = action.payload.success;
      state.jobs = action.payload.jobs
    },
    getAllJobsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getJobDetailsRequest: (state) => {
      state.loading = true;
    },
    getJobDetailsSuccess: (state, action) => {
      state.loading = false;
      state.success = action.payload.success;
      state.job = action.payload.job    
    },
    getJobDetailsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    emailNotifRequest: (state) => {
      state.loading = true;
    },
    emailNotifSuccess: (state, action) => {
      state.loading = false;
      state.success = action.payload.success;
      state.message = action.payload.message;
    },
    emailNotifFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
);
