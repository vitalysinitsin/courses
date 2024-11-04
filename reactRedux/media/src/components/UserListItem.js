import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import { removeUser } from "../store";
import { useThunk } from "../hooks/use-thunk";
import ExpandablePanel from "./ExpandablePanel";
import { Fragment } from "react";
import AlbumsList from "./AlbumsList";

function UserListItem({ user }) {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);

  const handleClick = () => {
    doRemoveUser(user);
  };

  const header = (
    <Fragment>
      <div className="mb-2 border rounded">
        <div className="flex p-2 justify-between items-center cursor-pointer">
          <div className="flex flex-row justify-between">
            <Button className="mr-3" loading={isLoading} onClick={handleClick}>
              <GoTrashcan />
            </Button>
            {error && <div>Error deleting user.</div>}
            {user.name}
          </div>
        </div>
      </div>
    </Fragment>
  );
  return (
    <ExpandablePanel header={header}>
      <AlbumsList user={user} />
    </ExpandablePanel>
  );
}

export default UserListItem;
