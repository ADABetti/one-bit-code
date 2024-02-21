import { inline } from "./inline.js";
import d from "./inline.js"; // método para chamar só o default, por isso nome é irrelevante.
import { group } from "./non-inline.js";
import exportDefault from "./non-inline.js";

inline();
d();
group();
exportDefault();
