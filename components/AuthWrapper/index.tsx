import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export interface UserInfo {
  username: string;
  jobTitle: string;
}

interface Props {
  children: React.ReactNode;
}

export default async function AuthWrapper({ children }: Props) {
  const userInfo = await getServerUserInfo();

  if (!userInfo || !userInfo.username || !userInfo.jobTitle) {
    redirect("/verify");
  }

  return <div>{children}</div>;
}

async function getServerUserInfo(): Promise<UserInfo | null> {
  try {
    const cookieStore = await cookies();
    const user = JSON.parse(cookieStore.get("user")?.value || "");

    if (user && user.username && user.jobTitle) {
      return {
        username: user.username,
        jobTitle: user.jobTitle,
      };
    }

    return null;
  } catch (error) {
    console.error("Error getting user info:", error);
    return null;
  }
}
