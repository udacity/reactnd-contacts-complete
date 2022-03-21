aws s3api create-bucket --bucket x-123
aws s3 cp --recursive --acl public-read --cache-control="max-age=0, no-cache, no-store, 
must-revalidate" ./build s3://x-123/
aws s3 website s3://x-123/ --index-document index.html