# Readme

## Setting up the dev environment

Recommended node version 6.9.1

To start:
```
npm i
npm run dev
```

## Setting up AWS deployment

1. Update your dev node modules with `npm i`.
2. Set up aws credentials in `./.aws/credentials` under a profile named
   `phoneyourrep`.
3. Run `npm run s3-deploy` to deploy all the files in `./docs` to an s3 bucket
   named `www.phoneyourrep.com`.

TODO: implement `certbot` or AWS cert management for SSL with CloudeFront.

If you need to set up a new bucket, see the permissions JSON in `./aws` to start.
