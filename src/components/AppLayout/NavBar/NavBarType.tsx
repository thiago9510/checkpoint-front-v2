export type NavItemProps = {
  icon: React.ReactNode;
  name: string;
  selected: boolean;
  onClick: () => void;
};

export interface NavBarProps {
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
}