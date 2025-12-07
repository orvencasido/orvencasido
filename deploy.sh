#!/bin/bash 

docker stop resume-app
docker rm resume-app
docker build -t resume-app .
docker run -d -p 3000:3000 --name resume-app resume-app