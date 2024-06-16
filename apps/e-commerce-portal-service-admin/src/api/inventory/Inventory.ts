export type Inventory = {
  createdAt: Date;
  id: string;
  itemName: string | null;
  location: string | null;
  quantity: number | null;
  updatedAt: Date;
};
