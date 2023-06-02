import { createSlice} from '@reduxjs/toolkit'

interface CentroItvState {
  centroItv:{
        Name: string;
        Phone: string;
        Email: string;
        PersonaContacto: string;
        DireccionPoblacion: string;
        DireccionNumero: string;
        Comments: string; 
  } | null;
}

  const initialState: CentroItvState = {
    centroItv: null
  };

  export const centroItvSlice = createSlice({
    name: 'centroItv',
    initialState,
    reducers: {

      setCentroItv: (state, action) => {
        state.centroItv = action.payload;
      }
    },
  });

  export const {setCentroItv} = centroItvSlice.actions;
  export default centroItvSlice.reducer;