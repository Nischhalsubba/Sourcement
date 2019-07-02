class Model {
    constructor(popup) {
        this.trigger = popup;
        this.model = document.querySelector('.model');
        this.modelContent = document.querySelector('.model .model-content');


        this.trigger.addEventListener('click', (e) => {
            e.preventDefault();
            var target = e.target || e.srcElement;
            this.showModel(target);
        });

        this.model.addEventListener('click', (e) => {
            this.closeModel();
        })

    }
    showModel(btn) {
        this.model.classList.toggle('show-model');
        var a = btn.getAttribute('data-modelContent');
        console.log(btn)
    }

    closeModel() {
        this.model.classList.toggle('show-model');
    }

}