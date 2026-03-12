# 添加新项目指南

每次想加一个新 case study，按这个流程来。不需要懂代码。

---

## 总共 3 步

1. 在 `data/projects.js` 登记项目信息
2. 在 `pages/projects/` 复制一个页面文件、改内容
3. 推送到 GitHub，自动上线

---

## Step 1：登记项目信息

打开 `data/projects.js`

你会看到类似这样的结构：

```js
export const projects = [
  {
    slug: 'ai-meeting-insights',     // 项目的 URL 路径，只能用英文和连字符
    title: 'AI Meeting Insights',     // 项目名称，显示在卡片和页面上
    description: '...',               // 一句话描述
    tags: ['AI', 'B2B', 'Workflow'],  // 最多 3 个标签
    role: 'Product Design · AI Interaction',
    timeline: '8 weeks',
    team: 'PM + 2 Engineers',
    tools: 'Figma, FigJam',
    impact: '↓ 40% review time',     // 显示在卡片上的核心指标
    heroColor: '#EEE9E0',             // 占位图的背景色（你替换图片后可以忽略）
    nextProject: 'signal-brand-system', // 下一个项目的 slug
  },
  // ... 其他项目
]
```

在数组末尾加一个新对象，比如：

```js
  {
    slug: 'my-new-project',
    title: 'My New Project',
    description: 'One sentence describing what this project does.',
    tags: ['AI', 'UX'],
    role: 'Product Design',
    timeline: '10 weeks',
    team: 'Solo',
    tools: 'Figma',
    impact: '+45% efficiency',
    heroColor: '#E8E4DC',
    nextProject: 'ai-meeting-insights',  // 指向任意一个已有项目
  },
```

注意：`slug` 必须和你下一步创建的文件名完全一致。

---

## Step 2：复制页面文件

进入 `pages/projects/` 文件夹。

复制任意一个 `.js` 文件，重命名为 `my-new-project.js`（和你的 slug 一致）。

打开文件，找到：
```js
const project = getProject('ai-meeting-insights')
```
改成：
```js
const project = getProject('my-new-project')
```

然后把各个 `cs-section` 里的内容改成你真实的案例内容就行了。

---

## Step 3：推送上线

在终端运行：
```
git add .
git commit -m "add new project: my-new-project"
git push
```

Vercel 自动部署，约 2 分钟后你的新项目页面就上线了。

---

## 替换图片

目前所有图片位置都是文字占位符（`[ hero image ]`）。

替换方法：
1. 把你的图片放进 `public/` 文件夹，比如 `public/images/meeting-hero.png`
2. 在页面文件里找到占位的 `div`，替换成：
   ```jsx
   <img src="/images/meeting-hero.png" alt="AI Meeting Insights" />
   ```

建议图片格式：PNG 或 WebP，宽度建议 1600px 以上。

---

## 修改个人信息

- **邮箱**：全局搜索 `hello@mattiadesigns.com`，替换成你的邮箱
- **LinkedIn**：在 `components/Footer.js` 找到 LinkedIn 链接并修改
- **Hero 文字**：在 `pages/index.js` 修改
- **About 内容**：在 `pages/about.js` 修改

---

就这些。整个流程熟悉之后，加一个新项目大概只需要 15-20 分钟。
