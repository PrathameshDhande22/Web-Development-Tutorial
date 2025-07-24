import { Outlet, useNavigate } from "react-router-dom";
import { Button } from "../Components";

const HomePage = () => {
  const navigate = useNavigate();

  const usetransitionOnClick = () => {
    navigate("/updates/usetransition");
  };

  const homeOnClick = () => {
    navigate("/");
  };

  return (
    <>
      <div className="bg-blue-400 text-white">
        <h3 className="text-center text-lg">Home Page</h3>
      </div>
      <div>
        <h2 className="text-center text-xl font-serif my-2">
          React v19 - <span>Updates</span>
        </h2>
      </div>
      <div className="flex flex-row justify-center flex-wrap gap-2 px-2 py-2">
        <Button text="Home" onClick={homeOnClick} />
        <Button text="useTransition" onClick={usetransitionOnClick} />
        <Button text="form actions" onClick={() => navigate("/updates/form")} />
        <Button
          text="useActionState"
          onClick={() => navigate("/updates/useactionstate")}
        />
        <Button
          text="useFormStatus"
          onClick={() => navigate("/updates/useformstatus")}
        />
        <Button
          text="useOptimisticHook"
          onClick={() => navigate("/updates/useoptimistic")}
        />
        <Button text="useHook" onClick={() => navigate("/updates/usehook")} />
        <Button
          text="Server and Client Functions"
          onClick={() => navigate("/updates/serverfnclientfn")}
        />
        <Button
          text="Ref Forwarding"
          onClick={() => navigate("/updates/reforwarding")}
        />
      </div>
      <Outlet />
    </>
  );
};
export default HomePage;
