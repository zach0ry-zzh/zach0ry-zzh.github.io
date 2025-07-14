var posts=["2025/07/11/hello-world/","2025/07/05/pwn-study/","2025/07/11/HDCTF-2023-enc/","2025/07/14/HNCTF-2022-WEEK4-flower-plus/","2025/03/19/ida使用-动调/","2025/07/10/picoCTF2022/","2025/04/11/BUU-crackMe/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };