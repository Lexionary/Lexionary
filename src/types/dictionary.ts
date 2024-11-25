export interface RawDictionaryDataInterface {
  keyEng: string;
  descriptionEng: string;

  keyIdn: string;
  descriptionIdn: string;
}

export interface DictionaryDataInterface extends RawDictionaryDataInterface {
  gimmick?: (() => void) | null;
}
