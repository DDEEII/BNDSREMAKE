
setlocal disabledelayedexpansion

for /r %%I in (*) do (
    set "file=%%I"
    set "fullname=%%~nxI"

    echo 在安全子环境中处理变量
    setlocal enabledelayedexpansion
    echo ------------------------------------------------
    set "process=0"
    set "rename_file=0"

    echo 获取扩展名并验证（通过PowerShell处理特殊字符）
    set "ext=%%~xI"
    set "fname=%%~nI"

    echo 使用PowerShell检查扩展名长度
    powershell -Command "$ext = '%%~xI'; if ($ext.Length -gt 7) { exit 0 } else { exit 1 }"
    set "long_ext=!errorlevel!"

    echo 处理标准扩展名：html/js/css
    if /i "!ext!"==".html" set process=1
    if /i "!ext!"==".js"   set process=1
    if /i "!ext!"==".css"  set process=1


    echo 处理长扩展名（^>6字符）
    if !process! == 0 (
        if !long_ext! == 0 (
            set process=1
            set rename_file=1
        )
    )
    
    echo 安全输出文件名（禁用延迟扩展）
    setlocal disabledelayedexpansion
    echo 正在处理内容: "%%I"
    endlocal


    if !process! == 1 (
        echo 执行正则替换

        setlocal disabledelayedexpansion
        powershell -Command "$content = Get-Content -LiteralPath '%%I' -Encoding UTF8 -Raw; $newContent = $content -replace 'index\.php[?@]m=content&c=index&a=(show|lists)&catid=(\d+)(&id=\d+)?', 'index.php@m=content&c=index&a=$1&catid=$2$3.html' -replace 'index\.php[?@]m=search([^''""]*)', 'index.php@m=search$1.html'; if ($content -ne $newContent) { $newContent | Set-Content -LiteralPath '%%I' -Encoding UTF8 -NoNewline }"
        endlocal
    )
    echo 处理长扩展名重命名（全字符转义）
    if !rename_file! == 1 (
       set "safe_original=!file!"
       set "safe_filename=!fullname!"
       rem set "safe_original=!file:^=^^^^!"
       rem set "safe_original=!safe_original:&=^&!"
       rem set "safe_filename=!fullname:^=^^^^!"
       rem set "safe_filename=!safe_filename:&=^&!"
       set "safe_filename=!safe_filename!.html"
       ren "!safe_original!" "!safe_filename!"
       rem setlocal disabledelayedexpansion
       echo 正在重命名: "!safe_original!" 到 "!safe_filename!"
       rem endlocal
    )
    endlocal
)
endlocal