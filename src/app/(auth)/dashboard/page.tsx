import SignOut from "@/core/components/sign-out";
import { auth } from "@/auth";

export default async function DashboardPage() {
  const session = await auth();

  return (
    <>
      <SignOut />
      <div> Hello User </div>
      <div> {JSON.stringify(session)}</div>
    </>
  );
}
