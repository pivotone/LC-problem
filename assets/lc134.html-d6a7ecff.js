import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as n,a as s}from"./app-ce235d56.js";const d={},a=s(`<h1 id="_134-加油站" tabindex="-1"><a class="header-anchor" href="#_134-加油站" aria-hidden="true">#</a> 134. 加油站</h1><p>在一条环路上有 <code>n</code> 个加油站，其中第 <code>i</code> 个加油站有汽油 <code>gas[i]</code> 升。</p><p>你有一辆油箱容量无限的的汽车，从第 <code>i</code> 个加油站开往第 <code>i+1</code> 个加油站需要消耗汽油 <code>cost[i]</code> 升。你从其中的一个加油站出发，开始时油箱为空。</p><p>给定两个整数数组 <code>gas</code> 和 <code>cost</code> ，如果你可以按顺序绕环路行驶一周，则返回出发时加油站的编号，否则返回 <code>-1</code> 。如果存在解，则 <strong>保证</strong> 它是 <strong>唯一</strong> 的。</p><h1 id="解析" tabindex="-1"><a class="header-anchor" href="#解析" aria-hidden="true">#</a> 解析</h1><p>贪心，正常遍历，如果当前 <code>gas</code> &gt; <code>cost</code> 且当前 <code>pos</code> 不为-1，则认为当前为起点，接着遍历。记录之前所有的差值作为最后的判断依据。</p><h1 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h1><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>int canCompleteCircuit(int* gas, int gasSize, int* cost, int costSize) {
    // 总计数
    int count_gas = 0;
    // 当前计数
    int cur_gas = 0;
    // 起始位置 
    int pos = -1;
    // 是否是起始位置
    bool flag = false;
    for (int i = 0; i &lt; gasSize; ++i) {
        if (gas[i] &gt;= cost[i] &amp;&amp; !flag) {
            flag = true;
            pos = i;
        }
        if (flag) {
            cur_gas += gas[i] - cost[i];
            if (cur_gas &lt; 0) {
                flag = false;
                cur_gas = 0;
                pos = -1;
            }
        }
        count_gas += gas[i] - cost[i];
    }
    if (count_gas &lt; 0 || pos == -1) {
        return -1;
    } 
    return pos;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),c=[a];function l(r,o){return e(),n("div",null,c)}const u=i(d,[["render",l],["__file","lc134.html.vue"]]);export{u as default};
