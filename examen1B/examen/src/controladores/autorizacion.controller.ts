import {Body, Controller, Get, Headers, HttpStatus, Post, Req, Res} from "@nestjs/common";


@Controller('Autorizacion')
export class AutorizacionController {

    @Post('iniciarSesion')
    iniciarSesion(@Body() bodyParams,
                  @Res () response,
                  @Req () request,
                  @Headers () headers) {

        let usuario = bodyParams.usuario;
        let password = bodyParams.password;

        console.log(usuario);
        console.log(password);

        if(usuario && password){
            if(usuario === 'adrianeguez' && password === '12345678910'){
                const paramCookie = {
                    nombreCookie: 'token',
                    valorCookie: usuario.toString(),
                };
                response.cookie(paramCookie.nombreCookie,paramCookie.valorCookie);
                console.log(headers);
                //return response.send({mensaje:'ok'});
                return response.send({mensaje:'ok',  cookie: headers.cookie});
            }
            else {
                if(usuario!=='adrianeguez'){
                    response.send({mensaje:'usuario incorrecto'});
                }
                if(password!=='12345678910'){
                    response.send({mensaje:'urlFoto incorrecto'});
                }
            }
        }
        else {
            response.send({mensaje:'Ingrese parametros'});
        }
    }

    @Post('cerrarSesion')
    cerrarSesion(@Req() request,
                 @Res() response,
                 @Headers () headers){
        console.log(headers);

        const paramCookie = {
            nombreCookie: 'token',
            valorCookie: undefined,
        };

        response.cookie(paramCookie.nombreCookie, paramCookie.valorCookie);
        return response.send({mensaje: 'Usted salio del sistema', cookie: headers.cookie});

    }
}