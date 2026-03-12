# 部署指南：GitHub + Vercel

从零开始，把你的 portfolio 上线。全程不需要懂代码，按步骤来就行。

---

## 准备工作

你需要：
- 一个 GitHub 账号（免费）→ https://github.com
- 一个 Vercel 账号（免费）→ https://vercel.com
- Node.js 安装在电脑上 → https://nodejs.org（下载 LTS 版本）

---

## Step 1：在 GitHub 创建新仓库

1. 登录 GitHub
2. 右上角点击 **+** → **New repository**
3. Repository name 填：`mattiadesigns`
4. 选择 **Public**（这样 Vercel 免费版可以读取）
5. 不要勾选任何 Initialize 选项
6. 点击 **Create repository**

---

## Step 2：把项目推送到 GitHub

打开你电脑上的终端（Mac：Terminal，Windows：PowerShell）。

进入项目文件夹：
```
cd 你存放项目的路径/mattiadesigns
```

依次运行以下命令：
```
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/你的用户名/mattiadesigns.git
git push -u origin main
```

把 `你的用户名` 替换成你的 GitHub 用户名。

---

## Step 3：在 Vercel 部署

1. 登录 Vercel → https://vercel.com
2. 点击 **Add New Project**
3. 选择 **Import Git Repository**
4. 找到 `mattiadesigns` → 点击 **Import**
5. Framework Preset 选 **Next.js**（Vercel 会自动识别）
6. 其他设置不用改
7. 点击 **Deploy**

等待约 1-2 分钟，部署完成后你会看到一个链接，比如：
```
https://mattiadesigns.vercel.app
```

这就是你的 portfolio 网址了。

---

## Step 4：之后每次更新

只需要在终端运行：
```
git add .
git commit -m "update content"
git push
```

Vercel 会自动检测到更新并重新部署，2分钟内上线。

---

## 自定义域名（可选）

如果你有自己的域名（比如 mattiadesigns.com）：
1. Vercel 项目页面 → **Settings** → **Domains**
2. 输入你的域名 → 按照提示配置 DNS
3. 通常 5-10 分钟生效

---

遇到问题？先看 Vercel 的错误日志（项目页面 → Deployments → 点击最新一次部署）。
