# MyERC721

Deploy MyERC721:

```
npx hardhat run scripts/deploy.ts --network localhost
```

Find image ipfs hash and update it in `./app/src/App.js`.

Go to `app` folder

```
npm install
```

then start the react app

```
npm start
```

You will view the image.


If you meet the cross origin issue locally, try run command below:

```
ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin '["*"]'
```


