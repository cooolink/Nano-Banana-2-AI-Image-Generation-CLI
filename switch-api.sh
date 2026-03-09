#!/bin/bash
# Nano Banana 2 API 切换脚本

usage() {
    echo "用法: source switch.sh [gemini|poyo]"
    echo "  gemini - 使用 Google Gemini（支持本地图片）"
    echo "  poyo   - 使用 Poyo AI（第三方API）"
}

if [ "$1" = "gemini" ]; then
    cp ~/.nano-banana/.env.gemini ~/.nano-banana/.env
    echo "✅ 已切换到 Google Gemini"
    echo "   支持：本地图片上传、结构参考"
    
elif [ "$1" = "poyo" ]; then
    cp ~/.nano-banana/.env.poyo ~/.nano-banana/.env
    echo "✅ 已切换到 Poyo AI"
    echo "   支持：Nano Banana 2 new/edit 模型"
    
else
    usage
fi
