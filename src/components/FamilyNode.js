import React from "react";
import { Human, GenePool } from "./GenePoolandHuman";

const Ymir = new Human("Ymir", "male");
Ymir.addImage(require("../img/ymir.jpg"));
const Audumbla = new Human("Audumbla", "female");
Audumbla.addImage(require("../img/audumbla.jpg"));
const Ran = Ymir.procreate(Audumbla, "Ran", "female");
Ran.addImage(require("../img/ran.jpg"));
const Buri = Ymir.procreate(Audumbla, "Buri", "male");
const Aegir = Ymir.procreate(Audumbla, "Aegir", "male");
Aegir.addImage(require("../img/aegir.png"));
const Laufey = Ymir.procreate(Audumbla, "Laufey", "female");
Laufey.addImage(require("../img/laufey.jpg"));
const Farbauti = Ymir.procreate(Audumbla, "Farbauti", "male");
Farbauti.addImage(require("../img/farbauti.jpg"));
const Angrboda = Ymir.procreate(Audumbla, "Angrboda", "female");
Angrboda.addImage(require("../img/angrboda.jpg"));
const Loki = Farbauti.procreate(Laufey, "Loki", "male");
Loki.addImage(
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Loki_finds_Gullveigs_Heart_-_John_Bauer.jpg/220px-Loki_finds_Gullveigs_Heart_-_John_Bauer.jpg"
);
const Hel = Loki.procreate(Angrboda, "Hel", "female");
Hel.addImage(
  "https://i1.wp.com/sacredhaven.ca/files/resized/28453/213;284;34a95f349564602491ab3326e588bf480b8daf82.jpg"
);
const Jormungandr = Loki.procreate(Angrboda, "Jormungandr", "male");
Jormungandr.addImage(
  "https://vignette.wikia.nocookie.net/monster/images/2/22/Jormungand.jpg/revision/latest?cb=20090513192621"
);
const Fenrir = Loki.procreate(Angrboda, "Fenrir", "male");
Fenrir.addImage(
  "https://cdn.shopify.com/s/files/1/1879/3511/articles/5763661171091141b48ff398dbedf6a3_1024x1024.jpg?v=1526522495"
);

export default Loki;
