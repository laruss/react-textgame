export type FromMarkdownProps = {
    rawText: string
};

export type ComponentTypes = 'say' | 'comment';

export type DialogPart = {
    type: ComponentTypes;
    author?: string;
    text: string;
};

export type DialogPartToComponentProps = {
    dialogPart: DialogPart,
    index: number
};
