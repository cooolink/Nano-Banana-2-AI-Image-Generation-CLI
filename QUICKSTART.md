# Quick Start Guide

Get started with Nano Banana 2 in 5 minutes!

## 🚀 Installation

```bash
# 1. Install Bun (if not already installed)
curl -fsSL https://bun.sh/install | bash

# 2. Clone the repository
git clone https://github.com/kingbootoshi/nano-banana-2-skill.git
cd nano-banana-2-skill

# 3. Install dependencies
bun install

# 4. Link globally
bun link

# 5. Verify installation
nano-banana --help
```

## 🔑 Configuration

### For Poyo AI (Recommended)

```bash
# Create config directory
mkdir -p ~/.nano-banana

# Create config file
cat > ~/.nano-banana/.env << EOF
GEMINI_API_KEY=your_poyo_api_key_here
GEMINI_BASE_URL=https://api.poyo.ai
EOF
```

Get your Poyo AI key at: https://poyo.ai

### For Google Gemini

```bash
# Create config directory
mkdir -p ~/.nano-banana

# Create config file
echo "GEMINI_API_KEY=your_gemini_api_key_here" > ~/.nano-banana/.env
```

Get your Gemini key at: https://aistudio.google.com/apikey

## 🎨 First Image

```bash
# Generate your first image
nano-banana "a cute robot mascot"

# The image will be saved in your current directory
```

## 📖 Common Commands

```bash
# High resolution
nano-banana "sunset landscape" -s 2K

# Widescreen aspect ratio
nano-banana "cinematic scene" -a 16:9

# Custom output name
nano-banana "logo design" -o my-logo

# Transparent background (requires FFmpeg)
nano-banana "character sprite" -t -o character

# Different model
nano-banana "artwork" --model edit
```

## 🆘 Troubleshooting

### Command not found
```bash
# Re-link the command
cd nano-banana-2-skill
bun link

# Or add to PATH manually
export PATH="$HOME/.bun/bin:$PATH"
```

### API key error
```bash
# Check your config file
cat ~/.nano-banana/.env

# Make sure the key is correct and GEMINI_BASE_URL is set for Poyo AI
```

### Transparent mode fails
```bash
# Install required tools
brew install ffmpeg imagemagick  # macOS
sudo apt install ffmpeg imagemagick  # Linux
```

## 📚 Next Steps

- Read the full [README.md](README.md) for all features
- Check [CONTRIBUTING.md](CONTRIBUTING.md) to contribute
- View [CHANGELOG.md](CHANGELOG.md) for version history
- Report issues at: https://github.com/kingbootoshi/nano-banana-2-skill/issues

## 💡 Tips

1. **Save costs**: Use 1K resolution for testing, 2K/4K for final output
2. **Aspect ratios**: Use 16:9 for landscapes, 9:16 for portraits
3. **Transparent assets**: Always use `-t` flag for logos and sprites
4. **Track spending**: Run `nano-banana --costs` to see your usage

## 🎯 Examples

```bash
# Social media post (square)
nano-banana "product showcase" -a 1:1 -s 2K -o social-post

# Website hero image (widescreen)
nano-banana "modern office space" -a 16:9 -s 2K -o hero

# Mobile wallpaper (portrait)
nano-banana "abstract art" -a 9:16 -s 2K -o wallpaper

# Game sprite (transparent)
nano-banana "pixel art treasure chest" -t -o chest-sprite

# Logo (transparent, square)
nano-banana "minimalist tech logo" -t -a 1:1 -o logo
```

Happy generating! 🎨
