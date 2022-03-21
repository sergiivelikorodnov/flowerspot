import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FlowersType } from '../../types/flower';
import { FlowersStateType } from '../../types/state';

const initialState:FlowersStateType = {
  posts: [],
};

const flowersSlice = createSlice({
  name: 'flowers',
  initialState,
  reducers:{
    getPosts(state, action: PayloadAction<FlowersType>) {
      state.posts = action.payload.flowers;
    },
  },
});

export const {
  getPosts,
} = flowersSlice.actions;

export default flowersSlice.reducer;
