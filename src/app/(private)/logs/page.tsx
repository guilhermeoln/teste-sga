"use client";

import CustomTable from "@/components/CustomTable";
import { Log } from "@/types";
import useContainer from "./useContainer";

export default function Logs() {
  const { columns, logs } = useContainer();

  return (
    <>
      <CustomTable<Log>
        columns={columns}
        data={logs}
        rowsPerPage={5}
        emptyMessage="Nenhum log encontrado"
      />
    </>
  );
}
