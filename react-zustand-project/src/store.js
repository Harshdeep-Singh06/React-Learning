import { create } from 'zustand'

const useMystore = create((set,get)=>({
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
}))

export default useMystore;