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

```diff
- import "github.com/SerhiiCho/timeago/v2"
+ import "github.com/SerhiiCho/timeago/v3"
```

### Step 2: Update dependencies
Run the command `go mod tidy` to update the dependencies in your `go.mod` file.

```bash
go mod tidy
```

### Step 3: Rename `SetConfig` function
Rename the `SetConfig` function to `Configure` all over your codebase.

```diff
- timeago.SetConfig(timeago.Config{
+ timeago.Configure(timeago.Config{
    Location: "America/New_York",
})
```


### Step 4: Update translation overwrites
If you use translation overwrites, you need to update the structure of the `timeago.Translation` struct. Here is the old way to overwrite translations:

```go
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

Here is the same code with the new structure:

```go
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

I've changed the structure because the `v3` version now supports the [CLDR Specifications](https://cldr.unicode.org/index/cldr-spec/plural-rules) for plural rules. You can now define different forms for different numbers of units for difficult languages like Slavic, Arabic, and others. Which was impossible in the previous version.