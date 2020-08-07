class Footer extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `
        <style>
        .footer {
        background-color: #024880;
        padding: 10px;
        color: white;
        }
        </style>
        <div class="footer">
        <p class="text-center text-uppercase">Submission Fundamental Front-End Web Development <b class="text-info">Dicoding</b> By Kevin
        Sinaga 2020 &copy;</p>
        </div>`;
    }
}

customElements.define("footer-kaki", Footer);