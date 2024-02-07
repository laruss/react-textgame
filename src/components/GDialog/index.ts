import fromMarkdown from './fromMarkdown';
import _GDialog from './GDialog';

const GDialog = _GDialog as typeof _GDialog & {
    fromMarkdown: typeof fromMarkdown;
    tagName: 'dialog';
};

GDialog.fromMarkdown = fromMarkdown;
GDialog.tagName = 'dialog';

export default GDialog;
