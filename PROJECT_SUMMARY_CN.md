# 项目概览

## 📦 这是什么？

Nano Banana 2 是一个开源的 AI 图像生成 CLI 工具，支持多个提供商：
- **Poyo AI** - Nano Banana 2 模型（推荐）
- **Google Gemini** - 3.1 Flash & 3 Pro 模型（传统）

## ✨ 核心功能

### 多提供商支持
- 在 Poyo AI 和 Google Gemini 之间切换
- 通过环境变量轻松配置
- 自动提供商检测

### 图像生成
- **分辨率**：512px、1K、2K、4K
- **宽高比**：1:1、16:9、9:16、4:3、3:4、3:2、2:3、4:5、5:4、21:9
- **透明背景**：AI 驱动的绿幕移除
- **参考图像**：转换和组合现有图像
- **成本追踪**：监控 API 支出

### 开发者体验
- 简单的 CLI 界面
- Claude Code 集成
- 全面的文档
- 活跃的社区支持

## 📁 项目结构

```
nano-banana-2-skill/
├── src/
│   ├── cli.ts              # 主 CLI 入口
│   └── poyo-client.ts      # Poyo AI API 客户端
├── plugins/
│   └── nano-banana/        # Claude Code 技能
├── .env.example            # 配置模板
├── README_CN.md           # 完整文档（中文）
├── QUICKSTART_CN.md       # 快速开始指南（中文）
├── CONTRIBUTING.md        # 贡献指南
├── CHANGELOG.md           # 版本历史
├── package.json           # 项目元数据
└── LICENSE                # MIT 许可证
```

## 🚀 快速开始

```bash
# 安装
git clone https://github.com/kingbootoshi/nano-banana-2-skill.git
cd nano-banana-2-skill
bun install
bun link

# 配置（Poyo AI）
mkdir -p ~/.nano-banana
cat > ~/.nano-banana/.env << EOF
GEMINI_API_KEY=你的_api_密钥
GEMINI_BASE_URL=https://api.poyo.ai
EOF

# 生成
nano-banana "可爱的机器人吉祥物"
```

## 🔑 配置选项

### Poyo AI（推荐）
```bash
GEMINI_API_KEY=sk-xxx...
GEMINI_BASE_URL=https://api.poyo.ai
```

模型：
- `nano-banana-2-new`（别名：`new`）- 文生图
- `nano-banana-2-new-edit`（别名：`edit`）- 图像编辑

### Google Gemini（传统）
```bash
GEMINI_API_KEY=AIzaSy...
# 不需要 GEMINI_BASE_URL
```

模型：
- `gemini-3.1-flash-image-preview`（别名：`flash`）
- `gemini-3-pro-image-preview`（别名：`pro`）

## 📖 文档

| 文件 | 说明 |
|------|------|
| [README_CN.md](README_CN.md) | 完整文档，包含所有功能 |
| [QUICKSTART_CN.md](QUICKSTART_CN.md) | 5 分钟设置指南 |
| [CONTRIBUTING.md](CONTRIBUTING.md) | 如何贡献 |
| [CHANGELOG.md](CHANGELOG.md) | 版本历史 |
| [.env.example](.env.example) | 配置示例 |

## 🎯 使用场景

- **网页设计**：英雄图像、产品模型、UI 预览
- **营销**：社交媒体图形、功能插图
- **游戏开发**：精灵、瓦片集、角色艺术
- **品牌**：标志、图标、吉祥物（带透明度）
- **内容创作**：博客图片、缩略图、壁纸

## 💰 定价

每张图片的大致成本：

| 大小 | 分辨率 | 成本 |
|------|--------|------|
| 512 | ~512×512 | ~$0.045 |
| 1K | ~1024×1024 | ~$0.067 |
| 2K | ~2048×2048 | ~$0.101 |
| 4K | ~4096×4096 | ~$0.151 |

追踪支出：`nano-banana --costs`

## 🛠️ 技术细节

### 构建工具
- **运行时**：Bun（JavaScript/TypeScript）
- **API**：Poyo AI、Google Gemini
- **图像处理**：FFmpeg、ImageMagick（可选）
- **集成**：Claude Code 技能

### 系统要求
- Bun >= 1.0.0
- FFmpeg（可选，用于透明模式）
- ImageMagick（可选，用于透明模式）

### 架构
- Poyo AI 的异步任务处理
- Google Gemini 的同步生成
- 进度追踪和状态轮询
- 成本记录和分析

## 🤝 贡献

欢迎贡献！查看 [CONTRIBUTING.md](CONTRIBUTING.md) 了解：
- 如何报告错误
- 如何建议功能
- 如何提交 pull request
- 代码风格指南
- 开发环境设置

## 📄 许可证

MIT 许可证 - 可自由使用、修改和分发。

## 🔗 链接

- **仓库**：https://github.com/kingbootoshi/nano-banana-2-skill
- **问题**：https://github.com/kingbootoshi/nano-banana-2-skill/issues
- **Poyo AI**：https://poyo.ai
- **Google Gemini**：https://ai.google.dev
- **Claude Code**：https://docs.anthropic.com/en/docs/claude-code

## 🙏 致谢

- **原作者**：[Bootoshi](https://github.com/kingbootoshi)
- **贡献者**：[社区](https://github.com/kingbootoshi/nano-banana-2-skill/graphs/contributors)
- **技术支持**：Poyo AI、Google Gemini、Bun

## 📊 版本

当前版本：**2.1.0**

### 2.1.0 新功能
- ✅ 多提供商支持（Poyo AI + Google Gemini）
- ✅ 新的 Nano Banana 2 模型
- ✅ 带进度追踪的异步任务处理
- ✅ 增强的文档和指南
- ✅ 改进的错误处理

查看 [CHANGELOG.md](CHANGELOG.md) 了解完整历史。

---

**用 ❤️ 由社区制作**

如有问题、问题或功能请求，请访问我们的 [GitHub 仓库](https://github.com/kingbootoshi/nano-banana-2-skill)。
