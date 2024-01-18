import React from "react";

import Link from "../common/Link";

function ArcadeGame() {
  return (
    <div>
      <li className="mb-2">
        <Link href="https://arosisi.github.io/arcade-game" text="A random arcade game" />
      </li>
      <p className="mb-2 ml-8">
        A simple but pretty interesting arcade game I saw at{" "}
        <Link href="https://theamazingbrentwood.com/store/the-rec-room" text="The Rec Room" />. I could not find
        anything about the game on the Internet, so no pictures or links. It'll also be just too wordy to try to explain
        it. The game itself should be self-explanatory when you play it.
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
        A mathematical puzzle where there are three rods and a stack of disks of different diameters, which can slide
        onto any of the rods. The game begins with the entire stack of disks stacked on one rod where the disks are
        sorted such that the smaller disks are on top. The objective of the game is to move the entire stack of disks to
        another rod with the following rules:
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
      <p className="ml-8">
        Some interesting facts on <Link href="https://en.wikipedia.org/wiki/Tower_of_Hanoi" text="Wikipedia" /> about
        the puzzle: It was invented by a French mathematician in 1883 and a game played with 64 disks can take roughly
        585 billion years to finish.
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
