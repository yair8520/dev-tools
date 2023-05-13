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
        path: '/dev-tools',
        element: HomePage
    },
    {
        path: '/dev-tools/json-formatter',
        element: Formatter
    },
    {
        path: '/dev-tools/diff-checker',
        element: DiffChecker
    },
    {
        path: '/dev-tools/flex-playGround',
        element: FlexPage
    },
    {
        path: '/dev-tools/custom-hooks',
        element: CustomHooks
    },
    {
        path: '/dev-tools/TS-utils',
        element: TypeScriptUtils
    },
    {
        path: '/dev-tools/notes',
        element: Notes
    },
    {
        path: '*',
        element: HomePage
    }
];

export default routes;