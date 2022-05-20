export interface IInnerProps {
  id: string;
  name: string;
  image: string;
  price: number;
  moveCard: (droppedId: string, originalIndex: number) => any;
  findCard: (id: string) => any;
}
