import { GImports } from '../src';

// @ts-ignore
const settings = import.meta.glob('/testLocal/settings.ts', { eager: true });

// @ts-ignore
GImports.importImages(import.meta.glob('/testLocal/game/media/**/*', { eager: true }), '/testLocal/game/media/');

// @ts-ignore
GImports.importPassages(import.meta.glob('/testLocal/game/passages/**/*'));
