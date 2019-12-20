import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class EmpleadoService {
  constructor() {}

  getEmpleados() {
    if (typeof Storage !== "undefined") {
      if (localStorage.length > 0) {
        return localStorage.getItem("empleados");
      } else {
        return null;
      }
    } else {
      return "El Navegador no soporta LocalStorage";
    }
  }
}
