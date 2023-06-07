import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as p,c as o,b as n,d as s,e as c,a as l}from"./app-56d79145.js";const i={},u=n("h1",{id:"_208-实现-trie-前缀树",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_208-实现-trie-前缀树","aria-hidden":"true"},"#"),s(" 208. 实现 Trie (前缀树)")],-1),r={href:"https://leetcode.cn/problems/implement-trie-prefix-tree/",target:"_blank",rel:"noopener noreferrer"},d=l(`<p>Trie（发音类似 &quot;try&quot;）或者说 前缀树 是一种树形数据结构，用于高效地存储和检索字符串数据集中的键。这一数据结构有相当多的应用情景，例如自动补完和拼写检查。</p><p>请你实现 <code>Trie</code> 类：</p><p><code>Trie()</code> 初始化前缀树对象。 <code>void insert(String word)</code> 向前缀树中插入字符串 word 。 <code>boolean search(String word)</code> 如果字符串 word 在前缀树中，返回 <code>true</code>（即，在检索之前已经插入）；否则，返回 <code>false</code> 。 <code>boolean startsWith(String prefix)</code> 如果之前已经插入的字符串 word 的前缀之一为 prefix ，返回 <code>true</code> ；否则，返回 <code>false</code> 。</p><p>示例:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入
[&quot;Trie&quot;, &quot;insert&quot;, &quot;search&quot;, &quot;search&quot;, &quot;startsWith&quot;, &quot;insert&quot;, &quot;search&quot;]
[[], [&quot;apple&quot;], [&quot;apple&quot;], [&quot;app&quot;], [&quot;app&quot;], [&quot;app&quot;], [&quot;app&quot;]]
输出
[null, null, true, false, true, null, true]

解释
Trie trie = new Trie();
trie.insert(&quot;apple&quot;);
trie.search(&quot;apple&quot;);   // 返回 True
trie.search(&quot;app&quot;);     // 返回 False
trie.startsWith(&quot;app&quot;); // 返回 True
trie.insert(&quot;app&quot;);
trie.search(&quot;app&quot;);     // 返回 True
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="分析" tabindex="-1"><a class="header-anchor" href="#分析" aria-hidden="true">#</a> 分析</h2><p>公共前缀字符使用共同的节点来保存, <strong>注意区分对待结尾字符</strong>。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Trie</span> <span class="token punctuation">{</span>

    <span class="token class-name">Node</span> root<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Trie</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>root <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">insert</span><span class="token punctuation">(</span><span class="token class-name">String</span> word<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> chars <span class="token operator">=</span> word<span class="token punctuation">.</span><span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">var</span> curNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> chars<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">var</span> c <span class="token operator">=</span> chars<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">var</span> child <span class="token operator">=</span> curNode<span class="token punctuation">.</span><span class="token function">getChild</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>child <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> curNode <span class="token operator">=</span> curNode<span class="token punctuation">.</span><span class="token function">addChild</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>  <span class="token comment">// create child node if not found</span>
            <span class="token keyword">else</span> <span class="token punctuation">{</span> curNode <span class="token operator">=</span> child<span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token comment">// jump to exist child node</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> chars<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> curNode<span class="token punctuation">.</span>end <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// set end for the last char</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">search</span><span class="token punctuation">(</span><span class="token class-name">String</span> word<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> node <span class="token operator">=</span> <span class="token function">findPrefix</span><span class="token punctuation">(</span>word<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> node <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">?</span> <span class="token boolean">false</span> <span class="token operator">:</span> node<span class="token punctuation">.</span>end<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token class-name">String</span> prefix<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> node <span class="token operator">=</span> <span class="token function">findPrefix</span><span class="token punctuation">(</span>prefix<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> node <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token class-name">Node</span> <span class="token function">findPrefix</span><span class="token punctuation">(</span><span class="token class-name">String</span> prefix<span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// find the target Tire Node by prefix</span>
        <span class="token keyword">var</span> chars <span class="token operator">=</span> prefix<span class="token punctuation">.</span><span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">var</span> curNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> chars<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">var</span> c <span class="token operator">=</span> chars<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">var</span> child <span class="token operator">=</span> curNode<span class="token punctuation">.</span><span class="token function">getChild</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>child <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>   <span class="token comment">// if some node in process has no child, and its no end.</span>
            curNode <span class="token operator">=</span> child<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> curNode<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/* ---------------------- Node Definition ---------------------- */</span>

    <span class="token keyword">static</span> <span class="token keyword">private</span> <span class="token keyword">class</span> <span class="token class-name">Node</span> <span class="token punctuation">{</span>

        <span class="token class-name">Node</span><span class="token punctuation">[</span><span class="token punctuation">]</span> children<span class="token punctuation">;</span>         
        <span class="token keyword">boolean</span> end<span class="token punctuation">;</span>

        <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token keyword">boolean</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>end <span class="token operator">=</span> end<span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">[</span><span class="token number">26</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">Node</span> <span class="token function">addChild</span><span class="token punctuation">(</span><span class="token keyword">char</span> c<span class="token punctuation">,</span> <span class="token keyword">boolean</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// add a new child node</span>
            <span class="token keyword">var</span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>end<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>children<span class="token punctuation">[</span>c <span class="token operator">-</span> <span class="token char">&#39;a&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
            <span class="token keyword">return</span> newNode<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">Node</span> <span class="token function">getChild</span><span class="token punctuation">(</span><span class="token keyword">char</span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// get a child node, null means no such child</span>
            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>children<span class="token punctuation">[</span>c <span class="token operator">-</span> <span class="token char">&#39;a&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * Your Trie object will be instantiated and called as such:
 * Trie obj = new Trie();
 * obj.insert(word);
 * boolean param_2 = obj.search(word);
 * boolean param_3 = obj.startsWith(prefix);
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function k(v,m){const a=t("ExternalLinkIcon");return p(),o("div",null,[u,n("p",null,[n("a",r,[s("https://leetcode.cn/problems/implement-trie-prefix-tree/"),c(a)])]),d])}const w=e(i,[["render",k],["__file","lc208.html.vue"]]);export{w as default};
