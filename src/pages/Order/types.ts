export interface IIngredientProps {
  id: string;
}
export interface ITopProps {
  number: number;
  name: string;
  status: string;
}
export interface IMiddleProps {
  ing: string[];
}
export interface IBottomProps extends IMiddleProps {
  createdAt: string;
}
export interface IMiddleProps {}
