import { lazy } from 'react';
import { HomePage } from '../Components/HomePage';
import { ToDoPage } from '../Pages/ToDoPage';

const Formatter = lazy(
  () =>
    import(/* webpackChunkName: "formatter" */ '../Pages/Formatter/Formatter')
);
const DiffChecker = lazy(
  () =>
    import(
      /* webpackChunkName: "DiffChecker" */ '../Components/DiffChecker/DiffChecker'
    )
);
const FlexPage = lazy(
  () => import(/* webpackChunkName: "FlexPage" */ '../Pages/FlexPage/FlexPage')
);
const CustomHooks = lazy(
  () =>
    import(
      /* webpackChunkName: "CustomHooks" */ '../Components/CustomHooks/CustomHooks'
    )
);
const TypeScriptUtils = lazy(
  () =>
    import(
      /* webpackChunkName: "TypeScriptUtils" */ '../Components/TypeScriptUtils/TypeScriptUtils'
    )
);
const Notes = lazy(
  () => import(/* webpackChunkName: "Notes" */ '../Components/Notes/Notes')
);

const routes = [
  {
    path: '/',
    element: HomePage,
  },
  {
    path: '/json-formatter',
    element: Formatter,
  },
  {
    path: '/diff-checker',
    element: DiffChecker,
  },
  {
    path: '/flex-playGround',
    element: FlexPage,
  },
  {
    path: '/custom-hooks',
    element: CustomHooks,
  },
  {
    path: '/TS-utils',
    element: TypeScriptUtils,
  },
  {
    path: '/notes',
    element: Notes,
  },
  {
    path: '/ToDoPage',
    element: ToDoPage,
  },
  {
    path: '*',
    element: HomePage,
  },
];

export default routes;
