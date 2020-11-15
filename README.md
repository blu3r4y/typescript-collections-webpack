To investigate the error run

    webpack
    node ./dist/main.js

Which will most likely fail with

    TypeError: n(...).Set is not a constructor
    at C:\Users\mario\Desktop\typscript-collections-webpack\dist\main.js:1:30316
    at C:\Users\mario\Desktop\typscript-collections-webpack\dist\main.js:1:30365
    at Object.<anonymous> (C:\Users\mario\Desktop\typscript-collections-webpack\dist\main.js:1:30369)
    at Module._compile (internal/modules/cjs/loader.js:1200:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1220:10)
    at Module.load (internal/modules/cjs/loader.js:1049:32)
    at Function.Module._load (internal/modules/cjs/loader.js:937:14)
