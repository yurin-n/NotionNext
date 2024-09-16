/* eslint-disable react/no-unknown-property */
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
export { Style }
/* 导航栏签颜色 */
#sticky-nav.bg-indigo-700 {
    background-color: #050c9c;
}

/* 夜间模式导航栏签颜色 */
.dark div#sticky-nav {
 background-color: #050c9c;
}


/* 首页开始阅读按钮 */
.glassmorphism.w-40.z-40 {
    background-color: #a7e6ff;
    border: none;
}

/* 标签颜色 */
a.cursor-pointer.bg-indigo-700 {
    background-color: #3abef9;
}

/* 移动端侧边栏 */
#side-bar>.bg-indigo-700 {
    background-color: #3abef9;
}

/* 移动端侧边栏菜单 */
nav div:hover,li:hover {
    background-color: #3572ef!important;
}

/* 悬浮菜单 */
.right-2 .bg-indigo-700 {
    background-color: #a7e6ff;
}

/* 目录进度条 */
.h-4.bg-indigo-400 {
    background-color: #a7ef66;
}

/* 目录文字高亮 */
nav .text-green-500{
    color: #9c26b0;
}

/* 网站页脚 */ 
footer.bg-indigo-700{
    background-color: #9c26b0;
}

/* 翻页按钮 */
button.bg-indigo-700{
    background-color: #3abef9;
}

/* 文章页隐藏发布时间 */
#article-wrapper > div.wow.fadeInUp.px-10 > section > div.flex.flex-wrap.gap-3.mt-5.text-sm > a {
  display: none;
}


/* 文章页隐藏发布时间 */
#article-wrapper > div.wow.fadeInUp.px-10 > section > div.flex.flex-wrap.gap-3.mt-5.text-sm > a {
  display: none;
}

/* 文章页隐藏更新时间 */
#article-wrapper > div.wow.fadeInUp.px-10 > section > div.flex.flex-wrap.gap-3.mt-5.text-sm > span.whitespace-nowrap {
  display: none;
}

/* 文章页隐藏阅读次数 */
#article-wrapper .busuanzi_container_page_pv {
  display: none ！important;
}

/* 文章页隐藏字数 */
#wordCountWrapper > span:nth-child(1){
 display: none !important;
}

/* 文章页隐藏阅读时长 */
#wordCountWrapper > span:nth-child(2){
 display: none;
}
