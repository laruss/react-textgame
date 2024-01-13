import { selectVariables, useAppSelector } from 'app/redux/hooks.ts';

/**
 * @description
 * This hook is used to check if the game variables have changed.
 * Needed to re-render the game when the variables change.
 *
 * @returns {object} gameVars - The game variables.
 *
 * @example
 * const { gameVars } = useGameChangesChecker();
 * useEffect(() => {
 *    // do something with gameVars
 * }, [gameVars]); // re-render when gameVars change
 *
 */
const useGameChangesChecker = () => {
    const gameVars = useAppSelector(selectVariables);

    return { gameVars };
};

export default useGameChangesChecker;

