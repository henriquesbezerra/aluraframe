class NegociacaoController{

    constructor(){
        // Criar um alias para o o querySelector e o Bind mantém o contexto de exução do document no querySelector
        let $ = document.querySelector.bind(document);
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        
        // Lista Negociacao
        this._listaNegociacoes = new ListaNegociacao();
        this._negociacoesView = new NegociacoesView($("#negociacoesView"));
        this._negociacoesView.update(this._listaNegociacoes);
        
        //Mensagem
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($("#mensagemView"));
        this._mensagemView.update(this._mensagem);
    }

    adiciona(event){
        event.preventDefault();               
        
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        
        this._mensagem.texto = 'Negociação Adicionada com Sucesso!';
        this._mensagemView.update(this._mensagem);

        this._negociacoesView.update(this._listaNegociacoes);
        this._limpaFormulario();
    }

    _criaNegociacao(){
        return new Negociacao(
            DateHelper.textToDate(this._inputData.value), 
            this._inputQuantidade.value, 
            this._inputValor.value
        );  
    }
    _limpaFormulario(){
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();
    }
}