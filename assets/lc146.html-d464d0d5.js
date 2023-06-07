import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as c,c as p,b as n,d as s,e as l,a as i}from"./app-8cd3c002.js";const o={},u=n("h1",{id:"_146-lru-缓存",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_146-lru-缓存","aria-hidden":"true"},"#"),s(" 146. LRU 缓存")],-1),d={href:"https://leetcode.cn/problems/lru-cache",target:"_blank",rel:"noopener noreferrer"},r=i(`<p>请你设计并实现一个满足  LRU (最近最少使用) 缓存 约束的数据结构。 实现 LRUCache 类： LRUCache(int capacity) 以 正整数 作为容量 capacity 初始化 LRU 缓存 int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。 void put(int key, int value) 如果关键字 key 已经存在，则变更其数据值 value ；如果不存在，则向缓存中插入该组 key-value 。如果插入操作导致关键字数量超过 capacity ，则应该 逐出 最久未使用的关键字。 函数 get 和 put 必须以 O(1) 的平均时间复杂度运行。</p><p>示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入
[&quot;LRUCache&quot;, &quot;put&quot;, &quot;put&quot;, &quot;get&quot;, &quot;put&quot;, &quot;get&quot;, &quot;put&quot;, &quot;get&quot;, &quot;get&quot;, &quot;get&quot;]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
输出
[null, null, null, 1, null, -1, null, -1, 3, 4]

解释
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // 缓存是 {1=1}
lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
lRUCache.get(1);    // 返回 1
lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
lRUCache.get(2);    // 返回 -1 (未找到)
lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
lRUCache.get(1);    // 返回 -1 (未找到)
lRUCache.get(3);    // 返回 3
lRUCache.get(4);    // 返回 4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><p>哈希表 + 双链表</p><p>这里介绍一下 Java 中的 <code>LinkedHashMap</code>, 之前没有用过, 看到这题之后才发现 LRU 缓存是其一个非常典型的使用场景。</p><p><code>LinkedHashMap</code> 是一个有序的 <code>HashMap</code>, 可以通过重写 <code>LinkedHashMap#removeEldestEntry</code> 方法来控制其溢出时删除行为。</p><ul><li>构造函数中指定 capacity</li><li>重写 <code>removeEldestEntry</code></li><li>之后在每次插入的时候 <code>LinkedHashMap</code> 会根据上面重写的条件删除最老的 <code>key</code></li></ul><blockquote><p>如果是手撕肯定是要自己手写的。这里主要是介绍一下 <code>LinkedHashMap</code></p></blockquote><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">LRUCache</span> <span class="token keyword">extends</span> <span class="token class-name">LinkedHashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>

    <span class="token keyword">final</span> <span class="token keyword">int</span> capacity<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">LRUCache</span><span class="token punctuation">(</span><span class="token keyword">int</span> capacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>capacity<span class="token punctuation">,</span> <span class="token number">0.75F</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>capacity <span class="token operator">=</span> capacity<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">int</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">getOrDefault</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">put</span><span class="token punctuation">(</span><span class="token keyword">int</span> key<span class="token punctuation">,</span> <span class="token keyword">int</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">boolean</span> <span class="token function">removeEldestEntry</span><span class="token punctuation">(</span><span class="token class-name">Map<span class="token punctuation">.</span>Entry</span> eldest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>capacity<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * Your LRUCache object will be instantiated and called as such:
 * LRUCache obj = new LRUCache(capacity);
 * int param_1 = obj.get(key);
 * obj.put(key,value);
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function k(v,m){const a=t("ExternalLinkIcon");return c(),p("div",null,[u,n("p",null,[n("a",d,[s("https://leetcode.cn/problems/lru-cache"),l(a)])]),r])}const y=e(o,[["render",k],["__file","lc146.html.vue"]]);export{y as default};
