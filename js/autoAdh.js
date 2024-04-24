function showLoading() {
    hideCheckLoading();
    jQuery('#gif').addClass('rotate-circle');
    jQuery('#gif').addClass('gif-load-show');
}
function stopLoading() {
    jQuery('#gif').removeClass('gif-load-show');
    jQuery('#gif').removeClass('rotate-circle');
}

function showCheckLoading() {
    jQuery('#check').addClass('check-anim-show');
    jQuery('#check').addClass('check');
    jQuery('#check').addClass('path');
}

function hideCheckLoading() {
    jQuery('#check').removeClass('check-anim-show');
    jQuery('#check').removeClass('check');
    jQuery('#check').removeClass('path');
}


function showCodDact() {
    jQuery('#cod-dactilar-input-col').addClass('show-cod-dact');
}

function hideCodDact() {
    jQuery('#cod-dactilar-input-col').removeClass('show-cod-dact');
}

function showFechaExp() {
    jQuery('#panel-fecha-expedicion').addClass('p-fecha-exp-show');
}

function hideFechaExp() {
    jQuery('#panel-fecha-expedicion').removeClass('p-fecha-exp-show');
}

function bloquearPantalla() {
    jQuery('#overlayLoad').addClass('overlay_load');
}
function desbloquearPantalla() {
    jQuery('#overlayLoad').removeClass('overlay_load');
}
function showTooltip() {
    jQuery('#tooltipPass').show();

    setTimeout(function () {
        jQuery('#tooltipPass').addClass('tooltip-pass-show');
    }, 170);
}
function hideTooltip() {
    jQuery('#tooltipPass').removeClass('tooltip-pass-show');
    setTimeout(function () {
        jQuery('#tooltipPass').hide();
    }, 170);
}

jQuery('body').bind('copy paste',function(e) {
    e.preventDefault(); return false;
});


function executeVerificacionUser(usuario, p) {
    bloquearPantalla();
    showLoading();
    setTimeout(function () {
        p.dwr.metodo(usuario, {
            callback: function(datosRespuesta) {
                try {
                    desbloquearPantalla();
                    stopLoading();
                    var resp = jQuery.parseJSON(datosRespuesta);
                    if (resp.error !== '0') {
                        jQuery('#usuario-error').addClass('field-msg-error-show');
                        jQuery('#usuario').addClass('field-eb-error');
                        jQuery('#error-user').show();
                        jQuery('#verificadoUser').val('F');
                    } else {
                        showContentPass();
                        jQuery('#verificadoUser').val('T');
                        showCheckLoading();
                        removeError('usuario');
                        verificaHabilitaBoton();
                    }
                }catch (e) {
                    showContentPass();
                    showCheckLoading();
                    verificaHabilitaBoton();
                }
            },
            errorHandler: function(errorString, exception) {
                try {
                    desbloquearPantalla();
                    stopLoading();
                    hideCheckLoading();
                    jQuery('#verificadoUser').val('F');
                    console.error('error '+errorString+ ' ex '+exception);
                }catch (e) {
                }
            }
        });
    }, 200)

}