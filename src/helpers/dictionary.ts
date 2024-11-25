import type { DictionaryDataInterface, RawDictionaryDataInterface } from "@/types/dictionary";
import { RedBlackTree } from "@/structures/red-black-tree";
import { barrelRoll, flip, spin } from "@/helpers/gimmick";
import dictionaryData from "@/assets/dictionary-data.json";

const rawDictionaryData: RawDictionaryDataInterface[] = dictionaryData.data;

const EN_RBT: RedBlackTree = new RedBlackTree();
const ID_RBT: RedBlackTree = new RedBlackTree();

export const gimmickNodes: DictionaryDataInterface[] = [
    {
        keyEng: "Barrel Roll",
        descriptionEng: "Do a roll",
        keyIdn: "Muter Muter",
        descriptionIdn: "Muter muter gawe mumet, muter muter gawe mumet, muter ning ngawon, muter ning ngido, muter muter-muter gawe mumet...",
        gimmick: barrelRoll,
    },
    {
        keyEng: "Flip",
        descriptionEng: "Do a flip",
        keyIdn: "Muter Muter",
        descriptionIdn: "Muter muter",
        gimmick: flip,
    },
    {
        keyEng: "Spin",
        descriptionEng: "Do a spin",
        keyIdn: "Muter Muter",
        descriptionIdn: "Muter muter",
        gimmick: spin,
    },
];

rawDictionaryData.forEach((rawDictionaryData: RawDictionaryDataInterface): void => {
    EN_RBT.add(rawDictionaryData.keyEng, rawDictionaryData.descriptionEng, rawDictionaryData.keyIdn, rawDictionaryData.descriptionIdn);
    ID_RBT.add(rawDictionaryData.keyIdn, rawDictionaryData.descriptionIdn, rawDictionaryData.keyEng, rawDictionaryData.descriptionEng);
});

gimmickNodes.forEach((node: DictionaryDataInterface): void => {
    EN_RBT.add(node.keyEng, node.descriptionEng, node.keyIdn, node.descriptionIdn, node.gimmick);
    ID_RBT.add(node.keyIdn, node.descriptionIdn, node.keyEng, node.descriptionEng, node.gimmick);
});

export { EN_RBT, ID_RBT };
