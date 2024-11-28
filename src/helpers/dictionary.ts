import type { DictionaryDataInterface, RawDictionaryDataInterface } from "@/types/dictionary";
import { RedBlackTree } from "@/structures/red-black-tree";
import { blue, blur, green, indigo, purple, yellow } from "@/helpers/gimmick";
import dictionaryData from "@/assets/dictionary-data.json";

const rawDictionaryData: RawDictionaryDataInterface[] = dictionaryData.data;

const EN_RBT: RedBlackTree = new RedBlackTree();
const ID_RBT: RedBlackTree = new RedBlackTree();

rawDictionaryData.forEach((rawDictionaryData: RawDictionaryDataInterface): void => {
    console.log(rawDictionaryData.keyEng, EN_RBT.add(rawDictionaryData.keyEng, rawDictionaryData.descriptionEng, rawDictionaryData.keyIdn, rawDictionaryData.descriptionIdn));
    console.log(rawDictionaryData.keyIdn, ID_RBT.add(rawDictionaryData.keyIdn, rawDictionaryData.descriptionIdn, rawDictionaryData.keyEng, rawDictionaryData.descriptionEng));
});

const gimmickNodes: DictionaryDataInterface[] = [
    {
        keyEng: "Barrel Roll",
        descriptionEng: "Do a roll",
        keyIdn: "Gulungan Barel",
        descriptionIdn: "Gulung gulung",
        gimmick: () => {
            const app: HTMLElement = document.getElementById("app")!;

            app.classList.add("barrel-roll");

            setTimeout(() => {
                app.classList.remove("barrel-roll");
            }, 5000);
        },
    },
    {
        keyEng: "Flip",
        descriptionEng: "Do a flip",
        keyIdn: "Balik",
        descriptionIdn: "Bolak balik",
        gimmick: () => {
            const app: HTMLElement = document.getElementById("app")!;

            app.classList.add("flip");

            setTimeout(() => {
                app.classList.remove("flip");
            }, 5000);
        },
    },
    {
        keyEng: "Spin",
        descriptionEng: "Do a spin",
        keyIdn: "Muter",
        descriptionIdn: "Muter muter gawe mumet, muter muter gawe mumet, muter ning ngawon, muter ning ngido, muter muter-muter gawe mumet...",
        gimmick: () => {
            const app: HTMLElement = document.getElementById("app")!;

            app.classList.add("spin");

            setTimeout(() => {
                app.classList.remove("spin");
            }, 5000);
        },
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
        gimmick: () => {
            const app: HTMLElement = document.getElementById("app")!;

            app.classList.add("orange");

            setTimeout(() => {
                app.classList.remove("orange");
            }, 5000);
        },
    },
    {
        keyEng: "Yellow",
        descriptionEng: "The color of sunshine and happiness",
        keyIdn: "Kuning",
        descriptionIdn: "Warna sinar matahari dan kebahagiaan",
        gimmick: () => {
            const app: HTMLElement = document.getElementById("app")!;

            app.classList.add("yellow");

            setTimeout(() => {
                app.classList.remove("yellow");
            }, 5000);
        },
    },
    {
        keyEng: "Green",
        descriptionEng: "The color of nature and tranquility",
        keyIdn: "Hijau",
        descriptionIdn: "Warna alam dan ketenangan",
        gimmick: ()=> {
            const app : HTMLElement = document.getElementById("green")!;

            app.classList.add("green");

            setTimeout(() => {
                app.classList.remove("green");
            }, 5000);
        },
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
    console.log(node.keyEng, EN_RBT.add(node.keyEng, node.descriptionEng, node.keyIdn, node.descriptionIdn, node.gimmick));
    console.log(node.keyIdn, ID_RBT.add(node.keyIdn, node.descriptionIdn, node.keyEng, node.descriptionEng, node.gimmick));
});

console.log("EN RBT Total Nodes:", EN_RBT.getTotal());
console.log("ID RBT Total Nodes:", ID_RBT.getTotal());

export { EN_RBT, ID_RBT };
