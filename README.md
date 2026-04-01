# 玫瑰是玫瑰价值观解读 - GitHub Pages 演示文稿

这是一个基于 aroseisarose 品牌视觉规范打造的在线价值观解读演示文稿。

## 目录结构

```
.
├── index.html              # 主页面
├── assets/
│   ├── css/
│   │   └── style.css       # 样式表
│   ├── js/
│   │   └── main.js         # JavaScript 交互逻辑
│   └── images/             # 图片资源（需手动添加）
└── README.md               # 本说明文件
```

## 部署到 GitHub Pages

### 方法一：直接推送（推荐）

1. **创建 GitHub 仓库**
   ```bash
   # 在 GitHub 上创建新仓库，例如：arose-values-presentation
   ```

2. **推送代码**
   ```bash
   cd github-pages
   git init
   git add .
   git commit -m "Initial commit: aroseisarose values presentation"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/arose-values-presentation.git
   git push -u origin main
   ```

3. **启用 GitHub Pages**
   - 进入仓库 Settings → Pages
   - Source 选择 "Deploy from a branch"
   - Branch 选择 "main"，文件夹选择 "/ (root)"
   - 点击 Save

4. **访问演示文稿**
   - 等待 1-2 分钟构建完成
   - 访问：`https://YOUR_USERNAME.github.io/arose-values-presentation/`

### 方法二：使用 GitHub Desktop

1. 下载并安装 [GitHub Desktop](https://desktop.github.com/)
2. 将 `github-pages` 文件夹拖入 GitHub Desktop
3.  Commit 并推送到新仓库
4. 按方法一的步骤 3 启用 Pages

## 图片资源说明

当前 HTML 中引用的图片路径为：
- `assets/images/bbebf10b25f56a39e8b9c84e4ef99385.jpg`
- `assets/images/457b7d4d94012a155ff74dfffbb00bbb.jpg`
- `assets/images/c47f36b38022f611a7c6fdaf17bd9ff2.jpg`
- `assets/images/a0fa9b89d8112241d82e065277005aa4.jpg`
- `assets/images/e5e2b9983b519db0d9939199dde95a10.jpeg`
- `assets/images/image.png`
- `assets/images/image.png1.png`
- `assets/images/image.png2.png`

**请将原始图片文件复制到 `assets/images/` 目录下**，确保文件名与上述一致。

## 功能特性

- 品牌标准色：aroseisarose pink (#FAEBEF) 作为主背景
- 每页底部显示 aroseisarose LOGO
- 可折叠图片展示（用户留言、CEO 总结等）
- 键盘导航支持（方向键、Home/End）
- 平滑滚动过渡动画
- 响应式设计适配不同屏幕
- 打印优化样式

## 品牌色彩规范

```css
--arose-pink: #FAEBEF;          /* 主背景色 */
--arose-black: #3E2B2F;         /* 主文字色 */
--lavender-blush: #EDD5E2;      /* 辅助色 */
```

## 本地预览

直接双击打开 `index.html` 即可在浏览器中预览。

或使用本地服务器：
```bash
# 使用 Python
python -m http.server 8000

# 使用 Node.js (需要安装 http-server)
npx http-server -p 8000

# 然后访问 http://localhost:8000
```

## 技术栈

- HTML5
- CSS3 (Grid 布局、CSS 变量、Transition 动画)
- Vanilla JavaScript (IntersectionObserver API)
- Google Fonts (Noto Sans SC)

## 许可证

本演示文稿基于 aroseisarose 品牌视觉规范制作，仅供内部使用。
