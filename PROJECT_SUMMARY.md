# Nano Banana 2 - Project Summary

## 📦 What is This?

Nano Banana 2 is an open-source AI image generation CLI tool that supports multiple providers:
- **Poyo AI** - Nano Banana 2 models (recommended)
- **Google Gemini** - 3.1 Flash & 3 Pro models (legacy)

## ✨ Key Features

### Multi-Provider Support
- Switch between Poyo AI and Google Gemini
- Easy configuration via environment variables
- Automatic provider detection

### Image Generation
- **Resolutions**: 512px, 1K, 2K, 4K
- **Aspect Ratios**: 1:1, 16:9, 9:16, 4:3, 3:4, 3:2, 2:3, 4:5, 5:4, 21:9
- **Transparent Backgrounds**: AI-powered green screen removal
- **Reference Images**: Transform and combine existing images
- **Cost Tracking**: Monitor API spending

### Developer Experience
- Simple CLI interface
- Claude Code integration
- Comprehensive documentation
- Active community support

## 📁 Project Structure

```
nano-banana-2-skill/
├── src/
│   ├── cli.ts              # Main CLI entry point
│   └── poyo-client.ts      # Poyo AI API client
├── plugins/
│   └── nano-banana/        # Claude Code skill
├── .env.example            # Configuration template
├── README.md              # Full documentation
├── QUICKSTART.md          # Quick start guide
├── CONTRIBUTING.md        # Contribution guidelines
├── CHANGELOG.md           # Version history
├── package.json           # Project metadata
└── LICENSE                # MIT License
```

## 🚀 Quick Start

```bash
# Install
git clone https://github.com/kingbootoshi/nano-banana-2-skill.git
cd nano-banana-2-skill
bun install
bun link

# Configure (Poyo AI)
mkdir -p ~/.nano-banana
cat > ~/.nano-banana/.env << EOF
GEMINI_API_KEY=your_api_key
GEMINI_BASE_URL=https://api.poyo.ai
EOF

# Generate
nano-banana "a cute robot mascot"
```

## 🔑 Configuration Options

### Poyo AI (Recommended)
```bash
GEMINI_API_KEY=sk-xxx...
GEMINI_BASE_URL=https://api.poyo.ai
```

Models:
- `nano-banana-2-new` (alias: `new`) - Text-to-image
- `nano-banana-2-new-edit` (alias: `edit`) - Image editing

### Google Gemini (Legacy)
```bash
GEMINI_API_KEY=AIzaSy...
# GEMINI_BASE_URL not needed
```

Models:
- `gemini-3.1-flash-image-preview` (alias: `flash`)
- `gemini-3-pro-image-preview` (alias: `pro`)

## 📖 Documentation

| File | Description |
|------|-------------|
| [README.md](README.md) | Complete documentation with all features |
| [QUICKSTART.md](QUICKSTART.md) | 5-minute setup guide |
| [CONTRIBUTING.md](CONTRIBUTING.md) | How to contribute |
| [CHANGELOG.md](CHANGELOG.md) | Version history |
| [.env.example](.env.example) | Configuration examples |

## 🎯 Use Cases

- **Web Design**: Hero images, product mockups, UI previews
- **Marketing**: Social media graphics, feature illustrations
- **Game Development**: Sprites, tilesets, character art
- **Branding**: Logos, icons, mascots (with transparency)
- **Content Creation**: Blog images, thumbnails, wallpapers

## 💰 Pricing

Approximate costs per image:

| Size | Resolution | Cost |
|------|-----------|------|
| 512 | ~512×512 | ~$0.045 |
| 1K | ~1024×1024 | ~$0.067 |
| 2K | ~2048×2048 | ~$0.101 |
| 4K | ~4096×4096 | ~$0.151 |

Track your spending: `nano-banana --costs`

## 🛠️ Technical Details

### Built With
- **Runtime**: Bun (JavaScript/TypeScript)
- **APIs**: Poyo AI, Google Gemini
- **Image Processing**: FFmpeg, ImageMagick (optional)
- **Integration**: Claude Code skill

### Requirements
- Bun >= 1.0.0
- FFmpeg (optional, for transparent mode)
- ImageMagick (optional, for transparent mode)

### Architecture
- Async task processing for Poyo AI
- Sync generation for Google Gemini
- Progress tracking and status polling
- Cost logging and analytics

## 🤝 Contributing

We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for:
- How to report bugs
- How to suggest features
- How to submit pull requests
- Code style guidelines
- Development setup

## 📄 License

MIT License - Free to use, modify, and distribute.

## 🔗 Links

- **Repository**: https://github.com/kingbootoshi/nano-banana-2-skill
- **Issues**: https://github.com/kingbootoshi/nano-banana-2-skill/issues
- **Poyo AI**: https://poyo.ai
- **Google Gemini**: https://ai.google.dev
- **Claude Code**: https://docs.anthropic.com/en/docs/claude-code

## 🙏 Credits

- **Original Author**: [Bootoshi](https://github.com/kingbootoshi)
- **Contributors**: [Community](https://github.com/kingbootoshi/nano-banana-2-skill/graphs/contributors)
- **Powered By**: Poyo AI, Google Gemini, Bun

## 📊 Version

Current version: **2.1.0**

### What's New in 2.1.0
- ✅ Multi-provider support (Poyo AI + Google Gemini)
- ✅ New Nano Banana 2 models
- ✅ Async task processing with progress tracking
- ✅ Enhanced documentation and guides
- ✅ Improved error handling

See [CHANGELOG.md](CHANGELOG.md) for full history.

---

**Made with ❤️ by the community**

For questions, issues, or feature requests, please visit our [GitHub repository](https://github.com/kingbootoshi/nano-banana-2-skill).
