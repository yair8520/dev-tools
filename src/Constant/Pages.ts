export const pages: IPages[] = [
  {
    href: '/custom-hooks',
    title: 'Hooks',
    headline: 'Custom Hooks',
    description: 'Find and share custom React hooks for common use cases.',
  },
  {
    href: '/flex-playGround',
    headline: 'Flex Playground',
    title: 'Flex',
    description:
      'Experiment with different flexbox layouts and see the results in real-time.',
  },
  {
    href: '/json-formatter',
    title: 'JSON',
    headline: 'JSON Formatter',
    description: 'Easily format and prettify JSON data.',
  },
  {
    href: '/diff-checker',
    title: 'Diff',
    headline: 'Diff Checker',
    description:
      'Compare two pieces of text/files and highlight the differences.',
  },
];
export interface IPages {
  href: string;
  title: string;
  headline: string;
  description: string;
}
