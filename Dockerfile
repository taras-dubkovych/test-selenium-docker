FROM selenium/node-chrome:latest
RUN install -g mocha chai chromedriver mocha-junit-reporter --save-dev