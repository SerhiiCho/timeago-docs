# Documentation

Fast and lightweight date time package that converts given date into "n time ago" format. The package has many cool features and several supported languages.

## 😎 12 Features

- 🕐 Parses any given date, no matter it is the future date or the past;
- 🕑 Has several options that you can use depending on your use case;
- 🕒 Well tested;
- 🕓 Supports several languages;
- 🕔 Easy to contribute a new language support;
- 🕧 Small codebase;
- 🕖 Frequent small releases without breaking changes;
- 🕗 Can parse Unix timestamp;
- 🕘 Can parse date time string in `YYYY-MM-DD HH:MM:SS` format;
- 🕙 Can parse time from `time.Time` GO package;
- 🕚 All the changes and features are written in the [CHANGELOG.md](https://github.com/SerhiiCho/timeago/blob/main/CHANGELOG.md);
- 🕛 Well documented package;

## ⚙️️ Configurations

We can set package configurations with `SetConfig` function that accepts `Config` structure.

### Language

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

### Location

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

### Overwrite translations

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

## 🚩 Supported languages

This package supports multiple languages. You can easily contribute your own language. Take a look at already supported languages:

| Flag | Language | Code (ISO 639-1) |
| --- | --- | --- |
| 🇬🇧 | English | en |
| 🇷🇺 | Russian | ru |
| 🇺🇦 | Ukrainian | uk |
| 🇳🇱 | Dutch | nl |

## 🤲 Options

As the seconds argument `Parse()` method excepts strings. Here is an example of passed option.

### Example with one option

```go
currentTime := time.Now()
hourAgo := currentTime.Add(-time.Hour)

timeago.Parse(currentTime, "online") // Online
timeago.Parse(currentTime, "justNow") // Just now
timeago.Parse(hourAgo, "noSuffix") // 1 hour
```

### Example with multiple options

```go
currentTime := time.Now()
hourAgo := currentTime.Add(-time.Hour)

timeago.Parse(currentTime, "online", "noSuffix") // Online
timeago.Parse(hourAgo, "online", "noSuffix") // 1 hour
```

### Available options

| Option | Description |
| --- | --- |
| `online` | Displays **Online** if date interval withing 60 seconds. For example instead of `13 seconds ago` prints `Online` |
| `justNow` | Displays **Just now** if date interval withing 60 seconds. For example instead of `32 seconds ago` prints `Just now`. |
| `noSuffix` | Removes suffix from datetime result and get for example `5 minutes` instead of `5 minutes ago`. |

## 👏 Usage

Pass the date to `timeago.Parse()` function. It counts the interval between current datetime and given datetime and returns parsed string in format `x time ago`. The package can work not only with dates in the past but future dates as well. The usage is pretty straight forward.

### Allowed types

Method `timeago.Parse()` excepts different types of datetime:

- `int` Unix timestamp
- `time.Time` Type from Go time package
- `string` Datetime string in format `YYYY-MM-DD HH:MM:SS`

> Any other type will trigger a panic.

```go
timeago.Parse("2019-10-23 10:46:00") // string date
timeago.Parse(time.Now()) // time.Time
timeago.Parse(1642607826) // Unix timestamp
```

### Usage with the date in the past

```go
pastDate := time.Now().Add(-time.Hour)

res := timeago.Parse(pastDate)

fmt.Println(res) // 1 hour ago
```

### Usage with the date in the future

```go
pastDate := time.Now().Add(time.Hour * 2)

res := timeago.Parse(pastDate)

fmt.Println(res) // 2 hours
```

## 🇸🇿 Contribute translation

You can contribute a language support in 3 simple steps. All you need to do is to copy/paste 2 files and change them to match the language that you want to add.

Here is my [commit](https://github.com/SerhiiCho/timeago/commit/c1ee0429b540f1cce5eb61b6a3441022d9cb43e7) for supporting Dutch language that shows changes that I did to add the support. It's pretty straightforward. Waiting for you PR 😉.

> You can skip the step with `README.md` file, since all the documentation is here instead of a `README.md` file like it was before.

### Step 1. Add translation file

Translation files live in `langs` directory. Each translation file is pretty simple JSON object. Here's the example of `en.json`.

```json
{
    "Ago": "ago",
    "Online": "Online",
    "JustNow": "Just now",
    "Second": "second",
    "Seconds": "seconds",
    "Minute": "minute",
    "Minutes": "minutes",
    "Hour": "hour",
    "Hours": "hours",
    "Day": "day",
    "Days": "days",
    "Week": "week",
    "Weeks": "weeks",
    "Month": "month",
    "Months": "months",
    "Year": "year",
    "Years": "years"
}
```

Some languages (like Russian) have multiple plural forms of the word. For example English has only `second` and `seconds`, but Russian language has 3 types `секунда`, `секунд` and `секунды`. For these cases we can add additional translation for seconds, minutes, hours, days, weeks, months and years. Here is the example of `ru.json`.

```json
{
    "Ago": "назад",
    "Online": "В сети",
    "JustNow": "Только что",
    "Second": "секунда",
    "Seconds": "секунды",
    "SecondsSpecial": "секунд",
    "Minute": "минута",
    "Minutes": "минуты",
    "MinutesSpecial": "минут",
    "Hour": "час",
    "Hours": "часа",
    "HoursSpecial": "часов",
    "Day": "день",
    "Days": "дня",
    "DaysSpecial": "дней",
    "Week": "неделя",
    "Weeks": "недели",
    "WeeksSpecial": "недель",
    "Month": "месяц",
    "Months": "месяца",
    "MonthsSpecial": "месяцев",
    "Year": "год",
    "Years": "года",
    "YearsSpecial": "лет"
}
```

You can see that it has `SecondsSpecial`, `MinutesSpecial`, `HoursSpecial`, `DaysSpecial`, `WeeksSpecial` and `YearsSpecial` keys. Those are responsible for special age cases.

### Step 2. Add language rules

All rules for each language is defined in `getRules` function in `rules.go` file. Rule is just a set of conditions that define when to apply singular form and when to apply plural form.

Here is the example for English rules:

```go
func getRules(number, lastDigit int) map[string]Rule {
	return map[string]Rule{
		"en": {
			Single: number == 1,
			Plural: number > 1 || number == 0,
		},
	}
}
```

We'll use singular form when number is equal to 1, and plural if number is more than 1 or number is 0. You can easily write your own rules for your language.

### Step 3. Add tests

Tests for languages live in `tests` directory. Each language has it's own file. The easies way to add tests for your language is to copy paste one of the tests and change it to match your language.

## 🚀 Quick Start

```bash
go get -u github.com/SerhiiCho/timeago/v2
```