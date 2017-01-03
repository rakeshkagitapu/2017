var validateIgnoreClass = 'validate-ignore';

$.validator.setDefaults({
    errorClass: 'blahblah',
    ignore: '.' + validateIgnoreClass,
    showErrors: function (errorMap, errorList) {

        $.each(this.validElements(), function (index, element) {
            var $element = $(element);
            $element.data("title", "") // Clear the title - there is no error associated anymore
                .removeClass("errorBorderClass")
                .tooltip("destroy");
        });

        $.each(errorList, function (index, error) {
            if (error.element.readOnly || error.element.disabled)
                return;
            var valMsgId = error.element.name;
            var selector = 'form [data-valmsg-for="' + valMsgId + '"]';
            var valMsg = $(selector);
            if (valMsg.css("display") == "none") {
                $('[name="' + valMsgId + '"]').addClass('errorBorderClass');
                $('[name="' + valMsgId + '"]').attr('title', error.message)
            }
            valMsg.empty();
            valMsg.removeClass("field-validation-error");
            valMsg.addClass("field-validation-valid");
            valMsg.removeClass("field-validation-valid");
            valMsg.addClass("field-validation-error");
            valMsg.append(error.message);
        });
    },
    invalidHandler: function (event, validator) {
        //alert('invalid handler!')
    },
    highlight: function (element, errorClass) {
        //alert('I am highlighting!');
    },
    //unhighlight: function (element, errorClass) {
    //    //alert('I am UN-highlighting!');
    //    var name = element.name;
    //    var selector = '[data-valmsg-for="' + name + '"]';
    //    var valMsg = $(selector);
    //    if (valMsg.css("display") != "none")
    //        valMsg.css("display", "");
    //},
    onkeyup: function (element, event) {
    },
    onfocusout: function (element, event) {
        if (element.readOnly || element.disabled || element.name == "")
            return;

        var valMsgId = element.name;
        var selector = 'form [data-valmsg-for="' + valMsgId + '"]';
        var valMsg = $(selector);

        if ($(element).valid()) {
            valMsg.empty();
            valMsg.removeClass("field-validation-error");
            valMsg.removeClass("field-validation-valid");
            $(element).removeClass('errorBorderClass')
            $(element).prop('title', '')
        } else {
            if (valMsg.css("display") == "none") {
                $(element).prop('title', valMsg[0].innerText)
                $(element).addClass('errorBorderClass')
            }
        }
    }
});
