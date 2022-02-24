import React, {
  useReducer,
  useContext,
  createContext,
  Dispatch,
  useEffect,
} from 'react';
import { DataInterface } from 'common/interface';
import getAPI from 'api';

type Action = { type: 'ASSIGN'; datas: DataInterface[] };

type DataDispatch = Dispatch<Action>;

const DataStateContext = createContext<DataInterface[] | null>(null);

const reducer = (state: DataInterface[], action: Action): DataInterface[] => {
  switch (action.type) {
    case 'ASSIGN':
      return action.datas;
    default:
      throw new Error('Unhandled action');
  }
};

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, [] as DataInterface[]);

  useEffect(() => {
    getAPI().then((res) => {
      dispatch({ type: 'ASSIGN', datas: res });
    });
  }, []);

  return (
    <DataStateContext.Provider value={state}>
      {children}
    </DataStateContext.Provider>
  );
};

export function useDataState() {
  const state = useContext(DataStateContext);
  if (!state) throw new Error('Cannot find SampleProvider');
  return state;
}
