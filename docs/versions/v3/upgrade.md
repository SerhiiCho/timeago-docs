---
outline: deep
title: Upgrade - v3
description: Detailed guide on how to upgrade Timeago from v2 to v3
---

# Upgrade Guide from v2 to v3
Timeago `v3` was a major release with the full rewrite of the library. It gave us a better and easier way to add support for a new language and improved error handling. This guide will help you to upgrade from `v2` to `v3`.

I've decided to not include new features in this release to make the upgrade process as smooth as possible. I'll add them in the next feature release. The version `3.0.0` focuses on the package API changes.

## Breaking Changes
- **Update package namespace**. Changed package namespace to `github.com/SerhiiCho/timeago/v3`
- **Rename a function**. Renamed `SetConfig` function to `Configure` to make it better fit into Go naming conventions

## Improvements
- **Improved error handling**. The `Parse` function now returns an error as the second returned value
- **New language addition is improved**. Add ability to change the output of the `Parse` function when adding a support for a new language by adding a `format` field to a `JSON` file
- **New language files structure**. Change the file structure for `JSON` language files. They have now format to match [CLDR Specifications](https://cldr.unicode.org/index/cldr-spec/plural-rules)
- **New function `ClearCache`**. Added a new function to clear the cache of the package to free up memory when needed. It's also useful when you want to reload the language files without restarting the application.
- **New function `Reconfigure`**. Added a new function to reconfigure the package configurations. Unlike the `Configure` function, it will overwrite the previous configurations with the new ones.

## Upgrade steps

### Step 1: Update package namespace
Using your editor's find and replace functionality, update the package namespace from `github.com/SerhiiCho/timeago/v2` to `github.com/SerhiiCho/timeago/v3`.

```go
import "github.com/SerhiiCho/timeago/v2" // [!code --]
import "github.com/SerhiiCho/timeago/v3" // [!code ++]
```

### Step 2: Update dependencies
Run the command `go mod tidy` to update the dependencies in your `go.mod` file.

```bash
go mod tidy
```

### Step 3: Rename `SetConfig` function
Rename the `SetConfig` function to `Configure` or `Reconfigure` all over your codebase. You can read about the differences between them on the [Configurations](/v3/configurations.html) page.

```go
timeago.SetConfig(timeago.Config{ // [!code --]
timeago.Configure(timeago.Config{ // [!code ++]
    Location: "America/New_York",
})
```

### Step 4: Update translation overwrites
If you use translation overwrites, you need to update the structure of the `timeago.Translation` struct. Here is the old way to overwrite translations:

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
        Lang: "en",
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

### Step 5: Handle errors
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