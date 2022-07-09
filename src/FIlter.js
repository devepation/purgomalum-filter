const axios = require('axios');
class Filter {
    constructor(config={
        fill_text: undefined,
        fill_char: undefined,
        add: []
    }){
        this.config=config
    }
    
    async clean(text) {
        var send = this.config;
        send.text = text;
        var response = await axios.get('https://www.purgomalum.com/service/json', { params: send });
        response = response.data;
        
        // handle
        
        if (response.hasOwnProperty("result")) return response.result;
        else if (response.hasOwnProperty("error")) throw new Error(response.error);
        else throw new Error("Unexpected server response.");
    }
    
    async containsProfanity(text) {
        var send = {text:text, add:this.config.add}
        var response = axios.get('https://www.purgomalum.com/service/containsprofanity', { params: send })
        response = response.data;
        return (response);
    }
}

module.exports = Filter;