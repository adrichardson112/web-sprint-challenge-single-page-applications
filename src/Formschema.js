import * as Yup from "yup";

const formSchema = Yup.object().shape({
    size: Yup
        .string()
        .oneOf(["Personal", "Small", "Medium", "Large", "XL", "Select Your Size!"]),
    instructions: Yup
        .string()
        .required(), 
    name: Yup
        .string()
        .required("You must enter your name"),
})

export default formSchema;