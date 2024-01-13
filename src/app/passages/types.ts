import { ReactNode } from 'react';

type HeaderLevels =
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6';

export type Component =
    | 'meta'
    | 'choose'
    | 'custom'
    | 'image'
    | 'link'
    | 'markdown'
    | HeaderLevels;

/**
 * BaseComponent is the base type for all components.
 *
 * @property {Component} component - The component type.
 * @property {string} id - The component id. Is optional, needed for choose components.
 *
 */
export interface BaseComponent {
    component: Component;
    id?: string;
}

export interface CustomComponent extends BaseComponent {
    component: 'custom';
    node: ReactNode;
}

/**
 * ChooseComponent is a component that allows developer to choose between multiple components.
 *
 * @property {Component} component - The component type, always 'choose'.
 * @property {() => string} logic - The logic function that returns the id of the chosen component.
 * @property {BodyComponent[]} components - The components to choose from, needs to have an id.
 */
export interface ChooseComponent extends BaseComponent {
    component: 'choose';
    logic: () => string | unknown;
    components: BodyComponent[];
}

export interface MetaComponent extends BaseComponent {
    component: 'meta';
    name: string;
    fullWidth?: boolean;
    backgroundImage?: string;
}

export interface HeaderComponent extends BaseComponent {
    component: HeaderLevels;
    content: string;
}

export interface ImageComponent extends BaseComponent {
    component: 'image';
    src: URL | string;
}

export interface MarkdownComponent extends BaseComponent {
    component: 'markdown';
    content: string;
}

export interface LinkComponent extends BaseComponent {
    component: 'link';
    to?: string;
    caption: string;
    callback?: () => void;
}

export type BodyComponent =
    | ChooseComponent
    | CustomComponent
    | HeaderComponent
    | ImageComponent
    | LinkComponent
    | MarkdownComponent;

export type PassageObject = [
    MetaComponent,
    ...BodyComponent[]
];

export type ComponentTypeMap = {
    choose: ChooseComponent;
    custom: CustomComponent;
    image: ImageComponent;
    link: LinkComponent;
    markdown: MarkdownComponent;
    meta: MetaComponent;
} & { [K in HeaderLevels]: HeaderComponent };

export type MappedComponent<C extends Component> = ComponentTypeMap[C];

export type MapperFunction = (component: MappedComponent<Component>, index: string | number) => ReactNode | null;

export type Mapper = {
    [K in Component]: (component: MappedComponent<K>, index: string | number) => ReactNode | null;
}

export type PassageRegister = { [p: string]: PassageObject };
