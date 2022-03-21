aws s3api create-bucket --bucket trb123
aws s3 cp --recursive --acl public-read ./build s3://trb123/
aws s3 website s3://t-r-b/ --index-document index.html