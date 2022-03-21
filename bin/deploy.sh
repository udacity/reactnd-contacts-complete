aws s3api create-bucket --bucket t-r-b
aws s3 cp --recursive --acl public-read ./build s3://t-r-b/
aws s3 website s3://t-r-b/ --index-document index.html