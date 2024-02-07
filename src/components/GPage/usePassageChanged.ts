import passages from 'app/passages';
import { PassageObject } from 'app/passages/types.ts';
import { selectPassages, useAppSelector } from 'app/redux/hooks.ts';
import { PassageRegister } from 'app/redux/types.ts';
import { useCallback, useEffect, useState } from 'react';

import { NodeRef } from './types.ts';

const usePassageChanged = ({ nodeRef, timeout }: { nodeRef: NodeRef, timeout: number }) => {
    const [passageChanged, setPassageChanged] = useState(false);
    const [currentPassage, setCurrentPassage] = useState<PassageObject | null>(null);

    const gamePassages: PassageRegister = useAppSelector(selectPassages);

    const getPassage = useCallback(() => {
        nodeRef.current && nodeRef.current.scrollIntoView({ block: 'start' });
        setCurrentPassage(passages[gamePassages.current]);
    }, [gamePassages, nodeRef]);

    useEffect(() => {
        setPassageChanged(true);
        setTimeout(() => getPassage(), timeout);
    }, [getPassage, timeout]);

    useEffect(() => {
        passageChanged && setTimeout(() => setPassageChanged(false), timeout);
    }, [passageChanged, timeout]);

    return { currentPassage, passageChanged };
};

export default usePassageChanged;
