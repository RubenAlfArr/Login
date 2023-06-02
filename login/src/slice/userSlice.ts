import { createSlice,} from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

interface UserState {
    token: string ;
    user: {
      ID: number;
      Nombre: string;
      Email: string;
      Rol: string;
      Usuario: string;
      Password: string;
    }  | null;
  }
  
  const initialState: UserState = {
    token: "",
    user: null,
  };

export const userSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuth: (state, action) => {
            state.token = action.payload.token;
            state.user = action.payload.currentUser;
        },
        updateUser:(state, action) => {
          state.user = action.payload;
      },
        
    }
})

const persistConfig = {
  key: 'root',
  storage: storage,
};

const persistedReducer = persistReducer(persistConfig, userSlice.reducer);

export const{setAuth, updateUser} = userSlice.actions

export default persistedReducer;