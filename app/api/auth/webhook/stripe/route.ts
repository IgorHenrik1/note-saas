import { headers } from 'next/headers';

export async function POST(req: Request) {
    const body = await req.text();

    const signature = headers().get('Stripe-Signature');

    let event: Stripe.Event;
}

// 2 horas 51 minutos - https://youtu.be/5dgYg10B9p0?t=10262
