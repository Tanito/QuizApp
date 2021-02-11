import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { TabsPage } from "./tabs.page";
import { AuthGuardGuard } from "src/app/services/auth-guard.guard";

const routes: Routes = [
  {
    path: "tabs",
    redirectTo: "tabs/quizzes",
    pathMatch: "full",
  },
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "quizzes",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../quizzes/quizzes.module").then(
                (m) => m.QuizzesPageModule
              ),
          },
        ],
      },
      {
        path: "schoolsList",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../schoolsList/schoolsList.module").then(
                (m) => m.SchoolsListPageModule
              ),
          }
        ],
      },
      {
        path: "account",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../account/account.module").then(
                (m) => m.AccountPageModule
              ),
          },
        ],
      },
      {
        path: "profile-details",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../profile-details/profile-details.module").then(
                (m) => m.ProfileDetailsPageModule
              ),
          },
        ],
      },
      {
        path: "profile-favs",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../profile-favs/profile-favs.module").then(
                (m) => m.ProfileFavsPageModule
              ),
          },
        ],
      },
      {
        path: "enrolled-quizzes",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../enrolled-quizzes/enrolled-quizzes.module").then(
                (m) => m.ProfileEnrolledQuizzesPageModule
              ),
          },
        ],
      },
      {
        path: "edit-user",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../edit-user/edit-user.module").then(
                (m) => m.EditUserPageModule
              ),
          },
        ],
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
})
export class TabsPageRouterModule {}
