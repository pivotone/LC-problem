import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as e}from"./app-74f7055a.js";const p={},t=e(`<h1 id="_138-复制带随机指针的链表" tabindex="-1"><a class="header-anchor" href="#_138-复制带随机指针的链表" aria-hidden="true">#</a> 138. 复制带随机指针的链表</h1><p>给你一个长度为 n 的链表，每个节点包含一个额外增加的随机指针 random ，该指针可以指向链表中的任何节点或空节点。</p><p>构造这个链表的 深拷贝。 深拷贝应该正好由 n 个 全新 节点组成，其中每个新节点的值都设为其对应的原节点的值。新节点的 next 指针和 random 指针也都应指向复制链表中的新节点，并使原链表和复制链表中的这些指针能够表示相同的链表状态。复制链表中的指针都不应指向原链表中的节点 。</p><p>例如，如果原链表中有 X 和 Y 两个节点，其中 X.random --&gt; Y 。那么在复制链表中对应的两个节点 x 和 y ，同样有 x.random --&gt; y 。</p><p>返回复制链表的头节点。</p><p>用一个由 n 个节点组成的链表来表示输入/输出中的链表。每个节点用一个 [val, random_index] 表示：</p><p>val：一个表示 Node.val 的整数。 random_index：随机指针指向的节点索引（范围从 0 到 n-1）；如果不指向任何节点，则为  null 。 你的代码 只 接受原链表的头节点 head 作为传入参数。</p><p>示例1:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
输出：[[7,null],[13,0],[11,4],[10,2],[1,0]]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>示例2:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = [[1,1],[2,1]]
输出：[[1,1],[2,1]]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>示例3:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = [[3,null],[3,0],[3,null]]
输出：[[3,null],[3,0],[3,null]]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><p>有吊毛称之为 &quot;有丝分裂&quot;, 感觉很形象。(原地在旁边拷贝一抹一模一样的, 然后返回新的)</p><ul><li>遍历链表, 为每个节点建立对应的 copy, 并用一个 <code>Map</code> 保存原节点到新节点的映射。</li><li>再遍历一遍, 通过映射访问新节点, 连上所有的 <code>next</code> 和 <code>random</code> 指针。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
// Definition for a Node.
class Node {
    int val;
    Node next;
    Node random;

    public Node(int val) {
        this.val = val;
        this.next = null;
        this.random = null;
    }
}
*/</span>

<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">Node</span> <span class="token function">copyRandomList</span><span class="token punctuation">(</span><span class="token class-name">Node</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Node</span><span class="token punctuation">,</span> <span class="token class-name">Node</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// old -&gt; new</span>
        <span class="token keyword">var</span> p <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>p <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>p<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            p <span class="token operator">=</span> p<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        p <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>p <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">var</span> newNode <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>
            newNode<span class="token punctuation">.</span>next <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">getOrDefault</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>next<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
            newNode<span class="token punctuation">.</span>random <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">getOrDefault</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>random<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
            p <span class="token operator">=</span> p<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),l=[t];function o(c,i){return s(),a("div",null,l)}const r=n(p,[["render",o],["__file","lc138.html.vue"]]);export{r as default};
