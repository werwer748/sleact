import React from 'react';
import { createRoot } from 'react-dom/client';

import App from '@layouts/App';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('app');
const root = createRoot(container!);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);

/*
 * pages -  페이지의 진입점(큰 항목들)
 * components - page의 작은 부분들
 * layouts - 공통 레이아웃
 */
