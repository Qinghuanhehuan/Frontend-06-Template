### 学习笔记

- 实现地图编辑器：

  - 样式问题解决：父容器添加同样的line-height；父容器设置font-size:0

- 广度优先搜索

  - push + shift 组成**队列**（先进先出）

- 异步可视化

  - 添加sleep函数；修改点的背景色

- 处理路径

  - 通过每个节点的**前驱点**寻找

- 启发式搜索

  - 实现**Sorted类**，取的时候拿队列里的**最小值**
  - 计算当前点距终点的平方距离

- 最短路径：前驱点的读写

- 修改数据结构为二叉堆：

  - 二叉树是一种树形结构；特点：每个节点最多只有两个分支节点；一颗二叉树通常由根节点，分支节点，叶子结点组成
  - 分类：完全二叉树和满二叉树；left = index*2+1,right=index*2+2,序数>=floor(N/2)都是叶子节点
  - 二叉堆：由一颗完全二叉树表示结构，用一个数组表示，需满足：父节点的键值大于等于（小于等于）任何子节点；父节点的键值大于等于每个子节点键值时，为**最大堆**（**最小堆**）
  - 主要操作：insert/delete/max-hepify/rebuildHeap/sort

  ```js
  /**
   * 最大堆
   */
  function left(i) {
   return i * 2 + 1;
  }
  function right(i) {
   return i * 2 + 2;
  }
  function swap(A, i, j) {
   const t = A[i];
   A[i] = A[j];
   A[j] = t;
  }
  class Heap {
   constructor(arr) {
    this.data = [...arr];
    this.size = this.data.length;
   }
   /**
    * 重构堆
    */
   rebuildHeap() {
    const L = Math.floor(this.size / 2);
    for (let i = L - 1; i >= 0; i--) {
     this.maxHeapify(i);
    }
   }
   isHeap() {
    const L = Math.floor(this.size / 2);
    for (let i = L - 1; i >= 0; i++) {
     const l = this.data[left(i)] || Number.MIN_SAFE_INTEGER;
     const r = this.data[right(i)] || Number.MIN_SAFE_INTEGER;
     const max = Math.max(this.data[i], l, r);
     if (max !== this.data[i]) {
      return false;
     }
     return true;
    }
   }
   sort() {
    for (let i = this.size - 1; i > 0; i--) {
     swap(this.data, 0, i);
     this.size--;
     this.maxHeapify(0);
    }
   }
   insert(key) {
    this.data[this.size++] = key;
    if (this.isHeap()) {
     return;
    }
    this.rebuildHeap();
   }
   delete(index) {
    if (index >= this.size) {
     return;
    }
    this.data.splice(index, 1);
    this.size--;
    if (this.isHeap()) {
     return;
    }
    this.rebuildHeap();
   }
   /**
    * 堆的其他地方都满足性质
    * 唯独跟节点，重构堆性质
    * @param {*} i
    */
   maxHeapify(i) {
    let max = i;
    if (i >= this.size) {
     return;
    }
    // 求左右节点中较大的序号
    const l = left(i);
    const r = right(i);
    if (l < this.size && this.data[l] > this.data[max]) {
     max = l;
    }
    if (r < this.size && this.data[r] > this.data[max]) {
     max = r;
    }
    // 如果当前节点最大，已经是最大堆
    if (max === i) {
     return;
    }
    swap(this.data, i, max);
    // 递归向下继续执行
    return this.maxHeapify(max);
   }
  }
  module.exports = Heap;
  ```

  

