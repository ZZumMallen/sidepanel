class specialHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML =
          '\
            <div class="nav-container">\
                <a href="index.html" class="nav-linkBox"><div class="nav-linkBox-text">HOME</div></a>\
                <a href="proposal-notes.html" class="nav-linkBox"><div class="nav-linkBox-text">NOTES</div></a>\
                <a href="pc-pricing.html" class="nav-linkBox"><div class="nav-linkBox-text">PC</div></a>\
                <a href="stump-pricing.html" class="nav-linkBox"><div class="nav-linkBox-text">STUMP</div></a>\
                <a href="discount-table.html" class="nav-linkBox"><div class="nav-linkBox-text">DISCOUNT</div></a>\
            </div>\
            ';        
    }
};

customElements.define("special-header", specialHeader)
