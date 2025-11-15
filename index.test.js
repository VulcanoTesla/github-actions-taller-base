// index.test.js
const { sumar } = require("./index");

describe("Función sumar", () => {
  // PRUEBA QUE DEBE PASAR
  test("debe sumar correctamente dos números positivos", () => {
    // 5 + 3 = 8
    expect(sumar(5, 3)).toBe(8);
  });

  // PRUEBA QUE PUEDE FALLAR INICIALMENTE (para demostrar el fallo del CI)
  test("debe manejar la suma con cero", () => {
    // 10 + 0 = 10
    expect(sumar(10, 0)).toBe(10);
  });
});
