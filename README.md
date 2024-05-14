# impact-framework-challenge
Repository for the Impact Framework Challenge

### Local Environment Setup
* Follow the [quick start guide]( https://if.greensoftware.foundation/users/quick-start/)

### Getting started
This repository contains an example created by following [this training on youtube](https://www.youtube.com/watch?v=fWtt2KmtoBY). You can use it as starting point or follow these guides:
* [Importing plugins](https://if.greensoftware.foundation/users/how-to-import-plugins)
* [Writing manifest files](https://if.greensoftware.foundation/users/how-to-write-manifests/)
* [Build plugins](https://if.greensoftware.foundation/developers/how-to-build-plugins)

##### Plugin Project
* ```npm install```
* ```npm link ```
* Hack away

##### Manifest Project
* ```npm link rename-parameter-plugin```
* The plugin can now be used in the manifest yaml
* ```ie --manifest ./manifests/pipeline-with-mocks.yml --output ./output/mocks-output```
