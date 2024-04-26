import { toast } from "react-toastify";
import AxiosPostRequest from "../axiosPostRequest";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { actionCars } from "../../store/autozumadminSlice";
export const postCar = async (data) => {
  return await AxiosPostRequest(data,"cars");
};

const PostCars = () => {
  const dispatch = useDispatch()
  const { mutate, isLoading } = useMutation(["post-cars"], (data) => postCar(data), {
    onSuccess:() =>{
     toast.success("Succsesfuly add cars")
     dispatch(actionCars(""))
    },
    onError: (err) => {
      toast.error(err);
    },
  });
  return { mutate, isLoading };
};
export default PostCars;
