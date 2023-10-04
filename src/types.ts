export type Id = string;

export type NodeData = {
  id: Id;
  value: string;
  childrenNodes: NodeData[];
};
