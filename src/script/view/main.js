import * as Data from "../data/covid.js";

const getData = () => {
    const mainAtas = () => {
        const indoPos1 = document.querySelector('.indoPositif');
        const indoPos = document.querySelector('table .indoPositif');
        const indoSembuh = document.querySelector('table .indoSembuh');
        const indoMeninggal = document.querySelector('table .indoMeninggal');
        const indoRawat = document.querySelector('table .indoRawat');
        const globalPositif = document.querySelector('.globalPositif');
        const globalMeninggal = document.querySelector('.globalMeninggal');
        const globalSembuh = document.querySelector('.globalSembuh');
        const getIndoData = async () => {
            const response = await fetch("https://covid19.mathdro.id/api/countries/Indonesia/confirmed");
            const dataIndoLagi = await response.json();
            indoPos.innerHTML = dataIndoLagi[0].confirmed;
            indoPos1.innerHTML = dataIndoLagi[0].confirmed;
            indoSembuh.innerHTML = dataIndoLagi[0].recovered;
            indoMeninggal.innerHTML = dataIndoLagi[0].deaths;
            indoRawat.innerHTML = dataIndoLagi[0].active;
        };

        const getGlobalData = async () => {
            const response = await fetch("https://disease.sh/v3/covid-19/all");
            const dataGlobalLagi = await response.json();
            globalPositif.innerHTML = dataGlobalLagi.active;
            globalMeninggal.innerHTML = dataGlobalLagi.deaths;
            globalSembuh.innerHTML = dataGlobalLagi.recovered;
        };

        getIndoData();
        getGlobalData();
    };
    mainAtas();





    const mainBawah = () => {

        const tabelProvin = async () => {
            const response = await fetch("https://indonesia-covid-19.mathdro.id/api/provinsi");
            const dataProvinLagi = await response.json();
            const tabelProv = document.querySelector('.tabelProv');
            for (let item in dataProvinLagi.data) {
                const namaProv = dataProvinLagi.data[item].provinsi;
                const posProv = dataProvinLagi.data[item].kasusPosi;
                tabelProv.innerHTML += `
<tr>
    <td class="provinsi">${namaProv}</td>
    <td class="provinsiPosit">${posProv}</td>
</tr>`


            };

        };
        tabelProvin();

        const tabelNegaraAll = async () => {
            const response = await fetch("https://disease.sh/v3/covid-19/countries");
            const dataNegaraLagi = await response.json();
            const tabelNegara = document.querySelector('.tabelNegara');

            for (let item in dataNegaraLagi) {
                const namaNegara = dataNegaraLagi[item].country;
                const kasus = dataNegaraLagi[item].cases;
                tabelNegara.innerHTML += `
    <tr> 
    <td class="negara">${namaNegara}</td>
    <td class="kasus">${kasus}</td>
    </tr>`

            }
        };
        tabelNegaraAll();
    };
    mainBawah();
};


export default getData;