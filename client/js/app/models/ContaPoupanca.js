class ContaPoupanca extends Conta{

    atualiza(taxa){
        this._saldo = this.saldo + taxa * 2;
    }
}