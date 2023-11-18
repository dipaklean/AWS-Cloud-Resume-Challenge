SHELL:=/bin/bash

# Configuration
API_URL := https://6laon8ffu9.execute-api.ap-southeast-2.amazonaws.com/Prod

.SILENT: integration-test

integration-test:
	OLD_COUNT=$$(curl -s "$(API_URL)/get" | jq ".body | tonumber"); \
	curl -s "$(API_URL)/put" || (echo "FAIL: Error in 'put' operation"; exit 1); \
	NEW_COUNT=$$(curl -s "$(API_URL)/get" | jq ".body | tonumber"); \

	echo "Initial count: $$OLD_COUNT, New count: $$NEW_COUNT"; \
	if [[ $$OLD_COUNT -le $$NEW_COUNT ]]; then \
		echo "PASS: Counts have increased"; \
	else \
		echo "FAIL: Counts have not increased"; \
	fi