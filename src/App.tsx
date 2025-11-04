import { Table } from './components/Table';
import type { CellValue } from './types';

export const App = () => {
  const temporalHeaderDataExample: CellValue[] = [{ value: "HEADER-1" }, { value: "HEADER-2" }, { value: "HEADER-3" }, { value: "HEADER-4" }, { value: "HEADER-5" }, { value: "HEADER-6" }];

  const temporalContentDataExample: CellValue[][] = [
    [{ value: 1 }, { value: 2 }, { value: "POLYGRID-3" }, { value: 4 }, { value: 5 }, { value: 6 }],
    [{ value: "AGNEMBON-7" }, { value: "HOLA-8" }, { value: 9 }, { value: 10 }, { value: 11 }],
    [{ value: 12 }, { value: 13 }, { value: "PRUEBA-14" }, { value: 15 }, { value: 16 }],
    [{ value: 17 }, { value: 18 }, { value: "PRUEBA-19" }, { value: 20 }, { value: 21 }, { value: 22 }],
    [{ value: 23 }, { value: 24 }, { value: "PRUEBA-25" }, { value: 26 }, { value: 27 }, { value: 28 }],
  ];

  return (
    <div className="p-4 flex flex-col items-center gap-30 min-h-screen">
      <div className="flex flex-col items-center gap-10">
        <h1 className="text-xl font-semibold mb-4">POLYGRID CON HEADER</h1>
        <Table key={"polygrid-header"}
          data={{
            header: temporalHeaderDataExample,
            content: temporalContentDataExample
          }}
        />
      </div>

      <div className="flex flex-col items-center gap-10">
        <h1 className="text-xl font-semibold mb-4">POLYGRID SIN HEADER</h1>
        <Table key={"polygrid"}
          data={{
            header: [],
            content: temporalContentDataExample
          }}
        />
      </div>
    </div>
  )
};
