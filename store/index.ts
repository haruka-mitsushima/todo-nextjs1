import create from "zustand/react";
import { EditedTask } from "../types";

type State = {
  editedTask: EditedTask
  updatedTask: (payload: EditedTask) => void
  resetEditedTask: () => void
}

const useStore = create<State>((set) => ({
  editedTask: { id: 0, title: '', description: '' },
  updatedTask: (payload) =>
    set({
      editedTask: {
        id: payload.id,
        title: payload.title,
        description: payload.description,
      },
    }),
  resetEditedTask: () =>
    set({ editedTask: { id: 0, title: '', description: '' } })
}))
export default useStore
