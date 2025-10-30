import { signInWithKeycloak } from "../lib/auth/actions";

export default function SignIn() {
  return (
    <form action={signInWithKeycloak}>
      <button
        type="submit"
        className="bg-blue-500 text-white font-bold p-5 rounded-lg hover:cursor-pointer"
      >
        Sign in
      </button>
    </form>
  );
}
