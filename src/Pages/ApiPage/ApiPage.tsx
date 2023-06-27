import React from 'react';

import { ApiTabs } from '../../Components/ApiTabs';
import { ApiContext } from '../../Context/ApiContext';
const ApiPage = () => {
  return (
    <ApiContext>
      <ApiTabs />
    </ApiContext>
  );
};
export default ApiPage;
