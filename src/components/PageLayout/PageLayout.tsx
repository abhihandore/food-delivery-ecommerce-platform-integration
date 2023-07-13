import React, { ReactNode } from "react";
import Header from "../Common/Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import style from "./PageLayout.module.css";

type Props = {
  children: ReactNode;
};
interface OpenSidebarI {
  status: boolean;
  fixed: boolean;
}

const PageLayout: React.FC<Props> = ({ children }) => {
  /**
   * @param status for the sidebar status (If true, then open otherwise false)
   * @param fixed to check that, it is sticked or not. Because we are using moveover and mouseout event.
   */
  const [openState, setOpenState] = React.useState<OpenSidebarI>({
    status: true,
    fixed: true,
  });

  /**
   *
   * @param flag  (0 or 1) This flag will check for the event which user triggered [shrink or expand]
   * @description on click of sidebar button to toggle, calling this function which accept the flag i.e., 1 for 'open' and 0 for 'close'
   */
  const handleDrawerEvent = (flag: number) => {
    if (Boolean(flag)) {
      // open sidebar
      setOpenState((state) => {
        return { ...state, status: true, fixed: true };
      });
    } else {
      // close sidebar
      setOpenState((state) => {
        return { ...state, status: false, fixed: false };
      });
    }
  };

  return (
    <div className={style.grid}>
      <aside
        className={`${style.sidebar__aside} ${
          openState.status ? style.show : style.hide
        }`}
        onMouseEnter={() => {
          if (!openState.status) {
            setOpenState((state) => {
              return { ...state, status: true, fixed: false };
            });
          }
        }}
        onMouseLeave={() => {
          if (!openState.fixed) {
            setOpenState((state) => {
              return { ...state, status: false, fixed: false };
            });
          }
        }}
      >
        <Sidebar onToggleSidebar={handleDrawerEvent} toggleState={openState} />
      </aside>
      <main
        className={`${style.main} ${
          !openState.status ? style.shrink : style.expand
        }`}
      >
        <Header />
        <div className={style.content_box}>{children}</div>
      </main>
    </div>
  );
};

export default PageLayout;
