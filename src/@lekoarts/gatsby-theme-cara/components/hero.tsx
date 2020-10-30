/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
import Intro from "../sections/intro"



const Hero = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Divider speed={0.2} offset={offset} factor={factor}>
      <UpDown>
        <SVG icon="Pickaxe" hiddenMobile width={48} stroke color="icon_orange" left="10%" top="20%" />
        <SVG icon="Villager" width={48} stroke color="icon_red" left="60%" top="70%" />
        <SVG icon="Observer" width={6} color="icon_darker" left="60%" top="15%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="Brewing" hiddenMobile width={16} color="icon_blue" left="80%" top="10%" />
        <SVG icon="Pickaxe" width={12} stroke color="icon_brightest" left="90%" top="50%" />
        <SVG icon="Bedrock" width={16} color="icon_darker" left="70%" top="90%" />
        <SVG icon="Pickaxe" width={16} stroke color="icon_darkest" left="30%" top="65%" />
        <SVG icon="RedTorch" width={16} stroke color="icon_pink" left="28%" top="15%" />
        <SVG icon="Bedrock" width={6} color="icon_darkest" left="75%" top="10%" />
        <SVG icon="Enchanting" hiddenMobile width={8} color="icon_darkest" left="45%" top="10%" />
      </UpDownWide>
      <SVG icon="Bedrock" hiddenMobile width={24} color="icon_darker" left="5%" top="70%" />
      <SVG icon="Bedrock" width={6} color="icon_darkest" left="4%" top="20%" />
      <SVG icon="Bedrock" width={12} color="icon_darkest" left="50%" top="60%" />
      <SVG icon="Enchanting" width={8} color="icon_darkest" left="95%" top="90%" />
      <SVG icon="Enchanting" hiddenMobile width={24} color="icon_darker" left="40%" top="80%" />
      <SVG icon="Pickaxe" width={8} stroke color="icon_darker" left="25%" top="5%" />
      <SVG icon="Bedrock" width={64} color="icon_green" left="95%" top="5%" />
      <SVG icon="Observer" hiddenMobile width={64} color="icon_purple" left="5%" top="90%" />
      <SVG icon="Observer" width={6} color="icon_darkest" left="10%" top="10%" />
      <SVG icon="Observer" width={12} color="icon_darkest" left="40%" top="30%" />
      <SVG icon="Villager" width={16} stroke color="icon_darker" left="10%" top="50%" />
      <SVG icon="Villager" width={8} stroke color="icon_darker" left="80%" top="70%" />
    </Divider>
    <Content sx={{ variant: `texts.bigger` }} speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <Intro />
      </Inner>
    </Content>
  </div>
)

export default Hero
