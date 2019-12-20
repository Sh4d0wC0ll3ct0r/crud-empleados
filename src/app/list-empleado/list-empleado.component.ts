import { Component, OnInit } from "@angular/core";
import { EmpleadoService } from "../services/empleado.service";
import { Empleados } from "../models/empleados";

@Component({
  selector: "app-list-empleado",
  templateUrl: "./list-empleado.component.html",
  styleUrls: ["./list-empleado.component.css"]
})
export class ListEmpleadoComponent implements OnInit {
  empleados: Empleados[] = [];
  showEmp: boolean = true;

  constructor(private _empleadoService: EmpleadoService) {}

  ngOnInit() {
    this.loadListEmpleados();
  }
  loadListEmpleados() {
    this.empleados = JSON.parse(this._empleadoService.getEmpleados());
    if (this.empleados !== null) {
      this.showEmp = true;
    } else {
      this.showEmp = false;
    }
  }
}

