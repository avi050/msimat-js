import { doApi, bordersApi } from "./atlasApi.js";

export default class atlasClass {
    constructor(_parent, _item) {
        this.parent = _parent;
        this.name = _item.name.common;
        this.img = _item.flags.png;
        this.pop = _item.population.toLocaleString();
        this.region = _item.region;
        this.languages = Object.keys(_item.languages);
        this.currencies = Object.keys(_item.currencies);     //Object.keys() מתיחס לאובציק ולא לתוכן 
        this.currencies1 = Object.values(_item.currencies)[0].name;
        this.Capital = _item.capital;
        this.latlng1 = _item.latlng[0];
        this.latlng2 = _item.latlng[1];
        this.borders = _item.borders;
    }

    render() {
        let newDiv = document.createElement("div");
        newDiv.className = "m-auto col-md-8 col-xxl-5 border-3";
        document.querySelector(this.parent).append(newDiv);
        newDiv.innerHTML = `
        <h3 class="div-xx text-center p-3"></h3>
    <div class="div-render p-3 p-md-5">
        <div class="row pb-3 text-center ">
            <div class="col-md-6 ">
                <h2>${this.name}</h2>
                <h6><b>POP :</b> ${this.pop}</h6>
                <h6><b>Region :</b> ${this.region}</h6>
                <h6><b> Languages :</b> ${this.languages}</h6>
                <h6><b> Coin :</b> ${this.currencies} - ${this.currencies1}</h6>
                <h6><b> Capital :</b> ${this.Capital}</h6>
            </div>
            <div class="pt-3 col-md-6">
                 <img class="img-fluid" src="${this.img}" alt="${this.name}">
            </div>
        </div>
        <div>
           <iframe class="mt-4 border border-secondary col-12" src="https://maps.google.com/maps?q=${this.latlng1},${this.latlng2}&z=7&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" ></iframe>
           <br>
           <br>
           <h5 class="text-center"><b>States with borders</b><div class="borders_div"></div></h5>  
        </div>      
     </div> `

        let classDiv = document.querySelector(".borders_div");
        this.borders.forEach(async (item) => {
            let a = document.createElement("a");
            a.className = "";
            a.style = "text-decoration: none;";
            classDiv.append(a);
            a.innerHTML = await bordersApi(item) + " ";

            a.addEventListener("click", () => {
                doApi(a.innerHTML);
            })
        })
    }
}
