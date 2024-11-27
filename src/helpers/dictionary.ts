import type { DictionaryDataInterface, RawDictionaryDataInterface } from "@/types/dictionary";
import { RedBlackTree } from "@/structures/red-black-tree";
import { barrelRoll, blue, blur, flip, green, indigo, orange, purple, spin, yellow } from "@/helpers/gimmick";
import dictionaryData from "@/assets/dictionary-data.json";

const rawDictionaryData: RawDictionaryDataInterface[] = dictionaryData.data;

const EN_RBT: RedBlackTree = new RedBlackTree();
const ID_RBT: RedBlackTree = new RedBlackTree();

rawDictionaryData.forEach((rawDictionaryData: RawDictionaryDataInterface): void => {
    EN_RBT.add(rawDictionaryData.keyEng, rawDictionaryData.descriptionEng, rawDictionaryData.keyIdn, rawDictionaryData.descriptionIdn);
    ID_RBT.add(rawDictionaryData.keyIdn, rawDictionaryData.descriptionIdn, rawDictionaryData.keyEng, rawDictionaryData.descriptionEng);
});

const gimmickNodes: DictionaryDataInterface[] = [
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
    {
        keyEng: "Red",
        descriptionEng: "The color of passion and energy",
        keyIdn: "Merah",
        descriptionIdn: "Warna semangat dan energi",
        gimmick: () => {
            const app: HTMLElement = document.getElementById("app")!;

            app.classList.add("red");

            setTimeout(() => {
                app.classList.remove("red");
            }, 5000);
        },
    },
    {
        keyEng: "Orange",
        descriptionEng: "The color of joy and creativity",
        keyIdn: "Oranye",
        descriptionIdn: "Warna kegembiraan dan kreativitas",
        gimmick: orange,
    },
    {
        keyEng: "Yellow",
        descriptionEng: "The color of sunshine and happiness",
        keyIdn: "Kuning",
        descriptionIdn: "Warna sinar matahari dan kebahagiaan",
        gimmick: yellow,
    },
    {
        keyEng: "Green",
        descriptionEng: "The color of nature and tranquility",
        keyIdn: "Hijau",
        descriptionIdn: "Warna alam dan ketenangan",
        gimmick: green,
    },
    {
        keyEng: "Blue",
        descriptionEng: "The color of calm and serenity",
        keyIdn: "Biru",
        descriptionIdn: "Warna ketenangan dan kedamaian",
        gimmick: blue,
    },
    {
        keyEng: "Indigo",
        descriptionEng: "The color of intuition and perception",
        keyIdn: "Nila",
        descriptionIdn: "Warna intuisi dan persepsi",
        gimmick: indigo,
    },
    {
        keyEng: "Purple",
        descriptionEng: "The color of royalty and luxury",
        keyIdn: "Ungu",
        descriptionIdn: "Warna kerajaan dan kemewahan",
        gimmick: purple,
    },
    {
        keyEng: "Blur",
        descriptionEng: "blur the screen",
        keyIdn: "Buram",
        descriptionIdn: "samar-samar",
        gimmick: blur,
    },
];

gimmickNodes.forEach((node: DictionaryDataInterface): void => {
    EN_RBT.add(node.keyEng, node.descriptionEng, node.keyIdn, node.descriptionIdn, node.gimmick);
    ID_RBT.add(node.keyIdn, node.descriptionIdn, node.keyEng, node.descriptionEng, node.gimmick);
});

export { EN_RBT, ID_RBT };
