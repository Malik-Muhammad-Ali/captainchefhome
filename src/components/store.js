import {create} from "zustand"
import { persist } from "zustand/middleware";
import languageSlice from "./slices/languageSlice";


const useAppStore = create(
    persist(
      (set, get) => ({
        
        ...languageSlice(set, get),
      }),
    )
)

export default useAppStore;