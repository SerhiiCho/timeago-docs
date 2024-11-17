---
outline: deep
---

# Guide
To read about the package, you can on [What is Timeago?](/what-is-timeago) page.

## Quick Start
Package versioning is following the Go Modules versioning. To get the latest version of the package run the following command:

```bash
go get -u github.com/SerhiiCho/timeago/v3
```

## Usage
Pass the date to `timeago.Parse()` function. It counts the interval between current datetime and given datetime and returns parsed string in format `x time ago`. The package can work not only with dates in the past but future dates as well. The usage is pretty straight forward.

### Allowed types
Function `timeago.Parse()` excepts different types of datetime and returns the result and error:

- `int` Unix timestamp
- `time.Time` Type from Go time package
- `string` Datetime string in format `YYYY-MM-DD HH:MM:SS`

```go
timeago.Parse("2019-10-23 10:46:00") // string date
timeago.Parse(time.Now()) // time.Time
timeago.Parse(1642607826) // Unix timestamp
```

:::warning
Any other type passed to the `Parse` function will return an error
:::

### Usage with the date in the past
```go
pastDate := time.Now().Add(-time.Hour)

res, err := timeago.Parse(pastDate)

if err != nil {
    fmt.Println(err)
}

fmt.Println(res) // 1 hour ago
```

### Usage with the date in the future
Future dates are also supported. The package will return the correct string without `ago` word in it.

```go
pastDate := time.Now().Add(time.Hour * 2)

res := timeago.Parse(pastDate)

fmt.Println(res) // 2 hours
```