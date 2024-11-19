---
outline: deep
description: Detailed guide on how to upgrade Timeago from v2 to v3
---

# Upgrade Guide from v2 to v3
Timeago `v3` was a major release with the full rewrite of the library. It gave us a better and easier way to add support for a new language and improved error handling. This guide will help you to upgrade from `v2` to `v3`.

## Changes
- **Improved error handling**. The `Parse` function now returns an error as the second returned value
- **Update package namespace**. Changed package namespace to `github.com/SerhiiCho/timeago/v3`
- **Rename a function**. Renamed `SetConfig` function to `Configure` to make it better fit into Go naming conventions
- **New language files structure**. Change the file structure for `JSON` language files. They have now format to match [CLDR Specifications](https://cldr.unicode.org/index/cldr-spec/plural-rules)
- **New language addition is improved**. Add ability to change the output of the `Parse` function when adding a support for a new language by adding a `format` field to a `JSON` file
- **Overwriting translation API change**. Change the API for setting custom translations to overwrite default translations. The `JSON` file structures for languages `en.json`, `ru.json`, etc., are now different

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
timeago.Configure(timeago.Config{
    Translations: []timeago.Translation{
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
})
```

The new way to overwrite translations:

```go
```