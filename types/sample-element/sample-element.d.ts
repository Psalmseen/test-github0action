import { CSSResultGroup, LitElement } from 'lit';
export declare class SampleElement extends LitElement {
    static styles: CSSResultGroup;
    detailList: {
        name: string;
        age: number;
        mobile: string;
        country: string;
        gender: string;
    }[];
    currentName: {
        firstName: string;
        lastName: string;
    };
    handleNameInput({ target: { value } }: any, name: string): void;
    generateCountry(): string;
    deleteUser(id: number): void;
    generateUser(): void;
    generateMobileNumber(): string;
    protected render(): unknown;
}
