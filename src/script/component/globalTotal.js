import positif from "../../../img/positif.png";
import meninggal from "../../../img/meninggal.png";
import sembuh from "../../../img/sembuh.png";

class GlobalTotal extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `<div class="globalData container">
        <div class="container kotak">
            <h2 class="text-center text-uppercase">Data Global</h2>
            <div class="card-group">
                <div class="card">
                    <img src="${positif}" class="card-img-top" width="100%">
                    <div class="card-body">
                        <h4 class="card-title text-center">POSITIF</h4>
                        <h6 class="globalPositif text-center text-warning font-weight-bold"></h6>
                    </div>
                </div>
                <div class="card">
                    <img src="${meninggal}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h4 class="card-title text-center">MENINGGAL</h4>
                        <h6 class="globalMeninggal text-center text-danger font-weight-bolder"></h6>
                    </div>
                </div>
                <div class="card">
                    <img src="${sembuh}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h4 class="card-title text-center">SEMBUH</h4>
                        <h6 class="globalSembuh text-center text-success font-weight-bolder"></h6>
                    </div>
                </div>
            </div>
        </div>
        <br><br>
    </div>`;
    }
}

customElements.define("global-total", GlobalTotal);