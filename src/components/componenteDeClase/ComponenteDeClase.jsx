import React from "react";

//*Creamos la clase que por convención lleva el nombre en mayus
//*A su vez esta clase se extiende de la clase React
//*Luego le agregamos el constructor
//*Y el super
//?Dentro del constructor va a tener el método render() que es obligatorio
//?Para que nos renderice y dentro va el return que es donde va el código
//?que se va a mostrar
class ComponenteDeClase extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div>Soy un componente de clase</div>
        );
    }
}

export default ComponenteDeClase;