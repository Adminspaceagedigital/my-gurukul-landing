import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log('[Institutional Demo Request Received]:', body);
    return NextResponse.json({ success: true, message: 'Demo request registered successfully.' });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to process request.' }, { status: 500 });
  }
}
