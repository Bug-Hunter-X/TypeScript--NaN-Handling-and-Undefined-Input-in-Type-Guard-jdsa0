# TypeScript Bug: NaN Handling and Undefined Input

This repository demonstrates a common error in TypeScript related to handling potential `NaN` values and undefined inputs when performing type guards and type assertions.  The `bug.ts` file contains the buggy code, which fails to correctly handle non-numeric strings and lacks the proper type handling for undefined values. The `bugSolution.ts` provides a corrected version.

## Bug Description

The original code attempts to process both numbers and strings.  String inputs are parsed into numbers using `parseFloat`. The bug is the lack of explicit error handling for cases where `parseFloat` returns `NaN`, and the absence of type checking for an undefined input causing the type error. 

## Solution

The solution demonstrates robust type handling to avoid the issues presented in the original code.  It explicitly checks for `NaN` after parsing and includes a check for `undefined`.  This ensures that the function handles a wider variety of input conditions gracefully.