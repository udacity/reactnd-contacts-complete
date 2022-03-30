aws s3api create-bucket --bucket x-123
aws s3 cp --recursive --acl public-read ./build s3://x-123/
aws s3 website s3://x-123/ --index-document index.html