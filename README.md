# Mini-Projects: A Collection of React Projects and Exercises

Storybook: https://mini-projects.mimm.dev

## Clock: Can You Tell The Time Using CSS?

This mini-project started as an exploration of CSS animation durations and transforms. I wanted to find out whether it was possible to create a clock that could tell the time without any JS. It turned into what could be quite an interesting CSS kata, as it involves understanding transforms, basic animation principles and an understanding of absolute positioning (and how z-index works when you don't specify any z-index properties).

Well, is it? The answer is _sort of_. It is possible, on the condition that you load up the component at 12am on the dot, because working out the correct rotation of each arm for the current time would require _getting_ the current time in the first place, something only JS can do for us. One possible workaround would be serving this page from a `Node.js` server or similar, and injecting CSS variables with the correct starting angles for each arm when the page is loaded. The downside here is that the start time might be slightly behind the _actual_ time when the page reaches the user due to latency.

After a bit of investigation, this solution isn't quite as rosy as I first thought. I am a big advocate for reducing unnecessary JavaScript in websites, especially when it comes to animations. However, in the case of a clock, it's crucial that it stays on time, and CSS animation timing isn't always guaranteed, especially if the animation is throttled due to performance limitations (find an example [here](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations#receiving_the_events)). Without JS, there is no way to restore the correct time if it goes out of sync with the current time.

What's the conclusion? CSS animations are great, and a pure CSS clock might be useful as an aesthetic addition to your dashboard, but a clock that can't tell the time accurately ultimately isn't a very useful clock.

CSS properties applied:

-   `transform`
-   `animation`
-   `transform-origin`
