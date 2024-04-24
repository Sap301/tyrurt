var lastCedula = '';

var TEXT_HINT_C = '';
var TEXT_HINT_P = '';

function initHintText(textC, textP) {
    TEXT_HINT_C = textC;
    TEXT_HINT_P = textP;
}

function mostrarErrorCodDactilar(){
    jQuery("#codDactilar-error").css("display","block");
    jQuery("#codDactilar-error-msg").css("opacity","1");
    jQuery("#codDactilar").addClass("field-eb-error");
    jQuery("#codDactilar-hint").css("display","none");
}
function ocultarErrorCodDactilar(){
    jQuery("#codDactilar-error").css("display","none");
    jQuery("#codDactilar-error-msg").css("opacity","0");
    jQuery("#codDactilar").removeClass("field-eb-error");
    jQuery("#codDactilar-hint").css("display","block");
}

function validarDocumento(event) {
    if (document.getElementById('tipoDocumentoInput').value === 'C') {
        return isNumber(event);
    } else if (document.getElementById('tipoDocumentoInput').value === 'P') {
        var var_mayus = document.getElementById('numDocumento').value;
        var var_mayuscula = var_mayus.toUpperCase();
        document.getElementById('numDocumento').value = var_mayuscula;
        return IsAlphaNumeric(event);
    } else {
        return false;
    }
}

function validarCodDactilar(event) {
    var isValid = solo_letras_numeros(event);
    verificaHabilitaBoton();
    return isValid;
}

function removeError(field) {
    jQuery('#' + field + '-error').removeClass('field-msg-error-show');
    //jQuery('#'+field+'-error').text('');
    jQuery('#' + field).removeClass('field-eb-error');
    jQuery('#' + field).removeClass('field-eb-error2');
}

function executeVerificacionId(tipo, numero, p) {
    bloquearPantalla();
    showLoading();
    setTimeout(function () {
        p.dwr.metodo(tipo, numero, {
            callback: function (datosRespuesta) {
                try {
                    desbloquearPantalla();
                    stopLoading();
                    var resp = jQuery.parseJSON(datosRespuesta);
                    if (resp.error !== '0') {
                        jQuery('#numDocumento-error').addClass('field-msg-error-show');
                        jQuery('#numDocumento').addClass('field-eb-error');
                        //jQuery('#error-cedula').show();
                        //console.log(jQuery('#error-cedula').text());
                        jQuery('#numDocumento-error').text(jQuery('#error-cedula').text());
                        jQuery('#verificado').val('F');
                        jQuery('#btnContinuar').prop('disabled', true);

                    } else {
                        jQuery('#verificado').val('T');
                        showCheckLoading();
                        removeError('numDocumento');
                        //console.log(tipo)
                        if (tipo === 'C' && verificarCodDact === 'true') {
                            verificarPresentarCodDactilar(numero, true);
                        }

                        verificaHabilitaBoton();
                    }
                } catch (e) {
                    jQuery('#verificado').val('T');
                    showCheckLoading();
                    removeError('numDocumento');
                    verificaHabilitaBoton();
                }
            },
            errorHandler: function (errorString, exception) {
                try {
                    jQuery('#verificado').val('F');
                    desbloquearPantalla();
                    stopLoading();
                    hideCheckLoading();
                    console.error('error ' + errorString + ' ex ' + exception);

                } catch (e) {
                }
            }
        });
    }, 200)

}

jQuery(document).ready(function ($) {



    function throttle(f, delay) {
        var timer = null;

        return function () {
            var context = this, args = arguments;
            clearTimeout(timer);
            timer = window.setTimeout(function () {
                    f.apply(context, args);
                },
                delay || 500);
        };
    }

    $(document).keypress(
        function (event) {
            if (event.which == '13') {
                event.preventDefault();
            }
        });


    var tipoDoc = $('#tipoDocumentoInput').val();
    var verificado = $('#verificado').val();

    if (verificado === 'T' && tipoDoc === 'C') {
        showCheckLoading();
        if (tipoDoc === 'C' && verificarCodDact === 'true') {
            verificarPresentarCodDactilar(jQuery("#numDocumento").val(), false);
        }
    }

    $('#btnContinuar').prop('disabled', true);
    if (tipoDoc.trim() === '') {
        $("#numDocumento").attr("placeholder", TEXT_HINT_C);
        $('#numDocumento').prop('disabled', true);
    } else {
        if (tipoDoc.indexOf("C") != -1) {
            document.getElementById('numDocumento').maxLength = '10';
            jQuery("#numDocumento").attr("placeholder", TEXT_HINT_C);
        } else if (tipoDoc.indexOf("P") != -1) {
            document.getElementById('numDocumento').maxLength = '20';
            jQuery("#numDocumento").attr("placeholder", TEXT_HINT_P);
        }
        $('input:radio[name="tipoDocumento"][value=' + tipoDoc + ']').prop("checked", "true");
        if (tipoDoc === 'C') {
            $("#numDocumento").attr("placeholder", TEXT_HINT_C);
        } else {
            $("#numDocumento").attr("placeholder", TEXT_HINT_P);
        }
    }
    verificaHabilitaBoton();

    $('input:radio[name="tipoDocumento"]').change(function () {
        //$k("#cod-dactilar-input-col").css("display", "none");
        hideCodDact();
        //$k("#verifica-cod-dactilar").val(false);
        $('#numDocumento').prop('disabled', false);
        var dato = $(this).val();
        $('#tipoDocumentoInput').val(dato);
        changeIdent(dato);
        hideCheckLoading();
        verificaHabilitaBoton();
        removeError('tipoDocumentoInput');
        removeError('numDocumento');
        $('#error-cedula').hide();
    });

    $('#numDocumento').keydown(throttle(function () {
        var ced = $(this).val();
        if (lastCedula === ced) {

            return;
        }

        //$k("#verifica-cod-dactilar").val(false);
        $k("#verifica-cod-dactilar").val(false);
        $k('#btnContinuar').prop("disabled",true);


        lastCedula = ced;
        var tipoDoc = $('#tipoDocumentoInput').val();

        if (tipoDoc !== '' && tipoDoc === 'C') {
            if (ced.length === 10) {
                verificarCedula(tipoDoc, ced);
            } else {
                //$k("#cod-dactilar-input-col").css("display", "none");
                hideCodDact();
                jQuery('#verificado').val('F');
                stopLoading();
                hideCheckLoading();
            }

        } else if (tipoDoc !== '' && tipoDoc === 'P') {
            jQuery('#verificado').val('T');
            verificaHabilitaBoton();
        } else if (ced.length === 0) {
            jQuery('#verificado').val('F');
            stopLoading();
            hideCheckLoading();
        }

    }));

    $('ul[id="listaErrores"] li').each(function (i) {
        var field = $(this).attr("rel");
        var msg = $(this).text();
        if (field && field !== '') {
            $('#' + field + '-error').addClass('field-msg-error-show');
            $('#' + field + '-error').text(msg);
            $('#' + field).addClass('field-eb-error2');
        }
    });

    $(document).on('click', '#linkTooltipDactilar', function(e) {
        if ($('#tooltip-help').hasClass('tooltip1-show')) {
            $('#tooltip-help').removeClass('tooltip1-show');
        } else {
            $('#tooltip-help').addClass('tooltip1-show');
        }
    });
    $(document).on('click', '#close-tooltip', function(e) {
        $('#tooltip-help').removeClass('tooltip1-show');
    });

    function changeIdent(str) {
        if (str.indexOf("C") != -1) {
            document.getElementById('numDocumento').maxLength = '10';
            jQuery("#numDocumento").attr("placeholder", TEXT_HINT_C);
            jQuery("#numDocumento").val('');
        } else if (str.indexOf("P") != -1) {
            document.getElementById('numDocumento').maxLength = '20';
            jQuery('#numDoc').find('input:text').val('');
            jQuery("#numDocumento").attr("placeholder", TEXT_HINT_P);
            jQuery("#numDocumento").val('');
        }
        document.getElementById('numDocumento').value = '';
    }

    $('#codDactilar').keyup(throttle(function () {
        ocultarErrorCodDactilar();
    }));




});