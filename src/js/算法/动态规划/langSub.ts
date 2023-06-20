// 动态规划（Dynamic Programming）是一种解决具有重叠子问题和最优子结构性质的问题的算法思想。
// 具体来说，若一个问题可以被划分为若干个子问题，并且这些子问题重叠，即在求解一个子问题时需要求解其他子问题，
// 那么可以使用动态规划方法来解决这个问题。 同时，若一个问题的最优解包含其子问题的最优解，那么也可以使用动态规划方法来解决这个问题。
// 动态规划有两种实现方式：自顶向下的记忆化搜索和自底向上的递推方式。记忆化搜索将已经求解过的子问题的解保存下来以供以后使用，
// 递推方式则从小规模的子问题开始，逐步求解大规模的子问题。
// 动态规划在算法中的应用非常广泛，例如：最长公共子序列（LCS）、背包问题（Knapsack）、最短路径问题、火车调度等等。

// 解决最长子序列问题

// 例子1: 求解斐波那契数列的第 index 序列; 0、1、1、2、3、5、8、13、21、34、55、89…… 满足：从第3项起，每一项都等于前两项之和。

// 实现1
const getItemByNum = (index: number) => {
  const arr: number[] = [];

  let prePre = 0;
  let pre = 0;
  let total = 0;
  for (let i = 0; i < index; i++) {
    if (i < 2) {
      total = i;
    } else {
      total = pre + prePre;
    }
    prePre = pre;
    pre = total;
    arr.push(total);
  }
  console.log("total-----1>", arr);
};

getItemByNum(10);

// 实现2 
function fibonacci(n: number): number[] {
    // 定义动态规划数组 dp，并初始化 dp[0] 和 dp[1] 的值
    const dp: number[] = [0, 1];
    
    // 递推方式计算 dp[i] 的值
    for (let i = 2; i <= n; i++) {
      dp[i] = dp[i - 1] + dp[i - 2];
    }
    
    // 返回 dp 的值
    return dp;
  }

  const ar = fibonacci(5);
  console.log("total-----2>", ar);

// 例子2: 求最长公共子序列

//
