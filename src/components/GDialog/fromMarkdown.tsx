import {DialogPart, FromMarkdownProps} from "./types";
import GDialog from "./GDialog";

const processLine = (line: string): DialogPart => {
    line = line.trim();

    if (line.startsWith('((') && line.endsWith('))')) {
        return { type: 'comment', text: line.slice(2, -2).trim() };
    } else {
        const match = line.match(/^(\w+): (.*)$/);
        if (match) {
            return { type: 'say', author: match[1], text: match[2].trim() };
        }
    }

    return { type: 'comment', text: line };
};

const fromMarkdown = ({rawText}: FromMarkdownProps) => {
    const lines = rawText.split('\n\n');
    const linesAsObjects: DialogPart[] = [];

    lines.forEach(line => linesAsObjects.push(processLine(line)));

    return <GDialog parts={linesAsObjects} />;
};

export default fromMarkdown;
