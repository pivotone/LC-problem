import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as t,c as p,a,b as s,d as n}from"./app-76ea3990.js";const o={},c=a(`<h1 id="_633-平方数之和" tabindex="-1"><a class="header-anchor" href="#_633-平方数之和" aria-hidden="true">#</a> 633. 平方数之和</h1><p>给定一个非负整数 <code>c</code> ，你要判断是否存在两个整数 <code>a</code> 和 <code>b</code>，使得 <code>a2 + b2 = c</code> 。</p><p><strong>示例 1：</strong></p><pre><code>输入：c = 5
输出：true
解释：1 * 1 + 2 * 2 = 5
</code></pre><p><strong>示例 2：</strong></p><pre><code>输入：c = 3
输出：false
</code></pre><h1 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h1>`,7),l=s("p",null,[n("非常简单，从 (int)"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msqrt",null,[s("mi",null,"c")])]),s("annotation",{encoding:"application/x-tex"},"\\sqrt{c}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.04em","vertical-align":"-0.2397em"}}),s("span",{class:"mord sqrt"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8003em"}},[s("span",{class:"svg-align",style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord",style:{"padding-left":"0.833em"}},[s("span",{class:"mord mathnormal"},"c")])]),s("span",{style:{top:"-2.7603em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"hide-tail",style:{"min-width":"0.853em",height:"1.08em"}},[s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"1.08em",viewBox:"0 0 400000 1080",preserveAspectRatio:"xMinYMin slice"},[s("path",{d:`M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z`})])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2397em"}},[s("span")])])])])])])]),n(" 开始遍历，另一端箭头指向0，开始双端遍历")],-1),i=a(`<ul><li>小于c则 pos++</li><li>大于c则 i--</li><li>等于c返回ture</li><li>最后返回false 需要注意的是，和的值可能超过int的上限，需要long来承接两数之和</li></ul><p>#代码</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>bool <span class="token function">judgeSquareSum</span><span class="token punctuation">(</span><span class="token keyword">int</span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>c <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">||</span> c <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> true<span class="token punctuation">;</span>
    <span class="token keyword">int</span> pos <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">16383</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token operator">--</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">long</span> <span class="token keyword">long</span> temp <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">long</span> <span class="token keyword">long</span><span class="token punctuation">)</span>pos <span class="token operator">*</span> pos <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token keyword">long</span> <span class="token keyword">long</span><span class="token punctuation">)</span>i <span class="token operator">*</span> i<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>temp <span class="token operator">&lt;=</span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            pos<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>temp <span class="token operator">==</span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> true<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            temp <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">long</span> <span class="token keyword">long</span><span class="token punctuation">)</span>pos <span class="token operator">*</span> pos <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token keyword">long</span> <span class="token keyword">long</span><span class="token punctuation">)</span>i <span class="token operator">*</span> i<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> false<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),r=[c,l,i];function u(d,k){return t(),p("div",null,r)}const h=e(o,[["render",u],["__file","lc633.html.vue"]]);export{h as default};
