export async function onRequestGet(context) {
    const data = await context.env.GPage.get('navJson');
    return new Response(data || '[]', {
        headers: { 'Content-Type': 'application/json' }
    });
}

export async function onRequestPost(context) {
    const body = await context.request.text();
    await context.env.GPage.put('navJson', body);
    return new Response('OK');
}
