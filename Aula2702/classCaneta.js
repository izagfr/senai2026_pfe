class Caneta{
    cor= 'Amarela';
    marca='Faber Castel';
    ponta='fina';
    qtdTinta= 10.//ml
    tampa= false;

    escrever(){ 
        this.qtdTinta -= 1;
        return 'comecei a escrever';
    }
     //criar um metodo sublinhar, que rece um parametro valor que vai representar a quantidade gasta de tinta ao sublinhar desconte da quantidade de tinta e mostre a qtd restante, porem nao permita que seja subtraida se o valor for maior do que a qtde de tinta da classe
     
     sublinhar(valor){
        if(valor > this.qtdTinta){
            return 'quantidade de tinta insuficiente'
        }
        this.qtdTinta -= valor;
        return 'A quantidade restante depois de sublinhar é'+ this.qtdTinta;
        }
     
     getQtdTinta(){
        return this.qtdTinta;
     }
}



const canetaFina=new Caneta();
canetaFina.escrever();
canetaFina.escrever();
console.log('A quantidade restante de tinta é'+ canetaFina.getQtdTinta());