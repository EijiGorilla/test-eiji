import { createContext } from 'react';

type MyDropdownContextType = {
  municipals: any;
  updateMunicipals: any;
  barangays: any;
  updateBarangays: any;
};

const initialState = {
  municipals: undefined,
  updateMunicipals: undefined,
  barangays: undefined,
  updateBarangays: undefined,
};

export const MyContext = createContext<MyDropdownContextType>({
  ...initialState,
});