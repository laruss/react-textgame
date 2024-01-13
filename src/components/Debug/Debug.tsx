import { styled } from '@mui/material';
import { selectGame, useAppDispatch, useAppSelector } from 'app/redux/hooks.ts';
import { updateAll } from 'app/redux/slices/gameSlice.ts';
import { useCallback, useState } from 'react';

const DebugContainer = styled('div')`
    position: absolute;
    top: 0;
    right: 0;
    font-size: 12px;
    z-index: 100;
    background-color: #8b8b8b;
`;

const Debug = () => {
    const game = useAppSelector(selectGame);
    const dispatch = useAppDispatch();
    const [isShown, setIsShown] = useState(false);
    const [textareaValue, setTextareaValue] = useState('');

    const copyCurrentGameState = useCallback(async () => {
        // copy current game state to clipboard
        const gameData = game.present;
        const gameDataString = JSON.stringify(gameData);
        await navigator.clipboard.writeText(gameDataString);
        alert('copied to clipboard')
    }, [game]);

    const setCurrentGameState = useCallback((e: any) => {
        e.preventDefault();
        // set current game state from textarea
        try {
            const gameData = JSON.parse(textareaValue);
            dispatch(updateAll({data: gameData}));
            alert('game state set');
        } catch (e) {
            alert('invalid json');
        }
    }, [textareaValue, dispatch]);

    return (
        <DebugContainer>
            <div>
                <button style={{right: 0, position: 'absolute'}} onClick={() => setIsShown(!isShown)}>debug</button>
            </div>
            {
                isShown && (
                    <div>
                        <button onClick={copyCurrentGameState}>get game</button>
                        <form>
                        <textarea
                            value={textareaValue}
                            style={{minWidth: '200px'}}
                            onChange={(e) => setTextareaValue(e.target.value)}
                        />
                            <button onClick={setCurrentGameState}>set</button>
                        </form>
                    </div>
                )
            }
        </DebugContainer>
    );
};

export default Debug;
