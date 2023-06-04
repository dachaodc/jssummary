// 1.将两个升序链表合并为⼀个新的升序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
// 示例：
// 输⼊：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4

//方法一： 遍历

function getMergeList() {}

class NodeObj {
  /**
   * 当前值
   */
  value: number;

  /**
   * 指向的下一个节点
   */
  next: NodeObj | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

const l1 = new NodeObj(1);
getMergeList();
