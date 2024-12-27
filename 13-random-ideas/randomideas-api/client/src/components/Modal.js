class Modal {
    constructor() {
        this._modal = document.querySelector('#modal')
        this._modalBtn = document.querySelector('#modal-btn')
        this.addEventListeners()
    }

    addEventListeners() {
        // this problem rather than the element itself
        this._modalBtn.addEventListener('click', this.open.bind(this))
        window.addEventListener('click', this.outSideClick.bind(this))
        document.addEventListener('closeModal', () => this.close())
    }

    open() {
        this._modal.style.display = 'block'
    }

    close() {
        this._modal.style.display = 'none'
    }

    outSideClick(e) {
        if (e.target === this._modal) {
            this.close()
        }
    }
}

export default Modal