import { getParameters } from 'codesandbox/lib/api/define';
import { indexFile } from '../Constant/Hooks';
export async function createReactTypeScriptSandbox(code: string) {
  const parameters = getParameters({
    template: 'create-react-app-typescript',
    files: {
      'src/App.tsx': {
        content: code,
        isBinary: false,
      },
      'index.tsx': {
        content: indexFile,
        isBinary: false,
      },
      'package.json': {
        content: JSON.stringify({
          dependencies: {
            react: '^18.0.0',
            'react-dom': '^18.0.0',
            'react-scripts': '^5.0.0',
          },
          main: '/index.tsx',
          devDependencies: {},
        }),
        isBinary: false,
      },
    },
  });

  const url = `https://codesandbox.io/api/v1/sandboxes/define?parameters=${parameters}`;

  window.open(url, '_blank');
}
