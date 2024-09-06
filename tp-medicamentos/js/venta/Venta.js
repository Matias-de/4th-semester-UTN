export class Venta{
    constructor(medicamento, cantidad){
        this.medicamento = medicamento;
        this.cantidad = cantidad;
        this.total = medicamento.getPrecio * cantidad;
    }

    registrarVenta(){
        let texto="";
        if(this.medicamento.getStock()>= this.cantidad){
            this.medicamento.setStock(this.medicamento.getStock() - this.cantidad);
            texto=`Venta realizada con éxito: ${this.medicamento.getNombre()}, Cantidad: ${this.cantidad}, stock restante: ${this.medicamento.getStock()}`
        }else{
            texto = "El stock es insuficiente para realizar la compra."
        }
        return texto;
    }


    


}