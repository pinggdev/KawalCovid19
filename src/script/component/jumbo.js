import virus from "../../../img/virus.png";

class Jumbo extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {

        this.innerHTML = `<div class="jumbotron jumbotron-fluid bg-transparent img-fluid">
        <header>
            <div class="navBar container">
                <nav class="navbar navbar-expand-lg navbar-dark font-weight-bold fixed-top container">
                    <a class="navbar-brand" href="#">Kawal Covid19</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Beranda</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Indonesia</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Global</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
        <div class="dataIndonesia">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-12 float-left">
                        <h1 class="display-4 font-weight-bold text-light">KAWAL COVID-19</h1>
                        <p class="lead text-light font-weight-bolder">Total Terkonfirmasi Positif di Indonesia
                        </p>
                        <h1 class="display-4 text-light font-weight-bolder indoPositif">0</h1>
                        <table class="table table-borderless text-light">
                            <tbody>
                                <tr class="font-weight-bold text-warning">
                                    <th>
                                        <h4>Positif</h4>
                                    </th>
                                    <td>
                                        <h4 class="indoPositif">0</h4>
                                    </td>
                                </tr>
                                <tr class="font-weight-bold text-success">
                                    <th>
                                        <h4>Sembuh</h4>
                                    </th>
                                    <td>
                                        <h4 class="indoSembuh">0</h4>
                                    </td>
                                </tr>
                                <tr class="font-weight-bold text-danger">
                                    <th>
                                        <h4>Meninggal</h4>
                                    </th>
                                    <td>
                                        <h4 class="indoMeninggal">0</h4>
                                    </td>
                                </tr>
                                <tr class="font-weight-bold text-info">
                                    <th>
                                        <h4>Dirawat</h4>
                                    </th>
                                    <td>
                                        <h4 class="indoRawat">0</h4>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="col-md-6 col-12 stopCorona">
                        <img class="float-left img-fluid mx-auto d-block" src="${virus}" width="100%"
                            height="auto">
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    }
}

customElements.define("jumbo-komp", Jumbo);