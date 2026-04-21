# Doubly Linked List — React Native (Expo)

Interactive visualizer for a Doubly Linked List data structure built from scratch with React Native, Expo, and TypeScript.

## Prerequisites

- Node.js >= 18
- npm or yarn
- Expo CLI (`npx expo`)
- iOS Simulator (macOS) or Android Emulator, or Expo Go on a physical device

## Getting Started

```bash
# Clone the repo and switch to the challenge branch
git clone <repo-url>
cd ddl-challenge
git checkout technical-challenge

# Install dependencies
npm install

# Start the dev server
npx expo start
```

From there press **i** for iOS simulator, **a** for Android emulator, or scan the QR code with Expo Go on your phone.

## Running Tests

```bash
npm test
```

## Project Structure

```
├── App.tsx                                # Root component
├── src/
│   ├── data-structures/
│   │   └── DoublyLinkedList.ts            # Pure TS linked list (no React deps)
│   ├── hooks/
│   │   └── useDoublyLinkedList.ts         # React hook wrapping the DDL
│   ├── components/
│   │   ├── NodeCard.tsx                   # Single node visual
│   │   ├── ArrowConnector.tsx             # Bidirectional arrow between nodes
│   │   ├── ListVisualizer.tsx             # Horizontal scrollable chain
│   │   ├── ListStateDisplay.tsx           # Head / Tail / Size bar
│   │   ├── OperationsPanel.tsx            # Inputs and action buttons
│   │   └── SearchResult.tsx               # Search feedback banner
│   └── types/
│       └── index.ts                       # Shared TypeScript interfaces
└── README.md
```

## Features

| Operation          | Description                                         | Complexity |
| ------------------ | --------------------------------------------------- | ---------- |
| Insert Head        | Add a node at the beginning of the list             | O(1)       |
| Insert Tail        | Add a node at the end of the list                   | O(1)       |
| Remove at Index    | Remove a node by its position                       | O(n)       |
| Remove Duplicates  | Keep only the first occurrence of each value        | O(n)       |
| Search             | Find a value and return its index                   | O(n)       |
| Size               | Display the current node count                      | O(1)       |
| Clear              | Remove all nodes                                    | O(1)       |

The list state (head, tail, size) is always visible at the top of the screen. The visualizer renders each node with its `prev`/`next` pointers, index label, and HEAD/TAIL badges. Search results highlight the matched node in the visualizer.

## Architecture Decisions

**Pure data structure class** — `DoublyLinkedList.ts` has zero React imports. It can be unit tested independently and reused outside the UI layer.

**useRef + snapshot pattern** — The mutable DDL instance lives in a `useRef` to avoid cloning on every operation. A `syncState()` helper extracts a plain serializable snapshot (`toArray()`, head, tail, size) that triggers React re-renders only when needed.

**React.memo on presentational components** — `NodeCard`, `ArrowConnector`, `ListVisualizer`, `ListStateDisplay`, and `SearchResult` are memoized to skip unnecessary re-renders when props haven't changed.

**Bidirectional traversal** — `getNodeAtIndex` starts from whichever end is closer (head or tail), cutting worst-case traversal time in half.

**Single-pass duplicate removal** — Uses a `Set` for O(1) lookups during a single O(n) traversal, capturing `next` before removing the current node to keep iteration safe.

## Tech Stack

- React Native + Expo (TypeScript)
- React hooks for state management
- StyleSheet API (no external styling libraries)
- Catppuccin Mocha color palette