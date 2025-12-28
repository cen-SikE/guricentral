
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

// 브라우저에서 직접 실행될 때를 대비해 root 요소를 찾는 로직을 견고하게 합니다.
const mountNode = () => {
  const rootElement = document.getElementById('root');
  if (!rootElement) return;

  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountNode);
} else {
  mountNode();
}
