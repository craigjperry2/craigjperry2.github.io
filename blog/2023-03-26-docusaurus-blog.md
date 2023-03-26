---
slug: docusaurus-blog
title: Docusaurus Blog
authors: [craig]
tags: [docusaurus]
---

I'm a note-taker and I've used Onenote to host & index them for years. It works
everywhere, suprisingly even on my linux desktop thanks to its progressive web
app version. But sharing them can be a pain, a simple website would be better.

## Docusaurus

I've been using docusaurus at `$DAYJOB` and it's pretty so-so as documentation
tooling goes. For example, the native search options are uninspiring; either use
Algolia's service (not suitable in my case) or use one of the plugins that
integrates [lunr](https://lunrjs.com). I ended up making my own integration with
another search service and Docusaurus made it easy to "swizzle" the SearchBar.

Docusarus's most useful feature is as a low-friction way to publish small React
components. The sweet spot is where you need a splash of interactivity over
mostly static data. E.g. a mini-YouTube for sharing a bunch of videos i recorded
or a UI that lets a visitor keep track of and resume their progress through
milestones in a larger HowTo Guide that they might not consume in one visit.

The docusaurus API has annoyingly changed a few times with version bumps. For
example the way to access parts of react-router changed.

## This Site

And so this site exists as a playground for Docusaurus and as a place to
publicly share my notes. This post exists only because i want to test-drive
the blog feature which i've never had a use case for before.
