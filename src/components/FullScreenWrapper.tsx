import useFullScreen from 'hooks/useFullScreen.ts';
import { ReactNode } from 'react';
import { FullScreen } from 'react-full-screen';

const FullScreenWrapper = ({children}: {children: ReactNode}) => {
    const {fullScreenHandle, setFullScreenOff} = useFullScreen();

    return (
        <FullScreen handle={fullScreenHandle} onChange={setFullScreenOff}>
            {children}
        </FullScreen>
    );
};

export default FullScreenWrapper;
