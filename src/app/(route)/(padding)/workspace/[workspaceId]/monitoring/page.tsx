import { redirect } from "next/navigation";

type RedirectProps = {
  params: { workspaceId: string };
};

const Redirect = ({ params }: RedirectProps) => {
  redirect(`/workspace/${params.workspaceId}/monitoring/dashboard`);
};

export default Redirect;
