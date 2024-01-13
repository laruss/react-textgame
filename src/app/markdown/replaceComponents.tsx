import _GEm from 'components/system/_GEm';
import { Components } from 'react-markdown';
import { GP } from 'react-textgame-components';

import { CustomComponent } from './types';

type ReplaceComponents = ({ components }: { components: CustomComponent[] }) => Partial<Components>;

const replaceComponents: ReplaceComponents = ({ components }) => ({
    p: ({ node, ...props }) => <GP {...props} />,
    a: ({ node, ...props }) => <a {...props} />,
    img: ({ node, ...props }) => <img {...props} />,
    em: ({ node, ...props }) => <_GEm components={components} {...props} />,
});

export default replaceComponents;
