export interface DLLNode<T> {
  value: T;
  prev: DLLNode<T> | null;
  next: DLLNode<T> | null;
}

export interface DLLState {
  headValue: string | null;
  tailValue: string | null;
  size: number;
  nodes: string[];        
}

export interface SearchResultData {
  query: string;
  index: number | null;   
}