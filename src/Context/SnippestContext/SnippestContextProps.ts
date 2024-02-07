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
  addCodeItem: () => void;
  onEditTitle: (id: string, title: string) => void;
  onRemoveItem: (id: string) => void;
  editTitle: (id: string, newTitle: string) => void;
  removeItem: (id: string) => void;
  handleCodeChange: (id: string, newCode: string) => void;
  handleSave: (id: string) => void;
}

export const Snippets = React.createContext<SnippetsInterface>({
  items: codeSnippiest,
  selectedId: '1',
  setItems: () => {},
  handleSave: () => {},
  setSelectedId: () => {},
  addCodeItem: () => {},
  onEditTitle: () => {},
  onRemoveItem: () => {},
  editTitle: () => {},
  removeItem: () => {},
  handleCodeChange: () => {},
});
