import { Typography } from '@mui/material';
import parseMD from 'app/markdown';
import GLink from 'components/GLink';
import { GImage } from 'react-textgame-components';

import { BodyComponent, HeaderComponent, Mapper, MapperFunction } from '../types.ts';

const headerMapper = (content: HeaderComponent, index: string | number) => (
    <Typography key={index} variant={content.component}>{content.component}</Typography>
);

const mappers: Mapper = {
    choose: (content, index) => {
        const id = content.logic();
        if (typeof id !== 'string') {
            throw new Error('ChooseComponent logic must return a string');
        }
        const component = (content.components.find(
            component => component.id === id
        ) as BodyComponent);

        return (mappers[component.component] as MapperFunction)(component, index);
    },
    custom: (content, index) => <div key={index}>{content.node}</div>,
    h1: headerMapper,
    h2: headerMapper,
    h3: headerMapper,
    h4: headerMapper,
    h5: headerMapper,
    h6: headerMapper,
    image: (content, index) => {
        const src = (typeof content.src === 'string') ? content.src : content.src.href;
        return <GImage key={index} src={src} />;
    },
    link: (content, index) => (
        <GLink
            key={index}
            to={content.to ? content.to : ''}
            callback={content.callback}
        >
            {content.caption}
        </GLink>
    ),
    markdown: (content, index) => {
        return <div key={index}>{parseMD(content.content)}</div>;
    },
    meta: () => null,
};

export default mappers;
