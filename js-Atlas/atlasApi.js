import atlasClass from "./atlasItem.js";

// if (_Q != "Palestine"){

// }
// else {
// document.querySelector(".name").innerHTML =
//     "There is not such country... <br>  !אין ולא תהיה כזו מדינה ";
// document.querySelector(".name").style.color = "red";
// }

export const doApi = async (_Q) => {
 let url = `https://restcountries.com/v3.1/name/${_Q}`
        try {
            let resp = await axios.get(url);
            console.log(resp.data);
            forE(await resp.data);
        }
        catch (err) {
            console.log(err);
            // alert("There problem, come back later 404");
            document.querySelector("#id_main").innerHTML = "";//ריקון הדף במדינות לא קיומות בגלל באגים באיפיאי
        }
}

const forE = async (_ar) => {
    document.querySelector("#id_main").innerHTML = "";// מנקה את חלון התצוגה כל פעם 
    _ar.forEach(item => {
        let city = new atlasClass("#id_main", item); // מזמן את הקלאס
        city.render();
    })
}

// ?s= כוורי סטרינג : פונקציה להאזנה למה שניכתוב בכתובת אחרי 
export const checkQueryString = () => {
    const urlParams = new URLSearchParams(window.location.search);// קוד הנותן את היכולת 
    let searchQ = urlParams.get("s") || "Israel"; // מאזין או לנתון שם או לישראל בדיפולט
    doApi(searchQ); // מפעיל את פונקצית האיפיאי 
}

//פונקציה שמפעילה את מנוע החיפוש
export const declareEvents = () => {
    let id_input = document.querySelector("#id_input");
    id_input.focus(); // גורם לאינפוט להיות בפוקוס שאפשר לכתוב בתוכו 
    let btn_form = document.querySelector("#btn_form");
    btn_form.addEventListener("submit", (e) => {
        e.preventDefault();
        // alert(id_input.value); 
        if (id_input.value != "Palestine" &&
            id_input.value != "palestine" &&
            id_input.value != "pale" &&
            id_input.value != "pales" &&
            id_input.value != "Pale" &&
            id_input.value != "פלסטין" &&
            id_input.value != "פלס") {
            doApi(id_input.value);
        }
        else {
            document.querySelector(".name").innerHTML =
                "There is not such country... <br>  !אין ולא תהיה כזו מדינה ";
            document.querySelector(".name").style.color = "red";
        }
    })
}


export const bordersApi = async (code) => {
    let url = `https://restcountries.com/v3.1/alpha/${code}`;
    try {
        let resp = await axios.get(url);
        console.log(resp.data);
        let fullCountry = await (resp.data[0].name.common);
        return fullCountry;
    }
    catch (err) {
        console.log(err);
        alert("There problem, come back later 404");
        document.querySelector("#id_main").innerHTML = "";//ריקון הדף במדינות לא קיומות בגלל באגים באיפיאי
    }
}

