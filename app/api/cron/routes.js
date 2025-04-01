import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ ok: true });
}
// Check the Authorization Header
if (req.headers.get('Authorization') !== `Bearer ${process.env.CRON_SECRET}`) {
  return res.status(401).end('Unauthorized');
}

