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

// 例子2: 假设有一个长度为 n 的数组 arr，如何找到其中最大的子序列和？其中子序列是指原数组中连续的一段数所组成的序列。
// 可以使用动态规划的思想，定义一个数组 dp，其中 dp[i] 表示以 arr[i] 结尾的最大子序列和，
// 那么状态转移方程即为 dp[i] = max(dp[i-1], 0) + arr[i]。其中若 dp[i-1] 大于 0，则表示以 i-1 结尾的最大子序列和对 dp[i] 有贡献，
// 否则不考虑 dp[i-1]。最终最大子序列和为 dp 数组中的最大值。

// [-2, 1, -3, 4, -1, 2, 1, -5, 4]; 求出最大和子序；

const getMax = (arr: number[]) => {
    const mS = [];
    for () {

    }
};
getMax([-2, 1, -3, 4, -1, 2, 1, -5, 4]);


//例子3：最长公共子序列问题（Longest Common Subsequence，LCS）是求两个字符串中最长公共子序列的问题。公共子序列不要求连续，只需要在两个字符串中按照顺序出现即可。
// 例如，对于字符串 "ABCDGH" 和 "AEDFHR"，它们的最长公共子序列是 "ADH"。


