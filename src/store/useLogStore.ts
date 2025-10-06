import { getCache } from "@/services/cache";
import { CacheKeysEnum, Log } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface LogStore {
  logs: Log[];
  createLog: (logData: Omit<Log, "id" | "user" | "createdAt">) => void;
}

const useLogStore = create<LogStore>()(
  persist(
    (set) => ({
      logs: [],

      createLog: (logData) =>
        set((state) => ({
          logs: [
            ...state.logs,
            {
              id: crypto.randomUUID(),
              user: getCache(CacheKeysEnum.USER) ?? "",
              createdAt: new Date(),
              ...logData,
            },
          ],
        })),
    }),
    {
      name: CacheKeysEnum.LOGS,
    }
  )
);

export default useLogStore;
