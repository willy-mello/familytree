import React from "react";
import { Human, GenePool } from "./GenePoolandHuman";

const Ymir = new Human("Ymir", "male");
const Audumbla = new Human("Audumbla", "female");
const Ran = Ymir.procreate(Audumbla, "Ran", "female");
const Buri = Ymir.procreate(Audumbla, "Buri", "male");
const Aegir = Ymir.procreate(Audumbla, "Aegir", "male");
const Laufey = Ymir.procreate(Audumbla, "Laufey", "female");
const Farbauti = Ymir.procreate(Audumbla, "Farbauti", "male");
const Angrboda = Ymir.procreate(Audumbla, "Angrboda", "female");
const Loki = Farbauti.procreate(Laufey, "Loki", "male");
const Hel = Loki.procreate(Angrboda, "Hel", "female");
const Jormungandr = Loki.procreate(Angrboda, "Jormungandr", "male");
const Fenrir = Loki.procreate(Angrboda, "Fenrir", "male");

export default Loki;
