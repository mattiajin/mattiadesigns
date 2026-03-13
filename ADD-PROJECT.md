# 添加新项目指南（v2）

v2 版本起，所有内容统一在 `content.json` 管理。添加新项目只需 3 步。

---

## Step 1：在 content.json 添加项目数据

打开 `content.json`，在 `projects` 数组末尾添加一个新对象：

```json
{
  "id": "my-new-project",
  "enabled": true,
  "tags": ["AI", "UX"],
  "heroImage": "",
  "heroColor": "#E8E4DC",
  "title": { "en": "My New Project", "zh": "我的新项目" },
  "summary": {
    "en": "One sentence description.",
    "zh": "一句话描述。"
  },
  "metric": { "en": "+45% efficiency", "zh": "+45% 效率" },
  "role": { "en": "Product Design", "zh": "产品设计" },
  "timeline": { "en": "10 weeks", "zh": "10 周" },
  "team": { "en": "Solo", "zh": "独立完成" },
  "tools": ["Figma"],
  "myContribution": { "en": "...", "zh": "..." },
  "nextProject": "ai-meeting-insights",
  "sections": {
    "problem": {
      "heading": { "en": "Heading", "zh": "标题" },
      "body": { "en": "Body text.", "zh": "正文。" },
      "image": ""
    },
    "research": { "heading": {...}, "body": {...}, "image": "" },
    "process":  { "heading": {...}, "body": {...}, "image": "" },
    "solution": { "heading": {...}, "body": {...}, "image": "" },
    "impact": {
      "heading": {...},
      "body": {...},
      "metrics": [
        { "label": { "en": "Metric name", "zh": "指标名称" }, "value": "+X%", "baseline": "" }
      ]
    },
    "reflection": { "heading": {...}, "body": {...} }
  }
}
```

注意：`id` 只能用英文和连字符，必须和下一步的文件名一致。

---

## Step 2：创建页面文件

在 `pages/projects/` 复制任意一个文件，改名为 `my-new-project.js`。

打开文件，把里面的 id 改成你的新 id：

```js
const project = content.projects.find(p => p.id === 'my-new-project')
```

就这一处改动。

---

## Step 3：推送上线

```
git add .
git commit -m "add project: my-new-project"
git push
```

Vercel 自动部署，约 2 分钟上线。

---

## 替换图片

1. 把图片放进 `public/images/`，比如 `project-hero.png`
2. 在 `content.json` 里找到该项目，把 `"heroImage": ""` 改成 `"heroImage": "/images/project-hero.png"`
3. 各 section 的 `"image": ""` 同理

---

## 控制显示/隐藏

不想显示某个项目，把 `"enabled": false` 即可，不需要删除内容。

---

## 修改个人信息

全部在 `content.json` 的 `person` 字段：
- 邮箱：`person.email`
- Hero 文字：`person.heroTagline`
- About 简介：`person.aboutBio`

社交平台在 `social` 数组，`enabled: false` 的会自动隐藏。
