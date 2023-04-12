import React from 'react';
import './Header.css';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export const Header = () => {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Dev Tools
      </Link>
      <ul>
        <CustomLink to="/json-formatter">JSON</CustomLink>
        <CustomLink to="/diff-checker">Diff</CustomLink>
      </ul>
    </nav>
  );
};
function CustomLink({ to, children, ...props }: any) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
