# React 환경세팅 for M2
### 📋 목차
1. [NVM(Node Version Manager) 설치](#1-nvmnode-version-manager-설치)
2. [Node.js 설치](#2-nodejs-설치)
3. [yarn 설치](#3-yarn-설치)
4. [React 프로젝트 생성](#4-리액트-프로젝트-생성)

<br><br>

## 1. NVM(Node Version Manager) 설치
⭐️**참고 링크**⭐️ [ https://github.com/nvm-sh/nvm ] 

### How to install?
**Step One** <br>
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```
```
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```
<br>

**Step Two** <br>
```
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```
<br>

**Example**
```
$ nvm install 20    # Node.js 20 LTS 버전 설치
$ npm use 20        # Node.js 20 버전 사용

$ npm install -g npm@10.9.0
```
<br>

**설치 및 버전 확인** <br>
```
$ nvm --version

$ node -v

$ npm -v
```

<br><br>
## 2. Node.js 설치

### How to install?
⭐️**다운로드 링크**⭐️ <br>
[ https://nodejs.org/en/ ]


<br><br>
## 3. yarn 설치

### How to install?
```
$ brew update
$ brew install yarn
$ yarn config set prefix ~/.yarn
```

**확인**
```
$ yarn --version
```


<br><br>
## 4. 리액트 프로젝트 생성

### Visual Studio Code
```
$ npx create-react-app [프로젝트 이름]
$ cd [프로젝트 이름]
$ npm start
```

#### React App 생성 [npx create-react-app [프로젝트 이름]]
<img src="https://github.com/user-attachments/assets/4d432115-c02b-4514-beaa-d66feeb61740" width="60%">
<img src="https://github.com/user-attachments/assets/48e7ea0f-8802-445d-943d-57ec4509629a" width="40%">

<br><br>

#### React 실행 [npm install]
<div>
  <img src="https://github.com/user-attachments/assets/0dce2133-2a3e-4cb0-9d32-fb82e6b94665" width="45%">
  <img src="https://github.com/user-attachments/assets/de52eb87-cf1b-4a39-bd9c-60246ae57a52" width="45%">
</div>

<br>

#### Success!
<img src="https://github.com/user-attachments/assets/a3af25f9-3b7d-4031-95e0-7208ea3d8ecf" width="40%">


<br><br>

### IntelliJ
<img src="https://github.com/user-attachments/assets/b74a0a96-9bbd-40e7-81f6-1fc6205fb7af" width="50%">
<img src="https://github.com/user-attachments/assets/94f131b1-5675-4f95-92e5-29a6dd7eadae" width="50%">




