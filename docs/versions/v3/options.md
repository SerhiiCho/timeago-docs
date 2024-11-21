---
outline: deep
title: Options - v3
description: Modify the output by passing additional options to the Parse function
---

# Options
As the seconds argument `Parse()` function excepts strings. Here is an example of passed option.

## Example with one option
```go
currentTime := time.Now()
hourAgo := currentTime.Add(-time.Hour)

timeago.Parse(currentTime, "online") // Online
timeago.Parse(currentTime, "justNow") // Just now
timeago.Parse(hourAgo, "noSuffix") // 1 hour
```

## Example with multiple options
```go
currentTime := time.Now()
hourAgo := currentTime.Add(-time.Hour)

timeago.Parse(currentTime, "online", "noSuffix") // Online
timeago.Parse(hourAgo, "online", "noSuffix") // 1 hour
```

## Available options
| Option | Description |
| --- | --- |
| `online` | Displays **Online** if date interval withing 60 seconds. For example instead of `13 seconds ago` prints `Online` |
| `justNow` | Displays **Just now** if date interval withing 60 seconds. For example instead of `32 seconds ago` prints `Just now`. |
| `noSuffix` | Removes suffix from datetime result and get for example `5 minutes` instead of `5 minutes ago`. |