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

### Supported languages
This package supports multiple languages. You can easily [contribute](/contribute) your own language. Take a look at already supported languages:

| Flag | Language | Code (ISO 639-1) |
| --- | --- | --- |
| 🇬🇧 | English | en |
| 🇷🇺 | Russian | ru |
| 🇺🇦 | Ukrainian | uk |
| 🇳🇱 | Dutch | nl |
| 🇩🇪 | German | de |

## Location
Optionally you can set the location in your application. The functionality is going to be the
same, but with 1 exception. In the absence of time zone information, package interprets a time as UTC;
With location configuration it interprets the time as in the given location.

> There is no default value for this option.

```go
import "github.com/SerhiiCho/timeago/v2"

func main() {
    timeago.SetConfig(timeago.Config{
        Location: "Europe/Kiev",
    })
}
```

> Please make sure that timezone configuration is correct for your location. It is very important for displaying the correct datetime.

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

> You can find the full list of words that you can overwrite in `langs/` directory in the root of the project.
