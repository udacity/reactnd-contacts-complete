aws s3api create-bucket --bucket abc123
aws s3 cp --recursive --acl public-read ./build s3://abc123/
aws s3 website s3://abc123/ --index-document index.html