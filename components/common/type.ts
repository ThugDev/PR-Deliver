import { UseControllerProps } from "react-hook-form";

export type StepTemplateProps = {
  index: number;
  stepDesc: string;
  imageSrc: string;
  imageHeight: number;
  imageDesc?: string;
};

export type TabLayoutProps = {
  title: string;
  icon: string;
  content: string;
  tabs: string[];
  children: React.ReactNode | React.ReactNode[];
};

export type TabMenuProps = {
  tabTitle: string;
  isSelected: boolean;
  isPrevSelected: boolean;
  isNextSelected: boolean;
};

export type DeliverButtonProps = {
  isActive?: boolean;
  onClick: () => void;
  length: "smaller" | "full";
  label: string;
};

export type CustomInputProps = {
  title?: string;
  placeholder: string;
  className?: string;
} & UseControllerProps;

export type PageDescriptionProps = {
  icon: string;
  title: string;
  content: string;
};
