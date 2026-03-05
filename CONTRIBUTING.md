# Contributing to Nano Banana 2

Thank you for your interest in contributing to Nano Banana 2! This document provides guidelines and instructions for contributing.

## 🤝 How to Contribute

### Reporting Bugs

If you find a bug, please create an issue with:

- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Your environment (OS, Bun version, etc.)
- Error messages or logs

### Suggesting Features

Feature requests are welcome! Please:

- Check existing issues first
- Describe the feature and use case
- Explain why it would be useful
- Consider implementation complexity

### Pull Requests

1. **Fork the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/nano-banana-2-skill.git
   cd nano-banana-2-skill
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Follow the existing code style
   - Add tests if applicable
   - Update documentation

4. **Test your changes**
   ```bash
   bun install
   bun run src/cli.ts "test prompt"
   ```

5. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add amazing feature"
   ```

   Use conventional commit messages:
   - `feat:` - New feature
   - `fix:` - Bug fix
   - `docs:` - Documentation changes
   - `refactor:` - Code refactoring
   - `test:` - Adding tests
   - `chore:` - Maintenance tasks

6. **Push and create PR**
   ```bash
   git push origin feature/your-feature-name
   ```
   Then open a Pull Request on GitHub.

## 📝 Code Style

- Use TypeScript
- Follow existing formatting
- Use meaningful variable names
- Add comments for complex logic
- Keep functions focused and small

## 🧪 Testing

Before submitting:

```bash
# Test basic generation
nano-banana "test image" -o test

# Test different models
nano-banana "test" --model new
nano-banana "test" --model flash

# Test different sizes
nano-banana "test" -s 2K -a 16:9

# Test help
nano-banana --help
```

## 📚 Documentation

When adding features:

- Update README.md
- Update help text in cli.ts
- Add examples if applicable
- Update .env.example if needed

## 🏗️ Project Structure

```
nano-banana-2-skill/
├── src/
│   ├── cli.ts              # Main CLI logic
│   └── poyo-client.ts      # Poyo AI API client
├── plugins/
│   └── nano-banana/        # Claude Code skill
├── .env.example            # Configuration template
├── package.json            # Dependencies
└── README.md              # Documentation
```

## 🔧 Development Setup

```bash
# Install Bun
curl -fsSL https://bun.sh/install | bash

# Clone and install
git clone https://github.com/kingbootoshi/nano-banana-2-skill.git
cd nano-banana-2-skill
bun install

# Link for testing
bun link

# Run directly
bun run src/cli.ts "your prompt"
```

## 🎯 Areas for Contribution

### High Priority

- [ ] Add support for local image upload to Poyo AI
- [ ] Improve error handling and messages
- [ ] Add progress bar for long operations
- [ ] Add batch generation support
- [ ] Improve cost tracking accuracy

### Medium Priority

- [ ] Add image preview in terminal
- [ ] Support for more aspect ratios
- [ ] Add image metadata (EXIF)
- [ ] Improve transparent mode quality
- [ ] Add configuration wizard

### Low Priority

- [ ] Add image gallery viewer
- [ ] Support for video generation
- [ ] Add prompt templates
- [ ] Integration with other AI services
- [ ] Web UI

## 🐛 Known Issues

Check the [Issues](https://github.com/kingbootoshi/nano-banana-2-skill/issues) page for current bugs and feature requests.

## 📞 Getting Help

- Open an issue for bugs or questions
- Check existing issues and discussions
- Read the documentation

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

## 🙏 Thank You

Every contribution helps make Nano Banana 2 better for everyone!
