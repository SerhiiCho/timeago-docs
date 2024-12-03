---
outline: deep
search: false
title: Guide - v2
---

:::danger Outdated version
You are viewing the outdated version of Timeago library. [Switch to the latest version](/) to get all the new features and improvements
:::

# Guide
To read about the library, you can on [What is Timeago?](/v2/what-is-timeago) page.

## Quick Start
library versioning is following the Go Modules versioning. To get the latest version of the library run the following command:

```bash
go get -u github.com/SerhiiCho/timeago/v2
```

## Usage
Pass the date to `timeago.Parse()` function. It counts the interval between current datetime and given datetime and returns parsed string in format `x time ago`. The library can work not only with dates in the past but future dates as well. The usage is pretty straight forward.

### Allowed types
Function `timeago.Parse()` excepts different types of datetime:

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
Future dates are also supported. The library will return the correct string without `ago` word in it.

```go
pastDate := time.Now().Add(time.Hour * 2)

res := timeago.Parse(pastDate)

fmt.Println(res) // 2 hours
```