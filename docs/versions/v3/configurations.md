---
outline: deep
title: Configurations - v3
description: Learn how to configure the library with different options like language, location, and translations
---

# Configurations
You can update the library configuration using the `Configure` or `Reconfigure` function, both of which accept a `Config` struct. These functions can be called in your init function, main function, or anywhere in your codebase, as long as they are called before the `Parse` function. If not, the library will fall back to the default configuration.

## Two Configuration Functions
The `Configure` function allows incremental updates to the configuration. It merges the new settings with the existing ones, preserving any previously configured values. This means you can update specific settings without affecting the rest.

If you want to completely override the existing configuration, use the `Reconfigure` function instead. It resets all settings to their default values before applying the new configuration.

## Available Configurations
Here is the full list of all the available configurations on the `textwire.Config` struct:

| Name | Default value | type | Description |
| --- | --- | --- | --- |
| [Language](/v3/configurations.html#language) | `en` | `string` | Set the language for your application in ISO 639 format |
| [Location](/v3/configurations.html#location) | `UTC` | `string` | Set the timezone for parsing date strings |
| [Translations](/v3/configurations.html#translation-overrides) | `[]LangSet{}` | `[]LangSet` | Customize the output format and translations |
| [OnlineThreshold](/v3/configurations.html#thresholds) | `60` | `int` | The threshold in seconds to determine when timeago should show `Online` instead of `X seconds ago` |
| [JustNowThreshold](/v3/configurations.html#thresholds) | `60` | `int` | The threshold in seconds to determine when timeago should show `Just now` instead of `X seconds ago` |

## Language
You can optionally set the language for your application. The default is `en` (English), but you can change it to any language supported by Timeago.

The language code follows the [ISO 639](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) standard. Here is an example of how to set the language to Russian:

```go
import ago "github.com/SerhiiCho/timeago/v3"

func init() {
    ago.Configure(ago.Config{
        Language: ago.LangRu,
    })
}
```

:::tip Supported languages
You can find the full list of supported languages in the [Supported Languages](/v3/what-is-timeago.html#supported-languages) section.
:::

## Location
Location specifies the timezone needed for parsing a date string like `2019-01-01 00:00:00` into a Go's [`time.Time`](https://pkg.go.dev/time) object. If `Location` is not set, it interprets the given time as [UTC](https://en.wikipedia.org/wiki/Coordinated_Universal_Time) (Coordinated Universal Time). **You don't need to set this** if your date string is already in UTC.

```go
import "github.com/SerhiiCho/timeago/v3"

func init() {
    timeago.Configure(timeago.Config{
        Location: "Asia/Shanghai",
    })
}
```

Example locations: `America/New_York`, `Asia/Tokyo`, `Asia/Shanghai`, `Australia/Sydney`, `Europe/Moscow`, `Europe/Kiev` etc. Look for your location in the [IANA Time Zone Database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

## Translation Overrides
In some cases, you may want to customize certain words or phrases used in Timeago. For example, you might want to replace the word `days` with `d` to get `4d ago`, or adjust phrases like `ago`, `Just now`, and `Online` to better fit your application's needs.

With translation overrides, you can even modify the structure of the final output. For instance, you can change `4 days ago` to `It's been 4 days` or create entirely new formats. This feature works with any language supported by Timeago.

### Define Overrides
To override translations, you need to create a `LangSet` struct and pass it to the `Translations` field in the `Config` struct. Let's look at an example where we customize the English language output to display `4d` or `4w` instead of `4 days ago` or `4 weeks ago`:

:::tip Alias Package Name
Consider using an alias like `ago` when importing the package to make your code more concise and readable. This is especially useful for complex configurations, such as overrides, where shorter references can improve clarity.

I wouldn't suggest names like `time`, `t`, or `ta`, as they are too generic and can cause confusion with the standard `time` package.
:::

```go
import ago "github.com/SerhiiCho/timeago/v3"

func main() {
    customTrans := []ago.LangSet{
        {
            Lang: ago.LangEn,
            Format: "{num}{timeUnit}",
            Day: ago.LangForms{
                "one":   "d",
                "other": "d",
            },
            Week: ago.LangForms{
                "one":   "w",
                "other": "w",
            },
        },
    }

    ago.Configure(ago.Config{
        Translations: customTrans,
    })
}
```

### `LangSet` Definition
To give you an idea of how to structure the `LangSet` object for fully customizing all translations, here's the complete struct definition:

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

`Lang` type is just a string like "en", "zh", "ru", etc.

:::tip Target Language
The `Lang` field in the `LangSet` struct specifies the language you want to override. To override translations for multiple languages, simply add multiple `LangSet` structs to the `Translations` field in the `Config`.

If you provide a language code that is not supported, it will be ignored.
:::

### Modify the Output Format
You can customize the output format using the `Format` field in the `LangSet` struct. This field allows you to define the structure of the final output. By default, the format is `{num} {timeUnit} {ago}`, as this is the most common arrangement in many languages. However, you can change it to match your requirements.

For example, in German (supported by Timeago), the format is `{ago} {num} {timeUnit}`, which places the word `ago` at the beginning of the output. While English uses `10 minutes ago`, in German it becomes `Vor 10 Minuten`.

To modify the output, simply update the `Format` field in the `LangSet` struct to your desired structure:

```go
import ago "github.com/SerhiiCho/timeago/v3"

func main() {
    customTrans := []ago.LangSet{
        {
            Lang: ago.LangEn,
            Format: "It's been {num} {timeUnit}",
        },
    }

    ago.Configure(ago.Config{
        Translations: customTrans,
    })
}
```

After this change, you output will be `It's been 10 minutes` instead of `10 minutes ago`.

## Thresholds
The threshold in seconds to determine when the Timeago should show `Online` or `Just now` instead of `X seconds ago`. If the time difference is less than the threshold, it will show `Online` or `Just now` instead of `X seconds ago` depending on the provided [option](/v3/options.html).

**Minimum value**: `1` *(always show `Online` / `Just now`)*\
**Default value**: `60` *(show `Online` / `Just now` if the time difference is less than 60 seconds)*

### `OnlineThreshold` example
```go
import ago "github.com/SerhiiCho/timeago/v3"

func init() {
    ago.Configure(ago.Config{
        OnlineThreshold: 30,
    })
}

func main() {
	_25secondsAgo := time.Now().Add(-25 * time.Second)
	_35secondsAgo := time.Now().Add(-35 * time.Second)

	out25, _ := ago.Parse(_25secondsAgo, ago.Online)
	out35, _ := ago.Parse(_35secondsAgo, ago.Online)

	fmt.Println(out25) // Output: "Online"
	fmt.Println(out35) // Output: "35 seconds ago"
}
```

### `JustNowThreshold` example
```go
import ago "github.com/SerhiiCho/timeago/v3"

func init() {
    ago.Configure(ago.Config{
        JustNowThreshold: 30,
    })
}

func main() {
	_25secondsAgo := time.Now().Add(-25 * time.Second)
	_35secondsAgo := time.Now().Add(-35 * time.Second)

	out25, _ := ago.Parse(_25secondsAgo, ago.JustNow)
	out35, _ := ago.Parse(_35secondsAgo, ago.JustNow)

	fmt.Println(out25) // Output: "Just now"
	fmt.Println(out35) // Output: "35 seconds ago"
}
```