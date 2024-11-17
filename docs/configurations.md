---
outline: deep
---

# Configurations
We can set package configurations with `SetConfig` function that accepts `Config` structure.

## Language
Optionally you can set the language in your application.

> Default value is `"en"`

```go
import "github.com/SerhiiCho/timeago/v2"

func main() {
    timeago.SetConfig(timeago.Config{
        Language: "ru",
    })
}
```

:::tip Supported languages
You can find the full list of supported languages in the [What is Timeago?](/what-is-timeago.html#supported-languages) section.
:::

## Location
Location is the timezone location neeed for parsing string date like `2019-01-01 00:00:00`
to `time.Time`. If Location is not set it will default to the server's location when parsing
strings. If you date string is in the server's timezone **you don't need to set this**.

```go
import "github.com/SerhiiCho/timeago/v2"

func main() {
    timeago.SetConfig(timeago.Config{
        Location: "America/New_York",
    })
}
```

Example locations: `America/New_York`, `Asia/Tokyo`, `Australia/Sydney`.

## Overwrite translations
There are cases when you want to replace certain words with specific ones. For example you might want to replace "days" with "d" to get "4 d ago". You can do it with by setting specific configurations for each language. Let's see the example where we want to overwrite words for English language:

```go
import "github.com/SerhiiCho/timeago/v2"

func main() {
    timeago.SetConfig(timeago.Config{
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
}
```

After this configuration, instead of getting, for example, `4 days ago` you'll get `4 d` and instead of `1 week ago` you'll get `1 w`. For other languages it's pretty much the same thing:

```go
import "github.com/SerhiiCho/timeago/v2"

func main() {
    timeago.SetConfig(timeago.Config{
		Translations: []timeago.Translation{
			{
				Language: "ru",
				Translations: map[string]string{
					"день":  "д",
					"дня":   "д",
					"дней":  "д",
					"назад": "",
				},
			},
		},
	})
}
```

With this configurations, you'll get `5 д` instead of `5 дней назад`.

:::tip Supported words
You can find the full list of words that you can overwrite in `langs/` directory in the root of the project, or you can find them in our [GitHub repository](https://github.com/SerhiiCho/timeago/tree/main/langs).
:::
