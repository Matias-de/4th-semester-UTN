class Tarea{
    constructor(detalle, diasParaCompletar){
        this._detalle = detalle;
        this._diasParaCompletar = diasParaCompletar;
        this._completada=false;
    }
    get completada(){
        return this._completada;
    }
    get detalle(){
        return this._detalle;
    }
    get diasParaCompletar(){
        return this._diasParaCompletar;
    }
    set detalle(detalle){
        this._detalle = detalle;
    }
    set diasParaCompletar(diasParaCompletar){
        this._diasParaCompletar = diasParaCompletar;
    }

    completarTarea(){
        this._completada = true;
        return "Tarea completada con exito.";    
    }

    toString(){
        return `Tarea: {Detalle: ${this._detalle}, Dias para Completarla: ${this._diasParaCompletar}, Completada: ${this._completada}}`
    }


}