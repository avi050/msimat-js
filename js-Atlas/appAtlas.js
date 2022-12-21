import { declareEvents } from "./atlasApi.js";
import { checkQueryString } from "./atlasApi.JS";

const init = () => {
checkQueryString();//פונקצית כוורי סטרינג מפעילה את הקישורים בלחיצה וכן בדיפולט מציגה את ישראל
// doApi("Israel");
declareEvents(); // מפעיל את מנוע החיפוש
}




init ();