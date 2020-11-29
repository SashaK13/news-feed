# News Feed examples
This repository contains a list of examples of news feed.
You can find in them the \<article\> element and \<template\> element, in the HTML.
In the JavaScript, you can find examples for recycling the template, adding the articles from JavaScript, iterating a list of articles, and paginating the results.

## Example 2: clone template
Uses the \<template\> element, which is cloned for each new article pushed into the HTML.

## Example 3: feed with mockup DB
Uses a mockup function that pretends to provide data from the server, giving a list of articles to push into the HTML.

## Example 4: pagination
Uses a simple pagination method, to reduce the articles list length.

## Example 5: recycling list of containers
Detect the user scroll down and scroll up events (mouse and touch gesture) to update the list of articles. There will be only four articles at a time, and the article HTML containers will be recycled, updating the content of each one of the articles with the next/previous (down/up) article in the list.
