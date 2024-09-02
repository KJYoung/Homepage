#!/bin/bash

# en0 인터페이스의 IP 주소를 찾습니다.
IP_ADDRESS=$(ifconfig en0 | grep 'inet ' | awk '{print $2}')

# React 개발 서버 URL을 출력합니다.
echo "http://$IP_ADDRESS:3000"