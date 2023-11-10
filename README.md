# TencentERP
Sistema ERP con funcionalidades de costos, inventario, compras y ventas, registro de clientes y proveedores, emisión de boletas y facturas, entre otros.

## Login
Login con diseño minimalista, usando boostrap.

### Implementado
[+] Sección *login*\
[+] Sección *olvidé contraseña*\
[+] Sección *contactar soporte técnico*\
[+] Envío de correos en NodeJS usando NodeMailer\
[+] Implementación TOTP enviado a correo

### TO-DO
[B, F] Recaptcha V3 para evitar fuerza bruta\
[B, F] Detección de IP anómala\
~~[B, F] Implementación TOTP mediante correo para sección *olvidé contraseña*, detección de IP anómala, link registro, etc.~~\
~~[B] Implementación envío de correos en NodeJS~~\
[B, F] Hashing de contraseña cambiada en la sección *olvidé contraseña*, usando algoritmo Argon2.

### Posibles características futuras
[+] Login con solamente huella digital desde dispositivos móviles\
[+] Implementación 2FA y 3FA\
[+] Login con API externas(Google, Github o LinkedIn)\
[+] TOTP mediante SMS

## Perfil de usuario
Perfil de usuario dentro de la web. Muestra la información personal del usuario y permite modificar algunos de ellos, así como también otras cosas como 2FA, foto, etc.

[+] Foto de perfil\
[+] Activar/Desactivar 2FA\
[+] Cambiar datos personales

### Implementado

### TO-DO
[+] Conexiones con la BD para terminar por completo la funcionalidad de login, olvidé contraseña, soporte técnico y modificación de datos en el perfil de usuario.

### Posibles características futuras

