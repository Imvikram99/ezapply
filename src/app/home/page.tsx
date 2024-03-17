"use client"
import withAuth from "@/components/Auth";

const Home = () => {
  return (
    <div className="temxt">
      <span className="text1"> Logged in Successfully</span>
    </div>
  );
}

export default withAuth(Home);
