FROM node:6.2
MAINTAINER Vladimir Tikhonov vladimir@tikhonov.by

ENV APP_ROOT="/opt/frontend"

RUN apt-get update && \
  apt-get install -y libelf1 && \
  rm -rf /var/cache/apt/*

WORKDIR $APP_ROOT
