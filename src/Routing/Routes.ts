import { CustomHooks } from '../Components/CustomHooks';
import { DiffChecker } from '../Components/DiffChecker';
import { HomePage } from '../Components/HomePage';
import { Notes } from '../Components/Notes';
import { TypeScriptUtils } from '../Components/TypeScriptUtils';
import { FlexPage } from '../Pages/FlexPage';
import { Formatter } from '../Pages';


// Define your route configuration array
const routes = [
    {
        path: '/',
        element: HomePage
    },
    {
        path: '/json-formatter',
        element: Formatter
    },
    {
        path: '/diff-checker',
        element: DiffChecker
    },
    {
        path: '/flex-playGround',
        element: FlexPage
    },
    {
        path: '/custom-hooks',
        element: CustomHooks
    },
    {
        path: '/TS-utils',
        element: TypeScriptUtils
    },
    {
        path: '/notes',
        element: Notes
    },
    {
        path: '*',
        element: HomePage
    }
];

export default routes;