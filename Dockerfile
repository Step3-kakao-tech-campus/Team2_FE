# Build stage
FROM krmp-d2hub-idock.9rum.cc/goorm/node:16
WORKDIR /usr/src/app
COPY . .
ENV GENERATE_SOURCEMAP=false
ENV REACT_APP_FRONT_URL=https://kff8c580d2bada.user-app.krampoline.com
ENV REACT_APP_API_URL=https://k1657ba1b1d9da.user-app.krampoline.com
ENV REACT_APP_KAKAO_JS_KEY=9cda45647127425015c22ffcdb2d5c1a
ENV REACT_APP_GOOGLE_CLIENT_KEY=441856075982-vptu67e222uh2161vdj5b9elcb3l2utc.apps.googleusercontent.com
RUN npm ci
RUN npm run build
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "build"]