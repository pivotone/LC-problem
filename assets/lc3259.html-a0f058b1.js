import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as i,a as r}from"./app-26726f55.js";const l={},d=r(`<h1 id="_3259-超级饮料的最大强化能量" tabindex="-1"><a class="header-anchor" href="#_3259-超级饮料的最大强化能量" aria-hidden="true">#</a> 3259 超级饮料的最大强化能量</h1><p>来自未来的体育科学家给你两个整数数组 <code>energyDrinkA</code> 和 <code>energyDrinkB</code>，数组长度都等于 <code>n</code>。这两个数组分别代表 <code>A、B</code> 两种不同能量饮料每小时所能提供的强化能量。 你需要每小时饮用一种能量饮料来 <strong>最大化</strong> 你的总强化能量。然而，如果从一种能量饮料切换到另一种，你需要<strong>等待一小时</strong>来梳理身体的能量体系（在那个小时里你将<strong>不会获得任何强化能量</strong>）。 返回在接下来的 <code>n</code> 小时内你能获得的 <strong>最大</strong> 总强化能量。</p><p><strong>注意</strong> 你可以选择从饮用任意一种能量饮料开始。</p><h1 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h1><p>动态规划，需要两个状态变化，一个是当前选择 <code>energyDrinkA[i]</code> 是，最大值是 <code>max(A[i - 1] + e[i], B[i - 1])</code>，也就是从上一次选择A和上一次选择B中间选择一个最大值出来 相对应的dp转移为</p><ul><li>A[i] = max(A[i - 1] + energyDrinkA[i], B[i - 1])</li><li>B[i] = max(B[i - 1] + energyDrinkB[i], A[i - 1])</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>// 定义max函数
long long max(long long a, long long b) {
    return a &gt; b ? a : b;
}

long long maxEnergyBoost(int* energyDrinkA, int energyDrinkASize, int* energyDrinkB, int energyDrinkBSize) {
    long long *A = malloc(energyDrinkASize * sizeof(long long *));
    long long *B = malloc(energyDrinkBSize * sizeof(long long *));
    memset(A, 0, sizeof(A));
    memset(B, 0, sizeof(B));
    // A[0], B[0] 初始化为对应能量的第一个数值
    A[0] = energyDrinkA[0];
    B[0] = energyDrinkB[0];
    for (int i = 1; i &lt; energyDrinkASize; ++i) {
        // 执行状态转移方程
        A[i] = max(A[i - 1] + energyDrinkA[i], B[i - 1]);
        B[i] = max(B[i - 1] + energyDrinkB[i], A[i - 1]);
    }

    // 返回两个结果中大的那一个
    return max(A[energyDrinkASize - 1], B[energyDrinkBSize - 1]);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),s=[d];function a(o,c){return e(),i("div",null,s)}const v=n(l,[["render",a],["__file","lc3259.html.vue"]]);export{v as default};
