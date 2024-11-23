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

    "github.com/SerhiiCho/timeago/v3"
)

func main() {
    tenSecondsAgo := time.Now().Add(-time.Second * 10)

    out, err := timeago.Parse(currTime, "online")

    if err != nil {
        // handle the error
    }

    fmt.Println(out) // prints: "Online"
}
```

## Example With Multiple Options
Let's see the example with multiple options where you want hide the suffix `ago` and display `Just now` if the date interval is within 60 seconds:

```go
import (
    "time"
    "fmt"

    "github.com/SerhiiCho/timeago/v3"
)

func main() {
    tenSecondsAgo := time.Now().Add(-time.Second * 10)

    out, err := timeago.Parse(currTime, "justNow", "noSuffix")

    if err != nil {
        // handle the error
    }

    fmt.Println(out) // prints: "Just now"
}
```

But if we change the `tenSecondsAgo` to `time.Now().Add(-time.Minute * 2)` the output will be `2 minutes` because the `justNow` option is applicable only for the date interval within 60 seconds.

## Available Options
The full list of available options:

| Option | Description |
| --- | --- |
| `online` | Displays **Online** if date interval withing 60 seconds. For example instead of `13 seconds ago` prints `Online` |
| `justNow` | Displays **Just now** if date interval withing 60 seconds. For example instead of `32 seconds ago` prints `Just now`. |
| `noSuffix` | Removes suffix from datetime result and get for example `5 minutes` instead of `5 minutes ago`. |

This list will be updated with new useful options in the future if they are actually something that can be useful for the majority of users. If you want to suggest a new option, please create an issue on the [GitHub repository](https://github.com/SerhiiCho/timeago/issues)