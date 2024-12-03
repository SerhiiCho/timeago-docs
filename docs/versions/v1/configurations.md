---
outline: deep
search: false
title: Configurations - v1
---

:::danger Outdated version
You are viewing the outdated version of Timeago library. [Switch to the latest version](/) to get all the new features and improvements
:::

# Configurations

### Language

Default language is English. Optionally you can set the language in your application by calling `timeago.Set()` function and pass the flag "ru" or "en" in your init function.

```go
func init() {
    timeago.Set("language", "ru")
}
```

### Location

Default location is Europe/Kiev. Optionally you can set the location in your application by calling `timeago.Set()` function and pass the location you need in your init function.

```go
func init() {
    timeago.Set("location", "America/New_York")
}
```

:::tip Set Location
Please make sure that timezone configuration is correct for your location. It is very important for displaying the correct datetime.
:::
