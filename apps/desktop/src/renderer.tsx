import React from 'react';
import { createRoot } from 'react-dom/client';
import { Application } from './application/Application';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

root.render(<Application />);
