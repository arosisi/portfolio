import React from "react";

import Link from "../common/Link";

function ArcadeGame() {
  return (
    <div>
      <li className="mb-2">
        <Link href="https://arosisi.github.io/arcade-game" text="A random arcade game" />
      </li>
      <p className="mb-4 ml-8">
        I saw a simple but pretty interesting arcade game at{" "}
        <Link href="https://theamazingbrentwood.com/store/the-rec-room" text="The Rec Room" /> one Saturday night. It
        has only one button and on the screen, there are a big circle in the middle of the screen and a rod rotating
        around the big circle. At any point in time, there will be a small circle appearing right outside the big circle
        at a random spot and when the rod overlaps the small circle, you have to hit the button. If you manage to do so,
        the small circle will disappear and another small circle will appear at another random spot, and then you have
        to hit the button when the rod overlaps the new small circle. With each new small circle, the rod will reverse
        its rotating direction and will also rotate faster. If you manage to hit the button at the right time 30 times
        in a roll from the start, you win the game.
      </p>

      <div className="mb-4 ml-8 max-w-72">
        <img src={`${process.env.PUBLIC_URL}/images/arcade-game.png`} alt="Arcade game" />
      </div>

      <p className="ml-8">
        I tried to code the game when I got back home from the arcade place. It was originally put on{" "}
        <Link href="https://b275gu.csb.app" text="codesandbox" /> and only recently ported over to GitHub.
        Interestingly, there's a bug that shows up only in the GitHub version (with NextJs and the latest of everything)
        which I only have a workaround for now (
        <Link
          href="https://github.com/arosisi/arcade-game/commit/c5652d88ccac213683289a12f08113f080b7f756"
          text="commit"
        />
        ). If for some reason, you read until here and even go and look at the bug, I'd appreciate any insights or
        pointers.
      </p>
    </div>
  );
}

function TowerOfHanoi() {
  return (
    <div>
      <li className="mb-2">
        <Link href="https://arosisi.github.io/tower-of-hanoi" text="Tower of Hanoi" />
      </li>
      <p className="ml-8">
        Tower of Hanoi is a mathematical puzzle where there are three rods and a stack of disks of different diameters,
        which can slide onto any of the rods. The game begins with the entire stack of disks stacked on one rod where
        the disks are sorted such that the smaller disks are on top. The objective of the game is to move the entire
        stack of disks to another rod with the following rules:
      </p>
      <ul className="mb-4 ml-12 list-inside list-decimal">
        <li>Only one disk can be moved at a time.</li>
        <li>Only the disk on top of a stack can be moved.</li>
        <li>A larger disk cannot be placed on top of a smaller disk.</li>
      </ul>

      <div className="mb-4 ml-8">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/07/Tower_of_Hanoi.jpeg"
          alt="Tower of Hanoi on Wikipedia"
        />
      </div>

      <p className="mb-2 ml-8">
        Some interesting facts on <Link href="https://en.wikipedia.org/wiki/Tower_of_Hanoi" text="Wikipedia" /> about
        the puzzle: It was invented by a French mathematician in 1883 and a game played with 64 disks can take roughly
        585 billion years to finish.
      </p>

      <p className="ml-8">
        Back in high school when I first heard about this puzzle, I was only interested in solving it mathematically,
        finding and proving the least number of moves required to solve a game of <code>n</code> disks (it's{" "}
        <code>n^2 - 1</code>). Then during my Master's, I wanted to try coding it. Took me a couple of months to
        complete it, as I kept adding more stuff to it to practise my skills: from adding a solver and making it
        pauseable, persisting app data, to making it a progressive webapp. As a result, it's by far the most complete
        webapp I've written.
      </p>
    </div>
  );
}

export default function WebApps() {
  return (
    <div>
      <p className="mb-4 font-bold">WebApps</p>
      <ul className="list-inside list-disc space-y-4">
        <ArcadeGame />
        <TowerOfHanoi />
      </ul>
    </div>
  );
}
