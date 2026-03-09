# Nano Banana 2 - AI 图像生成 CLI 工具

[English](README.md) | [中文](README_CN.md)

支持多个 AI 提供商的图像生成命令行工具：**Poyo AI**（Nano Banana 2 模型）和 **Google Gemini**（3.1 Flash & 3 Pro）。支持多分辨率（512-4K）、宽高比、成本追踪、透明背景、参考图像和风格迁移。

同时作为 [Claude Code](https://docs.anthropic.com/en/docs/claude-code) 技能提供 AI 辅助的图像生成工作流。

## ✨ 功能特性

- 🎨 **多 AI 提供商**：Poyo AI（Nano Banana 2）和 Google Gemini
- 📐 **多分辨率**：512px 到 4K（512、1K、2K、4K）
- 🖼️ **宽高比**：1:1、16:9、9:16、4:3、3:4、3:2、2:3、4:5、5:4、21:9
- 🎭 **透明背景**：AI 驱动的绿幕移除
- 🔄 **图像编辑**：用文本提示转换现有图像
- 💰 **成本追踪**：监控 API 支出
- 🤖 **Claude Code 集成**：与 Claude AI 助手配合使用

## 📦 安装

### 系统要求

- [Bun](https://bun.sh) - JavaScript 运行时
- [FFmpeg](https://ffmpeg.org)（可选，用于透明模式）
- [ImageMagick](https://imagemagick.org)（可选，用于透明模式）

### 快速安装

```bash
# 克隆仓库
git clone https://github.com/kingbootoshi/nano-banana-2-skill.git
cd nano-banana-2-skill

# 安装依赖
bun install

# 全局链接
bun link

# 验证安装
nano-banana --help
```

### 安装 FFmpeg 和 ImageMagick（可选）

用于透明背景生成：

```bash
# macOS
brew install ffmpeg imagemagick

# Ubuntu/Debian
sudo apt install ffmpeg imagemagick

# Windows（使用 Chocolatey）
choco install ffmpeg imagemagick
```

## 🔑 API 配置

Nano Banana 2 支持两个 API 提供商：

### 方案 1：Poyo AI（推荐）

Poyo AI 提供 Nano Banana 2 模型，支持异步任务处理。

1. 从 [Poyo AI](https://poyo.ai) 获取 API 密钥
2. 配置环境：

```bash
mkdir -p ~/.nano-banana
cat > ~/.nano-banana/.env << EOF
GEMINI_API_KEY=你的_poyo_api_密钥
GEMINI_BASE_URL=https://api.poyo.ai
EOF
```

**可用模型：**
- `nano-banana-2-new`（别名：`new`）- 文生图和图生图
- `nano-banana-2-new-edit`（别名：`edit`）- 高级图像编辑

### 方案 2：Google Gemini（传统）

使用 Google 官方 Gemini API 进行图像生成。

1. 从 [Google AI Studio](https://aistudio.google.com/apikey) 获取 API 密钥
2. 配置环境：

```bash
mkdir -p ~/.nano-banana
echo "GEMINI_API_KEY=你的_gemini_api_密钥" > ~/.nano-banana/.env
```

**可用模型：**
- `gemini-3.1-flash-image-preview`（别名：`flash`、`nb2`）
- `gemini-3-pro-image-preview`（别名：`pro`、`nb-pro`）

### 配置优先级

CLI 按以下顺序解析配置：

1. `--api-key` 命令行参数
2. `GEMINI_API_KEY` 环境变量
3. 当前目录的 `.env` 文件
4. 仓库根目录的 `.env` 文件
5. `~/.nano-banana/.env`（推荐）

### 环境变量

| 变量 | 说明 | 示例 |
|------|------|------|
| `GEMINI_API_KEY` | 你的 API 密钥 | `sk-xxx` 或 `AIzaSyxxx` |
| `GEMINI_BASE_URL` | API 端点（可选） | `https://api.poyo.ai` |

### 🔀 双 API 快速切换

项目内置了切换脚本，方便在两个 API 之间快速切换：

```bash
# 切换到 Google Gemini（支持本地图片、结构参考）
cp .env.gemini.example ~/.nano-banana/.env

# 切换到 Poyo AI（Nano Banana 2 专用模型）
cp .env.poyo.example ~/.nano-banana/.env
```

**或者在项目目录使用切换脚本：**
```bash
# 切换到 Gemini
source switch-api.sh gemini

# 切换到 Poyo
source switch-api.sh poyo
```

**API 功能对比：**

| 功能 | Poyo AI | Google Gemini |
|------|---------|---------------|
| 本地图片参考 | ❌ 仅支持 URL | ✅ 支持本地文件 |
| 结构保持生成 | ❌ 不支持 | ⚠️ 有限支持 |
| 文生图 | ✅ `new` 模型 | ✅ `flash`/`pro` |
| 图生图编辑 | ✅ `edit` 模型 | ✅ 支持 |
| 异步任务 | ✅ 支持 | ❌ 同步生成 |
| 成本 | ~$0.067/1K | ~$0.067/1K |

**使用建议：**
- 需要**本地图片参考**或**结构保持** → 用 **Gemini**
- 纯文生图或图生图编辑 → 用 **Poyo AI**

## 🚀 使用方法

### 基础示例

```bash
# 使用默认设置生成图像（1K 分辨率）
nano-banana "可爱的机器人吉祥物"

# 指定输出文件名
nano-banana "日落风景" -o 我的日落

# 高分辨率和宽高比
nano-banana "电影场景" -s 2K -a 16:9

# 超高分辨率
nano-banana "精细艺术作品" -s 4K

# 自定义输出目录
nano-banana "标志设计" -o logo -d ~/Pictures
```

### 模型选择

```bash
# Poyo AI - Nano Banana 2（设置 GEMINI_BASE_URL 时为默认）
nano-banana "你的提示词" --model new

# Poyo AI - 图像编辑
nano-banana "你的提示词" --model edit

# Google Gemini - Flash（快速且便宜）
nano-banana "你的提示词" --model flash

# Google Gemini - Pro（最高质量）
nano-banana "你的提示词" --model pro
```

### 宽高比

```bash
# 宽屏（16:9）
nano-banana "电影风景" -a 16:9

# 竖屏（9:16）
nano-banana "手机壁纸" -a 9:16

# 正方形（1:1）
nano-banana "头像图片" -a 1:1

# 超宽屏（21:9）
nano-banana "全景视图" -a 21:9
```

**支持的比例：** `1:1`、`16:9`、`9:16`、`4:3`、`3:4`、`3:2`、`2:3`、`4:5`、`5:4`、`21:9`

### 透明背景

生成带透明背景的资源（需要 FFmpeg 和 ImageMagick）：

```bash
# 角色精灵
nano-banana "像素艺术角色" -t -o character

# 标志
nano-banana "极简科技标志" -t -o logo

# 游戏资源
nano-banana "宝箱图标" -t -o chest
```

**工作原理：**
1. AI 在绿幕背景上生成图像
2. FFmpeg 使用 colorkey + despill 滤镜移除绿色
3. ImageMagick 裁剪和优化结果

### 参考图像

转换或组合现有图像：

#### ✅ Google Gemini（推荐）- 支持本地文件

```bash
# 使用本地图片作为参考（必须使用绝对路径）
nano-banana "保持字体结构，仅填充内部" \
  --model flash \
  -r "/Users/a/Desktop/reference.png" \
  -o output

# 结构保持生成示例
nano-banana "严格遵循参考图的字体外轮廓，仅在内部填充图案" \
  --model flash \
  -r "/完整路径/参考图.png" \
  -a 16:9 -s 4K -o result
```

**关键要点：**
- 必须使用**绝对路径**（如 `/Users/a/Desktop/xxx.png`）
- 支持结构保持生成（字体、Logo 等）
- 模型会分析参考图的结构和风格

#### Poyo AI - 仅支持 URL

```bash
# 风格迁移
nano-banana "组合这些风格" -r https://example.com/style.png -o combined
```

**注意：** Poyo AI 需要图片 URL，不支持本地文件路径。

## 📋 命令参考

### 选项

| 选项 | 简写 | 默认值 | 说明 |
|------|------|--------|------|
| `--output` | `-o` | `nano-gen-{时间戳}` | 输出文件名（不含扩展名）|
| `--size` | `-s` | `1K` | 图像大小：`512`、`1K`、`2K`、`4K` |
| `--aspect` | `-a` | 模型默认 | 宽高比（见支持的比例）|
| `--model` | `-m` | `new` 或 `flash` | 使用的模型 |
| `--dir` | `-d` | 当前目录 | 输出目录 |
| `--ref` | `-r` | - | 参考图像（可多次使用）|
| `--transparent` | `-t` | - | 生成透明背景 |
| `--api-key` | - | - | API 密钥（覆盖环境/文件）|
| `--costs` | - | - | 显示成本摘要 |
| `--help` | `-h` | - | 显示帮助信息 |

### 模型

| 提供商 | 别名 | 模型 ID | 说明 |
|--------|------|---------|------|
| Poyo AI | `new` | `nano-banana-2-new` | 文生图（默认）|
| Poyo AI | `edit` | `nano-banana-2-new-edit` | 图像编辑 |
| Gemini | `flash`, `nb2` | `gemini-3.1-flash-image-preview` | 快速且便宜 |
| Gemini | `pro`, `nb-pro` | `gemini-3-pro-image-preview` | 最高质量 |

### 大小和成本

| 大小 | 分辨率 | Poyo AI | Gemini Flash | Gemini Pro |
|------|--------|---------|--------------|------------|
| `512` | ~512×512 | ~$0.045 | ~$0.045 | 不可用 |
| `1K` | ~1024×1024 | ~$0.067 | ~$0.067 | ~$0.134 |
| `2K` | ~2048×2048 | ~$0.101 | ~$0.101 | ~$0.201 |
| `4K` | ~4096×4096 | ~$0.151 | ~$0.151 | ~$0.302 |

*成本为近似值，可能会有变化*

## 💰 成本追踪

追踪你的 API 支出：

```bash
# 查看成本摘要
nano-banana --costs
```

成本记录在 `~/.nano-banana/costs.json`，包含详细信息：
- 总生成次数
- 总支出
- 按模型分类
- 单次生成成本

## 🤖 Claude Code 集成

作为 Claude Code 技能安装后，你可以通过自然语言生成图像：

```
"生成一张日落的图片"
"为我的创业公司创建一个标志"
"制作一个像素艺术角色精灵"
```

Claude 会自动：
- 选择合适的模型
- 设置分辨率和宽高比
- 处理输出命名
- 根据需要应用透明度

### 作为 Claude Code 技能安装

安装 CLI 后，技能会自动可用。当你请求图像生成时，Claude 会检测并提供使用它。

## 🛠️ 开发

### 项目结构

```
nano-banana-2-skill/
├── src/
│   ├── cli.ts              # 主 CLI 入口
│   └── poyo-client.ts      # Poyo AI API 客户端
├── plugins/
│   └── nano-banana/        # Claude Code 技能定义
├── .env.example            # 环境配置示例
├── package.json            # 项目元数据
└── README.md              # 本文件
```

### 从源码构建

```bash
# 克隆并安装
git clone https://github.com/kingbootoshi/nano-banana-2-skill.git
cd nano-banana-2-skill
bun install

# 本地运行
bun run src/cli.ts "测试提示词"

# 全局链接
bun link
```

### 贡献

欢迎贡献！请：

1. Fork 仓库
2. 创建功能分支（`git checkout -b feature/amazing-feature`）
3. 提交更改（`git commit -m '添加惊人功能'`）
4. 推送到分支（`git push origin feature/amazing-feature`）
5. 开启 Pull Request

## 📝 使用场景

- **落地页**：产品模型、英雄图像、UI 预览
- **营销**：社交媒体图形、功能插图
- **游戏开发**：精灵、瓦片集、角色艺术
- **设计迭代**：快速生成变体
- **透明资源**：图标、标志、吉祥物
- **图像编辑**：用 AI 转换现有图像
- **视频制作**：合成的视觉元素

## 🐛 故障排除

### "API key not valid"（API 密钥无效）

- 检查 API 密钥是否正确
- 验证 `GEMINI_BASE_URL` 是否匹配你的提供商
- 确保 `.env` 文件在正确位置

### "Task timeout"（任务超时）

- API 服务器可能繁忙，请重试
- 如需要可在代码中增加超时时间
- 检查网络连接

### 透明模式失败

- 安装 FFmpeg：`brew install ffmpeg`
- 安装 ImageMagick：`brew install imagemagick`
- 验证安装：`ffmpeg -version` 和 `magick -version`

### 命令未找到

- 重新运行 `bun link`
- 将 `~/.bun/bin` 添加到 PATH
- 尝试备用安装方法

## 📄 许可证

MIT 许可证 - 详见 [LICENSE](LICENSE) 文件

## 🙏 致谢

- 原始项目作者：[Bootoshi](https://github.com/kingbootoshi)
- 技术支持：[Poyo AI](https://poyo.ai) 和 [Google Gemini](https://ai.google.dev)
- 构建工具：[Bun](https://bun.sh)

## 🔗 链接

- [文档](https://docs.poyo.ai)
- [问题追踪](https://github.com/kingbootoshi/nano-banana-2-skill/issues)
- [Claude Code](https://docs.anthropic.com/en/docs/claude-code)

---

用 ❤️ 由社区制作
