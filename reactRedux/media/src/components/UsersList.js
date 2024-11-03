import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store";
import Skeleton from "./Skeleton";

function UsersList() {
  const dispatch = useDispatch();
  const { isLoading, data, error } = useSelector((state) => {
    return state.users;
  });

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) {
    return <Skeleton times={5} className="w-full h-5"></Skeleton>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <div times={data.length}></div>
    </div>
  );
}

export default UsersList;
