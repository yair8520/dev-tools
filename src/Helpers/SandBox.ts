import { getParameters } from 'codesandbox/lib/api/define';
export async function createReactTypeScriptSandbox(code: string) {
  const parameters = getParameters({
    template: 'create-react-app-typescript',
    files: {
      'src/App.tsx': {
        content: code,
        isBinary: false,
      },
      'package.json': {
        content: JSON.stringify({
          dependencies: {
            react: '^17.0.2',
            'react-dom': '^17.0.2',
          },
        }),
        isBinary: false,
      },
    },
  });

  const url = `https://codesandbox.io/api/v1/sandboxes/define?parameters=${parameters}`;

  window.open(url, '_blank');
}
