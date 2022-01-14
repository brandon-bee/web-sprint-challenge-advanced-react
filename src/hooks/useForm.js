// write your custom hook here to control your checkout form
import { useState } from "react";

const useForm = (initValues) => {
  const [values, setValues] = useState(initValues);

  return [values];
}

export default useForm;