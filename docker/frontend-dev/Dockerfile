FROM node:6.2
MAINTAINER Vladimir Tikhonov vladimir@tikhonov.by

RUN apt-get update && \
  apt-get install -y libelf1 && \
  rm -rf /var/cache/apt/*

WORKDIR /opt/frontend
