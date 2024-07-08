import { xwingIcons } from 'lbn-core/src/helpers/icon';
import { FC } from 'react';
import { Text, TextStyle } from 'react-native';

import { useTailwind } from '../../helpers/tailwind';

type Props = {
  style?: TextStyle
  icons: string[];
  color?: string;
  size?: number;
};

export const XWingFont: FC<Props> = ({ icons, color, size, style: inStyle }) => {
  const { tw } = useTailwind();
  const fontSize = size || 25;
  const style = tw`text-${fontSize} text-${color ? `[${color}]` : 'black dark:text-white'} `;

  return (
    <Text style={[style, { fontFamily: 'xwing-miniatures' }, inStyle]}>
      {icons?.map(i => xwingIcons(i))}
    </Text>
  );
};
