# 온결 청소

[ProCleaning](https://github.com/anastasiiaxfr/ProCleaning) 공개 Astro 템플릿의 구성 요소와 레이아웃을 바탕으로 제작한 한국어 청소 정보 사이트입니다. 원본의 MIT 라이선스는 `LICENSE`에 보존했습니다. 원본의 예시 고객 후기, 직원 정보, 연락처, 구조화 데이터와 이미지는 사용하지 않습니다.

## 배포

Node.js 22.12 이상에서 `npm ci`, `npm run build`를 실행합니다. Vercel은 Astro 프레임워크를 선택하고 프로젝트의 루트 디렉터리를 저장소 최상위로 설정합니다. 빌드 결과는 `dist`에 생성됩니다. GitHub `main` 브랜치를 Production Branch로 연결합니다.

대표 도메인은 `https://parcelout.kr/`입니다. Astro sitemap이 `/sitemap-index.xml`을 생성하며 `robots.txt`도 이를 가리킵니다. 네이버 서치어드바이저의 소유 확인 파일 또는 메타 태그는 실제 계정에서 발급받은 값을 사용해야 합니다.
