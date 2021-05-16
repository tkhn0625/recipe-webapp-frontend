#!/bin/bash
# ---------------------------------
# Install middlewares.
# ---------------------------------

# Install Node.js
curl -sL https://rpm.nodesource.com/setup_14.x | bash -
yum install -y nodejs

# Install yarn
curl --silent --location https://dl.yarnpkg.com/rpm/yarn.repo | sudo tee /etc/yum.repos.d/yarn.repo
yum install yarn
