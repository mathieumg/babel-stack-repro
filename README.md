# babel-stack-repro
Babel stack bug reproduction.

`npm run without` gives:

```js
WError
    Object.<anonymous> (without.js:7:14)
    Module._compile (module.js:573:32)
    Object.Module._extensions..js (module.js:582:10)
    Module.load (module.js:490:32)
    tryModuleLoad (module.js:449:12)
    Function.Module._load (module.js:441:3)
    Module.runMain (module.js:607:10)
    run (bootstrap_node.js:382:7)
    startup (bootstrap_node.js:137:9)
    bootstrap_node.js:497:3
WError
    Object.<anonymous> (without.js:11:15)
    Module._compile (module.js:573:32)
    Object.Module._extensions..js (module.js:582:10)
    Module.load (module.js:490:32)
    tryModuleLoad (module.js:449:12)
    Function.Module._load (module.js:441:3)
    Module.runMain (module.js:607:10)
    run (bootstrap_node.js:382:7)
    startup (bootstrap_node.js:137:9)
    bootstrap_node.js:497:3
```

`npm run with` gives:

```js
SubError
    Object.<anonymous> (without.js:7:14)
    Module._compile (module.js:573:32)
    loader (node_modules/babel-register/lib/node.js:144:5)
    Object.require.extensions.(anonymous function) [as .js] (node_modules/babel-register/lib/node.js:154:7)
    Module.load (module.js:490:32)
    tryModuleLoad (module.js:449:12)
    Function.Module._load (module.js:441:3)
    Module.require (module.js:500:17)
    require (internal/module.js:20:19)
    Object.<anonymous> (with.js:2:1)
SubSubError
    Object.<anonymous> (without.js:11:15)
    Module._compile (module.js:573:32)
    loader (node_modules/babel-register/lib/node.js:144:5)
    Object.require.extensions.(anonymous function) [as .js] (node_modules/babel-register/lib/node.js:154:7)
    Module.load (module.js:490:32)
    tryModuleLoad (module.js:449:12)
    Function.Module._load (module.js:441:3)
    Module.require (module.js:500:17)
    require (internal/module.js:20:19)
    Object.<anonymous> (with.js:2:1)
```
