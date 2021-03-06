FROM nginx:1.11-alpine
COPY /dist /usr/share/nginx/html/index.html
EXPOSE 80
CMD ["nginx", "-g","daemon off;"]
