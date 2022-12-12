import { matchPath, resolvePath, useLocation } from 'react-router-dom';

export const useFindMatch = (paths = {}) => {
  const location = useLocation();
  const foundMatch = Object.entries(paths).find(([, path]) => {
    const resolved = resolvePath(path);
    const match = matchPath({ path: resolved.pathname }, location.pathname);
    return Boolean(match);
  });

  return foundMatch
    ? { match: true, name: foundMatch[0], path: foundMatch[1] }
    : { match: false };
};

export const useFindSpecificMatch = (paths = {}) => {
  const location = useLocation();
  const foundMatch = Object.entries(paths).find(([, path]) => {
    const resolved = resolvePath(path);
    return resolved.pathname === location.pathname;
  });

  return foundMatch
    ? { match: true, name: foundMatch[0], path: foundMatch[1] }
    : { match: false };
};
