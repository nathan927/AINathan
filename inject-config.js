import pkg from 'replace-in-file';
const { replaceInFile } = pkg;

const options = {
  files: 'index.html',
  from: /\/\/ PLACEHOLDER_FOR_CONFIG/g,
  to: `window.XIAOZHI_CONFIG = { token: '${process.env.XIAOZHI_TOKEN || ''}' };`
};

try {
  const results = await replaceInFile(options);
  console.log('配置注入成功:', results.filter(result => result.hasChanged));
  
  if (process.env.XIAOZHI_TOKEN) {
    console.log('✅ Token已成功注入到配置中');
  } else {
    console.log('⚠️ 警告：XIAOZHI_TOKEN環境變數為空');
  }
} catch (error) {
  console.error('配置注入失敗:', error);
  process.exit(1);
}
