import { lazy } from "react";

const ViewAboutPage = lazy(
    () => import("@/pages/HomePage/index")
  );
// const ViewCoursePage = lazy(
//     () => import("@/pages/CoursePage/index")
//   );

//   const ViewFaciPage = lazy(
//     () => import("@/pages/FacilitiesPage/index")
//   );

//   const ViewTourPage = lazy(
//     () => import("@/pages/TournamentPage/index")
//   );

//   const ViewNewsPage = lazy(
//     () => import("@/pages/NewsPage/index")
//   );

//   const ViewContactPage = lazy(
//     () => import("@/pages/ContactPage/index")
//   );
  const coreRoutes = [
    {
      path: "/ve-chung-toi",
      title: "Về Chúng Tôi",
      component: ViewAboutPage,
    },
 

  ];
  
  const routes = [...coreRoutes];
  export default routes;