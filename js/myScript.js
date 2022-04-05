function validate_fullName() {
    if (document.ContactForm.fullName.value == "") {
        alert("Please provide your full name!");

        
        document.ContactForm.fullName.focus();
        return false;
    } else {
        var NAME = document.getElementById("fname").value;
        var NameRe = /^[A-Z][a-z]+\s[A-Z][A-Z'\-a-z]+$/;

        if (NameRe.test(NAME)) {
             return true;
        } else {
            alert("invalid put your full name in there like 'faisal abdulle' ");
            document.ContactForm.fullName.focus();
            return false;
        }
    }

}

