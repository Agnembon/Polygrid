import { Table } from './components/Table';

export const App = () => {
  const TEMPORAL_ROWS = 10;
  const TEMPORAL_COLS = 8;

  return <Table rows={TEMPORAL_ROWS} columns={TEMPORAL_COLS} />;
};
