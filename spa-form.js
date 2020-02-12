class spaForm extends HTMLFormElement{
    constructor(){
        super();
        this.onsubmit = this.submit;
        this.callback = this.getAttribute("data-callback");
        this.retainOnSubmit = this.getAttribute("retainOnSubmit") != null ? false : true;
    }
 
    // Called on Submit
    submit(event) {
        event.preventDefault();
        let data = {};
        for(let i = 0; i < this.elements.length; i++){
            data[this.elements[i].getAttribute("name")] = this.elements[i].value;
        }
        if(this.retainOnSubmit){
            this.clearForm();
        }
        // Make call to callback function
        window[this.callback](data);
    }

    clearForm(){
        this.reset();
    }
}
 
customElements.define('spa-form', spaForm, {extends: 'form'});