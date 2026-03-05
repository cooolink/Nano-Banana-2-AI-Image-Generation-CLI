# 快速开始指南

5 分钟开始使用 Nano Banana 2！

## 🚀 安装

```bash
# 1. 安装 Bun（如果尚未安装）
curl -fsSL https://bun.sh/install | bash

# 2. 克隆仓库
git clone https://github.com/kingbootoshi/nano-banana-2-skill.git
cd nano-banana-2-skill

# 3. 安装依赖
bun install

# 4. 全局链接
bun link

# 5. 验证安装
nano-banana --help
```

## 🔑 配置

### 使用 Poyo AI（推荐）

```bash
# 创建配置目录
mkdir -p ~/.nano-banana

# 创建配置文件
cat > ~/.nano-banana/.env << EOF
GEMINI_API_KEY=你的_poyo_api_密钥
GEMINI_BASE_URL=https://api.poyo.ai
EOF
```

在此获取 Poyo AI 密钥：https://poyo.ai

### 使用 Google Gemini

```bash
# 创建配置目录
mkdir -p ~/.nano-banana

# 创建配置文件
echo "GEMINI_API_KEY=你的_gemini_api_密钥" > ~/.nano-banana/.env
```

在此获取 Gemini 密钥：https://aistudio.google.com/apikey

## 🎨 第一张图片

```bash
# 生成你的第一张图片
nano-banana "可爱的机器人吉祥物"

# 图片将保存在当前目录
```

## 📖 常用命令

```bash
# 高分辨率
nano-banana "日落风景" -s 2K

# 宽屏宽高比
nano-banana "电影场景" -a 16:9

# 自定义输出名称
nano-banana "标志设计" -o 我的标志

# 透明背景（需要 FFmpeg）
nano-banana "角色精灵" -t -o character

# 不同模型
nano-banana "艺术作品" --model edit
```

## 🆘 故障排除

### 命令未找到
```bash
# 重新链接命令
cd nano-banana-2-skill
bun link

# 或手动添加到 PATH
export PATH="$HOME/.bun/bin:$PATH"
```

### API 密钥错误
```bash
# 检查配置文件
cat ~/.nano-banana/.env

# 确保密钥正确，并且为 Poyo AI 设置了 GEMINI_BASE_URL
```

### 透明模式失败
```bash
# 安装所需工具
brew install ffmpeg imagemagick  # macOS
sudo apt install ffmpeg imagemagick  # Linux
```

## 📚 下一步

- 阅读完整的 [README_CN.md](README_CN.md) 了解所有功能
- 查看 [CONTRIBUTING.md](CONTRIBUTING.md) 参与贡献
- 查看 [CHANGELOG.md](CHANGELOG.md) 了解版本历史
- 在此报告问题：https://github.com/kingbootoshi/nano-banana-2-skill/issues

## 💡 提示

1. **节省成本**：测试时使用 1K 分辨率，最终输出使用 2K/4K
2. **宽高比**：风景使用 16:9，肖像使用 9:16
3. **透明资源**：标志和精灵始终使用 `-t` 标志
4. **追踪支出**：运行 `nano-banana --costs` 查看使用情况

## 🎯 示例

```bash
# 社交媒体帖子（正方形）
nano-banana "产品展示" -a 1:1 -s 2K -o social-post

# 网站英雄图像（宽屏）
nano-banana "现代办公空间" -a 16:9 -s 2K -o hero

# 手机壁纸（竖屏）
nano-banana "抽象艺术" -a 9:16 -s 2K -o wallpaper

# 游戏精灵（透明）
nano-banana "像素艺术宝箱" -t -o chest-sprite

# 标志（透明，正方形）
nano-banana "极简科技标志" -t -a 1:1 -o logo
```

祝你生成愉快！🎨
