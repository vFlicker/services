import { createRoot } from 'react-dom/client';

import { Drag } from './components/Drag';

// import { App } from './app';

const rootElement = document.getElementById('app') as HTMLElement;
createRoot(rootElement).render(<Drag />);
