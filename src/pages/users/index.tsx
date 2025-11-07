import { useAppDispatch } from "@/hooks";
import { logout } from "@/features/auth-slice";
import { useNavigate } from "react-router-dom";

export function UsersPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>Users</h1>
      <button
        onClick={() => {
          dispatch(logout());
          navigate("/login");
        }}
      >
        Выйти
      </button>
    </div>
  );
}
