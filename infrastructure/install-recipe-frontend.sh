#!/bin/bash
# ---------------------------------
# Install recipe-frontend.service
# ---------------------------------
APP_NAME="recipe-frontend"
APP_SERVICE="/etc/systemd/system/${APP_NAME}.service"

# Install application service
rm -rf "${APP_SERVICE}"
cp "${APP_SERVICE##*/}" "${APP_SERVICE}"
chmod +x "${APP_SERVICE}"
systemctl daemon-reload
