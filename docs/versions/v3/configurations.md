---
outline: deep
title: Configurations - v3
description: Learn how to configure the package with different options like language, location, and translations
---

# Configurations
We can update package configurations with `Configure` function that accepts a `Config` struct.

:::warning
If you call `Configure` function multiple times it will not overwrite the previous configurations. It will merge them. So if you already configured the package buy down the road want to change only a specific configuration, you can do it without worrying about the rest.

If you want to override the previous configurations, use `Reconfigure` function instead.
:::

## Language
Optionally you can set the language in your application.

> Default value is `"en"`

```go
import "github.com/SerhiiCho/timeago/v3"

func init() {
    timeago.Configure(timeago.Config{
        Language: "ru",
    })
}
```

:::tip Supported languages
You can find the full list of supported languages in the [What is Timeago?](/v3/what-is-timeago.html#supported-languages) section.
:::

:::tip Configure in `init` or `main`?
You can put the configuration in the `init` function or in the `main` function. It's up to you to decide.
:::

## Location
Location is the timezone location neeed for parsing string date like `2019-01-01 00:00:00`
to `time.Time`. If Location is not set it will default to the server's location when parsing
strings. If you date string is in the server's timezone **you don't need to set this**.

```go
import "github.com/SerhiiCho/timeago/v3"

func init() {
    timeago.Configure(timeago.Config{
        Location: "America/New_York",
    })
}
```

Example locations: `America/New_York`, `Asia/Tokyo`, `Australia/Sydney`.

## Translation overwrites
There are cases when you want to replace certain words with specific ones. For example you might want to replace the word `days` with `d` to get `4 d ago`. Or, you might want to replace the word `ago`, `Just now`, `Online` with your own to match your application's needs.

With translation overwrites you can even change the order of the words in the final output or even extend it. For example, you can change `4 days ago` to `It's been 4 days`.

You can do it with any language supported by Timeago. Let's see the example where we wan't to get the output of `4d`, `4w` instead of `4 days ago`, `4 weeks ago` for English language.

```go
import "github.com/SerhiiCho/timeago/v3"

func main() {
    customTrans := []timeago.LangSet{
        {
            Lang: "en",
            Format: "{num}{timeUnit}",
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
}
```

Here is the `LangSet` struct for reference to give you an idea of what fields you can overwrite:

```go
type LangForms map[string]string

type LangSet struct {
	Lang    string    `json:"lang"`
	Format  string    `json:"format"`
	Ago     string    `json:"ago"`
	Online  string    `json:"online"`
	JustNow string    `json:"justnow"`
	Second  LangForms `json:"second"`
	Minute  LangForms `json:"minute"`
	Hour    LangForms `json:"hour"`
	Day     LangForms `json:"day"`
	Week    LangForms `json:"week"`
	Month   LangForms `json:"month"`
	Year    LangForms `json:"year"`
}
```

:::tip Keep in mind
The `Lang` field in the `LangSet` struct is the language you want to overwrite. If you want to overwrite the translation for multiple languages, you can add multiple `LangSet` structs to the `Translations` field in the `Config`.

If you provide a language code that is not defined, it will be ignored.
:::