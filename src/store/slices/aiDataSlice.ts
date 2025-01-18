import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AIDataState {
  aiData: Record<string, any> | null;
  loading: boolean;
}

const initialState: AIDataState = {
  aiData: null,
  loading: false,
};

const aiDataSlice = createSlice({
  name: 'aiData',
  initialState,
  reducers: {
    fetchDataStart(state) {
      state.loading = true;
    },
    fetchDataSuccess(state, action: PayloadAction<Record<string, any>>) {
      state.aiData = action.payload;
      state.loading = false;
    },
    fetchDataFailure(state) {
      state.loading = false;
    },
  },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } =
  aiDataSlice.actions;
export default aiDataSlice.reducer;
