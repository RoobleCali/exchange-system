// import axios from "axios";
// import { useDispatch } from "react-redux";
// import useSWR from "swr";

// const dispatch = useDispatch();

// // fetching data from api using swr
// const token = sessionStorage.getItem("accessToken");
// // fetching data from api using swr
// const fetcher = async (url) => {
//   const res = await axios.get(url);
//   return res.data.data;
// };

// const { data, isValidating, error } = useSWR(
//   "https://jsonplaceholder.typicode.com/users",
//   fetcher
// );
// console.log(data);
// useEffect(() => {
//   if (data) {
//     setClients(data);
//     dispatch(userSuccess(data));
//     console.log(data);
//   }
//   if (error) {
//     dispatch(userFail("something went Wrong try again later"));
//     console.log(error.response);
//     if (error.message == "Network Error") {
//     } else if (error.response.data.error) {
//       // sessionStorage.removeItem("accessToken");
//       // router.push("/login");
//       // console.log(error.response.data.message);
//     } else {
//       alert("something went wrong try again later");
//     }
//   }
// }, [data, error]);
