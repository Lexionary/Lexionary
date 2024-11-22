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
  private _key: string
  private _color: Color
  private _parent: Node | null = null
  private _left: Node | null = null
  private _right: Node | null = null

  public constructor(key: string, color: Color, parent: Node | null) {
    this._key = key
    this._color = color
    this._parent = parent
  }

  public get key(): string {
    return this._key
  }

  public set key(value: string) {
    this._key = value
  }

  public get color(): Color {
    return this._color
  }

  public set color(value: Color) {
    this._color = value
  }

  public get parent(): Node | null {
    return this._parent
  }

  public set parent(value: Node | null) {
    this._parent = value
  }

  public get left(): Node | null {
    return this._left
  }

  public set left(node: Node | null) {
    this._left = node
  }

  public get right(): Node | null {
    return this._right
  }

  public set right(node: Node | null) {
    this._right = node
  }
}

export class RedBlackTree {
  private _root: Node | null = null

  public get root(): Node | null {
    return this._root
  }

  public set root(node: Node | null) {
    this._root = node
  }

  public show(): void {
    console.log(this.toString())
  }

  private compareKeyDirection(key1: string, key2: string): KeyDirection {
    if (key1 < key2) {
      return KeyDirection.Left
    }

    return key1 === key2 ? KeyDirection.Middle : KeyDirection.Right
  }

  public getTotal(): number {
    return this.getTotalRecursively(this.root)
  }

  private getTotalRecursively(currentNode: Node | null): number {
    if (currentNode === null) {
      return 0
    }

    return (
      1 + this.getTotalRecursively(currentNode.left) + this.getTotalRecursively(currentNode.right)
    )
  }

  private getMin(node: Node): Node {
    while (node.left) {
      node = node.left
    }

    return node
  }

  private getMax(node: Node): Node {
    while (node.right) {
      node = node.right
    }

    return node
  }

  public getPreOrder(): string {
    const result: string[] = []

    this.getPreOrderRecursively(this.root, result)

    return result.join(', ')
  }

  private getPreOrderRecursively(currentNode: Node | null, result: string[]): void {
    if (currentNode !== null) {
      result.push(currentNode.key)
      this.getPreOrderRecursively(currentNode.left, result)
      this.getPreOrderRecursively(currentNode.right, result)
    }
  }

  public getInOrder(): string {
    const result: string[] = []

    this.getInOrderRecursively(this.root, result)

    return result.join(', ')
  }

  private getInOrderRecursively(currentNode: Node | null, result: string[]): void {
    if (currentNode !== null) {
      this.getInOrderRecursively(currentNode.left, result)
      result.push(currentNode.key)
      this.getInOrderRecursively(currentNode.right, result)
    }
  }

  public getPostOrder(): string {
    const result: string[] = []

    this.getPostOrderRecursively(this.root, result)

    return result.join(', ')
  }

  private getPostOrderRecursively(currentNode: Node | null, result: string[]): void {
    if (currentNode !== null) {
      this.getPostOrderRecursively(currentNode.left, result)
      this.getPostOrderRecursively(currentNode.right, result)
      result.push(currentNode.key)
    }
  }

  public isExist(key: string): boolean {
    return this.isExistRecursively(this.root, key)
  }

  private isExistRecursively(currentNode: Node | null, key: string): boolean {
    if (currentNode === null) {
      return false
    }

    if (key === currentNode.key) {
      return true
    }

    if (key < currentNode.key) {
      return this.isExistRecursively(currentNode.left, key)
    }

    return this.isExistRecursively(currentNode.right, key)
  }

  public add(key: string): boolean {
    if (this.isExist(key)) {
      return false
    }

    if (this.root === null) {
      this.root = new Node(key, Color.Black, null)

      return true
    }

    let node = this.addNode(this.root, key)
    let childDirection = this.compareKeyDirection(node.key, node.parent!.key)
    node = node.parent!

    let addCase: NodeCase
    let oldParent: Node | null

    do {
      addCase = this.getAddCase(node)

      switch (addCase) {
        case NodeCase.ONE:
          break

        case NodeCase.TWO:
          oldParent = node.parent!
          node = this.addCaseTwo(node)!

          if (node) {
            childDirection = this.compareKeyDirection(oldParent.key, oldParent.parent!.key)
          }

          oldParent = null

          break

        case NodeCase.FOUR:
          node.color = Color.Black

          break

        case NodeCase.FIVE_AND_SIX:
          this.addCaseFiveSix(
            node,
            this.compareKeyDirection(node.key, node.parent!.key),
            childDirection,
          )

          break
      }
    } while (addCase === NodeCase.TWO && node)

    return true
  }

  private addNode(node: Node, key: string): Node {
    let newNode: Node

    while (true) {
      if (this.compareKeyDirection(key, node.key) === KeyDirection.Left) {
        if (!node.left) {
          newNode = new Node(key, Color.Red, node)
          node.left = newNode

          break
        } else {
          node = node.left
        }
      } else {
        if (!node.right) {
          newNode = new Node(key, Color.Red, node)
          node.right = newNode

          break
        } else {
          node = node.right
        }
      }
    }

    return newNode
  }

  private getAddCase(node: Node): NodeCase {
    if (node.color == Color.Black) {
      return NodeCase.ONE
    } else if (!node.parent) {
      return NodeCase.FOUR
    } else {
      const grandParent = node.parent
      const parentDirection = this.compareKeyDirection(node.key, node.parent!.key)
      const uncle = parentDirection === KeyDirection.Left ? grandParent.right : grandParent.left

      if (!uncle || uncle.color === Color.Black) {
        return NodeCase.FIVE_AND_SIX
      }

      return NodeCase.TWO
    }
  }

  private addCaseTwo(node: Node): Node | null {
    const grandParent = node.parent!
    const parentDirection = this.compareKeyDirection(node.key, node.parent!.key)
    const uncle = parentDirection === KeyDirection.Left ? grandParent.right! : grandParent.left!

    node.color = Color.Black
    uncle.color = Color.Black
    grandParent.color = Color.Red

    if (!node.parent!.parent) {
      node.parent!.color = Color.Red
    }

    return node.parent!.parent
  }

  private addCaseFiveSix(
    node: Node,
    parentDirection: KeyDirection,
    childDirection: KeyDirection,
  ): Node {
    if (parentDirection === KeyDirection.Left) {
      if (childDirection === KeyDirection.Right) {
        node = this.rotateLeft(node)
      }

      node = this.rotateRight(node.parent!)
      node.color = Color.Black
      node.right!.color = Color.Red
    } else {
      if (childDirection === KeyDirection.Left) {
        node = this.rotateRight(node)
      }

      node = this.rotateLeft(node.parent!)
      node.color = Color.Black
      node.left!.color = Color.Red
    }

    return node
  }

  private rotateLeft(node: Node): Node {
    const temp1: Node | null = node
    const temp2: Node | null = node.right!.left

    node = node.right!
    node.parent = temp1.parent

    if (node.parent) {
      if (this.compareKeyDirection(node.key, node.parent!.key) === KeyDirection.Left) {
        node.parent.left = node
      } else {
        node.parent.right = node
      }
    }

    node.left = temp1
    node.left.parent = node
    node.left.right = temp2

    if (temp2) {
      node.left.right!.parent = temp1
    }

    if (!node.parent) {
      this.root = node
    }

    return node
  }

  private rotateRight(node: Node): Node {
    const temp1: Node | null = node
    const temp2: Node | null = node.left!.right

    node = node.left!
    node.parent = temp1.parent

    if (node.parent) {
      if (this.compareKeyDirection(node.key, node.parent!.key) === KeyDirection.Left) {
        node.parent.left = node
      } else {
        node.parent.right = node
      }
    }

    node.right = temp1
    node.right.parent = node
    node.right.left = temp2

    if (temp2) {
      node.right.left!.parent = temp1
    }

    if (!node.parent) {
      this.root = node
    }

    return node
  }

  public remove(key: string): boolean {
    if (this.root === null) {
      return false
    }

    if (!this.isExist(key)) {
      return false
    }

    let node = this.removeNode(this.root, key)
    node = this.removeSimpleCases(node)!

    if (!node) {
      return true
    }

    this.removeLeaf(node.parent!, this.compareKeyDirection(node.key, node.parent!.key))

    do {
      node = this.removeColor(node)!
    } while (node && node.parent)

    return true
  }

  private removeNode(node: Node, key: string): Node {
    while (true) {
      const direction = this.compareKeyDirection(key, node.key)

      if (direction === KeyDirection.Left) {
        node = node.left!
      } else if (direction === KeyDirection.Right) {
        node = node.right!
      } else {
        break
      }
    }

    return node
  }

  private getRemoveCase(node: Node): NodeCase {
    const direction = this.compareKeyDirection(node.key, node.parent!.key)

    const sibling = direction === KeyDirection.Left ? node.parent!.right! : node.parent!.left!
    const closeNephew = direction === KeyDirection.Left ? sibling.left! : sibling.right!
    const farNephew = direction === KeyDirection.Left ? sibling.right! : sibling.left!

    if (sibling.color == Color.Red) {
      return NodeCase.THREE
    } else if (farNephew && farNephew.color == Color.Red) {
      return NodeCase.SIX
    } else if (closeNephew && closeNephew.color == Color.Red) {
      return NodeCase.FIVE
    } else if (node.parent!.color == Color.Red) {
      return NodeCase.FOUR
    } else {
      return NodeCase.ONE
    }
  }

  private removeSimpleCases(node: Node): Node | null {
    if (!node.parent && !node.left && !node.right) {
      this.root = null

      return null
    }

    if (node.left && node.right) {
      const successor = this.getMin(node.right!)
      node.key = successor.key
      node = successor
    }

    if (node.color == Color.Red) {
      this.removeLeaf(node.parent!, this.compareKeyDirection(node.key, node.parent!.key))

      return null
    }

    return this.removeBlackNode(node)
  }

  private removeLeaf(node: Node, childDirection: KeyDirection): void {
    if (childDirection === KeyDirection.Left) {
      node.left = null
    } else {
      node.right = null
    }
  }

  private removeBlackNode(node: Node): Node | null {
    const child = node.left ?? node.right

    if (!child) {
      return node
    }

    child.color = Color.Black
    child.parent = node.parent

    const childDirection = !node.parent
      ? KeyDirection.Middle
      : this.compareKeyDirection(node.key, node.parent!.key)

    this.transplant(node.parent!, child, childDirection)

    return null
  }

  private removeColor(node: Node): Node | null {
    const removeCase = this.getRemoveCase(node)

    const direction = this.compareKeyDirection(node.key, node.parent!.key)

    const sibling = direction === KeyDirection.Left ? node.parent!.right! : node.parent!.left!
    const closeNephew = direction === KeyDirection.Left ? sibling.left! : sibling.right!
    const farNephew = direction === KeyDirection.Left ? sibling.right! : sibling.left!

    switch (removeCase) {
      case NodeCase.ONE:
        sibling.color = Color.Red

        return node.parent

      case NodeCase.THREE:
        this.removeCase3(node, closeNephew, direction)

        break

      case NodeCase.FOUR:
        this.removeCase4(sibling)

        break

      case NodeCase.FIVE:
        this.removeCase5(node, sibling, direction)

        break

      case NodeCase.SIX:
        this.removeCase6(node, farNephew, direction)

        break
    }

    return null
  }

  private removeCase3(node: Node, closeNephew: Node, childDirection: KeyDirection): void {
    let sibling =
      childDirection == KeyDirection.Left
        ? this.rotateLeft(node.parent!)
        : this.rotateRight(node.parent!)

    sibling.color = Color.Black

    if (childDirection == KeyDirection.Left) {
      sibling.left!.color = Color.Red
    } else {
      sibling.right!.color = Color.Red
    }

    sibling = closeNephew!

    const farNephew = childDirection === KeyDirection.Left ? sibling.right! : sibling.left!

    if (farNephew && farNephew.color == Color.Red) {
      this.removeCase6(node, farNephew, childDirection)

      return
    }

    closeNephew = childDirection === KeyDirection.Left ? sibling.left! : sibling.right!
    if (closeNephew && closeNephew.color == Color.Red) {
      this.removeCase5(node, sibling, childDirection)

      return
    }

    this.removeCase4(sibling)
  }

  private removeCase4(sibling: Node): void {
    sibling.color = Color.Red
    sibling.parent!.color = Color.Black
  }

  private removeCase5(node: Node, sibling: Node, childDirection: KeyDirection): void {
    sibling =
      childDirection == KeyDirection.Left ? this.rotateRight(sibling) : this.rotateLeft(sibling)
    const farNephew = childDirection === KeyDirection.Left ? sibling.right! : sibling.left!

    sibling.color = Color.Black
    farNephew.color = Color.Red

    this.removeCase6(node, farNephew, childDirection)
  }

  private removeCase6(node: Node, farNephew: Node, childDirection: KeyDirection): void {
    const oldParent = node.parent!
    node =
      childDirection == KeyDirection.Left ? this.rotateLeft(oldParent) : this.rotateRight(oldParent)

    node.color = oldParent.color
    oldParent.color = Color.Black
    farNephew.color = Color.Black
  }

  private transplant(node: Node, child: Node, childDirection: KeyDirection): void {
    if (!node) {
      this.root = child
    } else if (!child) {
      this.removeLeaf(node, childDirection)
    } else if (childDirection === KeyDirection.Left) {
      node.left = child
    } else {
      node.right = child
    }
  }

  public clear(): void {
    this.root = null
  }

  public toString(): string {
    if (this.root === null) {
      return 'Root(0): null'
    }

    const textList: string[] = [`Root(0): ${this.root.key}\n`]
    this.toStringRecursively(textList, this.root.left, 'L')
    this.toStringRecursively(textList, this.root.right, 'R')

    return textList.join('')
  }

  private toStringRecursively(
    textList: string[],
    currentNode: Node | null,
    type: string,
    level: number = 1,
  ): void {
    if (currentNode === null) {
      textList.push(`${'  '.repeat(level)}${type}(${level}): null\n`)

      if (type === 'R') {
        textList.push('\n')
      }

      return
    }

    textList.push(`${'  '.repeat(level)}${type}(${level}): ${currentNode.key}\n`)
    this.toStringRecursively(textList, currentNode.left, 'L', level + 1)
    this.toStringRecursively(textList, currentNode.right, 'R', level + 1)
  }
}
