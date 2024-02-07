import React from 'react';
import {
  TSnippiest,
  codeSnippiest,
} from '../../Components/CodeSnippestPage/CodeSnippestPageProps';

interface SnippetsInterface {
  items: TSnippiest;
  selectedId: string;
  setItems: React.Dispatch<React.SetStateAction<TSnippiest>>;
  setSelectedId: React.Dispatch<React.SetStateAction<string>>;
  addCodeItem: () => void; // Example additional function
  onEditTitle: (id: string, title: string) => void; // Example additional function
  onRemoveItem: (id: string) => void; // Example additional function
  editTitle: (id: string, newTitle: string) => void; // Example additional function
  removeItem: (id: string) => void; // Example additional function
  handleCodeChange: (id: string, newCode: string) => void; // Example additional function
}

export const Snippets = React.createContext<SnippetsInterface>({
  items: codeSnippiest,
  selectedId: '1',
  setItems: () => {},
  setSelectedId: () => {},
  addCodeItem: () => {},
  onEditTitle: () => {},
  onRemoveItem: () => {},
  editTitle: () => {},
  removeItem: () => {},
  handleCodeChange: () => {},
});
