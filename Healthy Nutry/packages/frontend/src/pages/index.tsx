import Main from "components/PageLogin/Main";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const user = localStorage.getItem("TOKEN_USER_ID");
    if (user) {
      router.push("/listMeals");
    }
  }, []);
  return <Main />;
}
