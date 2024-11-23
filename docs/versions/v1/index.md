---
outline: deep
search: false
title: Get Started - v1
---

:::danger Outdated version
This is the `v1` version of Timeago library that is outdated. You can [switch to the latest version](/) to get all the new features and improvements
:::

# Get Started

## Quick Start

```bash
go get -u github.com/SerhiiCho/timeago
```

## Supported languages

<table>
  <thead>
    <tr>
      <th>FLag</th>
      <th>Language</th>
      <th>Short representation</th>
    </tr>
  </thead>
  <tbody>
     <tr>
      <td>🇬🇧</td>
      <td>English</td>
      <td>en</td>
    </tr>
    <tr>
      <td>🇷🇺</td>
      <td>Russian</td>
      <td>ru</td>
    </tr>
    <tr>
      <td>🇺🇦</td>
      <td>Ukrainian</td>
      <td>uk</td>
    </tr>
  </tbody>
</table>

## Usage

For outputting post publishing date or something else you can just pass the date to function `timeago.Take()`. It will count the interval between now and given date and returns converted format.

```go
timeago.Take("2019-10-23 10:46:00") // after 10 seconds outputs: 10 seconds ago
```

If you want to show last user login like if user is online or not, you can optionally add `|online` to the datetime string. All it does is just displaying **Online** if date interval withing 60 seconds.

```go
timeago.Take("2019-10-23 10:46:00|online")
```
