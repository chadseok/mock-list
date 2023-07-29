import { PropsWithChildren } from "react";
import Header from "./Header";

const Layout = (props: PropsWithChildren) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
};

export default Layout;
