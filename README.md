# Drum Pad
## [Live Link](https://mjguggen.github.io/Drum-Pad/)
## Description
The Drum Pad web app creates a virtual version of the AKAI MPD218 drum pad. It features two kits – the first being a traditional kit and the second containing samples from Daft Punk’s “Harder, Better, Faster, Stronger”. 
## How was it built?
- I first built the drum kit database by creating an array containing objects for each button (containing the button id, letter, source, and volume). This was then pushed down into a “DrumPad” component using a map function on the array to create an individual grid-section for each element of the array. Upon pushing a button, I used CSSinJS to change the style of the pad button to create red drop shadow that make the button look like it’s lighting up. 
Built With
- React
- Javascript
- HTML
- CSS
## How I would improve this project
- Add an overall volume control for the project
- Add the ability to record loops of a user’s drum patterns

**Created by Mike Guggenbuehl**