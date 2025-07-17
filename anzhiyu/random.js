var posts=["2025/07/11/HDCTF-2023-enc/","2025/07/14/HNCTF-2022-WEEK4-flower-plus/","2025/03/19/ida使用-动调/","2025/07/10/picoCTF2022/","2025/07/16/NISACTF-2022-ezpie/","2025/07/16/控制命令/","2025/07/05/初识栈溢出/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };