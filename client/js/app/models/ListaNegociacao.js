class ListaNegociacao{

    constructor(){
        this._negociacoes = [];
    }

    adiciona(negociacao){
        this._negociacoes.push(negociacao);
    }

    // get é apenas leitura
    get negociacoes(){
        return [].concat(this._negociacoes); // Forma de projeter o acesso array
    }
}