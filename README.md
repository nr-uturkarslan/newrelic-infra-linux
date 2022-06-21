# New Relic Linux Infra Monitoring

The repository is dedicated to demonstrate various use cases of New Relic functionalities regarding monitoring Linux based infrastructure not only with New Relic specific products but also with open source tools.

## How to collect / forward / view logs

### Per custom fluentd Docker container

This demo is to be found under the folder `collect-logs-with-custom-fluentd-image` which shows how to:
* collect the logs out of applications that are running in Docker containers on a Ubuntu host
* how to enrich the logs with custom tags which are considered as attributes in New Relic
* how to forward the logs to New Relic automatically
* how to view logs of particular containers
