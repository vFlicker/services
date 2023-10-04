import './styles/index.css';

import { Tree } from '~/components/Tree';
import { NodeData } from '~/types';

const data: NodeData[] = [
  {
    id: '1',
    value: 'Categories',
    childrenNodes: [
      {
        id: '2',
        value: 'Category 1',
        childrenNodes: [
          {
            id: '3',
            value: 'Sub category 1',
            childrenNodes: [],
          },
          {
            id: '4',
            value: 'Sub category 1',
            childrenNodes: [],
          },
        ],
      },
      {
        id: '5',
        value: 'Category 2',
        childrenNodes: [],
      },
      {
        id: '6',
        value: 'Category 3',
        childrenNodes: [],
      },
    ],
  },
];

export function App(): JSX.Element {
  return <Tree data={data} />;
}
