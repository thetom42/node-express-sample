FROM gitpod/workspace-full

RUN sudo apt-get update -y && \
    sudo apt-get install -y apt-utils postgresql-client-12 && \
    npm install -g npm express cors dotenv uuid pg 