import { createContext } from 'react';

import { Id, NodeData } from '~/types';

type StoreData = {
  nodes: NodeData[];

  addNodeAction(value: string, parentNodeId: Id): void;
  editNodeAction(value: string, id: Id): void;
  removeNodeAction(id: Id): void;
};

export const StoreContext = createContext<StoreData>({
  nodes: [],

  addNodeAction: () => undefined,
  editNodeAction: () => undefined,
  removeNodeAction: () => undefined,
});

export const StoreProvider = StoreContext.Provider;
