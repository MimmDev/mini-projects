# Mini-Projects: A Collection of React Projects and Exercises

Storybook: https://mini-projects.mimm.dev

## Clock: Can You Tell The Time Using CSS?

This mini-project started as an exploration of CSS animation durations and transforms. I wanted to find out whether it was possible to create a clock that could tell the time without any JS. It turned into what could be quite an interesting CSS kata, as it involves understanding transforms, basic animation principles and an understanding of absolute positioning (and how z-index works when you don't specify any z-index properties).

Well, is it? The answer is _sort of_. It is possible, on the condition that you load up the component at 12am on the dot, because working out the correct rotation of each arm for the current time would require _getting_ the current time in the first place, something only JS can do for us. I may be missing some snazzy workaround though, so shout up if you know something I don't!

CSS properties applied:

-   `transform`
-   `animation`
-   `transform-origin`
