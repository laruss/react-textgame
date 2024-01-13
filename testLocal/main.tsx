import './imports';

import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { GameWrapper } from '../src';
import { GProvider } from 'react-textgame-components';
import App from './App.tsx';

// @ts-ignore
ReactDOM.createRoot(document.getElementById('root')!).render(
    <StrictMode>
            <GameWrapper>
                <GProvider
                    settings={{
                        map: {
                            logCoordinatesOnCLick: true,
                        },
                    }}
                >
                    <App />
                </GProvider>
            </GameWrapper>
    </StrictMode>,
);
