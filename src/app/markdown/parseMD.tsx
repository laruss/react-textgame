import variables, { Variables } from 'app/variables';
import { Label } from 'components/utils';
import Markdown from 'react-markdown';

import replaceComponents from './replaceComponents';
import { CustomComponent, ParseProps } from './types';
import { componentsRegexp, variablesRegexp } from './utils';

console.info = (data: any) => {
    data;
};

function replaceVariables(text: string, variables: Variables): string {
    // I don't know why this is needed, but it is :(
    console.info(variables);
    return text.replace(variablesRegexp, (match, path) => {
        try {
            const value = eval(`variables.${path}`);
            return value !== undefined ? value : match;
        } catch (e) {
            alert(`Error while parsing variable: ${path}`);
            throw new Error(`Error while parsing variable: ${path}`);
        }
    });
}

function extractRawComponents(text: string): { components: CustomComponent[], markdown: string } {
    let match;
    const components: CustomComponent[] = [];

    let i = 0;
    while ((match = componentsRegexp.exec(text)) !== null) {
        const [raw, lbl, insideText] = match;
        const label = lbl as Label;
        components.push({ insideText, label, tag: `${i}` });
        text = text.replace(raw, `***${i}***`);
        i++;
    }

    return { components, markdown: text };
}

const parseMD = (markdown: ParseProps) => {
    markdown = replaceVariables(markdown, variables);
    const { components, markdown: mdwn } = extractRawComponents(markdown);
    markdown = mdwn;

    return (
        <Markdown
            children={markdown}
            components={replaceComponents({ components })}
        />
    );
};

export default parseMD;
