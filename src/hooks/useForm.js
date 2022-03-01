import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import api from "../utils/axios";

const useForm = (btnText = "Submit") => {
  const errors = ref([]);
  const loading = ref(false);
  const buttonText = ref(btnText);

  const router = useRouter();

  const handleSubmit = async ({ route, method, data }) => {
    loading.value = true;
    buttonText.value = "Loading...";
    try {
      const result = await api[method](route, data);
      console.log(result.data);
      //   router.push("/login");
    } catch (error) {
      errors.value = error.response.data.errors;
      loading.value = false;
      buttonText.value = btnText;
    }
  };

  const getHelperText = (name) => errors.value[name]?.join(" ");

  return { getHelperText, handleSubmit, loading, buttonText };
};

export default useForm;
