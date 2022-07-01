# Introduction

# Steps

## Install New Relic infra agent

-> Explain docu with links

## Configure infra agent logging

Add following snippet to the file `/etc/newrelic-infra/logging.d/logging.yaml`:
```
- name: dockerlogs
  file: /var/lib/docker/*/*.log
```

Save file and restart agent by:
`sudo systemctl restart newrelic-infra`

Make sure it is running by:
`sudo systemctl status newrelic-infra`

## Install Docker to VM

-> How to install

## Build and run a Docker container

-> Random logger
