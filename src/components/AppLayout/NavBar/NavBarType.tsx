export type NavItemProps = {
  icon: React.ReactNode;
  name: string;
  selected: boolean;
  to: string;
  onClick: () => void;
};

export interface NavBarProps {
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
}