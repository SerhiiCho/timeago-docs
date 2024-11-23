---
outline: deep
title: Usage Guide - v3
description: Learn how to quickly get started with the Timeago library
---

# Usage Guide
Pass the date into the `timeago.Parse()` function. It counts the interval between current datetime and given datetime and returns parsed string in format `x time ago`. The library can work not only with dates in the past but future dates as well. The usage is pretty straight forward.

### Allowed types
Function `timeago.Parse()` excepts different types of datetime and returns the result and error. The allowed types are:

- `int` Unix timestamp.
    - Example: `1642607826`
- `time.Time` Type from Go time package
    - Example: `time.Now()`
- `string` Datetime string in format `YYYY-MM-DD HH:MM:SS`
    - Example: `2019-10-23 10:46:11`

:::warning
Any other type passed to the `Parse` function will return an error
:::

### Date in the past
If you pass a date in the past, Timeago will return the output with `ago` word in it suggesting that the date is in the past. Unless you specify the `noSuffix` option. Read [here](/v3/options.html#available-options) about options and how to use them.

```go
import (
	"fmt"
	"time"

	"github.com/SerhiiCho/timeago/v2"
)

func main() {
	pastDate := time.Now().Add(-time.Minute * 5)
	out, err := timeago.Parse(pastDate)

	if err != nil {
		// handle error
	}

	fmt.Println(out) // Output: "5 minutes ago"
}
```

### Date in the future
Future dates are also supported. Timeago will return the correct string without `ago` word in it when the date is in the future.

```go
import (
	"fmt"
	"time"

	"github.com/SerhiiCho/timeago/v2"
)

func main() {
    pastDate := time.Now().Add(time.Hour * 2)
    res, err := timeago.Parse(pastDate)

    if err != nil {
        // handle error
    }

    fmt.Println(res) // Output: "2 hours"
}
```