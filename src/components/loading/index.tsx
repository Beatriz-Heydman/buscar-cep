// styles
import { StyledLoader } from "./styles";

// Components 
import { Flex } from "../flex";


export function Loading() {
  return <Flex justifyContent="center" alignItems="center" style={{height: "224px"}}>
    <StyledLoader></StyledLoader>
     </Flex>
}
