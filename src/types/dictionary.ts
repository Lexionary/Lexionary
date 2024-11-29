export enum Language {
    BAHASA_INDONESIA = "IDN",
    ENGLISH = "ENG",
}

export interface RawDictionaryDataInterface {
    keyEng: string;
    descriptionEng: string;

    keyIdn: string;
    descriptionIdn: string;
}

export interface DictionaryDataInterface extends RawDictionaryDataInterface {
    gimmick?: (() => any) | null;
}
