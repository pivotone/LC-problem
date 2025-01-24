import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as p}from"./app-bdcf2d8a.js";const e={},t=p(`<h1 id="_2944-购买水果需要的最少金币数" tabindex="-1"><a class="header-anchor" href="#_2944-购买水果需要的最少金币数" aria-hidden="true">#</a> 2944. 购买水果需要的最少金币数</h1><p>给你一个 <strong>下标从 <code>1</code> 开始的</strong> 整数数组 <code>prices</code> ，其中 <code>prices[i]</code> 表示你购买第 <code>i</code> 个水果需要花费的金币数目。</p><p>水果超市有如下促销活动：</p><p>如果你花费 <code>prices[i]</code> 购买了下标为 <code>i</code> 的水果，那么你可以免费获得下标范围在 <code>[i + 1, i + i]</code> 的水果。 注意 ，即使你 <strong>可以</strong> 免费获得水果 <code>j</code> ，你仍然可以花费 <code>prices[j]</code> 个金币去购买它以获得它的奖励。</p><p>请你返回获得所有水果所需要的 <strong>最少</strong> 金币数。</p><p>示例 1：</p><pre><code>输入：prices = [3,1,2]

输出：4

解释：

用 prices[0] = 3 个金币购买第 1 个水果，你可以免费获得第 2 个水果。
用 prices[1] = 1 个金币购买第 2 个水果，你可以免费获得第 3 个水果。
免费获得第 3 个水果。
请注意，即使您可以免费获得第 2 个水果作为购买第 1 个水果的奖励，但您购买它是为了获得其奖励，这是更优化的。
</code></pre><p>示例 2：</p><pre><code>输入：prices = [1,10,1,1]

输出：2

解释：

用 prices[0] = 1 个金币购买第 1 个水果，你可以免费获得第 2 个水果。
免费获得第 2 个水果。
用 prices[2] = 1 个金币购买第 3 个水果，你可以免费获得第 4 个水果。
免费获得第 4 个水果。
</code></pre><p>示例 3：</p><pre><code>输入：prices = [26,18,6,12,49,7,45,45]

输出：39

解释：

用 prices[0] = 26 个金币购买第 1 个水果，你可以免费获得第 2 个水果。
免费获得第 2 个水果。
用 prices[2] = 6 个金币购买第 3 个水果，你可以免费获得第 4，5，6（接下来的三个）水果。
免费获得第 4 个水果。
免费获得第 5 个水果。
用 prices[5] = 7 个金币购买第 6 个水果，你可以免费获得第 7 和 第 8 个水果。
免费获得第 7 个水果。
免费获得第 8 个水果。
请注意，即使您可以免费获得第 6 个水果作为购买第 3 个水果的奖励，但您购买它是为了获得其奖励，这是更优化的。
</code></pre><h2 id="解析" tabindex="-1"><a class="header-anchor" href="#解析" aria-hidden="true">#</a> 解析</h2><p>一道标准的dp问题，需要解决的是这个过程种的状态转移如何实现，这里要求的是最小的取值 这里并不是将问题分段处理，分段处理会变成贪心算法，编程局部最优解。 需要给<code>dp[i]</code>赋初值为 <code>dp[i - 1] + prices[i]</code> 同时给出状态转移方程<code>dp[i] = min(dp[i], dp[j] + prices[j]), j + j &gt;= i</code></p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">minimumCoins</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span> prices<span class="token punctuation">,</span> <span class="token keyword">int</span> pricesSize<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> dp<span class="token punctuation">[</span>pricesSize <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> pricesSize<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> prices<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">+</span> j <span class="token operator">&gt;=</span> i<span class="token punctuation">;</span> <span class="token operator">--</span>j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> val <span class="token operator">=</span> dp<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> prices<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">&lt;</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> val<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// printf(&quot;%d %d\\n&quot;, i, dp[i]);</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> dp<span class="token punctuation">[</span>pricesSize<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),o=[t];function c(i,r){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","lc2944.html.vue"]]);export{d as default};
