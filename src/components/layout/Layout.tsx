import { PropsWithChildren } from "react";
import Header from "./Header";

const Layout = (props: PropsWithChildren) => {
  return (
    <div>
      <Header />
      <div className="mt-16">{props.children}</div>
    </div>
  );
};

export default Layout;
