<div align="center">
  <p><img width="400" src="https://raw.githubusercontent.com/HydroBlockchain/brand-kit/main/Hydro/Main%20Logo/Grey/SVG/Hydro-Gry-58.svg"></p>
  
  <p>Aegir Wallet for Storing and sharing Hydro and NFTs Tokens</p>

[Project Hydro](http://www.projecthydro.com) enables developers to seamlessly deploy blockchain in their existing applications, without the need to create expensive infrastructure. We're at the cutting edge of fintech, and we're excited to have you involved!

</div>

## Overview

This repository exposes the API that manages part of the logic of Aegir wallet in order to offer a better performance in the mobile app, by delegating the greatest complexity to the backend, plus adding centralized error recording and control

## Development dependencies
- Docker. You can see how to install [here](https://docs.docker.com/get-docker/)
- Docker composer. You can see how to install [here](https://docs.docker.com/compose/install/)

> If you prefer not to use Docker for development, you need to have MongoDB installed

## Local development

```bash
# Clone Repo
$ git clone https://github.com/HydroBlockchain/aegir-backend

# Go to the repo directory
$ cd aegir-backend

# Install dependencies
$ yarn install

# Run the containers
$ sudo docker-composer up -d
```

