#!/bin/bash

# Get commandline arguments
while (( "$#" )); do
  case "$1" in
    --license-key)
      NEWRELIC_LICENSE_KEY="$2"
      shift
      ;;
    *)
      shift
      ;;
  esac
done

# Set variables
randomLoggerName="random-logger"

# Install New Relic agent on host machine


# Configure agent to scrate Docker logs
sudo echo '  - name: dockerlogs
    file: /var/lib/docker/*/*.log' \
    >> /etc/newrelic-infra/logging.d/logging.yaml

# Restart the New Relic agent
sudo systemctl restart newrelic-infra

# Install docker on host machine
sudo bash ./01_docker/01_install_docker.sh

# Build random logger image
sudo docker build \
  --tag $randomLoggerName \
  ./02_random_logger

# Start random logger
sudo docker run \
  -d \
  --name $randomLoggerName \
  $randomLoggerName
