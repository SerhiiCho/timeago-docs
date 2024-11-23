---
outline: deep
title: What is Timeago - v3
description: Learn about Timeago, a fast, lightweight date and time library that converts a given date into a "time ago" format
---

# What is Timeago?
Timeago is a fast and lightweight library for working with dates and times. It transforms a given date into a human-readable "time ago" format, calculating the difference between the specified date and the current date. It supports both past and future dates, making it versatile for various use cases.

With its simple API and support for multiple languages, Timeago seamlessly adapts to different applications, whether you're building user interfaces, handling localized content, or working with changing or real-time dates.

## Features
The library has several nice features, such as:

- 📅 Flexible date parsing, supporting both [past and future dates](/v3/usage.html#date-in-the-past)
- ⚙️ Configurable library with ability to pass [options](/v3/options) to suit various use cases, [override translations](/configurations.html#translation-overrides) or [modify the output format](/v3/configurations.html#modify-the-output-format)
- ✅ Comprehensive test coverage for reliability
- 🌐 Timeago support multiple languages such as English, Russian, Ukrainian, Dutch, German and you can contribute more
- 📦 Compact codebase for minimal footprint
- 🕰️ Unix timestamp parsing
- ⏱️ Support for date-time strings in the `YYYY-MM-DD HH:MM:SS` format
- 📆 Compatibility with `time.Time` struct from the Go standard library
- ✍️ Easy [contribution](/v3/contribute) of new language support
- 📝 Detailed [CHANGELOG.md](https://github.com/SerhiiCho/timeago/blob/main/CHANGELOG.md) for all updates and features
- 📖 Thorough documentation for ease of use

## Supported Languages
Timeago supports multiple languages, and you’re welcome to [contribute](/v3/contribute) additional ones. Check out the languages currently available:

| Flag | Language | Code (ISO 639-1) |
| --- | --- | --- |
| 🇬🇧 | English | en |
| 🇷🇺 | Russian | ru |
| 🇺🇦 | Ukrainian | uk |
| 🇳🇱 | Dutch | nl |
| 🇩🇪 | German | de |