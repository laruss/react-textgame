import { Theme } from '@mui/material';
import store, { persistor } from 'app/redux/store.ts';
import GameSettings from 'app/settings';
import Debug from 'components/Debug';
import FullScreenWrapper from 'components/FullScreenWrapper.tsx';
import GModal, { GChoiceModal } from 'components/GModal';
import GNotification from 'components/GNotification';
import GSpinner from 'components/GSpinner';
import StyleWrapper from 'components/StyleWrapper.tsx';
import { FunctionComponent, ReactNode, useMemo } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import AppContainer from './AppContainer.tsx';

interface GameWrapperProps {
    children: ReactNode;
    Spinner?: FunctionComponent<void>;
    theme?: Theme;
}

const settings = GameSettings.getInstance().get();

const GameWrapper = ({ Spinner, children, ...styleWrapperProps }: GameWrapperProps) => {
    const debug = useMemo(() => settings.project?.debug as boolean, []);
    const showDebugComponent = useMemo(() => settings.project?.showDebugComponent as boolean, []);

    const SpinnerComponent = useMemo(
        () => Spinner || GSpinner,
        [Spinner]);

    const WrappedApp = useMemo(() => (
        <StyleWrapper {...styleWrapperProps}>
            <FullScreenWrapper>
                <SpinnerComponent />
                <AppContainer className="App">
                    <GModal />
                    {showDebugComponent && <Debug />}
                    <GChoiceModal />
                    <GNotification />
                    {children}
                </AppContainer>
            </FullScreenWrapper>
        </StyleWrapper>
    ), []);

    return (
        <Provider store={store}>
            {
                debug ? WrappedApp : (
                    <PersistGate loading={null} persistor={persistor}>
                        {WrappedApp}
                    </PersistGate>
                )
            }
        </Provider>
    );
};

export default GameWrapper;
