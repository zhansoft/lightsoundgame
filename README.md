# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: Sophia Zhang

Pre-work Time spent: 46 minutes spent in total
Fancy edits to game Time spent: 1 hour 38 minutes additional spent in total

Link to project: https://internal-ambiguous-quiver.glitch.me

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial
- [x] More than 4 functional game buttons
- [x] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [x] Player only loses after 3 mistakes (instead of on the first mistake)
- [ ] Game button appearance change goes beyond color (e.g. add an image)
- [x] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Volume button
- [x] Easy, medium, hard mode

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](https://i.imgur.com/o4pxnaQ.gif)


## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.
   -https://github.com/zhansoft/newfieldsapp (This is a website I worked on previously)
   -https://htmlcolorcodes.com/color-picker/ (This was for colors)
   -https://www.freecodecamp.org/news/codebyte-why-are-explicit-semicolons-important-in-javascript-49550bea0b82/ (explicit semicolons)
   -https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random [to insert a pseudorandom number generator]
  -https://programminghead.com/how-to-play-audio-in-html-using-javascript/ (how to do the audio portion)

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)
   A challenge that I encountered in creating this submission was regarding the usage of relative paths vs HTML links and also the usage of semicolons. When I was trying to add the audio sources for the audio clips I wanted to use, I was incredibly confused as to why the relative path would not work. I tried a multitude of different strings to put in like "/assets/something.mp3", "../assets/something.mp3", and "assets/something.mp3".  They all would not work. I even debated putting in the absolute path but I knew that would be a horrible idea in general since paths change regarding who is using the directory. Thus, I clicked on the assets folder and looked for any specific HTML link as I knew that the src could also be that. I tried it out on a whim and it happened to work. Sometimes the simplest solutions are just right in front of our faces. Regarding the usage of semicolons, I had heard from a previous advisor how the JavaScript syntax can be a little odd because semicolons can make the code compile a lot differently than intended. So, I had to read up more in depth about it. I looked at freecodecamp’s article on explicit semicolons and found that I cannot just use implicit semicolons whenever I use a lambda function as it will not compile correctly. It is also crucial to use semicolons with variables because otherwise I would run into an “Uncaught ReferenceError: <var> is not defined.”

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)
   I'm really curious about how back-end would work on bigger projects that require servers and the usage of Maven. I worked on this phishing toolbar a year ago with my research mentor and his toolbar required the usage of programs like Maven to start up his toolbar. He told me that it dealt more with the backend programming like with Java. I can now see where JavaScript, CSS, and HTML all tie in together, but I’m curious as to what programs would necessitate the usage of Java. Additionally, I’m interested in a design principles such as how a website should flow in order to appease to other users.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)
   If I had a couple more hours, I would definitely put more time and effort into implementing the clock and having images show up as the background.  Unfortunately, as a technical senior by credits (I am a sophomore currently) in college, my schedule is incredibly hectic and I was not able to dedicate as much time to this project as I would have loved to. I would also have put more fluctuation in the amount of buttons with the difficulty. I had implemented a button that would control speed, but I think that it would be better to have more buttons to look at with an increase in difficulty. Additionally, I think I could refactor the JavaScript to be less lines such as implementing ternary operators for the if conditions. I would like for my code to be a lot more readable to others, so I would go back and write more comments about what exact variable does.  Additionally, I feel like there’s a better way to write my setMode() function. It feels incredibly blocky and I think I could just use another constant for that.

## License

    Copyright [Sophia Zhang]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
