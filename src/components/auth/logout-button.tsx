import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { getAuthUser } from "@/data/auth";

const config = {
  maxAge: 60 * 60 * 24 * 7,
  path: "/",
  domain: process.env.DOMAIN ?? "localhost",
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
};

async function logoutAction() {
  "use server";
  (await cookies()).set("jwt", "", { ...config, maxAge: 0 });
  redirect("/");
}

export async function LogoutButton() {
  const { data: user } = await getAuthUser();

  if (!user) return null;
  return (
    <form action={logoutAction}>
      <Button variant="secondary" type="submit">Logout</Button>
    </form>
  );
}
