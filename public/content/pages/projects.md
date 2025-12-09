---
path: "/v2/projects"
title: "Projects"
description: "My projects"
---

# Projects

## [A random arcade game](https://arosisi.github.io/arcade-game)

I saw a simple but pretty interesting arcade game at [The Rec Room](https://theamazingbrentwood.com/store/the-rec-room) one Saturday night. It has only one button and on the screen, there are a big circle in the middle of the screen and a rod rotating around the big circle. At any point in time, there will be a small circle appearing right outside the big circle at a random spot and when the rod overlaps the small circle, you have to hit the button. If you manage to do so, the small circle will disappear and another small circle will appear at another random spot, and then you have to hit the button when the rod overlaps the new small circle. With each new small circle, the rod will reverse its rotating direction and will also rotate faster. If you manage to hit the button at the right time 30 times in a roll from the start, you win the game.

![Arcade game](images/arcade-game.png)

I tried to code the game when I got back home from the arcade place. It was originally put on [codesandbox](https://b275gu.csb.app) and only recently ported over to GitHub.

## [Tower of Hanoi](https://arosisi.github.io/tower-of-hanoi)

Tower of Hanoi is a mathematical puzzle where there are three rods and a stack of disks of different diameters, which can slide onto any of the rods. The game begins with the entire stack of disks stacked on one rod where the disks are sorted such that the smaller disks are on top. The objective of the game is to move the entire stack of disks to another rod with the following rules:

1. Only one disk can be moved at a time.
2. Only the disk on top of a stack can be moved.
3. A larger disk cannot be placed on top of a smaller disk.

![Tower of Hanoi on Wikipedia](https://upload.wikimedia.org/wikipedia/commons/0/07/Tower_of_Hanoi.jpeg)

Some interesting facts on [Wikipedia](https://en.wikipedia.org/wiki/Tower_of_Hanoi) about the puzzle: It was invented by a French mathematician in 1883 and a game played with 64 disks can take roughly 585 billion years to finish.

Back in high school when I first heard about this puzzle, I was only interested in solving it mathematically, finding and proving the least number of moves required to solve a game of `n` disks (it's `n^2 - 1`). Then during my Master's, I wanted to try coding it. Took me a couple of months to complete it, as I kept adding more stuff to it to practise my skills: from adding a solver and making it pauseable, persisting app data, to making it a progressive webapp. As a result, it's by far the most complete webapp I've written.
