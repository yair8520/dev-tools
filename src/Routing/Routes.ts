import { lazy } from 'react';
import { HomePage } from '../Pages/HomePage';

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
      /* webpackChunkName: "CustomHooks" */ '../Pages/CustomHooks/CustomHooks'
    )
);
const TypeScriptUtils = lazy(
  () =>
    import(
      /* webpackChunkName: "TypeScriptUtils" */ '../Pages/TypeScriptUtils/TypeScriptUtils'
    )
);
const Notes = lazy(
  () => import(/* webpackChunkName: "Notes" */ '../Components/Notes/Notes')
);
const ToDoPage = lazy(
  () => import(/* webpackChunkName: "ToDo" */ '../Pages/ToDoPage/ToDoPage')
);
const ApiPage = lazy(
  () => import(/* webpackChunkName: "Api" */ '../Pages/ApiPage/ApiPage')
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
    path: '/custom-hooks/:targetId?',
    element: CustomHooks,
  },
  {
    path: '/TS-utils/:targetId?',
    element: TypeScriptUtils,
  },
  {
    path: '/notes',
    element: Notes,
  },
  {
    path: '/ToDo',
    element: ToDoPage,
  },
  {
    path: '/api',
    element: ApiPage,
  },
  {
    path: '*',
    element: HomePage,
  },
];

export default routes;
