export interface Item {
  id: string;
  name: string;
}

export interface OnSelectFunc {
  (id: string): void;
}

export interface ListItemProps {
  item: Item;
  isSelected: boolean;
  onSelect: OnSelectFunc;
}
