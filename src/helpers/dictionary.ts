import type { RawDictionaryDataInterface } from "@/types/dictionary"
import { RedBlackTree } from "@/structures/red-black-tree"
import dictionaryData from "@/assets/dictionary-data.json"

const rawDictionaryData: RawDictionaryDataInterface[] = dictionaryData.data;

const EN_RBT: RedBlackTree = new RedBlackTree();
const ID_RBT: RedBlackTree = new RedBlackTree();

rawDictionaryData.forEach((rawDictionaryData: RawDictionaryDataInterface): void => {
  EN_RBT.add(rawDictionaryData.keyEng, rawDictionaryData.descriptionEng, rawDictionaryData.keyIdn, rawDictionaryData.descriptionIdn, rawDictionaryData.gimmick);
  ID_RBT.add(rawDictionaryData.keyIdn, rawDictionaryData.descriptionIdn, rawDictionaryData.keyEng, rawDictionaryData.descriptionEng, rawDictionaryData.gimmick);
});

export {
  EN_RBT,
  ID_RBT,
}
