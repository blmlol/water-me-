import React, { useLayoutEffect, useState } from 'react';
import './App.css';
import Routes from './router';
import { useRoutes, usePath } from 'hookrouter';

function App() {
  const routeResult = useRoutes(Routes);
  const path = usePath();
  return (
    <>

      {routeResult}

    </>
  );
}

export default App;
