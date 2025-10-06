import { CacheKeysEnum, Task } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import useLogStore from "./useLogStore";

interface TaskStore {
  tasks: Task[];
  addTask: (task: Omit<Task, "id" | "createdAt">) => void;
  updateTask: (id: string, updatedTask: Partial<Task>) => void;
  deleteTask: (id: string) => void;
  clearTasks: () => void;
}

const useTaskStore = create<TaskStore>()(
  persist(
    (set) => ({
      tasks: [],

      addTask: (taskData) => {
        const newTask = {
          id: crypto.randomUUID(),
          createdAt: new Date(),
          ...taskData,
        };
        set((state) => ({ tasks: [...state.tasks, newTask] }));

        // salvar log
        useLogStore.getState().createLog({
          task: newTask.title ?? "-",
          action: `Criou a tarefa "${newTask.title}".`,
        });
      },

      updateTask: (id, updatedTask) => {
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, ...updatedTask } : task
          ),
        }));

        const taskTitle = useTaskStore
          .getState()
          .tasks.find((t) => t.id === id)?.title;

        useLogStore.getState().createLog({
          task: taskTitle ?? "-",
          action: `Editou a tarefa "${taskTitle}".`,
        });
      },

      deleteTask: (id) => {
        const taskTitle = useTaskStore
          .getState()
          .tasks.find((t) => t.id === id)?.title;

        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        }));

        useLogStore.getState().createLog({
          task: taskTitle ?? "-",
          action: `Excluiu a tarefa "${taskTitle}".`,
        });
      },

      clearTasks: () => set({ tasks: [] }),
    }),
    {
      name: CacheKeysEnum.TASKS,
    }
  )
);

export default useTaskStore;
