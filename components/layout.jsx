import { Toolbar } from "./toolbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Toolbar />
      {children}
    </div>
  );
};

export default Layout;
