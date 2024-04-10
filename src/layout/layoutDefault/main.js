import { Outlet } from "react-router-dom";

function Main() {
  return (
    <>
      <div className="Main">
        <Outlet />
      </div>
    </>
  );
}

export default Main;
