FROM selenium/node-chrome:latest
RUN install -g selenium-webdriver mocha chai chromedriver mocha-junit-reporter --save-dev