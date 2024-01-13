import GImports from '../src/imports';

// @ts-ignore
GImports.importSettings(import.meta.glob('/testLocal/settings.json', { eager: true, as: 'raw' }));

// @ts-ignore
GImports.importImages(import.meta.glob('/testLocal/game/media/**/*', { eager: true }), '/testLocal/game/media/');

// @ts-ignore
GImports.importPassages(import.meta.glob('/testLocal/game/passages/**/*'));
