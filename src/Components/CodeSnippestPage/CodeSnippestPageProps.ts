export interface CodeSnippestPageProps {
  [key: string]: any;
}
export const ICodeSnippiest: TCodeSnippiest = {
  id: '',
  timestamp: '',
  code: '',
  title: '',
};
export const getNewSnippets = (id: string): TCodeSnippiest => {
  return {
    id,
    timestamp: '',
    code: 'Write your Code here...',
    title: 'Edit title...',
  };
};
export interface TSnippiest extends Record<string, TCodeSnippiest> {}
export interface TCodeSnippiest {
  id: string;
  timestamp: string;
  title: string;
  code: string;
}
export const codeSnippiest: TSnippiest = {
  '1': {
    id: '1',
    timestamp: '2024-02-03T12:34:56',
    code: 'Your code snippet here  1 ...',
    title: 'code 1',
  },
};
