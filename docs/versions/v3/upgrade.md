---
outline: deep
title: Upgrade - v3
description: Detailed guide on how to upgrade Timeago from v2 to v3
---

# Upgrade Guide: v2 to v3
Timeago `v3` is a major release featuring a complete rewrite of the library. This rewrite introduces a more streamlined process for adding new language support and significantly improves error handling. This guide will help you transition from `v2` to `v3` smoothly.

To simplify the upgrade process, no new features have been introduced in this release. Version [v3.0.0](https://github.com/SerhiiCho/timeago/pull/40) focuses entirely on changes to the Timeago API. New features are added in the [v3.1.0](https://github.com/SerhiiCho/timeago/pull/41) release, such as [support for 🇨🇳 Simplified Chinese language](https://github.com/SerhiiCho/timeago/issues/24), and extended configuration options.

## Breaking Changes
- **Update package namespace**. Changed package namespace to `github.com/SerhiiCho/timeago/v3`
- **Rename a function**. Renamed `SetConfig` function to `Configure` to make it better fit into Go naming conventions
- **Improved error handling**. The `Parse` function now returns an error as the second returned value. You need to handle it in your code

## Improvements
- **New language addition is improved**. Add ability to change the output of the `Parse` function when adding a support for a new language by adding a `format` field to a `JSON` file
- **New language files structure**. Change the file structure for `JSON` language files. They have now format to match [CLDR Specifications](https://cldr.unicode.org/index/cldr-spec/plural-rules)
- **New function `Reconfigure`**. Added a new function to reconfigure the Timeago configurations. Unlike the `Configure` function, it will override the previous configurations with the new ones.

## Upgrade Steps

### Step 1: Update Package Namespace
Using your editor's find and replace functionality, update the package namespace from `github.com/SerhiiCho/timeago/v2` to `github.com/SerhiiCho/timeago/v3`.

```go
import "github.com/SerhiiCho/timeago/v2" // [!code --]
import "github.com/SerhiiCho/timeago/v3" // [!code ++]
```

### Step 2: Update Dependencies
Run the command `go mod tidy` to update the dependencies in your `go.mod` file.

```bash
go mod tidy
```

### Step 3: Rename `SetConfig` Function
Rename the `SetConfig` function to `Configure` or `Reconfigure` all over your codebase. You can read about the differences between them on the [Configurations](/v3/configurations.html) page.

```go
timeago.SetConfig(timeago.Config{ // [!code --]
timeago.Configure(timeago.Config{ // [!code ++]
    Location: "America/New_York",
})
```

### Step 4: Update Translation Overrides
If you use translation overrides, you need to update the structure of the `timeago.Translation` struct. Here is the old way to overrides translations:

::: code-group
```go [Old way]
customTrans := []timeago.Translation{
    {
        Language: "en",
        Translations: map[string]string{
            "days":  "d",
            "day":   "d",
            "weeks": "w",
            "week":  "w",
            "ago":   "",
        },
    },
},

timeago.Configure(timeago.Config{
    Translations: customTrans,
})
```

```go [New way]
customTrans := []timeago.LangSet{
    {
        Lang: timeago.LangEn,
        Ago:  "",
        Day: timeago.LangForms{
            "one":   "d",
            "other": "d",
        },
        Week: timeago.LangForms{
            "one":   "w",
            "other": "w",
        },
    },
}

timeago.Configure(timeago.Config{
    Translations: customTrans,
})
```
:::

We've made this change because the `v3` version now supports the [CLDR Specifications](https://cldr.unicode.org/index/cldr-spec/plural-rules) for plural rules. You can now define different forms for different numbers of units for difficult languages like Slavic, Arabic, and others. Which was impossible in the previous version.

### Step 5: Handle Errors
The `timeago.Parse()` function now returns 2 values: the result and an error. You need to handle the error for each call to the `Parse` function.

::: code-group
```go [Old way]
import "github.com/SerhiiCho/timeago/v2"

func main() {
	out := timeago.Parse("2024-02-27 10:00:00")

	fmt.Println(out)
}
```

```go [New way]
import (
    "log"

    "github.com/SerhiiCho/timeago/v3"
)

func main() {
	out, err := timeago.Parse("2024-02-27 10:00:00")

    if err != nil {
        log.Fatalln(err)
    }

	fmt.Println(out)
}
```
:::