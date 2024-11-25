---
outline: deep
title: Options - v3
description: Modify the output by passing additional options to the Parse function
---

# Options
The `Parse()` is a [variadic function](https://en.wikipedia.org/wiki/Variadic_function) that eccepts an indefinite number of string arguments after the first argument. It means that you can pass as many options as you want to modify the output.

## Example With One Option
The most common way to use options is to pass a single option as a string. For example, if you want to display `Online` when the date interval is within 60 seconds, you can pass the `online` option like this:

```go
import (
    "time"
    "fmt"

    ago "github.com/SerhiiCho/timeago/v3"
)

func main() {
    tenSecondsAgo := time.Now().Add(-time.Second * 10)

    out, err := ago.Parse(currTime, ago.OptOnline)

    if err != nil {
        // handle the error
    }

    fmt.Println(out) // prints: "Online"
}
```

:::tip Two Ways to Use Options
You can pass options either as strings (e.g., `"online"`, `"justNow"`) or by using constants from the `timeago` package (e.g., `timeago.OptOnline`, `timeago.OptJustNow`). While both approaches work the same, using constants is recommended because it improves readability, reduces errors, and provides autocomplete support in your editor.
:::

## Example With Multiple Options
Let's see the example with multiple options where you want hide the suffix `ago` and display `Just now` if the date interval is within 60 seconds:

```go
import (
    "time"
    "fmt"

    ago "github.com/SerhiiCho/timeago/v3"
)

func main() {
    tenSecondsAgo := time.Now().Add(-time.Second * 10)

    out, err := ago.Parse(currTime, ago.OptJustNow, ago.OptNoSuffix)

    if err != nil {
        // handle the error
    }

    fmt.Println(out) // prints: "Just now"
}
```

But if we change the `tenSecondsAgo` to `time.Now().Add(-time.Minute * 2)` the output will be `2 minutes` because the `justNow` option is applicable only for the date interval within 60 seconds.

## Available Options
The full list of available options with constant names and string value if you prefer to use them:

| Const & str | Description | When to use? |
| --- | --- | --- |
| `OptOnline`<br>`"online"` | Displays **Online** if date interval withing 60 seconds. For example instead of `13 seconds ago` prints `Online` | It could be used when you need to display the online status of users, to tell the show that the user is `Online` when the date interval is within the certain threshold |
| `OptJustNow`<br>`"justNow"` | Displays **Just now** if date interval withing 60 seconds. For example instead of `32 seconds ago` prints `Just now` | It could be used when you need to display the `Just now` message when the message was sent within the certain threshold, or when something was done, published, etc. |
| `OptNoSuffix`<br>`"noSuffix"` | Removes suffix from datetime result and get for example `5 minutes` instead of `5 minutes ago` | It could be used in scenarios where you want to display a time duration without indicating whether it is in the past or future. Or, When you need a shorter, cleaner output for compact UI elements like widgets or dashboards |
| `OptUpcoming`<br>`"upcoming"` | Removes the suffix `ago` when the date is in the future. **This option is enabled by default, there is no need to pass it**. It's available to keep backward compatibility with the previous versions | No usage. Because it's enabled by default |

This list will be updated with new useful options in the future if they are actually something that can be useful for the majority of users. If you want to suggest a new option, please create an issue on the [GitHub repository](https://github.com/SerhiiCho/timeago/issues)