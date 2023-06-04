// 定义结构
class NodePoint {
  /**
   * 当前值
   */
  value: number;

  /**
   * 指针
   */
  next: NodePoint | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

// 整个单链表
class LinkedList {
  /**
   * 头节点
   */
  head: NodePoint | null;

  constructor() {
    this.head = null;
  }

  // 向链表末尾追加节点
  appendNode = (node: NodePoint) => {
    if (!this.head) {
      this.head = node;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
  };

  // 向链表索引后插入节点
  private currentIndex: number = 0;
  insertNodeByIndex = (node: NodePoint, index: number) => {
    let currentNode = this.head;
    if (this.currentIndex === index) {
      
    }
    while(currentNode?.next && this.currentIndex !== index) {
      currentNode = currentNode.next;
    }
  };
}

// 执行
const list = new LinkedList();
list.appendNode(new NodePoint(1));
list.appendNode(new NodePoint(2));
list.appendNode(new NodePoint(3));
console.log("list----->", JSON.stringify(list.head));

let currentPoint = list.head;
const listNode: number[] = [];
currentPoint?.value && listNode.push(currentPoint.value);
while (currentPoint?.next) {
  currentPoint = currentPoint.next;
  listNode.push(currentPoint.value);
}
console.log("list value----->", listNode);
