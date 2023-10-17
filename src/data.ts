import { NodeData } from './types';

export const initialNodeData: NodeData[] = [
  {
    id: '1',
    value: 'Categories',
    editing: false,
    childrenNodes: [
      {
        id: '2',
        value: 'Category 1',
        editing: false,
        childrenNodes: [
          {
            id: '3',
            value: 'Sub category 1',
            editing: false,
            childrenNodes: [],
          },
          {
            id: '4',
            value: 'Sub category 2',
            editing: false,
            childrenNodes: [],
          },
        ],
      },
      {
        id: '5',
        value: 'Category 2',
        editing: false,
        childrenNodes: [],
      },
      {
        id: '6',
        value: 'Category 3',
        editing: false,
        childrenNodes: [],
      },
    ],
  },
];
