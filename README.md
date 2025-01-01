# Stale Closure Bug in React's useState

This repository demonstrates a common issue in React applications involving stale closures when using `useState` within `setTimeout` or other asynchronous operations.

## Problem Description
The `bug.js` file contains a React component that attempts to increment a state variable (`count`) using `setTimeout`. However, due to the asynchronous nature of state updates, the `count` variable inside the `setTimeout` callback might not reflect the most recent value, leading to incorrect updates or unexpected behavior.  The inner `count` variable holds the initial value (0) throughout the lifecycle of the component.

## Solution
The `bugSolution.js` file provides a corrected version that uses a functional update approach to ensure the latest state value is used, resolving the stale closure issue.

## How to reproduce
1. Clone the repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe that the count might not update correctly in the `bug.js` example, but updates correctly in the `bugSolution.js` example.
