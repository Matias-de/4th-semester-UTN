import {Medicamento} from "./medicamento/Medicamento.js";
import { Inventario } from "./inventario/Inventario.js";
import { Venta } from "./venta/Venta.js";
const medicamento1 = new Medicamento("Ibuprofeno", 200, 1000);
const medicamento2 = new Medicamento("Tafirol", 100, 2000);
//console.log(medicamento2.mostrarDetalles());

const inventario1 = new Inventario();
inventario1.agregarMedicamentos(medicamento1);
inventario1.agregarMedicamentos(medicamento2);
inventario1.mostrarInventario();
inventario1.actualizarStock(1,2500);
inventario1.mostrarInventario();
const venta1 = new Venta(medicamento1, 2400);
console.log(venta1.registrarVenta());

const reportarBajoStock = (inventario, limite) => {
    return inventario.medicamentos.filter(medicamento => medicamento.getStock() <= limite);
  };

const bajoStock = reportarBajoStock(inventario1, 100);
console.log("Medicamentos con stock bajo:");
bajoStock.forEach(medicamento => medicamento.mostrarDetalles());




