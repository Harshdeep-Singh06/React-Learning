import { create } from 'zustand'

const useMystore = create(()=>({
    count: 1,
    name: "Harsh",
    
}))

export default useMystore;