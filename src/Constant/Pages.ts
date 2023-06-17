import NotesIcon from '@mui/icons-material/Notes';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import DifferenceIcon from '@mui/icons-material/Difference';
import PhishingIcon from '@mui/icons-material/Phishing';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import ScreenshotMonitorIcon from '@mui/icons-material/ScreenshotMonitor';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';
export const pages: IPages[] = [
  {
    href: '/notes',
    title: 'Notes',
    headline: 'Notes',
    description:
      'Manage and organize your personal notes with Firebase integration.',
    Icon: NotesIcon,
  },
  {
    href: '/todo',
    title: 'Tasks',
    headline: 'Tasks',
    description:
      'Stay organized and manage your to-do list efficiently. with Firebase integration.',
    Icon: AddTaskIcon,
  },
  {
    href: '/custom-hooks',
    title: 'Hooks',
    headline: 'Custom Hooks',
    description:
      'Find and share custom React hooks for common use cases live With CodeSandBox.',
    Icon: PhishingIcon,
  },
  {
    href: '/TS-utils',
    headline: 'TypeScript Utility Types',
    title: 'TS',
    description: 'Learn about different TypeScript Utils. ',
    Icon: ShuffleIcon,
  },
  {
    href: '/flex-playGround',
    headline: 'Flex Playground',
    title: 'Flex',
    description:
      'Experiment with different flexbox layouts and see the results in real-time.',
    Icon: ScreenshotMonitorIcon,
  },
  {
    href: '/json-formatter',
    title: 'JSON',
    headline: 'JSON Formatter',
    description: 'Easily format and prettify JSON data.',
    Icon: FormatAlignLeftIcon,
  },
  {
    href: '/diff-checker',
    title: 'Diff',
    headline: 'Diff Checker',
    description:
      'Compare two pieces of text/files and highlight the differences.',
    Icon: DifferenceIcon,
  },
];

export const moreToCome: IPages = {
  description: '',
  title: '',
  href: '',
  headline: 'More tools under development...',
};
export interface IPages {
  href: string;
  title: string;
  headline: string;
  description: string;
  Icon?: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & { muiName: string };
}
export const welcomeMessage = `Access popular tools quickly on my site.
 Manage notes, find custom React hooks, explore TypeScript utility types, experiment with flexbox, format JSON, and compare text. Enhance your workflow here. 
Happy coding!`;
