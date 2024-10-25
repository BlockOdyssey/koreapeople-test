import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  use: {
    headless: false, // 테스트 실행 시 브라우저를 실제로 띄웁니다 (headless 모드로 하려면 true로 변경).
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure', // 실패 시 스크린샷을 저장
  },
};

export default config;
