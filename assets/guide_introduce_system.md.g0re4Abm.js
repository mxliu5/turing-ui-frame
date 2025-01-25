import{_ as i,o as a,c as t,aQ as n}from"./chunks/framework.CDHCSj6k.js";const E=JSON.parse('{"title":"一套代码多套系统使用","description":"","frontmatter":{},"headers":[],"relativePath":"guide/introduce/system.md","filePath":"guide/introduce/system.md","lastUpdated":1736328155000}'),e={name:"guide/introduce/system.md"};function l(p,s,h,k,d,o){return a(),t("div",null,s[0]||(s[0]=[n(`<h1 id="一套代码多套系统使用" tabindex="-1">一套代码多套系统使用 <a class="header-anchor" href="#一套代码多套系统使用" aria-label="Permalink to &quot;一套代码多套系统使用&quot;">​</a></h1><h2 id="实现目的" tabindex="-1">实现目的 <a class="header-anchor" href="#实现目的" aria-label="Permalink to &quot;实现目的&quot;">​</a></h2><p>当一套系统发展到后期，可能会存在多个业务方使用，不同的业务方可能会针对自己的使用场景来提一些定制需求，但是又期望后期系统的需求迭代也能够同步。正常的操作都是拉出一个新的分支进行定制需求开发。 这样存在的问题就是：每次主版本开发一个新的需求，可能都要去往其他不同的定制分支去合并。当分支越来越多的时候，功能合并可能会遗漏。这样使得开发人员维护多套代码也比较费劲 因此维护一套代码，根据不同的启动方式来执行不同的逻辑会显得更加简单易维护</p><h2 id="实现思路" tabindex="-1">实现思路 <a class="header-anchor" href="#实现思路" aria-label="Permalink to &quot;实现思路&quot;">​</a></h2><p>通过不同的“启动方式”或“打包方式”来区分当前“启动”或“部署”的项目 给有定制需求的项目一个特定的系统名称，通过“设置环境变量的值”结合“自定义命令行启动方式”来获取当前启动项目的系统名称，全局通过这个系统名称进行定制需求的逻辑区分</p><h2 id="实现步骤" tabindex="-1">实现步骤 <a class="header-anchor" href="#实现步骤" aria-label="Permalink to &quot;实现步骤&quot;">​</a></h2><h4 id="自定义启动方式实现" tabindex="-1">自定义启动方式实现 <a class="header-anchor" href="#自定义启动方式实现" aria-label="Permalink to &quot;自定义启动方式实现&quot;">​</a></h4><ol><li>添加通用代码环境变量.env</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">//</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .env</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 通用代码环境变量的值取这里</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">VITE_SYSTEM_NAME</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">turing-ui-frame</span></span></code></pre></div><ol start="2"><li>为定制项目如systemA添加环境变量.env.systemA</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">//</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .env.systemA</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> systemA项目环境变量的值取这里</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">VITE_SYSTEM_NAME</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">systemA</span></span></code></pre></div><ol start="3"><li>给systemA项目 添加自定义启动方式</li></ol><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// package.json</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;dev&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vite&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;build&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vite build&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;preview&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vite preview&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;dev:systemA&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vite --mode systemA&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,         </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 启动项目systemA</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;build:systemA&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vite build --mode systemA&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 打包项目systemA</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span></code></pre></div><p><code>dev:systemA: &#39;vite --mode systemA&#39; 设置环境模式 即环境变量的值优先从.env.systemA文件中取</code></p><h4 id="业务逻辑区分实现" tabindex="-1">业务逻辑区分实现 <a class="header-anchor" href="#业务逻辑区分实现" aria-label="Permalink to &quot;业务逻辑区分实现&quot;">​</a></h4><ol><li>可以在全局变量文件中如utils/constants.ts中获取并导出系统名称</li></ol><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// constants.ts</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 当前启动的项目名称</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> SYSTEM_NAME</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">meta</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.env.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">VITE_SYSTEM_NAME</span></span></code></pre></div><ol start="2"><li>在其他文件中使用</li></ol><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">import { SYSTEM_NAME  } from &#39;@/utils/constants&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">// 根据SYSTEM_NAME的值对项目的定制需求进行逻辑区分</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">if (SYSTEM_NAME === &#39;systemA&#39;) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  // 仅当systemA项目执行的定制需求</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="定制样式实现" tabindex="-1">定制样式实现 <a class="header-anchor" href="#定制样式实现" aria-label="Permalink to &quot;定制样式实现&quot;">​</a></h4><ol><li>在App.vue给#app元素添加class类,以项目名称命名</li></ol><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/* 不同项目添加class */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">const systemClassName = import.meta.env.VITE_SYSTEM_NAME</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">document.getElementById(&#39;app&#39;)?.classList.add(systemClassName)</span></span></code></pre></div><ol start="2"><li>将systemA特有的样式代码写在.systemA{} 中写</li></ol><div class="language-scss vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.turing-ui-frame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 通用代码写在这里</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  &amp;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.systemA</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // systemA 系统特有代码写在这里</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>具体的使用场景请根据实际项目需求来定：</p><ol><li>如果开发过程中定制需求比较多，认为同一套代码维护起来比较繁琐那也可以拉出新分支进行开发。做好后期的分支管理，有通用功能开发及时合并到定制分支即可</li><li>如果定制需求比较少，拉一个新的分支比较耗费资源，就可以使用这种方式去实现逻辑区分</li></ol></div>`,25)]))}const c=i(e,[["render",l]]);export{E as __pageData,c as default};
