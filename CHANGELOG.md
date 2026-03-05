# Changelog

All notable changes to Nano Banana 2 will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.1.0] - 2026-03-05

### Added
- **Multi-Provider Support**: Added support for Poyo AI alongside Google Gemini
- **Poyo AI Integration**: New Poyo AI API client with async task processing
- **New Models**:
  - `nano-banana-2-new` (alias: `new`) - Text-to-image generation
  - `nano-banana-2-new-edit` (alias: `edit`) - Advanced image editing
- **Progress Tracking**: Real-time progress display for Poyo AI tasks
- **Environment Configuration**: Support for `GEMINI_BASE_URL` to switch between providers
- **Comprehensive Documentation**: Updated README with multi-provider setup
- **Contributing Guide**: Added CONTRIBUTING.md for contributors
- **Enhanced .env.example**: Detailed configuration examples for both providers

### Changed
- Default model changed to `nano-banana-2-new` when using Poyo AI
- Improved error messages and user feedback
- Updated help text to reflect multi-provider support
- Enhanced cost tracking for different providers

### Fixed
- API endpoint compatibility issues
- Task status polling for async operations
- Response format handling for different providers

## [2.0.0] - 2025-XX-XX

### Added
- Initial release with Google Gemini support
- Multi-resolution support (512px to 4K)
- Aspect ratio control
- Transparent background generation
- Reference image support
- Cost tracking
- Claude Code skill integration
- Green screen removal with FFmpeg
- Style transfer capabilities

### Features
- Command-line interface
- Multiple model support (Flash, Pro)
- Flexible output options
- Environment-based configuration

[2.1.0]: https://github.com/kingbootoshi/nano-banana-2-skill/compare/v2.0.0...v2.1.0
[2.0.0]: https://github.com/kingbootoshi/nano-banana-2-skill/releases/tag/v2.0.0
