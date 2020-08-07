class TabelDua extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `<div class="container">
        <div class="kotak container">
            <div class="row">
                <div class="col-md-6 col-12">
                    <div class="dataProvinsi">
                        <table class="table table-bordered">
                            <thead>
                                <th>Provinsi</th>
                                <th>Positif</th>
                            </thead>
                            <tbody class="tabelProv">

                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="col-md-6 col-12">
                    <div class="dataNegara">
                        <table class="table table-bordered">
                            <thead>
                                <th>Negara</th>
                                <th>Kasus</th>
                            </thead>
                            <tbody class="tabelNegara">

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    }
}

customElements.define("tabel-dua", TabelDua);