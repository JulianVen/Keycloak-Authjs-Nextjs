import { signOutToLogin } from "../lib/auth/actions";

export default function SignOut() {
  return (
    <form action={signOutToLogin}>
      <button
        type="submit"
        className="bg-blue-500 text-white font-bold p-5 rounded-lg hover:cursor-pointer"
      >
        Sign Out
      </button>
    </form>
  );
}
