import { createContext } from 'react';

import { Id, NodeData } from '~/types';

type StoreData = {
  nodes: NodeData[];

  addNodeAction(parentNodeId: Id): void;
  editNodeAction(id: Id): void;
  saveNodeAction(value: string, id: Id): void;
  removeNodeAction(id: Id): void;
};

export const StoreContext = createContext<StoreData>({
  nodes: [],

  addNodeAction: () => undefined,
  editNodeAction: () => undefined,
  saveNodeAction: () => undefined,
  removeNodeAction: () => undefined,
});

export const StoreProvider = StoreContext.Provider;
