class alumnograduacion extends Validations{
    constructor(esTest){
        this.dom = new this.dom();
        this.nombreentidad = 'alumnograduacion';

        if (esTest == 'test'){

        }
        else{
            this.dom.fillform(this.manual_form_creation(),'IU_form');
        }
    }

    manual_form_creation(){
        var form_content = `
            <form action="http://193.147.87.202/procesaform.php" method="POST" enctype="multipart/form-data" onsubmit="return entidad.ADD_submit_alumnograduacion();">

            <label class="label_dni">dni</label>
            <input type='text' id='dni' name='dni' onblur=" return entidad.ADD_dni_validation();"></input>
            <span id="span_error_dni"><a id="error_dni"></a></span>
            <br>
            
            <label class="label_nombre_alumnograduacion">Nombre de pila</label>
            <input type='text' id='nombre_alumnograduacion' name='nombre_alumnograduacion onblur=" return entidad.ADD_nombre_alumnograduacion_validation();"></input>
            <span id="span_error_nombre_alumnograduacion" ><a id="error_nombre_alumnograduacion"></a></span>
            <br>
            
            <label class="label_apellidos_alumnograduacion">apellidos</label>
            <input type='text' id='apellidos_alumnograduacion' name='apellidos_alumnograduacion'></input>
            <span id="span_error_apellidos_alumnograduacion" ><a id="error_apellidos_alumnograduacion"></a></span>
            <br>
            
            <label class="label_login_alumnograduacion">Login</label>
            <input type='text' id='login_alumnograduacion' name='login_alumnograduacion'></input>
            <span id="span_error_login_alumnograduacion" ><a id="error_login_alumnograduacion"></a></span>
            <br>

            <label class="label_password">Password</label>
            <input type='password' id='password_alumnograduacion' name='password_alumnograduacion' onblur=" return entidad.ADD_dni_validation();"></input>
            <span id="span_error_password_alumnograduacion"><a id="error_password_alumnograduacion"></a></span>
            <br>

            <br>
            <label class="label_direccion_alumnograduacion">Dirección Postal</label>
            <textarea rows="5" cols="33" type='text' id='direccion_alumnograduacion' name='direccion_alumnograduacion'></textarea>
            <span id="span_error_direccion_alumnograduacion" ><a id="error_direccion_alumnograduacion"></a></span>
            <br>

            <label class="label_telefono_alumnograduacion">Teléfono</label>
            <input type='text' id='telefono_alumnograduacion' name='telefono_alumnograduacion'></input>
            <span id="span_error_telefono_alumnograduacion" ><a id="error_telefono_alumnograduacion"></a></span>
            
            <br>
            <label class="label_email_alumnograduacion">Correo Electronico</label>
            <input type='text' id='email_alumnograduacion' name='email_alumnograduacion'></input>
            <span id="span_error_email_alumnograduacion" ><a id="error_email_alumnograduacion"></a></span>

            <br>
            <label id="label_foto_alumnograduacion" class="label_foto_alumnograduacion">Foto alumnograduacion</label>
            <input type='text' id='foto_alumnograduacion' name='foto_alumnograduacion'></input>
            <span id="span_error_foto_alumnograduacion"><a id="error_foto_alumnograduacion"></a></span>
            <a id="link_foto_alumnograduacion" href="http://193.147.87.202/ET2/filesuploaded/files_foto_alumnograduacion/"><img src="./iconos/FILE.png" /></a>
            
            <label id="label_nuevo_foto_alumnograduacion" class="label_nuevo_foto_alumnograduacion">Nueva Foto alumnograduacion</label>
            <input type='file' id='nuevo_foto_alumnograduacion' name='nuevo_foto_alumnograduacion'></input>
            <span id="span_error_nuevo_foto_alumnograduacion"><a id="error_nuevo_foto_alumnograduacion"></a></span>
            <br>

            <input id="submit_button" type="submit" value="Submit">

        </form>
        `;
        return form_content;
        
    }
    /**********************************************************************************************
        fields validations for ADD
    ***********************************************************************************************/

    /** 
        
        @param 
        @return
            {string} Error code of field value (fieldname_validationfunction_KO) 
            or
            {bool} true due the field value is correct

    */
    ADD_dni_validation(){
        
        if (!(this.min_size('dni',9))){
            this.dom.mostrar_error_campo('dni','dni_min_size_KO');
            return "dni_min_size_KO";
        }
        if (!(this.max_size('dni',9))){
            this.dom.mostrar_error_campo('dni','dni_max_size_KO');
            return "dni_max_size_KO";
        }
                
        var resp = this.personalize_dni_nie();
        console.log(resp);
        if (!(resp === true)){
            this.dom.mostrar_error_campo('dni',resp);
            return resp;
        }
        
        this.dom.mostrar_exito_campo('dni');
        return true;

    }

    /** 
        
        @param 
        @return
            {string} Error code of field value (fieldname_validationfunction_KO) 
            or
            {bool} true due the field value is correct

    */

    ADD_login_validation(){
        if(!(this.min_size('login',4))){
            this.dom.mostrar_error_campo('login', 'login_min_size_KO');
            return "login_min_size_KO";
        }
        if(!(this.max_size('login', 15))){
            this.dom.mostrar_error_campo('login', 'login_max_size_KO');
        }
        if(!(this.format('login', '^[A-Za-z]$'))){
            this.dom.mostrar_error_campo('login', 'login_format_KO');
            return 'login_format_KO'
        }
        this.dom.mostrar_exito_campo('login');
        return true;

    }
    /** 
        
        @param 
        @return
            {string} Error code of field value (fieldname_validationfunction_KO) 
            or
            {bool} true due the field value is correct

    */

    ADD_password_validation(){
        if(!(this.min_size('password', 8))){
            this.dom.mostrar_error_campo('password', 'password_min_size_KO');
            return "password_min_size_KO";
        }
        if(!(this.max_size('password', 100))){
            this.dom.mostrar_error_campo('password', 'password_max_size_KO');
            return "password_max_size_KO";
        }
        if(!(this.format('password', '^[A-Za-z]$'))){
            this.dom.mostrar_error_campo('password', 'password_format_KO');
            return 'password_format_KO'
        }
        this.dom.mostrar_exito_campo('password');
        return true;
    }

    /**
        
        @param 
        @return
            {string} Error code of field value (fieldname_validationfunction_KO) 
            or
            {bool} true due the field value is correct

    */

    ADD_nombre_validation(){
        
        if (!(this.min_size('nombre',2))){
            this.dom.mostrar_error_campo('nombre','nombre_min_size_KO');
            return "nombre_min_size_KO";
        }
        if (!(this.max_size('nombre',25))){
            this.dom.mostrar_error_campo('nombre','nombre_max_size_KO');
            return "nombre_max_size_KO";
        }
        // allowed format aA to zZ letter
        if (!(this.format('nombre', '^[A-Za-z]*$'))){
            this.dom.mostrar_error_campo('nombre','nombre_format_KO');
            return "nombre_format_KO";
        }
        this.dom.mostrar_exito_campo('nombre');
        return true;
    }

    ADD_apellidos_validation(){
        if(!(this.min_size('apellidos', 2))){
            this.dom.mostrar_error_campo('apellidos', 'apellidos_min_size_KO');
            return "apellidos_min_size_KO";
        }
        if(!(this.max_size('apellidos', 35))){
            this.dom.mostrar_error_campo('apellidos', 'apellidos_max_size_KO');
            return "apellidos_max_size_KO";
        }
        // allowed format aA to zZ letter
        if (!(this.format('apellidos', '^[A-Za-z]*$'))){
            this.dom.mostrar_error_campo('apellidos','apellidos_format_KO');
            return "apellidos_format_KO";
        }
        this.dom.mostrar_exitp_campo('apellidos');
        return true;

    }

    ADD_telefono_validation(){
        if (!(this.min_size('telefono',9))){
            this.dom.mostrar_error_campo('telefono','telefono_min_size_KO');
            return "telefono_min_size_KO";
        }
        if (!(this.max_size('telefono',9))){
            this.dom.mostrar_error_campo('telefono','telefono_max_size_KO');
            return "telefono_max_size_KO";
        }
                
        if(!(this.format('telefono', '^[0-9]$'))){
            this.dom.mostrar_error_campo('telefono', 'telefono_format_KO');
            return "telefono_format_KO";
        }
        
        this.dom.mostrar_exito_campo('telefono');
        return true;

    }

    ADD_direccion_validation(){
        if(!(this.format('direccion', '^[a-zA-Z0-9ñÑáéíóúüÁÉÍÓÚÜ ]+$'))){
            this.dom.mostrar_error_campo('direccion', 'direccion_format_KO');
            return "direccion_format_KO";
        }
        this.dom-mostrar_exito_campo('direccion');
        return true;
    }

    ADD_email_validation(){
        if(!(this.format('email', '^[^@]+@[^@]+\.[a-zA-Z]{2,}$'))){
            this.dom.mostrar_error_campo('email', 'email_format_KO');
            return "email_format_KO";
        }
        this.dom.mostrar_exito_campo('email');
        return true;
    }

    ADD_nuevo_fotoacto_validation(){

        if (!(this.empty_file('nuevo_foto'))){
            this.dom.mostrar_error_campo('nuevo_foto','nuevo_foto_empty_file_KO');
            return "nuevo_foto_empty_file_KO";
        }
        if (!(this.max_size_file('nuevo_foto',2000000))){
            this.dom.mostrar_error_campo('nuevo_foto','nuevo_foto_max_size_file_KO');
            return "nuevo_foto_max_size_file_KO";
        }
        if (!(this.type_file('nuevo_foto',['image/jpg']))){
            this.dom.mostrar_error_campo('nuevo_foto','nuevo_foto_type_file_KO');
            return "nuevo_foto_type_file_KO";
        }
        if (!(this.format_name_file('nuevo_foto','[a-zA-Z.]'))){
            this.dom.mostrar_error_campo('nuevo_foto','nuevo_foto_format_name_file_KO');
            return "nuevo_foto_format_name_file_KO";
        }
        this.dom.mostrar_exito_campo('nuevo_foto');
        return true;


    }

    /**
        
        @param 
        @return
            {bool} true if all field validations are correct or false if any field validation is false

    */
    ADD_submit(){

        let result = (
                    (this.ADD_dni_validation()) &
                    (this.ADD_nombre_validation())
                    (this.ADD_nuevo_foto_validation())
                    )
        
        result = Boolean(result);
        
        return result;  


    }

    /**
     * 
     * test dni format in the regular expression
     * @param {string} 
     * @return {bool} true is regular expression is satified false otherwise  
     * */ 

    personalize_dni_nie(){
        
        dni = document.getElementById('dni').value;
        if (this.personalize_dni_format() == true){
            if (!(this.personalize_validate_dni(dni))){
                return "dni_validate_KO";
            }
        }
        else{
            if (this.personalize_nie_format() === true){
                    if (!(this.personalize_validate_nie(dni))){
                        return "nie_validate_KO";
                    }
            }
            else{
                return "dni_nie_format_KO";
            }
        }

        return true;

    }
    /**
     * get dni as parameter, split letter and numbers, calculate
     * %23 from number to obtain corresponding letter and compares with letter in dni value
     * 
     * @param dni value
     * @returns true if dni is valid false otherwise
     */
    personalize_dni_format(){
        
        if (!(this.format('dni', '[0-9]{8}[A-Z]'))){
            this.dom.mostrar_error_campo('dni','dni_format_KO');
            return "dni_format_KO";
        }
        return true;

    }

    personalize_nie_format(){
        if (!(this.format('dni', '[XYZ][0-9]{7}[A-Z]'))){
            this.dom.mostrar_error_campo('dni','nie_format_KO');
            return "nie_format_KO";
        }
        return true;
    }
    personalize_validate_dni(dni){
        
        //var dni = document.getElementById('dni').value;
        var dni_letters = "TRWAGMYFPDXBNJZSQVHLCKE";
        var letter = dni_letters.charAt( parseInt( dni, 10 ) % 23 );
        
        return letter == dni.charAt(8);
    }

    /**
     * get nie as parameter, split firts letter, calculate
     * the number from this letter and create dni for validating in 
     * personalizate method
     * 
     * @param nie value
     * @returns true if nie is valid false otherwise
     */
    personalize_validate_nie(nie){
        
        //var nie = document.getElementById('dni').value;
        // Change the initial letter for the corresponding number and validate as DNI
        var nie_prefix = nie.charAt( 0 );

        switch (nie_prefix) {
        case 'X': nie_prefix = 0; break;
        case 'Y': nie_prefix = 1; break;
        case 'Z': nie_prefix = 2; break;
        }

        return this.personalize_validate_dni( nie_prefix + nie.substr(1) );
    
    }



}



	
