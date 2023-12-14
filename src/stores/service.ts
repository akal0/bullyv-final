import { create } from "zustand" 

type ServiceStore = {
    inViewFeature: string | null;
    setInViewFeature: (feature: string | null) => void
}

export const useServiceStore = create<ServiceStore>((set) => ({
    inViewFeature: null,
    setInViewFeature: (feature) => set({ inViewFeature: feature })
}))