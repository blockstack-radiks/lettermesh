import React from 'react';
import { Type } from 'blockstack-ui';

export const Label = ({ children, ...rest }) => (
  <Type.p
    as="label"
    is="label"
    fontWeight="600"
    {...rest}
  >
    {children}
  </Type.p>
);
