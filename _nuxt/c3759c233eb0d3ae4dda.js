(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{205:function(e,t){e.exports={attributes:{title:"Migrate Nuxt to TypeScript",slug:"migrate-nuxt-to-typescript",date:"2019-05-15",minute2read:10,description:"Story telling about the steps that I worked on when migrating the Nuxt project from using vanilla JavaScript to using TypeScript",categories:["javascript","nuxt","typescript"],cover:"https://www.mazipan.xyz/content-images/migrate-nuxt-to-typescript/quran-offline.png"},html:"<p>As we all know that the default from the Nuxt project will be to create a code based on JavaScript Vanilla. Whereas the increasingly widespread use of TypeScript among JavaScript developers makes me personally interested in implementing the use of TypeScript on my open source code project.</p>\n<img v-lazyload src=\"/images/placeholder-1x1.png\" data-src=\"/content-images/migrate-nuxt-to-typescript/quran-offline.png\" alt=\"Quran Offline\" height=\"200px\" width=\"200px\">\n<p>The following are the things I worked on in the migration process:</p>\n<h2>Adding tsconfig.json</h2>\n<pre><code class=\"language-javascript\">{\n  &quot;compilerOptions&quot;: {\n    &quot;target&quot;: &quot;es5&quot;,\n    &quot;module&quot;: &quot;esnext&quot;,\n    &quot;moduleResolution&quot;: &quot;node&quot;,\n    &quot;lib&quot;: [&quot;esnext&quot;, &quot;esnext.asynciterable&quot;, &quot;dom&quot;],\n    &quot;esModuleInterop&quot;: true,\n    &quot;experimentalDecorators&quot;: true,\n    &quot;resolveJsonModule&quot;: true,\n    &quot;allowJs&quot;: true,\n    &quot;sourceMap&quot;: true,\n    &quot;strict&quot;: true,\n    &quot;noImplicitAny&quot;: false,\n    &quot;strictNullChecks&quot;: false,\n    &quot;noEmit&quot;: true,\n    &quot;baseUrl&quot;: &quot;.&quot;,\n    &quot;paths&quot;: {\n      &quot;~/*&quot;: [&quot;./*&quot;],\n      &quot;@/*&quot;: [&quot;./*&quot;]\n    },\n    &quot;types&quot;: [&quot;@types/jest&quot;, &quot;@types/node&quot;, &quot;@nuxt/vue-app&quot;]\n  },\n  &quot;exclude&quot;: [\n    &quot;nuxt.config.ts&quot;,\n    &quot;node_modules/**&quot;,\n    &quot;dist/**&quot;,\n    &quot;.nuxt/**&quot;,\n    &quot;tests/**&quot;\n  ]\n}\n</code></pre>\n<p>To add this file, I also need to add the following dependencies:</p>\n<pre><code class=\"language-javascript\">{\n  &quot;@nuxt/typescript&quot;: &quot;2.7.1&quot;,\n  &quot;@types/jest&quot;: &quot;24.0.13&quot;,\n  &quot;@types/node&quot;: &quot;11.13.10&quot;,\n  &quot;typescript&quot;: &quot;3.4.5&quot;\n}\n</code></pre>\n<h2>Update eslintrc.js</h2>\n<pre><code class=\"language-javascript\">module.exports = {\n  plugins: ['@typescript-eslint'],\n  parserOptions: {\n    parser: '@typescript-eslint/parser'\n  },\n  extends: [\n    '@nuxtjs',\n    'plugin:nuxt/recommended',\n  ],\n  rules: {\n    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',\n    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',\n    'no-unused-vars': 'off',\n    'vue/component-name-in-template-casing': [\n      'error',\n      'PascalCase',\n      {\n        ignores: ['nuxt', 'nuxt-link', 'nuxt-child', 'no-ssr']\n      }\n    ],\n    'vue/html-closing-bracket-newline': [\n      'error',\n      {\n        singleline: 'never',\n        multiline: 'never'\n      }\n    ]\n  }\n}\n</code></pre>\n<p>And add some of the following dependencies:</p>\n<pre><code class=\"language-javascript\">{\n  &quot;@nuxtjs/eslint-config&quot;: &quot;0.0.1&quot;,\n  &quot;@typescript-eslint/eslint-plugin&quot;: &quot;1.9.0&quot;\n}\n</code></pre>\n<h2>Rename nuxt.config.js to nuxt.config.ts</h2>\n<p>Change the file extension and make a few changes to the following:</p>\n<pre><code class=\"language-javascript\">import NuxtConfiguration from '@nuxt/config'\nimport {\n  Configuration as WebpackConfiguration\n} from 'webpack'\n\nconst config: NuxtConfiguration = {\n  mode: 'universal',\n  head: {},\n  build: {\n    extend(config: WebpackConfiguration, ctx) {\n    }\n  }\n}\n\nexport default config\n</code></pre>\n<h2>Refactor the Vuex Store</h2>\n<p>Because almost all the components in my project have used the Vuex Store, so I put this as the first for me to refactor before refactor the component. To use Vuex with TypeScript there are few changes compared to when using regular JavaScript, here are the changes that I am working on:</p>\n<h3>Classic Store</h3>\n<p>In this project I still use the Classic Store, which is actually deprecated and will be removed in Nuxt v3 in the future, the following classic store that I created in the <code>store/index.ts</code> file:</p>\n<pre><code class=\"language-javascript\">import Vuex from 'vuex'\n\nimport { state } from './state'\nimport { mutations } from './mutations'\nimport { actions } from './actions'\n\nconst createStore = () =&gt; {\n  return new Vuex.Store({\n    state: state(),\n    mutations,\n    actions\n  })\n}\n\nexport default createStore\n</code></pre>\n<h3>State</h3>\n<p>In the <code>state.ts</code> file, I create an interface that is the type definitions of the state and creates a state with various initial value like the following example:</p>\n<pre><code class=\"language-javascript\">export interface StateType {\n  isShowSidebar: boolean,\n}\n\n// initial state\nexport const state = (): StateType =&gt; ({\n  isShowSidebar: false\n})\n</code></pre>\n<h3>Mutations</h3>\n<p>Vuex itself has provided support for TypeScript by providing data types in return for Mutations by simply importing <code>MutationTree</code> from Vuex, following the sample code:</p>\n<pre><code class=\"language-javascript\">import { MutationTree } from 'vuex'\nimport { StateType } from './state'\nimport { Types } from './types'\n\nexport const mutations: MutationTree&lt;StateType&gt; = {\n  [Types.SET_SHOW_SIDEBAR](state: StateType, data: boolean) {\n    state.isShowSidebar = data\n  }\n}\n</code></pre>\n<h3>Actions</h3>\n<p>For the actions themselves it is almost similar to the mutations in which the data type from Vuex has been provided, such as the following code example:</p>\n<pre><code class=\"language-javascript\">import { ActionTree } from 'vuex'\nimport { StateType } from './state'\nimport { Types } from './types'\n\nexport const actions: ActionTree&lt;StateType, StateType&gt; = {\n  setShowSidebar({ commit }, payload) {\n    commit(Types.SET_SHOW_SIDEBAR, payload)\n  }\n}\n</code></pre>\n<h2>Refactor the Components</h2>\n<p>After successfully refactor the Vuex Store, then we will refactor our component code to support TypeScript.</p>\n<p>To support TypeScript, we need to add some new dependencies like the following:</p>\n<pre><code class=\"language-javascript\">{\n  &quot;vue-class-component&quot;: &quot;7.1.0&quot;,\n  &quot;vue-property-decorator&quot;: &quot;8.1.1&quot;,\n  &quot;vuex-class&quot;: &quot;0.3.2&quot;\n}\n</code></pre>\n<p>First of all, of course we have to change the code in the single component file Vue that previously only <code>&lt;script&gt;&lt;/script&gt;</code> becomes <code>&lt;script lang = &quot;ts&quot;&gt; &lt;/script&gt;</code>so we can support the TypeScript code in the script section . And here is the <code>default.vue</code> layout example that I refactor using TypeScript:</p>\n<pre><code class=\"language-javascript\">import { Component, Vue } from 'vue-property-decorator'\nimport { State, Mutation, Action } from 'vuex-class'\n\nimport ArrowUpIcon from 'vue-ionicons/dist/js/ios-arrow-dropup-circle'\nimport BaseHeader from '../components/BaseHeader.vue'\nimport BaseSidebar from '../components/BaseSidebar.vue'\nimport BaseToast from '../components/BaseToast.vue'\n\n@Component({\n  components: {\n    BaseHeader,\n    BaseSidebar,\n    BaseToast,\n    ArrowUpIcon\n  }\n})\n\nexport default class DefaultLayout extends Vue {\n  showArrowToTop = false;\n\n  @State settingActiveTheme;\n  @State isShowSidebar;\n\n  @Mutation setShowSidebar;\n\n  @Action initDataFromBrowserStorage;\n  @Action setWebshareSupport;\n\n  hideSidebar(): void {\n    this.setShowSidebar(false)\n  }\n\n  handleScroll(): void {\n    this.showArrowToTop = window.pageYOffset &gt; 2000\n  }\n\n  mounted() {\n    window.addEventListener('scroll', this.handleScroll)\n  }\n\n  beforedestroy() {\n    window.removeEventListener('scroll', this.handleScroll)\n  }\n}\n</code></pre>\n<p>As you can see from the code example above, I use <a href=\"https://github.com/kaorun343/vue-property-decorator\">vue-property-decorator ↗️</a> to define the component and use <a href=\"https://github.com/ktsn/vuex-class\">vuex-class ↗️</a> to bind the Vuex Store that was made beforehand so that it can be used in the component. Please visit the respective links to learn more about what we can and cannot do with <code>vue-property-decorator</code> or<code> vuex-class</code>.</p>\n<h2>Refactor the Jest Config</h2>\n<p>There is almost no need to change unit tests other than the path and file name that we are most likely to change the name and location. We only need to match the Jest configuration to support TypeScript as in the following code example:</p>\n<pre><code class=\"language-javascript\">module.exports = {\n  moduleNameMapper: {\n    '^~/(.*)$': '&lt;rootDir&gt;/$1',\n    '^@/(.*)$': '&lt;rootDir&gt;/$1',\n    '^vue$': 'vue/dist/vue.common.js'\n  },\n  moduleFileExtensions: ['js', 'ts', 'vue', 'json'],\n  transform: {\n    '^.+.tsx?$': '&lt;rootDir&gt;/node_modules/ts-jest',\n    '^.+.js$': '&lt;rootDir&gt;/node_modules/babel-jest',\n    '^.+.vue$': '&lt;rootDir&gt;/node_modules/vue-jest'\n  },\n  globals: {\n    'ts-jest': {\n      diagnostics: false\n    }\n  }\n}\n</code></pre>\n<h2>Repository</h2>\n<p><a href=\"https://github.com/mazipan/quran-offline\">🐙 https://github.com/mazipan/quran-offline ↗️</a></p>\n<h3>May useful for you...</h3>\n"}}}]);