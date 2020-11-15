import * as Collections from 'typescript-collections';

// the next line will produce an error
let foo: Collections.Set<string> = new Collections.Set<string>();
foo.add("element");
console.log(foo);
