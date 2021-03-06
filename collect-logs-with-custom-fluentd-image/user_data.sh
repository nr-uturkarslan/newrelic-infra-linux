#!/bin/bash

# Update
sudo apt-get update
echo Y | sudo apt-get upgrade

# Clone repo to app
mkdir app
cd app
git clone https://github.com/nr-uturkarslan/newrelic-infra-linux.git

# Run setup
cd newrelic-infra-linux/collect-logs-with-custom-fluentd-image
bash run_setup.sh \
  --license-key <YOUR_NEWRELIC_LICENCE_KEY> \
  --logging-endpoint <YOUR_NEWRELIC_LOGGING_ENDPOINT> \
  --logging-level <YOUR_FLUENTD_LOGGING_LEVEL>
