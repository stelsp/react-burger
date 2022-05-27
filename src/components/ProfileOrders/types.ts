export interface ITopProps {
  createdAt: string;
  number: number;
  status: string;
  name: string;
}

export interface IImgProps {
  id: string;
}

export interface IBottomProps {
  ing: string[];
}

export interface ICardProps extends ITopProps, IBottomProps {
  _id: string;
}
