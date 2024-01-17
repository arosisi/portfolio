import React from "react";

function ArcadeGame() {
  return (
    <div>
      <li className="mb-2">
        <a
          href="https://arosisi.github.io/arcade-game"
          target="_blank"
          rel="noreferrer"
          className="text-blue-700 hover:underline"
        >
          A random arcade game
        </a>
      </li>
      <p className="mb-2 ml-8">
        A simple but pretty interesting arcade game I saw at{" "}
        <a
          href="https://theamazingbrentwood.com/store/the-rec-room"
          target="_blank"
          rel="noreferrer"
          className="text-blue-700 hover:underline"
        >
          The Rec Room
        </a>
        . I could not find anything about the game on the Internet, so no pictures or links. It'll also be just too
        wordy to try to explain it. The game itself should be self-explanatory when you play it.
      </p>
    </div>
  );
}

function TowerOfHanoi() {
  return (
    <div>
      <li className="mb-2">
        <a
          href="https://arosisi.github.io/tower-of-hanoi"
          target="_blank"
          rel="noreferrer"
          className="text-blue-700 hover:underline"
        >
          Tower of Hanoi
        </a>
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
        Some interesting facts on{" "}
        <a
          href="https://en.wikipedia.org/wiki/Tower_of_Hanoi"
          target="_blank"
          rel="noreferrer"
          className="text-blue-700 hover:underline"
        >
          Wikipedia
        </a>{" "}
        about the puzzle: It was invented by a French mathematician in 1883 and a game played with 64 disks can take
        roughly 585 billion years to finish.
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
