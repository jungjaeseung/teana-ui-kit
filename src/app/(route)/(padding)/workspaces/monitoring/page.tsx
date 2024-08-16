import { redirect } from "next/navigation";

type RedirectProps = {};

const Redirect = ({}: RedirectProps) => {
  redirect("/workspaces/monitoring/dashboard");
};

export default Redirect;
