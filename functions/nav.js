export async function onRequestGet(context) {
    // 从 KV 获取 JSON
    const data = await context.env.GPage.get('navJson');
    return new Response(data || '[]', {
        headers: { 'Content-Type': 'application/json' }
    });
}

export async function onRequestPost(context) {
    // 更新导航数据（需要你自己做鉴权）
    const body = await context.request.text();
    await context.env.GPage.put('navJson', body);
    return new Response('OK');
}
