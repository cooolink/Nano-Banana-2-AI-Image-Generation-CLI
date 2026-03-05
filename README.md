# Nano Banana 2 - AI Image Generation CLI

[English](README.md) | [中文](README_CN.md)

AI image generation CLI with support for multiple providers: **Poyo AI** (Nano Banana 2 models) and **Google Gemini** (3.1 Flash & 3 Pro). Features multi-resolution (512-4K), aspect ratios, cost tracking, transparent backgrounds, reference images, and style transfer.

Also ships as a [Claude Code](https://docs.anthropic.com/en/docs/claude-code) skill for AI-assisted image generation workflows.

## ✨ Features

- 🎨 **Multiple AI Providers**: Poyo AI (Nano Banana 2) and Google Gemini
- 📐 **Multi-Resolution**: 512px to 4K (512, 1K, 2K, 4K)
- 🖼️ **Aspect Ratios**: 1:1, 16:9, 9:16, 4:3, 3:4, 3:2, 2:3, 4:5, 5:4, 21:9
- 🎭 **Transparent Backgrounds**: AI-powered green screen removal
- 🔄 **Image Editing**: Transform existing images with text prompts
- 💰 **Cost Tracking**: Monitor your API spending
- 🤖 **Claude Code Integration**: Use with Claude AI assistant

## 📦 Installation

### Requirements

- [Bun](https://bun.sh) - JavaScript runtime
- [FFmpeg](https://ffmpeg.org) (optional, for transparent mode)
- [ImageMagick](https://imagemagick.org) (optional, for transparent mode)

### Quick Install

```bash
# Clone the repository
git clone https://github.com/kingbootoshi/nano-banana-2-skill.git
cd nano-banana-2-skill

# Install dependencies
bun install

# Link globally
bun link

# Verify installation
nano-banana --help
```

### Install FFmpeg & ImageMagick (Optional)

For transparent background generation:

```bash
# macOS
brew install ffmpeg imagemagick

# Ubuntu/Debian
sudo apt install ffmpeg imagemagick

# Windows (using Chocolatey)
choco install ffmpeg imagemagick
```

## 🔑 API Configuration

Nano Banana 2 supports two API providers:

### Option 1: Poyo AI (Recommended)

Poyo AI provides the Nano Banana 2 models with async task processing.

1. Get your API key from [Poyo AI](https://poyo.ai)
2. Configure your environment:

```bash
mkdir -p ~/.nano-banana
cat > ~/.nano-banana/.env << EOF
GEMINI_API_KEY=your_poyo_api_key_here
GEMINI_BASE_URL=https://api.poyo.ai
EOF
```

**Available Models:**
- `nano-banana-2-new` (alias: `new`) - Text-to-image and image-to-image
- `nano-banana-2-new-edit` (alias: `edit`) - Advanced image editing

### Option 2: Google Gemini (Legacy)

Use Google's official Gemini API for image generation.

1. Get your API key from [Google AI Studio](https://aistudio.google.com/apikey)
2. Configure your environment:

```bash
mkdir -p ~/.nano-banana
echo "GEMINI_API_KEY=your_gemini_api_key_here" > ~/.nano-banana/.env
```

**Available Models:**
- `gemini-3.1-flash-image-preview` (alias: `flash`, `nb2`)
- `gemini-3-pro-image-preview` (alias: `pro`, `nb-pro`)

### Configuration Priority

The CLI resolves configuration in this order:

1. `--api-key` flag (command line)
2. `GEMINI_API_KEY` environment variable
3. `.env` file in current directory
4. `.env` file in repo root
5. `~/.nano-banana/.env` (recommended)

### Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `GEMINI_API_KEY` | Your API key | `sk-xxx` or `AIzaSyxxx` |
| `GEMINI_BASE_URL` | API endpoint (optional) | `https://api.poyo.ai` |

## 🚀 Usage

### Basic Examples

```bash
# Generate image with default settings (1K resolution)
nano-banana "a cute robot mascot"

# Specify output filename
nano-banana "sunset landscape" -o my-sunset

# High resolution with aspect ratio
nano-banana "cinematic scene" -s 2K -a 16:9

# Ultra high resolution
nano-banana "detailed artwork" -s 4K

# Custom output directory
nano-banana "logo design" -o logo -d ~/Pictures
```

### Model Selection

```bash
# Poyo AI - Nano Banana 2 (default if GEMINI_BASE_URL is set)
nano-banana "your prompt" --model new

# Poyo AI - Image editing
nano-banana "your prompt" --model edit

# Google Gemini - Flash (fast and cheap)
nano-banana "your prompt" --model flash

# Google Gemini - Pro (highest quality)
nano-banana "your prompt" --model pro
```

### Aspect Ratios

```bash
# Widescreen (16:9)
nano-banana "cinematic landscape" -a 16:9

# Portrait (9:16)
nano-banana "mobile wallpaper" -a 9:16

# Square (1:1)
nano-banana "profile picture" -a 1:1

# Ultra-wide (21:9)
nano-banana "panoramic view" -a 21:9
```

**Supported ratios:** `1:1`, `16:9`, `9:16`, `4:3`, `3:4`, `3:2`, `2:3`, `4:5`, `5:4`, `21:9`

### Transparent Backgrounds

Generate assets with transparent backgrounds (requires FFmpeg & ImageMagick):

```bash
# Character sprite
nano-banana "pixel art character" -t -o character

# Logo
nano-banana "minimalist tech logo" -t -o logo

# Game asset
nano-banana "treasure chest icon" -t -o chest
```

**How it works:**
1. AI generates image on green screen background
2. FFmpeg removes green using colorkey + despill filters
3. ImageMagick trims and optimizes the result

### Reference Images

Transform or combine existing images:

```bash
# Edit an image
nano-banana "make the sky more dramatic" -r landscape.jpg -o edited

# Style transfer
nano-banana "combine these styles" -r style1.png -r style2.png -o combined

# Color correction
nano-banana "increase contrast and saturation" -r photo.jpg
```

**Note:** For Poyo AI, reference images must be accessible via URL. Local file upload coming soon.

## 📋 Command Reference

### Options

| Option | Short | Default | Description |
|--------|-------|---------|-------------|
| `--output` | `-o` | `nano-gen-{timestamp}` | Output filename (without extension) |
| `--size` | `-s` | `1K` | Image size: `512`, `1K`, `2K`, `4K` |
| `--aspect` | `-a` | model default | Aspect ratio (see supported ratios) |
| `--model` | `-m` | `new` or `flash` | Model to use |
| `--dir` | `-d` | current directory | Output directory |
| `--ref` | `-r` | - | Reference image (can use multiple) |
| `--transparent` | `-t` | - | Generate with transparent background |
| `--api-key` | - | - | API key (overrides env/file) |
| `--costs` | - | - | Show cost summary |
| `--help` | `-h` | - | Show help message |

### Models

| Provider | Alias | Model ID | Description |
|----------|-------|----------|-------------|
| Poyo AI | `new` | `nano-banana-2-new` | Text-to-image (default) |
| Poyo AI | `edit` | `nano-banana-2-new-edit` | Image editing |
| Gemini | `flash`, `nb2` | `gemini-3.1-flash-image-preview` | Fast & cheap |
| Gemini | `pro`, `nb-pro` | `gemini-3-pro-image-preview` | Highest quality |

### Sizes & Costs

| Size | Resolution | Poyo AI | Gemini Flash | Gemini Pro |
|------|-----------|---------|--------------|------------|
| `512` | ~512×512 | ~$0.045 | ~$0.045 | N/A |
| `1K` | ~1024×1024 | ~$0.067 | ~$0.067 | ~$0.134 |
| `2K` | ~2048×2048 | ~$0.101 | ~$0.101 | ~$0.201 |
| `4K` | ~4096×4096 | ~$0.151 | ~$0.151 | ~$0.302 |

*Costs are approximate and may vary*

## 💰 Cost Tracking

Track your API spending:

```bash
# View cost summary
nano-banana --costs
```

Costs are logged to `~/.nano-banana/costs.json` with details:
- Total generations
- Total spend
- Per-model breakdown
- Individual generation costs

## 🤖 Claude Code Integration

When installed as a Claude Code skill, you can generate images through natural language:

```
"generate an image of a sunset"
"create a logo for my startup"
"make a pixel art character sprite"
```

Claude will automatically:
- Choose the appropriate model
- Set resolution and aspect ratio
- Handle output naming
- Apply transparency if needed

### Installation as Claude Code Skill

The skill is automatically available when you install the CLI. Claude will detect it and offer to use it when you request image generation.

## 🛠️ Development

### Project Structure

```
nano-banana-2-skill/
├── src/
│   ├── cli.ts              # Main CLI entry point
│   └── poyo-client.ts      # Poyo AI API client
├── plugins/
│   └── nano-banana/        # Claude Code skill definition
├── .env.example            # Example environment configuration
├── package.json            # Project metadata
└── README.md              # This file
```

### Building from Source

```bash
# Clone and install
git clone https://github.com/kingbootoshi/nano-banana-2-skill.git
cd nano-banana-2-skill
bun install

# Run locally
bun run src/cli.ts "test prompt"

# Link globally
bun link
```

### Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Use Cases

- **Landing Pages**: Product mockups, hero images, UI previews
- **Marketing**: Social media graphics, feature illustrations
- **Game Development**: Sprites, tilesets, character art
- **Design Iteration**: Quickly generate variations
- **Transparent Assets**: Icons, logos, mascots
- **Image Editing**: Transform existing images with AI
- **Video Production**: Visual elements for compositions

## 🐛 Troubleshooting

### "API key not valid"

- Check your API key is correct
- Verify `GEMINI_BASE_URL` matches your provider
- Ensure `.env` file is in the correct location

### "Task timeout"

- API server may be busy, try again
- Increase timeout in code if needed
- Check your internet connection

### Transparent mode fails

- Install FFmpeg: `brew install ffmpeg`
- Install ImageMagick: `brew install imagemagick`
- Verify installations: `ffmpeg -version` and `magick -version`

### Command not found

- Run `bun link` again
- Add `~/.bun/bin` to your PATH
- Try the fallback installation method

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details

## 🙏 Acknowledgments

- Original project by [Bootoshi](https://github.com/kingbootoshi)
- Powered by [Poyo AI](https://poyo.ai) and [Google Gemini](https://ai.google.dev)
- Built with [Bun](https://bun.sh)

## 🔗 Links

- [Documentation](https://docs.poyo.ai)
- [Issue Tracker](https://github.com/kingbootoshi/nano-banana-2-skill/issues)
- [Claude Code](https://docs.anthropic.com/en/docs/claude-code)

---

Made with ❤️ by the community
