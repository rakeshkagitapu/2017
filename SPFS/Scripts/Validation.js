$(document).ready(function () {
    
    $('.decimalNumeric').keyup(function () {

        if (this.value.match(/[^(10|\d)(\.\d{1,2})?]/g)) {
            this.value = this.value.replace(/[^(10|\d)(\.\d{1,2})?]/g, '');
        }
    });

    $('.onlyNumeric').keyup(function () {

        if (this.value.match(/[^0-9]/g)) {
            this.value = this.value.replace(/[^0-9]/g, '');
        }
    });
    //validation
    jQuery.validator.addMethod(
         "NumberGreaterZero",
         function (value, element) {
             var check = false;
             if (value > 0) {
                 check = true;
             } else
                 check = false;
             return this.optional(element) || check;
         },
         "Value should be greater than 0"
     );
});