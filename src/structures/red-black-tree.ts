export enum Color {
    Black,
    Red,
}

export enum KeyDirection {
    Left,
    Middle,
    Right,
}

export enum NodeCase {
    ONE = 1,
    TWO = 2,
    THREE = 3,
    FOUR = 4,
    FIVE = 5,
    SIX = 6,
    FIVE_AND_SIX = 56,
}

export class Node {
    private _key: string;
    private _description: string;
    private _keyTranslated: string;
    private _descriptionTranslated: string;
    private _gimmick: (() => any) | null;
    private _color: Color;
    private _parent: Node | null = null;
    private _left: Node | null = null;
    private _right: Node | null = null;

    public constructor(key: string, description: string, keyTranslated: string, descriptionTranslated: string, gimmick: (() => any) | null, color: Color, parent: Node | null) {
        this._key = key;
        this._description = description;
        this._keyTranslated = keyTranslated;
        this._descriptionTranslated = descriptionTranslated;
        this._gimmick = gimmick;
        this._color = color;
        this._parent = parent;
    }

    public get key(): string {
        return this._key;
    }

    public set key(value: string) {
        this._key = value;
    }

    public get description(): string {
        return this._description;
    }

    public set description(value: string) {
        this._description = value;
    }

    public get keyTranslated(): string {
        return this._keyTranslated;
    }

    public set keyTranslated(value: string) {
        this._keyTranslated = value;
    }

    public get descriptionTranslated(): string {
        return this._descriptionTranslated;
    }

    public set descriptionTranslated(value: string) {
        this._descriptionTranslated = value;
    }

    public get gimmick(): (() => any) | null {
        return this._gimmick;
    }

    public set gimmick(value: (() => any) | null) {
        this._gimmick = value;
    }

    public get color(): Color {
        return this._color;
    }

    public set color(value: Color) {
        this._color = value;
    }

    public get parent(): Node | null {
        return this._parent;
    }

    public set parent(value: Node | null) {
        this._parent = value;
    }

    public get left(): Node | null {
        return this._left;
    }

    public set left(node: Node | null) {
        this._left = node;
    }

    public get right(): Node | null {
        return this._right;
    }

    public set right(node: Node | null) {
        this._right = node;
    }

    public toString(): string {
        return `Node(\nkey:\n${this.key}\n\ndescription:\n${this.description}\n\nkeyTranslated:\n${this.keyTranslated}\n\ndescriptionTranslated:\n${this.descriptionTranslated}\n)`;
    }
}

export class RedBlackTree {
    private _root: Node | null = null;

    public get root(): Node | null {
        return this._root;
    }

    public set root(node: Node | null) {
        this._root = node;
    }

    public show(): void {
        console.log(this.toString());
    }

    private compareKeyDirection(key1: string, key2: string): KeyDirection {
        if (key1 < key2) {
            return KeyDirection.Left;
        }

        return key1 === key2 ? KeyDirection.Middle : KeyDirection.Right;
    }

    public getTotal(): number {
        return this.getTotalRecursively(this.root);
    }

    private getTotalRecursively(currentNode: Node | null): number {
        if (currentNode === null) {
            return 0;
        }

        return 1 + this.getTotalRecursively(currentNode.left) + this.getTotalRecursively(currentNode.right);
    }

    private getMinimum(node: Node): Node {
        while (node.left) {
            node = node.left;
        }

        return node;
    }

    private getMaximum(node: Node): Node {
        while (node.right) {
            node = node.right;
        }

        return node;
    }

    public getPreOrder(): string {
        const result: string[] = [];

        this.getPreOrderRecursively(this.root, result);

        return result.join(", ");
    }

    private getPreOrderRecursively(currentNode: Node | null, result: string[]): void {
        if (currentNode !== null) {
            result.push(currentNode.key);
            this.getPreOrderRecursively(currentNode.left, result);
            this.getPreOrderRecursively(currentNode.right, result);
        }
    }

    public getInOrder(): string {
        const result: string[] = [];

        this.getInOrderRecursively(this.root, result);

        return result.join(", ");
    }

    private getInOrderRecursively(currentNode: Node | null, result: string[]): void {
        if (currentNode !== null) {
            this.getInOrderRecursively(currentNode.left, result);
            result.push(currentNode.key);
            this.getInOrderRecursively(currentNode.right, result);
        }
    }

    public getPostOrder(): string {
        const result: string[] = [];

        this.getPostOrderRecursively(this.root, result);

        return result.join(", ");
    }

    private getPostOrderRecursively(currentNode: Node | null, result: string[]): void {
        if (currentNode !== null) {
            this.getPostOrderRecursively(currentNode.left, result);
            this.getPostOrderRecursively(currentNode.right, result);
            result.push(currentNode.key);
        }
    }

    public getNodesByKey(key: string): Node[] {
        const result: Node[] = [];

        this.getNodesByKeyRecursively(this.root, key, result);

        return result;
    }

    private getNodesByKeyRecursively(currentNode: Node | null, key: string, result: Node[]): void {
        if (currentNode !== null) {
            if (key.toLowerCase() === currentNode.key.toLowerCase()) {
                result.push(currentNode);
            }

            this.getNodesByKeyRecursively(currentNode.left, key, result);
            this.getNodesByKeyRecursively(currentNode.right, key, result);
        }
    }

    public getNodesByIncludedKey(key: string): Node[] {
        const result: Node[] = [];

        this.getNodesByIncludedKeyRecursively(this.root, key, result);

        return result;
    }

    private getNodesByIncludedKeyRecursively(currentNode: Node | null, key: string, result: Node[]): void {
        if (currentNode !== null) {
            if (currentNode.key.toLowerCase().includes(key.toLowerCase())) {
                result.push(currentNode);
            }

            this.getNodesByIncludedKeyRecursively(currentNode.left, key, result);
            this.getNodesByIncludedKeyRecursively(currentNode.right, key, result);
        }
    }

    public getNodesByDescription(description: string): Node[] {
        const result: Node[] = [];

        this.getNodesByDescriptionRecursively(this.root, description, result);

        return result;
    }

    private getNodesByDescriptionRecursively(currentNode: Node | null, description: string, result: Node[]): void {
        if (currentNode !== null) {
            if (description.toLowerCase() === currentNode.description.toLowerCase()) {
                result.push(currentNode);
            }

            this.getNodesByDescriptionRecursively(currentNode.left, description, result);
            this.getNodesByDescriptionRecursively(currentNode.right, description, result);
        }
    }

    public getNodesByIncludedDescription(description: string): Node[] {
        const result: Node[] = [];

        this.getNodesByIncludedDescriptionRecursively(this.root, description, result);

        return result;
    }

    private getNodesByIncludedDescriptionRecursively(currentNode: Node | null, description: string, result: Node[]): void {
        if (currentNode !== null) {
            if (currentNode.description.toLowerCase().includes(description.toLowerCase())) {
                result.push(currentNode);
            }

            this.getNodesByIncludedDescriptionRecursively(currentNode.left, description, result);
            this.getNodesByIncludedDescriptionRecursively(currentNode.right, description, result);
        }
    }

    public getNodesBySimiliarity(key: string) {
        const tokenizeKey = (value: string): string[] => {
            return value
                .toLowerCase()
                .replace(/[^a-z0-9_\s]/g, "")
                .split(/\s+/g);
        };

        const removeSuffixFromKey = (value: string): string => {
            return value.replace(/(ing|s)$/, "");
        };

        const removeDuplicateFromArray = (array: string[]): string[] => {
            return Array.from(new Set(array));
        };

        const getKeyWords = (value: string): string[] => {
            const tokenizedKeys: string[] = tokenizeKey(value);

            const noSuffixKeys: string[] = tokenizedKeys.map((tokenizedKey: string): string => removeSuffixFromKey(tokenizedKey));

            const combinedKeys: string[] = [value.toLowerCase()].concat(noSuffixKeys);

            const uniqueKeys: string[] = removeDuplicateFromArray(combinedKeys);

            return uniqueKeys;
        };

        const keyWords: string[] = getKeyWords(key.trim());

        console.log(keyWords);

        const similiarNodes: Node[] = [];

        keyWords.forEach((keyWord: string): void => {
            const similiarNodesByKey: Node[] = this.getNodesByKey(keyWord);
            similiarNodesByKey.forEach((node: Node): void => {
                if (similiarNodes.includes(node) === false) {
                    similiarNodes.push(node);
                }
            });

            const similiarNodesByDescription: Node[] = this.getNodesByDescription(keyWord);
            similiarNodesByDescription.forEach((node: Node): void => {
                if (similiarNodes.includes(node) === false) {
                    similiarNodes.push(node);
                }
            });

            const similiarNodesByIncludedKey: Node[] = this.getNodesByIncludedKey(keyWord);
            similiarNodesByIncludedKey.forEach((node: Node): void => {
                if (similiarNodes.includes(node) === false) {
                    similiarNodes.push(node);
                }
            });

            const similiarNodesByIncludedDescription: Node[] = this.getNodesByIncludedDescription(keyWord);
            similiarNodesByIncludedDescription.forEach((node: Node): void => {
                if (similiarNodes.includes(node) === false) {
                    similiarNodes.push(node);
                }
            });
        });

        console.log(similiarNodes);

        return similiarNodes;
    }

    public isExist(key: string): boolean {
        return this.isExistRecursively(this.root, key);
    }

    private isExistRecursively(currentNode: Node | null, key: string): boolean {
        if (currentNode === null) {
            return false;
        }

        if (key === currentNode.key) {
            return true;
        }

        if (key < currentNode.key) {
            return this.isExistRecursively(currentNode.left, key);
        }

        return this.isExistRecursively(currentNode.right, key);
    }

    public add(key: string, description: string, keyTranslated: string, descriptionTranslated: string, gimmick: (() => any) | null = null): boolean {
        if (this.isExist(key)) {
            return false;
        }

        if (this.root === null) {
            this.root = new Node(key, description, keyTranslated, descriptionTranslated, gimmick, Color.Black, null);

            return true;
        }

        let node: Node = this.addNode(this.root, key, description, keyTranslated, descriptionTranslated, gimmick);
        let childDirection: KeyDirection = this.compareKeyDirection(node.key, node.parent!.key);
        node = node.parent!;

        let addCase: NodeCase;
        let oldParent: Node | null;

        do {
            addCase = this.getAddCase(node);

            switch (addCase) {
                case NodeCase.ONE:
                    break;

                case NodeCase.TWO:
                    oldParent = node.parent!;
                    node = this.addCaseTwo(node)!;

                    if (node) {
                        childDirection = this.compareKeyDirection(oldParent.key, oldParent.parent!.key);
                    }

                    oldParent = null;

                    break;

                case NodeCase.FOUR:
                    node.color = Color.Black;

                    break;

                case NodeCase.FIVE_AND_SIX:
                    this.addCaseFiveSix(node, this.compareKeyDirection(node.key, node.parent!.key), childDirection);

                    break;
            }
        } while (addCase === NodeCase.TWO && node);

        return true;
    }

    private addNode(node: Node, key: string, description: string, keyTranslated: string, descriptionTranslated: string, gimmick: (() => any) | null): Node {
        let newNode: Node;

        while (true) {
            if (this.compareKeyDirection(key, node.key) === KeyDirection.Left) {
                if (!node.left) {
                    newNode = new Node(key, description, keyTranslated, descriptionTranslated, gimmick, Color.Red, node);
                    node.left = newNode;

                    break;
                } else {
                    node = node.left;
                }
            } else {
                if (!node.right) {
                    newNode = new Node(key, description, keyTranslated, descriptionTranslated, gimmick, Color.Red, node);
                    node.right = newNode;

                    break;
                } else {
                    node = node.right;
                }
            }
        }

        return newNode;
    }

    private getAddCase(node: Node): NodeCase {
        if (node.color == Color.Black) {
            return NodeCase.ONE;
        } else if (!node.parent) {
            return NodeCase.FOUR;
        } else {
            const grandParent: Node = node.parent;
            const parentDirection: KeyDirection = this.compareKeyDirection(node.key, node.parent!.key);
            const uncle: Node | null = parentDirection === KeyDirection.Left ? grandParent.right : grandParent.left;

            if (!uncle || uncle.color === Color.Black) {
                return NodeCase.FIVE_AND_SIX;
            }

            return NodeCase.TWO;
        }
    }

    private addCaseTwo(node: Node): Node | null {
        const grandParent: Node = node.parent!;
        const parentDirection: KeyDirection = this.compareKeyDirection(node.key, node.parent!.key);
        const uncle: Node = parentDirection === KeyDirection.Left ? grandParent.right! : grandParent.left!;

        node.color = Color.Black;
        uncle.color = Color.Black;
        grandParent.color = Color.Red;

        if (!node.parent!.parent) {
            node.parent!.color = Color.Red;
        }

        return node.parent!.parent;
    }

    private addCaseFiveSix(node: Node, parentDirection: KeyDirection, childDirection: KeyDirection): Node {
        if (parentDirection === KeyDirection.Left) {
            if (childDirection === KeyDirection.Right) {
                node = this.rotateLeft(node);
            }

            node = this.rotateRight(node.parent!);
            node.color = Color.Black;
            node.right!.color = Color.Red;
        } else {
            if (childDirection === KeyDirection.Left) {
                node = this.rotateRight(node);
            }

            node = this.rotateLeft(node.parent!);
            node.color = Color.Black;
            node.left!.color = Color.Red;
        }

        return node;
    }

    private rotateLeft(node: Node): Node {
        const temp1: Node | null = node;
        const temp2: Node | null = node.right!.left;

        node = node.right!;
        node.parent = temp1.parent;

        if (node.parent) {
            if (this.compareKeyDirection(node.key, node.parent!.key) === KeyDirection.Left) {
                node.parent.left = node;
            } else {
                node.parent.right = node;
            }
        }

        node.left = temp1;
        node.left.parent = node;
        node.left.right = temp2;

        if (temp2) {
            node.left.right!.parent = temp1;
        }

        if (!node.parent) {
            this.root = node;
        }

        return node;
    }

    private rotateRight(node: Node): Node {
        const temp1: Node | null = node;
        const temp2: Node | null = node.left!.right;

        node = node.left!;
        node.parent = temp1.parent;

        if (node.parent) {
            if (this.compareKeyDirection(node.key, node.parent!.key) === KeyDirection.Left) {
                node.parent.left = node;
            } else {
                node.parent.right = node;
            }
        }

        node.right = temp1;
        node.right.parent = node;
        node.right.left = temp2;

        if (temp2) {
            node.right.left!.parent = temp1;
        }

        if (!node.parent) {
            this.root = node;
        }

        return node;
    }

    public remove(key: string): boolean {
        if (this.root === null) {
            return false;
        }

        if (!this.isExist(key)) {
            return false;
        }

        let node: Node = this.removeNode(this.root, key);
        node = this.removeSimpleCases(node)!;

        if (!node) {
            return true;
        }

        this.removeLeaf(node.parent!, this.compareKeyDirection(node.key, node.parent!.key));

        do {
            node = this.removeColor(node)!;
        } while (node && node.parent);

        return true;
    }

    private removeNode(node: Node, key: string): Node {
        while (true) {
            const direction: KeyDirection = this.compareKeyDirection(key, node.key);

            if (direction === KeyDirection.Left) {
                node = node.left!;
            } else if (direction === KeyDirection.Right) {
                node = node.right!;
            } else {
                break;
            }
        }

        return node;
    }

    private getRemoveCase(node: Node): NodeCase {
        const direction: KeyDirection = this.compareKeyDirection(node.key, node.parent!.key);

        const sibling: Node = direction === KeyDirection.Left ? node.parent!.right! : node.parent!.left!;
        const closeNephew: Node = direction === KeyDirection.Left ? sibling.left! : sibling.right!;
        const farNephew: Node = direction === KeyDirection.Left ? sibling.right! : sibling.left!;

        if (sibling.color == Color.Red) {
            return NodeCase.THREE;
        } else if (farNephew && farNephew.color == Color.Red) {
            return NodeCase.SIX;
        } else if (closeNephew && closeNephew.color == Color.Red) {
            return NodeCase.FIVE;
        } else if (node.parent!.color == Color.Red) {
            return NodeCase.FOUR;
        } else {
            return NodeCase.ONE;
        }
    }

    private removeSimpleCases(node: Node): Node | null {
        if (!node.parent && !node.left && !node.right) {
            this.root = null;

            return null;
        }

        if (node.left && node.right) {
            const successor: Node = this.getMinimum(node.right!);
            node.key = successor.key;
            node = successor;
        }

        if (node.color == Color.Red) {
            this.removeLeaf(node.parent!, this.compareKeyDirection(node.key, node.parent!.key));

            return null;
        }

        return this.removeBlackNode(node);
    }

    private removeLeaf(node: Node, childDirection: KeyDirection): void {
        if (childDirection === KeyDirection.Left) {
            node.left = null;
        } else {
            node.right = null;
        }
    }

    private removeBlackNode(node: Node): Node | null {
        const child: Node | null = node.left ?? node.right;

        if (!child) {
            return node;
        }

        child.color = Color.Black;
        child.parent = node.parent;

        const childDirection: KeyDirection = !node.parent ? KeyDirection.Middle : this.compareKeyDirection(node.key, node.parent!.key);

        this.transplant(node.parent!, child, childDirection);

        return null;
    }

    private removeColor(node: Node): Node | null {
        const removeCase: NodeCase = this.getRemoveCase(node);

        const direction: KeyDirection = this.compareKeyDirection(node.key, node.parent!.key);

        const sibling: Node = direction === KeyDirection.Left ? node.parent!.right! : node.parent!.left!;
        const closeNephew: Node = direction === KeyDirection.Left ? sibling.left! : sibling.right!;
        const farNephew: Node = direction === KeyDirection.Left ? sibling.right! : sibling.left!;

        switch (removeCase) {
            case NodeCase.ONE:
                sibling.color = Color.Red;

                return node.parent;

            case NodeCase.THREE:
                this.removeCase3(node, closeNephew, direction);

                break;

            case NodeCase.FOUR:
                this.removeCase4(sibling);

                break;

            case NodeCase.FIVE:
                this.removeCase5(node, sibling, direction);

                break;

            case NodeCase.SIX:
                this.removeCase6(node, farNephew, direction);

                break;
        }

        return null;
    }

    private removeCase3(node: Node, closeNephew: Node, childDirection: KeyDirection): void {
        let sibling: Node = childDirection == KeyDirection.Left ? this.rotateLeft(node.parent!) : this.rotateRight(node.parent!);

        sibling.color = Color.Black;

        if (childDirection == KeyDirection.Left) {
            sibling.left!.color = Color.Red;
        } else {
            sibling.right!.color = Color.Red;
        }

        sibling = closeNephew!;

        const farNephew: Node = childDirection === KeyDirection.Left ? sibling.right! : sibling.left!;
        if (farNephew && farNephew.color == Color.Red) {
            this.removeCase6(node, farNephew, childDirection);

            return;
        }

        closeNephew = childDirection === KeyDirection.Left ? sibling.left! : sibling.right!;
        if (closeNephew && closeNephew.color == Color.Red) {
            this.removeCase5(node, sibling, childDirection);

            return;
        }

        this.removeCase4(sibling);
    }

    private removeCase4(sibling: Node): void {
        sibling.color = Color.Red;
        sibling.parent!.color = Color.Black;
    }

    private removeCase5(node: Node, sibling: Node, childDirection: KeyDirection): void {
        sibling = childDirection == KeyDirection.Left ? this.rotateRight(sibling) : this.rotateLeft(sibling);
        const farNephew: Node = childDirection === KeyDirection.Left ? sibling.right! : sibling.left!;

        sibling.color = Color.Black;
        farNephew.color = Color.Red;

        this.removeCase6(node, farNephew, childDirection);
    }

    private removeCase6(node: Node, farNephew: Node, childDirection: KeyDirection): void {
        const oldParent: Node = node.parent!;
        node = childDirection == KeyDirection.Left ? this.rotateLeft(oldParent) : this.rotateRight(oldParent);

        node.color = oldParent.color;
        oldParent.color = Color.Black;
        farNephew.color = Color.Black;
    }

    private transplant(node: Node, child: Node, childDirection: KeyDirection): void {
        if (!node) {
            this.root = child;
        } else if (!child) {
            this.removeLeaf(node, childDirection);
        } else if (childDirection === KeyDirection.Left) {
            node.left = child;
        } else {
            node.right = child;
        }
    }

    public clear(): void {
        this.root = null;
    }

    public toString(): string {
        if (this.root === null) {
            return "Root(0): null";
        }

        const textList: string[] = [`Root(0): ${this.root.key}\n`];
        this.toStringRecursively(textList, this.root.left, "L");
        this.toStringRecursively(textList, this.root.right, "R");

        return textList.join("");
    }

    private toStringRecursively(textList: string[], currentNode: Node | null, type: string, level: number = 1): void {
        if (currentNode === null) {
            textList.push(`${"  ".repeat(level)}${type}(${level}): null\n`);

            if (type === "R") {
                textList.push("\n");
            }

            return;
        }

        textList.push(`${"  ".repeat(level)}${type}(${level}): ${currentNode.key}\n`);
        this.toStringRecursively(textList, currentNode.left, "L", level + 1);
        this.toStringRecursively(textList, currentNode.right, "R", level + 1);
    }
}
