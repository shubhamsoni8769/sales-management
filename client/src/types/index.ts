export interface Sidebarinterface {
  name: string;
  label: string;
  items?: SidebarinterfaceItem[];
}

export interface SidebarinterfaceItem {
  name: string;
  label: string;
  items?: nestedsidebar[];
}

export interface nestedsidebar {
  name: string;
  label: string;
  items?: nestedsidebar1[];
}

export interface nestedsidebar1 {
  name: string;
  label: string;
}
