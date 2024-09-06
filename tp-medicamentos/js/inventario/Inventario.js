

export class Inventario{
    constructor(){
        this.medicamentos = [];
    }

    agregarMedicamentos(medicamento){
        this.medicamentos.push(medicamento);
    }

    buscarMedicamento(idMedicamento){
        return this.medicamentos.find(medicamento => medicamento.getId() === idMedicamento);
    }
    
    mostrarInventario() {
        this.medicamentos.forEach(med => med.mostrarDetalles());
    }

    actualizarStock(id, cantidad){
        const medicamento = this.buscarMedicamento(id);
        if(medicamento){
            medicamento.setStock(cantidad);
        }else{
            console.log("Medicamento no encontrado.");
        }
        
    }
}