import { toast } from "react-toastify";
import AxiosPostRequest from "../axiosPostRequest";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { actionCars } from "../../store/autozumadminSlice";
export const postCar = async (data) => {
  return await AxiosPostRequest(data,"cars");
};

const PostCars = (props) => {
  // console.log(props.refetch);
  const dispatch = useDispatch()
  const { mutate, isLoading } = useMutation(["post-cars"], (data) => postCar(data), {
    onSuccess:() =>{
      // props?.refetch()
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
