// validation script here
const inputs = document.querySelectorAll('input')

const patterns = {
    telephone:/^\d{11}$/,
    username:/^[a-z\d]{5,12}$/i,
    password:/^[\w@-]{8,20}$/,
    slug:/^[a-z\d-]{8,29}$/,
    email:/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,5})?$/
};

function validate(field, regex){
    if(regex.test(field.value)){
        field.className = 'Valid';
    } else {
        field.className = 'Invalid'
    }
}

inputs.forEach((input) =>{
    input.addEventListener('keyup', (e)=> {
        //console.log(e.target.attributes.name.value)
        validate(e.target, patterns[e.target.attributes.name.value])
    });
});
