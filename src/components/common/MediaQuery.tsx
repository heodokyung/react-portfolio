// MediaQuery.tsx

import React, { ReactNode } from 'react';
import { useMediaQuery } from 'react-responsive';
interface IMediaQuery {
  children: ReactNode;
}

const Mobile = ({ children }: IMediaQuery) => {
  const isMobile = useMediaQuery({
    query: '(max-width:960px)',
  });
  return <React.Fragment>{isMobile && children}</React.Fragment>;
};

const PC = ({ children }: IMediaQuery) => {
  const isPc = useMediaQuery({
    query: '(min-width:961px) ',
  });
  return <React.Fragment>{isPc && children}</React.Fragment>;
};

export { Mobile, PC };
