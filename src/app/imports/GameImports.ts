export type Imports = Record<string, () => unknown>;

type InitProps = {
    images: Imports;
    passages: Imports;
};

class GameImports {
    private static instance: GameImports;
    private images: Imports;
    private passages: Imports;

    private constructor(props: InitProps) {
        this.images = props.images;
        this.passages = props.passages;
    }

    public static init(props: InitProps): GameImports {
        GameImports.instance = new GameImports(props);

        return GameImports.instance;
    }

    public static getInstance(): GameImports {
        if (!GameImports.instance) {
            throw new Error('GameImports not initialized');
        }

        return GameImports.instance;
    }

    public getImages(): Imports {
        return this.images;
    }

    public getPassages(): Imports {
        return this.passages;
    }
}

export default GameImports;
