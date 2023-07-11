import requests
import json

url = "https://usflearn.instructure.com/api/v1/courses"

# Define the headers for the request
headers = {
    "Authorization": "Bearer 13~uWqVqcrrTQqdaLe8FNR90w9u4N2AY6bcVHbMoU7w9B2mpaT7wmoFPtSw570zTNKM",
}

# Send the request
response = requests.get(url, headers=headers)

# Print the response
print(json.dumps(response.json(), indent=4))