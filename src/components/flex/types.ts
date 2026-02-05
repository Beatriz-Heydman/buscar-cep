export type FlexProps = {
  gap?: string;
  flexWrap?: "wrap" | "nowrap";
  direction?: "row" | "column";
  alignItems?: "flex-start" | "flex-end" | "center";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around";
};
