import unittest
import os
import boto3

from app import lambda_handler

os.environ['AWS_DEFAULT_REGION'] = 'ap-southeast-2'

class app(unittest.TestCase):

    def test_lambda_handler_returns_200_status_code(self):
        event = {"body": ""}
        response = lambda_handler(event, None)
        self.assertEqual(response['statusCode'], 200)

if __name__ == '__main__':
    unittest.main()