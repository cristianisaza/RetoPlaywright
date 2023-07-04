# RetoPlaywright

Dado que la página “https://demos.devexpress.com/rwa/dxhotels/” presentaba inconvenientes para su automatización como el capchat, la falta de un usuario y contraseña valido 
y el comportamiento errático que presentaba en general el log in. se avanzo en la selección de lugar, número de habitaciones, adultos y niños. 
Con respecto a las fechas de check in y check out se encuentran quemadas, estas quedaron así por cuestión de tiempo que se decidió invertir en 
la automatización de la página “https://www.saucedemo.com/”. En esta se realizaron diferentes log in con validación de mensaje de error en los log in fallidos; 
adicional a esto se realizó un flujo completo de compra exitosa de tres productos. durante este flujo se realizaron algunas validaciones, ya que por temas de tiempo 
no se pudo realizar las validaciones pertinentes ya que se decidió mostrar un flujo un poco más completo con algunas validaciones.


Adicional a lo mencionado se tiene claro que para la automatización utilizando playwright TS es altamente recomendado utilizar el patron de diseño 
Page Object Model (POM). este ultimo no se implemento por temas de tiempo. ya que se invirtio bastante en la web inicial sin obtener los 
resultados esperados.


Para la ejecucion de las pruebas se puede ejecutar el comando en consola:
todas las pruebas>>>>(npx playwright test)
pruebas Dxhotels>>>>>(npx palywright test testdx)
pruebas saucedemo>>>>(npx playwright test sauce)
Cordial saludo, cualquier duda con gusto sera resuelta.
