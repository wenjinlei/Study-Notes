# git配置SSH
+ 全局配置用户名和邮箱
```
git config --global user.name xxx

git config --golbal user.email xxx@126.com
```

+ 查询配置的全局变量命令
```
git config --global --list
```
  
+ 使用`ssh-keygen`命令生成密钥
```
ssh-keygen -t rsa -C xxx@126.com
```

+ 执行命令后，在user/.ssh目录会生成 id_rsa、id_rsa.pub 两个文件
  
+ 登陆github，找到settings-〉SSH and GPG keys，新建一个ssh key，并将id_rsa.pub文件中的内容复制进去
