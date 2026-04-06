import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
 
const useMystore = create(persist((set,get)=>({
    count: 1,
    name: "harsh",
    increment: ()=>{
        set((state)=>({
            count: state.count+1
        }))
    },
    capitalizeName: () => {
        const {name} = get();
        set({
            name: name.charAt(0).toUpperCase() + name.slice(1)
        })
    }
}),{name: 'mystore',
    storage: createJSONStorage(()=>sessionStorage)
}))

export default useMystore;