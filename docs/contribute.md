---
outline: deep
---

# Contribute translation
You can contribute a language support in 3 simple steps. All you need to do is to copy/paste several files and change them to match the language that you want to add.

## Step 1. Add language set file
Language set files live in [langs](https://github.com/SerhiiCho/timeago/tree/main/langs) directory. Each translation file is a JSON object with the name matching the [ISO 639](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) standard of the language that you want to add.

These files follow the [CLDR Specifications](https://cldr.unicode.org/index/cldr-spec/plural-rules) for plural rules for each language. Keep in mind that the only required field that we need to define for time unit is `other`, since this field is used as a fallback if no other rule matches.

Here's the example of `ru.json`

```json
{
    "format": "{num} {timeUnit} {ago}",
    "ago": "назад",
    "online": "В сети",
    "justnow": "Только что",

    "second": {
        "zero": "секунд",
        "one": "секунда",
        "few": "секунды",
        "many": "секунд",
        "other": "секунды"
    },
    "minute": {
        "zero": "минут",
        "one": "минута",
        "few": "минуты",
        "many": "минут",
        "other": "минуты"
    },
    "hour": {
        "zero": "часов",
        "one": "час",
        "few": "часа",
        "many": "часов",
        "other": "часа"
    },
    "day": {
        "zero": "дней",
        "one": "день",
        "few": "дня",
        "many": "дней",
        "other": "дня"
    },
    "week": {
        "zero": "недель",
        "one": "неделя",
        "few": "недели",
        "many": "недель",
        "other": "недели"
    },
    "month": {
        "zero": "месяцев",
        "one": "месяц",
        "few": "месяца",
        "many": "месяцев",
        "other": "месяца"
    },
    "year": {
        "zero": "лет",
        "one": "год",
        "few": "года",
        "many": "лет",
        "other": "года"
    }
}
```

In this file we don't actually need to define the `few` field, since the the fallback is also matches the `few`, but I just wanted to demonstrate the full version of the file so that you have an idea how many fields are there.

### Fields
Let me give you a little bit more explanation about the fields in the file:

- `"format": "{num} {timeUnit} {ago}"` - This is the format of the output string.
  - `{num}` is the number of time units like `1`, `2`, `3`, etc.
  - `{timeUnit}` is the time unit itself like `second`, `minute`, `hour`, etc.
  - `{ago}` is the word that is used to indicate that the time is in the past or in the future.
- `"ago": "назад"` - This is the word that is used to indicate that the time is in the past.
- `"online": "В сети"` - This is the word that is used to indicate that the user is online.
- `"justnow": "Только что"` - This is the word that is used to indicate that the time is just now. When the time is less than 1 minute

## Step 2. Add language rules
All rules for each language is defined in `grammarRules` variable in [rules.go](https://github.com/SerhiiCho/timeago/blob/main/rules.go) file. Rule is just a set of conditions that define when to apply particular form from the language set.

Here is the example for Russian rules:

```go
var grammarRules = func(num int) map[string]*Rule {
	end := num % 10

	return map[string]*Rule{
		"ru": {
			Zero: num == 0,
			One:  num == 1 || (num > 20 && end == 1),
			Two:  num == 2,
			Few:  end == 2 || end == 3 || end == 4,
			Many: (num >= 5 && num <= 20) || end == 0 || (end >= 5 && end <= 9),
		},
	}
}
```

In these rules we tell that Timeago should use the `one` form when number is `1` or when number is more than `20` and the last digit is `1`. In English we don't have such complicated rules for plural forms. Here how English rules look like:

```go
var grammarRules = func(num int) map[string]*Rule {
	return map[string]*Rule{
		"en": {
			Zero: num == 0,
			One:  num == 1,
			Two:  num == 2,
			Few:  num > 1,
			Many: num > 1,
		},
	}
}
```

As a convenience, if the language that you want to add matches the rules of already existing language, you can just add your language `ISO 639` code to the rule key like this:

```go
var grammarRules = func(num int) map[string]*Rule {
	end := num % 10

	return map[string]*Rule{
		"en,nl,de": {
			Zero: num == 0,
			One:  num == 1,
			Two:  num == 2,
			Few:  num > 1,
			Many: num > 1,
		},
	}
}
```

English, Dutch and German languages have the same rules for plural forms, so we can just add them to the same rule key.

## Step 3. Add tests
Tests for languages live in `tests` directory. Each language has it's own file. The easies way to add tests for your language is to copy paste one of the tests and change the test cases to match your language.