# 徐嘉程 · Jiacheng Xu

中英双语个人学术主页，使用原生 HTML、CSS 和 JavaScript，无需构建。

## 内容与维护

- `index.html`：个人资料、教育背景、主修课程、研究经历和技术能力；通过 `data-zh` / `data-en` 维护双语文案。
- `data.js`：七篇论文、六项竞赛及挑战、八条荣誉记录。论文的 `status` 单独维护，不根据会议年份自动推断接收状态。
- `app.js`：语言与主题切换、论文折叠、全部展开/收起、论文锚点定位和目录高亮。
- `style.css`：奶油色背景、米色内容块、侧栏与响应式布局；包含对应深色模式。
- `assets/portrait.jpg`：原简历中的本人照片。
- 五张方法图依次对应 `worldvln.png`、`spectra.png`、`sawman.png`、`kdd.png`、`lightcurve-moe.png`，原图保留，不裁切。未提供图片的论文不使用替代示意图。

论文默认收起，点击条目展开研究内容和完整原图；展开状态在语言切换时保留。点击研究经历中的论文链接也会自动展开相应论文。语言与主题偏好仅保存在访问者的浏览器中。

## 本地预览与发布

运行 `python3 -m http.server 8080`，访问 http://localhost:8080。

GitHub Pages 使用 `main` 分支根目录。中文直达链接为 `?lang=zh`，英文为 `?lang=en`。论文可通过 `#paper-worldvln` 等锚点直接访问。

## 资料依据与设计参考

学术信息依据本人提供的简历，论文图与相关方法描述依据本人提供的五张图片。硕士入学年份按 2026 年 9 月提供的“明年入学”信息写为 2027。未公开电话或原始简历文件；凭据不保存在项目中。

配色、资料侧栏、正文信息组织和折叠展示参考 [Jiacheng Liu's Homepage](https://tammytcl.github.io/Liu_Homepage/) 及其 [源代码](https://github.com/Tammytcl/Liu_Homepage)。本站独立实现页面与交互，不包含参考作者的个人资料、论文或图片。
