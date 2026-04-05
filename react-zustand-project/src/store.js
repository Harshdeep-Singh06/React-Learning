import { create } from 'zustand'

const useMystore = create((set)=>({
    count: 1,
    name: "Harsh",
    increment: ()=>{
        set({
            count: 2,
        })
    }
    
}))

export default useMystore;