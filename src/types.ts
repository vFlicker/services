export type Id = string;

export type NodeData = {
  id: Id;
  value: string;
  editing: boolean;
  childrenNodes: NodeData[];
};
