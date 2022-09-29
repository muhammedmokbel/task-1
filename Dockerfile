# build environment
FROM node:16.10.0 as builder
WORKDIR /app
COPY . .
ENV NODE_OPTIONS "--max-old-space-size=4096"
ENV GENERATE_SOURCEMAP false
RUN yarn
RUN yarn build
# production environment
FROM nginx:stable-alpine
RUN apk add --update --no-cache curl py-pip
COPY --from=builder  /app/build /usr/share/nginx/html
COPY --from=builder  /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]