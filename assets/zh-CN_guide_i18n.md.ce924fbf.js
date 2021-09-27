import{_ as n,c as a,o as s,e as t}from"./app.0c76b38c.js";const e='{"title":"国际化","description":"","frontmatter":{"title":"国际化"},"headers":[{"level":2,"title":"全局配置","slug":"全局配置"},{"level":2,"title":"ConfigProvider","slug":"configprovider"},{"level":2,"title":"CDN 用法","slug":"cdn-用法"},{"level":2,"title":"常见问题","slug":"常见问题"},{"level":3,"title":"如果我想要替换默认语言包来减小打包体积，应该怎么做？","slug":"如果我想要替换默认语言包来减小打包体积，应该怎么做？"}],"relativePath":"zh-CN/guide/i18n.md","lastUpdated":1632714748931}',p={},l=[t('<h1 id="国际化" tabindex="-1">国际化 <a class="header-anchor" href="#国际化" aria-hidden="true">#</a></h1><p>Element Plus components are using English <strong>by default</strong>, if you wish you use other languages, you can get you answer by keep reading.</p><h2 id="全局配置" tabindex="-1">全局配置 <a class="header-anchor" href="#全局配置" aria-hidden="true">#</a></h2><p>Element Plus provides global configurations</p><div class="language-typescript"><pre><code><span class="token keyword">import</span> ElementPlus <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span>\n<span class="token keyword">import</span> zhCn <span class="token keyword">from</span> <span class="token string">&#39;element-plus/es/locale/lang/zh-cn&#39;</span>\n\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ElementPlus<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  locale<span class="token operator">:</span> zhCn<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><h2 id="configprovider" tabindex="-1">ConfigProvider <a class="header-anchor" href="#configprovider" aria-hidden="true">#</a></h2><p>Element Plus also provides a Vue component <a href="/en-US/component/config-provider.html">ConfigProvider</a> for globally configuring locale and other settings.</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-config-provider</span> <span class="token attr-name">:locale</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>locale<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>app</span> <span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-config-provider</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> ElConfigProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span>\n\n  <span class="token keyword">import</span> zhCn <span class="token keyword">from</span> <span class="token string">&#39;element-plus/lib/locale/lang/zh-cn&#39;</span>\n\n  <span class="token keyword">export</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span>\n    component<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n      ElConfigProvider<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> v<span class="token punctuation">.</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        locale<span class="token operator">:</span> zhCn<span class="token punctuation">,</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="cdn-用法" tabindex="-1">CDN 用法 <a class="header-anchor" href="#cdn-用法" aria-hidden="true">#</a></h2><p>If you are using Element Plus via CDN, then you need to do this, let&#39;s again take unpkg as an example</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//unpkg.com/element-plus/dist/locale/zh-cn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>\n  app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ElementPlus<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    locale<span class="token operator">:</span> ElementPlus<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>zhCn\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p>完整文档引用于： <a href="/en-US/component/config-provider.html">ConfigProvider</a></p><p><a href="https://github.com/element-plus/element-plus/tree/dev/packages/locale/lang" target="_blank" rel="noopener noreferrer">支持的语言列表</a></p><ul class="language-list"><li>简体中文（zh-cn）</li><li>美国英语(en)</li><li>德语（de）</li><li>葡萄牙语（pt）</li><li>西班牙语（es）</li><li>丹麦语（da）</li><li>法语（fr）</li><li>挪威语（nb-no）</li><li>繁体中文（zh-tw）</li><li>意大利语（it）</li><li>韩语（ko）</li><li>日语（ja）</li><li>荷兰语（nl）</li><li>越南语（vi）</li><li>俄语（ru）</li><li>土耳其语（tr）</li><li>巴西葡萄牙语（pt-br）</li><li>波斯语（fa）</li><li>泰语（th）</li><li>印尼语（id）</li><li>保加利亚语（bg）</li><li>波兰语（pl）</li><li>芬兰语（fi）</li><li>瑞典语（sv）</li><li>希腊语（el）</li><li>斯洛伐克语（sk）</li><li>加泰罗尼亚语（ca）</li><li>捷克语（cs）</li><li>乌克兰语（uk）</li><li>土库曼语（tk）</li><li>泰米尔语（ta）</li><li>拉脱维亚语（lv）</li><li>南非荷兰语（af）</li><li>爱沙尼亚语（et）</li><li>斯洛文尼亚语（sl）</li><li>阿拉伯语（ar）</li><li>希伯来语（he）</li><li>立陶宛语（lt）</li><li>蒙古语（mn）</li><li>哈萨克斯坦语（kk）</li><li>匈牙利语（hu）</li><li>罗马尼亚语（ro）</li><li>库尔德语（ku）</li><li>维吾尔语（ug-cn）</li><li>高棉语（km）</li><li>塞尔维亚语（sr）</li><li>巴斯克语（eu）</li><li>吉尔吉斯语（ky）</li><li>亚美尼亚语 (hy-am)</li><li>克罗地亚 (hr)</li><li>世界语 (eo)</li></ul><p>如果你需要使用其他的语言，欢迎贡献 <a href="https://github.com/element-plus/element-plus/pulls" target="_blank" rel="noopener noreferrer">PR</a> 只需在<a href="https://github.com/element-plus/element-plus/tree/dev/packages/locale/lang" target="_blank" rel="noopener noreferrer">这里</a> 添加一个语言配置文件即可。</p><h2 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-hidden="true">#</a></h2><h3 id="如果我想要替换默认语言包来减小打包体积，应该怎么做？" tabindex="-1">如果我想要替换默认语言包来减小打包体积，应该怎么做？ <a class="header-anchor" href="#如果我想要替换默认语言包来减小打包体积，应该怎么做？" aria-hidden="true">#</a></h3><p>当你的应用默认不是使用<strong>英语</strong>的时候，你需要额外引入一个新的语言，这样会使得没有用到的语言文件被打包，会增加最终产物的文件大小，如果你非常在意最终产物文件的大小，你可以使用 <a href="https://webpack.js.org" target="_blank" rel="noopener noreferrer">webpack</a> 提供的 <a href="https://webpack.js.org/plugins/normal-module-replacement-plugin/#root" target="_blank" rel="noopener noreferrer">NormalModuleReplacementPlugin</a> 插件替换默认语言包。 你可以把以下代码添加进 <code>webpack.config.js</code> 文件中来应用这个插件。</p><blockquote><p>webpack.config.js</p></blockquote><div class="language-typescript"><pre><code><span class="token punctuation">{</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token keyword">new</span> <span class="token class-name">webpack</span><span class="token punctuation">.</span><span class="token function">NormalModuleReplacementPlugin</span><span class="token punctuation">(</span>\n      <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">element-plus[\\/\\\\]lib[\\/\\\\]locale[\\/\\\\]lang[\\/\\\\]en</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>\n      <span class="token string">&#39;element-plus/lib/locale/lang/zh-cn&#39;</span>\n    <span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre></div>',20)];var o=n(p,[["render",function(n,t,e,p,o,i){return s(),a("div",null,l)}]]);export{e as __pageData,o as default};