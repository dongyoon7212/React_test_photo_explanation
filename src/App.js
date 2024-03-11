import "./App.css";
import { Route, Routes } from "react-router-dom";
import RootLayout from "./components/RootLayout/RootLayout";
import MainSidebarBottom from "./components/MainSidebarBottom/MainSidebarBottom";
import RootHeader from "./components/RootHeader/RootHeader";
import { SIDEBAR_MENUS } from "./constants/menu";
import { RecoilRoot } from "recoil";

function App() {
    return (
        <RootLayout>
            <RecoilRoot>
                <RootHeader />
                <Routes>
                    {SIDEBAR_MENUS.map((menu) => (
                        <Route
                            key={menu.id}
                            path={menu.path}
                            element={menu.element}
                        />
                    ))}
                </Routes>
                <MainSidebarBottom />
            </RecoilRoot>
        </RootLayout>
    );
}

export default App;
