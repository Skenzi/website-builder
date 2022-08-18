export interface State {
    activeTemplate: string,
}
export interface Elements {
    templateContainer: Element | null,
}

export interface DropdownItem {
    type: string,
    content: string,
    tag: string,
}

export type DropdownItems = DropdownItem[];