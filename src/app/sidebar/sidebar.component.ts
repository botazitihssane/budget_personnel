import { Component, OnInit } from "@angular/core";

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: "/dashboard", title: "Dashboard", icon: "nc-layout-11", class: "" },
  { path: "/compte", title: "Compte", icon: "nc-bank", class: "" },
  {
    path: "/transactions",
    title: "Transaction",
    icon: "nc-vector",
    class: "",
  },
  { path: "/revenu", title: "Revenu", icon: "nc-money-coins", class: "" },
  { path: "/depense", title: "Depense", icon: "nc-credit-card", class: "" },
  { path: "/epargne", title: "Epargne", icon: "nc-tile-56", class: "" },
  {
    path: "/objectif",
    title: "Objectif",
    icon: "nc-bullet-list-67",
    class: "",
  },
  { path: "/user", title: "Profil", icon: "nc-single-02", class: "" },
  { path: "/icons", title: "Icons", icon: "nc-diamond", class: "" },
  {
    path: "/notifications",
    title: "Notifications",
    icon: "nc-bell-55",
    class: "",
  },

  { path: "/table", title: "Table List", icon: "nc-tile-56", class: "" },
  {
    path: "/typography",
    title: "Typography",
    icon: "nc-caps-small",
    class: "",
  },
];

@Component({
  moduleId: module.id,
  selector: "sidebar-cmp",
  templateUrl: "sidebar.component.html",
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }
}
