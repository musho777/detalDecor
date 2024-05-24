import { Navigator } from "./components/navigator"

const Layout = ({ children }) => {
  return <div className="personalCabinetLayout">
    <Navigator />
    <div className="personalCabinetLayoutWrapper">
      {children}
    </div>
  </div>
}

export default Layout