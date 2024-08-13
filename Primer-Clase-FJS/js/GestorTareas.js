class GestorDeTareas{
    constructor(){
        this._arrayTareas = [];
    }
    get arrayTareas(){
        return this._arrayTareas;
    }
    agregarTarea(tarea){
        this._arrayTareas.push(tarea);
        return "Tarea añadida con éxito";
    }

    marcarTareaCompletada(detalle){
        let texto="Tarea no encontrada";
        for(tarea of this._arrayTareas){
            if(tarea.detalle === detalle){
                texto=tarea.completarTarea();
            }
        }
        return texto;
    }
    listarTareasPendientes(){
        let texto="";
        for(tarea of this._arrayTareas){
            if(!tarea.completada){
                texto+=tarea;
            }
        }
        return texto;
    }
    toString(){
        return `Gestor De Tareas: Tareas:[${this._arrayTareas}];`
    }
}