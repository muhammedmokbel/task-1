import * as Yup from "yup";
import { allowedAlphanumeric } from "./regex";

export default Yup.object({
  productName: Yup.string().min(
    3,
    "Product name should be 3 character or more"
  ).required('Product Name is required')
  .test('validate that string must have alph and numbers only', 'accept alphabetic and numbers only', (val) => allowedAlphanumeric.test(val)),
  productDesc: Yup.string()
    .required("Description is required"),
 productCategory: Yup.string().required("Category is required"),
  productPrice : Yup.number().required("Product price is required"),
});
