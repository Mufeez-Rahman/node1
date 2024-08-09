// Copyright 2024 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --allow-natives-syntax --turboshaft-from-maglev --turbofan

function bar() {
  return typeof bar;
}

%PrepareFunctionForOptimization(bar);
assertEquals('function', bar());

%OptimizeFunctionOnNextCall(bar);
assertEquals('function', bar());
assertOptimized(bar);
