---
title: Example project
date: 2026-10-10
summary: A template project showing the gallery, inline photos, links and files.
draft: true # Drafts are never published. Delete this line (or this folder) when you're ready.

# Every photo in this folder appears in the gallery, in filename order.
# Captions are optional:
resources:
  - src: 01-overview.jpg
    title: The finished thing
  - src: 02-detail.jpg
    title: A close-up

links:
  - title: Source code
    url: https://github.com/craigjperry2
  - title: Write-up that inspired it
    url: https://gohugo.io/

files:
  - title: Parts list
    url: parts-list.csv # a file in this folder: its size is worked out automatically
  - title: Enclosure model
    url: https://example.com/files/enclosure.stl
    size: 2480000 # bytes; or text such as "2.5 MB"
  - title: Datasheet
    url: https://example.com/files/datasheet.pdf
    size: 1.2 MB
---

Write about the project here. Photos can also go inline, and they're resized for the
web automatically:

![A wiring diagram](03-wiring.jpg "Wiring, version two")

More text after the photo.
