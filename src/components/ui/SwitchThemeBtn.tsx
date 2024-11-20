'use client';

import { useTheme } from 'next-themes';

/**
 * ANCHOR: 테마(light, dark) 변경 Component
 * 문서 링크: https://mui.com/material-ui/react-switch/
 * @returns
 */
export default function SwitchThemeBtn() {
  const { theme, setTheme } = useTheme();

  /**
   * ANCHOR: 이미지 교체용
   */

  return <div>스위치 컴퍼넌트</div>;
}
