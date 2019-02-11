class DateHelper{

    constructor(){
        throw new Error('DateHelper não pode ser instanciado como um objeto');
    }

    static textToDate(text){
        return new Date(...text.split('-')
            .map((value, key) => value - (key % 2)))
    }

    static dateToText(date){
        if(!/\d{4}-\d{2}\d{2}/.test(date)) throw new Error('Deve Estar no Formato yyyy-mm-dd');
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;         
    }

    static dateObtToText(date){
        if(!date instanceof Date) throw new Error('O valor passado não é um objeto Date');
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }

}