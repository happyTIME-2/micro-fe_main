const path = require('path');
const glob = require('glob');
const { getCosAdapter, parseCosOption, parseCdnOption } = require("@tencent/jarvis-webpack-cos");

const distDir = path.resolve(__dirname, '../dist/');
console.log(process.argv);

const cosPath = '/micro-fe/';
const useHttps = true;
const strCosOption = process.argv.find(item => item.startsWith('--cosOption='));

const uploadCdn = async () => {
  const relativePaths = glob.sync('**/*.*', {
    cwd: distDir,
    nodir: true,
  });
  const fileArgs = relativePaths.map(file => ({
    fileName: file,
    filePath: path.resolve(distDir, file),
  }));
  console.log('fileArgs: ', fileArgs, ', relativePaths: ', relativePaths);
  const versionCosOption = parseCosOption(cosPath, strCosOption ? strCosOption.substring('--cosOption='.length) : '');
  console.log('versionCosOption: ', versionCosOption);
  const versionCos = getCosAdapter(versionCosOption);
  versionCos.setCdnRefresh(parseCdnOption('', ''));
  await versionCos.upload(fileArgs);
  console.log(`Complete upload file to version addr`);
};

(() => uploadCdn())();


module.exports  = uploadCdn;