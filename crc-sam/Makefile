SHELL:=/bin/bash

.SILENT: integration-test

integration-test:
	FIRST=$$(curl -s "https://6laon8ffu9.execute-api.ap-southeast-2.amazonaws.com/Prod/get" | jq .body[0]); \
	curl -s "https://6laon8ffu9.execute-api.ap-southeast-2.amazonaws.com/Prod/put"; \
	SECOND=$$(curl -s "https://6laon8ffu9.execute-api.ap-southeast-2.amazonaws.com/Prod/get" | jq .body[0]); \
	echo "Comparing if first count ($$FIRST) is less than (<) second count ($$SECOND)"; \
	if [[ $$FIRST -le $$SECOND ]]; then echo "PASS"; else echo "FAIL";  fi