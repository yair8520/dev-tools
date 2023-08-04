import NotesIcon from '@mui/icons-material/Notes';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import DifferenceIcon from '@mui/icons-material/Difference';
import PhishingIcon from '@mui/icons-material/Phishing';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import ScreenshotMonitorIcon from '@mui/icons-material/ScreenshotMonitor';
import AddTaskIcon from '@mui/icons-material/AddTask';
import SignpostIcon from '@mui/icons-material/Signpost';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';
export const pages: IPages[] = [
  {
    href: '/api',
    title: 'API',
    headline: 'API',
    description:
      'Manage and organize your APIs with Firebase integration and the option for a proxy server.',
    Icon: SignpostIcon,
  },
  {
    href: '/notes',
    title: 'Notes',
    headline: 'Notes',
    description:
      'Manage and organize your personal notes with Firebase integration.',
    Icon: NotesIcon,
  },
  {
    href: '/flex-playGround',
    headline: 'FlexBox Playground',
    title: 'FlexBox',
    description:
      'Experiment with different flexbox layouts and see the results in real-time.',
    Icon: ScreenshotMonitorIcon,
  },
  {
    href: '/custom-hooks',
    title: 'Hooks',
    headline: 'Custom Hooks',
    description:
      'Find and share custom React hooks for common use cases live with CodeSandbox.',
    Icon: PhishingIcon,
  },
  {
    href: '/TS-utils',
    headline: 'TypeScript Utility Types',
    title: 'TS',
    description: 'Learn about different TypeScript utility types with code snippets.',
    Icon: ShuffleIcon,
  },
  {
    href: '/todo',
    title: 'Tasks',
    headline: 'Tasks',
    description:
      'Stay organized and manage your to-do list efficiently with Firebase integration.',
    Icon: AddTaskIcon,
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
export const welcomeMessage = `Access popular tools quickly on my site,
 Enhance your workflow. 
Happy coding!`;

export const pagesByRoute = {
  "/api": "API Management",
  "/notes": "Notes",
  "/flex-playGround": "FlexBox Playground",
  "/custom-hooks": "Custom Hooks",
  "/TS-utils": "TypeScript Utility Types",
  "/todo": "Task Management",
  "/json-formatter": "JSON Formatter",
  "/diff-checker": "Diff Checker"
};
export const buildSiteTitle = (route: string) => {
  const name = pagesByRoute[route as keyof object]
  return !name ? `Dev-Tools` : `Dev-Tools | ${name}`
}